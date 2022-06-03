import { DecimalPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { isString } from "@ng-bootstrap/ng-bootstrap/util/util";
import * as moment from "moment";
import { BehaviorSubject, of, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { AlertService } from "../modules/loading-toast/alert-model/alert.service";
import { LatestCurrencyExchangeService } from "../pages/currency-exchange/currency-exchange.service";
import { ProductPages } from "../pages/products/models/product.dto";
import { IN_BOUND, OUT_BOUND } from "./const-data-value";
import { IsJsonString } from "./is-json";
import { MotorRateService } from "./rate-datas/motor-rate.service";

@Injectable({
  providedIn: 'root',
})
export class GlobalFunctionService {
  testingFunResult = new BehaviorSubject(null)
  fireBurgeryResult = new BehaviorSubject(null)
  paPremiumResult = new Subject()
  smSumInsuredAmtResult = new BehaviorSubject(null)
  paCoverageResult = new BehaviorSubject(null)
  normalCoverageResult = new BehaviorSubject(null)
  motorTotalSiResult = new BehaviorSubject(null)
  paPolicyValidationResult = new BehaviorSubject(null)
  halfOfSumInsuredResult = new BehaviorSubject(null)
  snakeSumInsuredResult = new BehaviorSubject(null)
  travelPremiumResult = new BehaviorSubject(null)
  totalTravelUnitResult = new BehaviorSubject(null)
  travelPlanResult = new BehaviorSubject(null)
  currenyValueObs = new BehaviorSubject("MMK")
  tempFormData = {}
  exChange: number = 1650

  optionResultChange = new Subject()
  sumInsuredResult = new Subject()
  constructor(private numberPipe: DecimalPipe, private alert: AlertService, private exChangeService: LatestCurrencyExchangeService, private motorService: MotorRateService) {

  }

  async getRate(type: string) {
    if (!type) return false
    try {
      let curType = type.toLowerCase()
      let res: any = await this.exChangeService.getByType(curType).toPromise()
      if (res) {
        return res.amount
      }
    } catch (error) {

    }

  }

  testingFun() {
    this.testingFunResult.next('value testing')
  }
  fireBurgery(currentValue: string, activeForm?: any, option?: any[], form?: boolean) {
    this.fireBurgeryResult.next(currentValue)
  }


  async paPremiumCalculation(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    //console.log("call paPremiumCalculation",activeForm);
    let currency = ""
    let term = "0"
    let sumIn = 0
    if (form)
      if (!this.sumInsuredValidation("form", activeForm, [], true)) {
        return false
      }

    if (activeForm.pa_policy_term) {
      term = activeForm.pa_policy_term
    } else if (this.tempFormData['pa_product_detail']) {
      term = this.tempFormData['pa_product_detail']['pa_policy_term'] || 0
    }

    if (activeForm.sum_insured) {
      sumIn = activeForm.sum_insured
    }
    if (activeForm.currency) {
      currency = activeForm.currency
    }

    let fector = 1
    if (term == 'T-001') {
      fector = 1 / 4
      // getMonth = 3
    } else if (term == 'T-002') {
      fector = 1 / 2
      // getMonth = 6
    }
    // let exChange = await this.getRate(currency)
    // if (exChange < 0) return false
    let stumDuty = currency == "MMK" ? 100 : 1
    let result = this.calculateDecimal((sumIn * (0.707 / 100)) * fector) + stumDuty
    // if()
    this.paPremiumResult.next(this.numberPipe.transform(result) + " " + currency)
    return true
  }
  snakeSumInsured(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let valInt = 0
    if (typeof currentValue == 'string') {
      valInt = parseInt(currentValue.replace("T-", ""))
    }
    let sumInsured = valInt * 500000
    this.halfOfSumInsured(sumInsured, activeForm)
    this.snakeSumInsuredResult.next(sumInsured)
  }

  halfOfSumInsured(currentValue: any, activeForm: any, option?: any[], form?: boolean) {
    let valInt = parseFloat(currentValue)
    let value = this.calculateDecimal(valInt * 0.5)
    this.halfOfSumInsuredResult.next(value)
  }

  snakePremiumCalculation(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let sumInsured = parseFloat(activeForm.sum_insured_amount)
    let premium = this.calculateDecimal(sumInsured * 0.001)
    this.paPremiumResult.next(this.numberPipe.transform(premium) + " MMK")
    return true
  }

  sumInsuredValidation(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let currency = ""
    let sumIn = 0
    if (activeForm.currency) {
      currency = activeForm.currency
    }
    if (activeForm.sum_insured) {
      sumIn = activeForm.sum_insured
    }
    if (currency == 'MMK') {
      if (500000 <= sumIn && sumIn <= 20000000) {
        return true
      } else {
        if (form)
          this.alert.activate("Sum Insured must be between 500000 MMK and  20000000 MMK", "Validation")
        return false
      }
    } else if (currency == 'USD') {
      if (1000 <= sumIn && sumIn <= 10000) {
        return true
      } else {
        if (form)
          this.alert.activate("Sum Insured must be between 1000 USD and  10000 USD", "Validation")
        return false
      }
    }
    return false
  }

  validEndoTerm(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let policy = activeForm['policy_term']
    let arrayTxt = Object.keys(this.tempFormData)
    let parentKey = arrayTxt.find(x => x.includes("life_insured_endow"))
    // ENDO_POLICY_TERM
    if (parentKey) {
      if (policy == "T-003") {
        let dob = this.tempFormData[parentKey]['date_of_birth']
        let age = Math.ceil(moment().diff(dob, 'years', true));
        if (age > 55) {
          this.alert.activate("If age is over 55,Policy term can't be over 7 years", "Validation")
          return false
        }
      }
      else if (policy == "T-002") {
        let dob = this.tempFormData[parentKey]['date_of_birth']
        let age = Math.ceil(moment().diff(dob, 'years', true));
        if (age > 58) {
          this.alert.activate("If age is over 58,Policy term can't be over 5 years", "Validation")
          return false
        }
      }
      return true
    }
    return false
  }

  validDOBEDU(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let dob = activeForm['date_of_birth']
    let age = Math.ceil(moment().diff(dob, 'years', true));
    // ENDO_POLICY_TERM
    if (age >= 18 && age <= 42) {
      return true
    }
    this.alert.activate("Minimum  Age is 18 years and Maximum Age is 42 years", "Validation")
    return false
  }
  validDOBHealth(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let dob = activeForm['date_of_birth']
    let age = Math.ceil(moment().diff(dob, 'years', true));
    // ENDO_POLICY_TERM
    if (age >= 6 && age <= 75) {
      return true
    }
    this.alert.activate("Minimum  Age is 6 years and Maximum Age is 75 years", "Validation")
    return false
  }
  validDOBEndo(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let dob = activeForm['date_of_birth']
    let age = Math.ceil(moment().diff(dob, 'years', true));
    // ENDO_POLICY_TERM
    if (age >= 10 && age <= 60) {
      return true
    }
    this.alert.activate("Minimum  Age is 10 years and Maximum Age is 60 years", "Validation")
    return false
  }
  farmerPremium(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let sumIn = 0
    let rate = 0.01
    if (activeForm.sum_insured) {
      sumIn = activeForm.sum_insured
    } else if (this.tempFormData['farmer_product_detail']) {
      sumIn = this.tempFormData['farmer_product_detail']['sum_insured'] || 0
    }
    let calculatedAmt = sumIn * rate
    this.paPremiumResult.next(this.numberPipe.transform(calculatedAmt) + " MMK")
    return true
  }

  async motorFormValidation(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let total = activeForm['m_total_risk_si']
    let validAmt = 20000000
    let excess = activeForm['m_excess']
    let currency = activeForm['m_currency']

    if (excess == "T-ED" && currency == "MMK") {
      if (total > validAmt) {
        return true
      } else {
        this.alert.activate("Sum Insured amount should be greater than 20,000,000 MMK to have Excess Discount", "Validation")
        return false
      }
    }
    return true
  }



  // validDOB(currentValue: string, activeForm: any, option?: any[], form?: boolean, productCode?: string) {
  //   let dob = activeForm['date_of_birth']
  //   let age = Math.ceil(moment().diff(dob, 'years', true));
  //   if(productCode == "SASS01" && age > 67){

  //   }
  // }


  motorTotalSi(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let vehicle_si = 0
    let trailer_one_si = 0
    let trailer_two_si = 0
    let trailer_three_si = 0
    if (activeForm.m_vehicle_si) {
      vehicle_si = parseInt(activeForm.m_vehicle_si)
    }
    if (activeForm.m_trailer_one_si) {
      trailer_one_si = parseInt(activeForm.m_trailer_one_si)
    }
    if (activeForm.m_trailer_two_si) {
      trailer_two_si = parseInt(activeForm.m_trailer_two_si)
    }
    if (activeForm.m_trailer_three_si) {
      trailer_three_si = parseInt(activeForm.m_trailer_three_si)
    }

    this.motorTotalSiResult.next(vehicle_si + trailer_one_si + trailer_two_si + trailer_three_si)
  }


  getMotorRate(motorDetail) {
    let cc = ""
    let currency = ""
    let sumIn = 0
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      sumIn = motorDetail['m_total_risk_si'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (motorDetail) {
      cc = motorDetail['m_capacity'] || motorDetail['m_tonnage'] || 0
    }
    return this.motorService.getOne(currency, sumIn, typeOfCoverage, typeOfVehicle, cc)
  }

  getMotorThirdRate(motorDetail) {
    let cc = ""
    let currency = ""
    let sumIn = 0
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      sumIn = motorDetail['m_total_risk_si'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (motorDetail) {
      cc = motorDetail['m_capacity'] || motorDetail['m_tonnage'] || 0
    }
    return this.motorService.getThrid(currency, typeOfCoverage, typeOfVehicle, cc)
  }

  motorOwnDamage(motorDetail) {
    return this.getMotorRate(motorDetail).pipe(map((res: any) => {
      if (res)
        return res.rate
      return 0
    }))
  }

  motorThirdParty(motorDetail) {
    return this.getMotorThirdRate(motorDetail).pipe(map((res: any) => {
      if (res)
        return res.rate
      return 0
    }))
  }

  motorSRCC(motorDetail) {
    let currency = ""
    let typeOfVehicle = ""
    let sumIn = 0
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (motorDetail) {
      sumIn = motorDetail['m_total_risk_si'] || 0
    }
    // return this.motorOwnDamage().pipe(map(res => {
    if (sumIn > 0) {
      let rate = 0
      if (currency == 'MMK' && typeOfVehicle != "T-MCC") {
        rate = 0.00065
      } else if (currency == 'USD' && typeOfVehicle != "TU-MCC") {
        rate = 0.00065
      } else if (typeOfVehicle == "T-MCC") {
        rate = 0.0005
      }
      return of(sumIn * rate)
    }
    return of(0)
    // }))
  }

  motorWindScreen(motorDetail) {
    let windscreen_value = 0
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      windscreen_value = motorDetail['m_windscreen_value'] || 0
    }
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    let rate = 0.15
    if (currency == 'MMK' && typeOfVehicle != "T-MCC") {
      rate = 0.065
    } else if (typeOfVehicle == "T-MCC") {
      rate = 0.05
    }
    return of(windscreen_value * rate)
  }

  motorMedicalExpense(motorDetail) {
    let currency = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }

    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    let fixed = 0
    if (currency == 'USD' && typeOfVehicle != "TU-MCC") {
      fixed = 20
    } else if (typeOfVehicle == "T-MCC") {
      fixed = 20
    }
    return of(fixed)
  }

  motorWarRisk(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    let sumIn = 0
    if (motorDetail) {
      sumIn = motorDetail['m_total_risk_si'] || 0
    }
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }

    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }

    // return this.motorOwnDamage().pipe(map(res => {
    if (sumIn > 0) {
      let rate = 0.00065
      if (typeOfVehicle == "T-MCC") {
        rate = 0.0005
      }
      return of(sumIn * rate)
    }
    return of(0)
    // }))
  }

  motorActOfGod(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    let sumIn = 0
    if (motorDetail) {
      sumIn = motorDetail['m_total_risk_si'] || 0
    }
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }

    // return this.motorOwnDamage().pipe(map(res => {
    if (sumIn > 0) {
      let rate = 0.005
      if (currency == 'MMK' && typeOfVehicle != "T-MCC") {
        rate = 0.00065
      } else if (currency == 'USD' && typeOfVehicle != "TU-MCC") {
        rate = 0.00065
      } else if (typeOfVehicle == "T-MCC") {
        rate = 0.0005
      }
      return of(sumIn * rate)
    }
    return of(0)
    // }))
  }

  motorTheft(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }

    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }

    return this.motorOwnDamage(motorDetail).pipe(map(res => {
      if (res > 0) {
        let rate = 0
        if (currency == 'MMK' && typeOfVehicle != "T-MCC") {
          rate = 0.15
        } else if (currency == 'USD' && typeOfVehicle != "TU-MCC") {
          rate = 0.15
        } else if (typeOfVehicle == "T-MCC") {
          rate = 0.15
        }
        return res * rate
      }
      return 0
    }))
  }

  motorEndorsement(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }

    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }

    return this.motorOwnDamage(motorDetail).pipe(map(res => {
      if (res > 0) {
        let rate = 0.30
        return res * rate
      }
      return 0
    }))
  }

  motorLuggage(motorDetail) {
    let currency = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }

    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_coverage'] || 0
    }
    let fixed = 50
    if (currency == 'MMK' && typeOfVehicle != "T-MCC") {
      fixed = 80000
    }
    // else if (typeOfVehicle == "T-006") {
    //   fixed = 50
    // }
    return of(fixed)
  }

  motorLiability() {
    return of(25)
  }

  motorPaidDriver(motorDriverDetail) {
    let length = 0
    if (motorDriverDetail) {
      length = motorDriverDetail.length
    }
    return of(30 * length)
  }

  ifMedicalExpense(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (currency == 'USD') {
      return true
    }
    // else if (typeOfVehicle == "T-005") {
    //   return false
    // }
    return false
  }

  ifWarRisk(motorDetail) {
    let currency = ""
    let typeOfCoverage = ""
    let typeOfVehicle = ""
    if (motorDetail) {
      currency = motorDetail['m_currency'] || 0
    }
    if (motorDetail) {
      typeOfCoverage = motorDetail['m_type_of_coverage'] || 0
    }
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "TU-MCC") {
      return false
    }
    return true
  }

  ifEndorsement(motorDetail) {
    let typeOfVehicle = ""
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "TU-MCC" || typeOfVehicle == "T-MCC") {
      return false
    }
    return true
  }
  ifLuggage(motorDetail) {
    let typeOfVehicle = ""
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "T-MCC") {
      return false
    }
    return true
  }

  ifLiability(motorDetail) {
    let typeOfVehicle = ""
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "TU-MCC") {
      return true
    }
    return false
  }

  ifPaidDriver(motorDetail) {
    let typeOfVehicle = ""
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "TU-MCC") {
      return true
    }
    return false
  }

  ifCrossBorder(motorDetail) {
    let typeOfVehicle = ""
    if (motorDetail) {
      typeOfVehicle = motorDetail['m_type_of_vehicle'] || 0
    }
    if (typeOfVehicle == "TU-MCC" || typeOfVehicle == "T-MCC") {
      return false
    }
    return true
  }

  smSumInsuredAmt(currentValue: any, activeForm: any, option?: any[]) {
    let type = ""
    const defVal = 1000000

    if (activeForm.sm_policy_type) {
      type = activeForm.sm_policy_type
    }

    if (type == "T-002") {
      this.smSumInsuredAmtResult.next(defVal)
    } else {
      if (typeof currentValue == 'string') {
        currentValue = parseInt(currentValue.replace("T-", ""))
      }
      currentValue = Number.isNaN(currentValue) ? 1 : currentValue
      let insuredVale = defVal * currentValue
      this.smSumInsuredAmtResult.next(insuredVale)
    }

  }

  paCoverage(currentValue: string, activeForm: any, option?: any[]) {
    let sumIn = 0
    let currency = ""
    if (activeForm.currency) {
      currency = activeForm.currency
    } else if (this.tempFormData['pa_product_detail']) {
      currency = this.tempFormData['pa_product_detail']['currency'] || 0
    }
    if (activeForm.sum_insured) {
      sumIn = activeForm.sum_insured
    } else if (this.tempFormData['pa_product_detail']) {
      sumIn = this.tempFormData['pa_product_detail']['sum_insured'] || 0
    }
    this.paCoverageResult.next(this.numberPipe.transform(sumIn) + currency)
  }

  paPolicyValidation(value, option?: any[]) {
    let term = value
    let valid = option.find(x => x.codeId == term)
    if (valid) {
      this.paPolicyValidationResult.next(valid)
    }
  }

  travelPlan(currentValue: string, activeForm: any, options?: any[]) {
    this.travelPlanResult.next(currentValue)
  }

  normalCoverage(currentValue: string, activeForm: any, options?: any[]) {
    if (options) {
      let valid = options.find(x => x.codeId == currentValue)
      if (valid) {
        this.normalCoverageResult.next(valid.codeName)
      }
    } else {
      this.normalCoverageResult.next(currentValue)
    }
  }

  validSharePercent(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let oldData = option ? JSON.parse(JSON.stringify(option)) : []
    let currentPercent = parseFloat(activeForm.share)
    if (activeForm.refId) {
      let index = oldData.findIndex(x => x.refId == activeForm.refId)
      if (index >= 0)
        oldData.splice(index, 1)
    }
    // console.log(oldData,activeForm);
    let total = oldData.reduce(function (a, b) { return a + parseFloat(b.share); }, 0);
    let tempTotal = currentPercent + total
    if (tempTotal > 100) {
      this.alert.activate("Total Share Percent can't over 100%", "Validation")
      return false
    } else {
      return true
    }
  }

  checkPercent(currentValue: any[]) {
    let total = currentValue.reduce(function (a, b) { return a + parseFloat(b.share); }, 0);
    return total == 100 ? true : false
  }

  smPremium(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let type = ""
    let policy = ""
    let sumInsured = ""
    if (activeForm.sm_policy_type) {
      type = activeForm.sm_policy_type
    }
    if (activeForm.sm_policy_term) {
      policy = activeForm.sm_policy_term
    }
    if (activeForm.sm_sum_insured) {
      sumInsured = activeForm.sm_sum_insured
    }
    let rate = 0
    if (type == 'T-001') {
      rate = 0.5 / 100
    } else {
      rate = policy == "T-001" ? 0.05 / 100 : 0.1 / 100
    }
    let calculatedAmt = parseInt(sumInsured) * rate
    if (calculatedAmt) {
      if (type == 'T-001') {
        calculatedAmt = this.calculateDecimal(calculatedAmt / 12)
      }
      this.paPremiumResult.next(this.numberPipe.transform(calculatedAmt) + " MMK / month")
    }
    return true
  }

  travelPremium(currentValue: string, activeForm: any, option?: any[], form?: boolean) {
    let searchData = []
    let plan = ''
    let duration = ''
    let unit = ''
    let travelNo = 1
    if (activeForm.travel_plan) {
      plan = activeForm.travel_plan
    }

    if (activeForm.travel_duration) {
      duration = activeForm.travel_duration
    }

    if (activeForm.insured_unit) {
      unit = activeForm.insured_unit
    }
    if (activeForm.no_of_traveler) {
      travelNo = activeForm.no_of_traveler
    }

    if (plan && duration && unit) {
      searchData = plan == 'T-INBOUND' ? IN_BOUND : OUT_BOUND
      let premium = searchData.find(x => (x.travel_duration + "").toLowerCase() == duration.toLowerCase() && x.travel_unit.toLowerCase() == unit.toLowerCase())
      if (premium) {
        let prem = parseInt(premium.rate) * travelNo
        this.travelPremiumResult.next(prem)
      }

    }
    return true
    // travel_duration
  }

  totalTravelUnit(currentValue: string, activeForm: any, options?: any[], form?: boolean) {
    let noTraveler = 1
    let insuredUnit = 0
    if (activeForm['no_of_traveler']) {
      noTraveler = parseInt(activeForm['no_of_traveler'])
    }
    if (activeForm['insured_unit']) {
      insuredUnit = parseInt(activeForm['insured_unit'].replace("T-", ""))
    }
    let total = noTraveler * insuredUnit
    if (options) {
      let valid = options.find(x => x.codeId == activeForm['insured_unit'])
      if (valid) {
        this.normalCoverageResult.next(valid.codeName)
      }
    }
    this.totalTravelUnitResult.next(total)
  }

  calculateDecimal(value: any) {
    return Math.round(value * 100) / 100
  }

  getParnet(product: any, type: string, unitCode: string) {
    if (IsJsonString(product.config)) {
      let pageUI: ProductPages = JSON.parse(product.config);
      let pageOrder = type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []
      let parent = pageOrder.find(page => page.unitCode == unitCode)
      if (parent) {
        return this.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
  }

}