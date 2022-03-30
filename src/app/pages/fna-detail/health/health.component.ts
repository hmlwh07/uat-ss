import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { HealthDto, HealthManage } from './health-manage.dto';
import { FANHealthManageService } from './health-manage.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {
  @Input() health: any = null;
  @Input() fnaId: any = null;
  @Input() customerId: any = null;

  @Output() changeAnalysis: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  childForm: FormGroup;
  healths: Array<HealthDto> = new Array();
  healthDto: HealthDto = new HealthDto()
  tempChildList: Array<HealthDto> = new Array();
  selectedIndex: number = 2;
  selectedIndexId: number = 0;
  products = [];
  type: string = '';
  fromMinDate = null
  fromMaxDate = new Date();

  toMaxDate: { year: number; month: number; day: number; };
  nextCount: number = 0;

  constructor(private fb: FormBuilder, private cdf: ChangeDetectorRef, private alertService: AlertService,
    private fnaHealthManageService: FANHealthManageService, public fnaService: FANService) { }

  ngOnInit(): void {
    this.loadForm();
    if (this.fnaService.fnaHealths) {
      this.tempChildList = this.fnaService.fnaHealths;
      FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
    }

    if (this.fnaService.fnaUpdateProducts) {
      this.products = this.fnaService.fnaUpdateProducts;
    }
    this.getAllFNAHealth();
    this.checkNextChild();
  }

  async backAction() {
    if (this.selectedIndex == 2) {
      this.changeAnalysis.emit('aboutLLP');
    } else {
      this.selectedIndex--;
      this.healthDto = this.tempChildList[this.selectedIndex];
      if (this.selectedIndex == 2) {
        this.healthDto = new HealthDto();
        await this.loadForm();
        let self = new HealthDto();
        let spouse = new HealthDto();
        let child = new HealthDto();
        self = this.tempChildList[0];
        await this.setSelfInsurance(self);
        spouse = this.tempChildList[1];
        await this.setSpouseInsurance(spouse);
        child = this.tempChildList[2];
        await this.setChildInsurance(child);
      } else {
        this.setChildInsurance(this.tempChildList[this.selectedIndex]);
      }
    }
    this.checkNextChild();
  }

  loadForm() {
    this.formGroup = new FormGroup({
      selfId: new FormControl(this.healthDto.selfId || 0),
      amountByEmployer: new FormControl(this.healthDto.amountByEmployer || ''),
      amountByInsurance: new FormControl(this.healthDto.amountByInsurance || ''),
      amountBySocialBenefit: new FormControl(this.healthDto.amountBySocialBenefit || ''),
      protectionSelf: new FormControl(this.healthDto.protectionSelf),

      spouseId: new FormControl(this.healthDto.spouseId || 0),
      nameSpouse: new FormControl(this.healthDto.nameSpouse || ''),
      amountByEmployerSpouse: new FormControl(this.healthDto.amountByEmployerSpouse || ''),
      amountByInsuranceSpouse: new FormControl(this.healthDto.amountByInsuranceSpouse || ''),
      amountBySocialBenefitSpouse: new FormControl(this.healthDto.amountBySocialBenefitSpouse || ''),
      protectionSpouse: new FormControl(this.healthDto.protectionSpouse),
      dateOfBirthSpouse: new FormControl(this.healthDto.dateOfBirthSpouse),

      protection: new FormControl(this.healthDto.protection),
      amountByEmployerSelf: new FormControl(this.healthDto.amountByEmployerSelf || ''),
      amountByInsuranceSelf: new FormControl(this.healthDto.amountByInsuranceSelf || ''),
      amountBySocialBenefitSelf: new FormControl(this.healthDto.amountBySocialBenefitSelf || ''),
      createdAt: new FormControl(this.healthDto.createdAt || ''),
      dateOfBirth: new FormControl(this.healthDto.dateOfBirth),
      fnaId: new FormControl(this.healthDto.fnaId),
      healthType: new FormControl(this.healthDto.healthType || ''),
      id: new FormControl(this.healthDto.id || 0),
      name: new FormControl(this.healthDto.name || ''),
      updatedAt: new FormControl(this.healthDto.updatedAt || '')
    });
    this.formGroup.controls['fnaId'].setValue(this.fnaId);
    this.cdf.detectChanges()
  }

  getSelfInsurance() {
    let healthDto: HealthDto = new HealthDto();
    let amountByEmployerSelf = 0;
    let amountByInsuranceSelf = 0;
    let amountBySocialBenefitSelf = 0;
    if (this.formGroup.value.amountByEmployerSelf) {
      amountByEmployerSelf = Number(this.formGroup.value.amountByEmployerSelf.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountByInsuranceSelf) {
      amountByInsuranceSelf = Number(this.formGroup.value.amountByInsuranceSelf.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountBySocialBenefitSelf) {
      amountBySocialBenefitSelf = Number(this.formGroup.value.amountBySocialBenefitSelf.replace(/,/g, ''));
    }

    healthDto.amountByEmployer = amountByEmployerSelf,
      healthDto.amountByInsurance = amountByInsuranceSelf,
      healthDto.amountBySocialBenefit = amountBySocialBenefitSelf,
      healthDto.createdAt = this.formGroup.value.createdAt,
      healthDto.dateOfBirth = null,
      healthDto.fnaId = this.formGroup.value.fnaId,
      healthDto.healthType = this.formGroup.value.healthType,
      healthDto.id = this.formGroup.value.selfId,
      healthDto.name = this.formGroup.value.name,
      healthDto.protection = this.formGroup.value.protectionSelf,
      healthDto.updatedAt = this.formGroup.value.updatedAt
    return healthDto;
  }

  setSelfInsurance(data) {
    this.formGroup.controls['protectionSelf'].setValue(data.protection);
    this.formGroup.controls['amountByEmployerSelf'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null),
      this.formGroup.controls['amountByInsuranceSelf'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
    this.formGroup.controls['amountBySocialBenefitSelf'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
    this.formGroup.controls['selfId'].setValue(data.id);
  }

  getSpouseInsurance() {
    let dateOfBirthSpouse = null;
    if (this.formGroup.value.dateOfBirthSpouse) {
      dateOfBirthSpouse = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirthSpouse);
    }
    let healthDto: HealthDto = new HealthDto();
    let amountByEmployerSpouse = 0;
    let amountByInsuranceSpouse = 0;
    let amountBySocialBenefitSpouse = 0;
    if (this.formGroup.value.amountByEmployerSpouse) {
      amountByEmployerSpouse = Number(this.formGroup.value.amountByEmployerSpouse.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountByInsuranceSpouse) {
      amountByInsuranceSpouse = Number(this.formGroup.value.amountByInsuranceSpouse.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountBySocialBenefitSpouse) {
      amountBySocialBenefitSpouse = Number(this.formGroup.value.amountBySocialBenefitSpouse.replace(/,/g, ''));
    }

    healthDto.amountByEmployer = amountByEmployerSpouse,
      healthDto.amountByInsurance = amountByInsuranceSpouse,
      healthDto.amountBySocialBenefit = amountBySocialBenefitSpouse,
      healthDto.createdAt = this.formGroup.value.createdAt,
      healthDto.dateOfBirth = dateOfBirthSpouse,
      healthDto.fnaId = this.formGroup.value.fnaId,
      healthDto.healthType = this.formGroup.value.healthType,
      healthDto.id = this.formGroup.value.spouseId,
      healthDto.name = this.formGroup.value.nameSpouse,
      healthDto.protection = this.formGroup.value.protectionSpouse,
      healthDto.updatedAt = this.formGroup.value.updatedAt
    return healthDto;
  }

  setSpouseInsurance(data) {
    if (data.dateOfBirth) {
      data.dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
    } else {
      data.dateOfBirth = null;
    }

    this.selectedIndexId = data.id;
    this.formGroup.controls['nameSpouse'].setValue(data.name);
    this.formGroup.controls['dateOfBirthSpouse'].setValue(data.dateOfBirth);
    this.formGroup.controls['protectionSpouse'].setValue(data.protection);
    this.formGroup.controls['amountByEmployerSpouse'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null);
    this.formGroup.controls['amountByInsuranceSpouse'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
    this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
    this.formGroup.controls['spouseId'].setValue(data.id);
  }

  getChildInsurance() {
    let dateOfBirth = null;
    if (this.formGroup.value.dateOfBirth) {
      dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth)
    }
    let healthDto: HealthDto = new HealthDto();
    let amountByEmployer = 0;
    let amountByInsurance = 0;
    let amountBySocialBenefit = 0;
    if (this.formGroup.value.amountByEmployer) {
      amountByEmployer = Number(this.formGroup.value.amountByEmployer.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountByInsurance) {
      amountByInsurance = Number(this.formGroup.value.amountByInsurance.replace(/,/g, ''));
    }
    if (this.formGroup.value.amountBySocialBenefit) {
      amountBySocialBenefit = Number(this.formGroup.value.amountBySocialBenefit.replace(/,/g, ''));
    }

    healthDto.amountByEmployer = amountByEmployer,
      healthDto.amountByInsurance = amountByInsurance,
      healthDto.amountBySocialBenefit = amountBySocialBenefit,
      healthDto.createdAt = this.formGroup.value.createdAt,
      healthDto.dateOfBirth = dateOfBirth,
      healthDto.fnaId = this.formGroup.value.fnaId,
      healthDto.healthType = this.formGroup.value.healthType,
      healthDto.id = this.formGroup.value.id,
      healthDto.name = this.formGroup.value.name,
      healthDto.protection = this.formGroup.value.protection,
      healthDto.updatedAt = this.formGroup.value.updatedAt
    return healthDto;
  }


  setChildInsurance(data) {
    if (data.dateOfBirth) {
      data.dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
    } else {
      data.dateOfBirth = null;
    }
    this.formGroup.controls['name'].setValue(data.name);
    this.formGroup.controls['dateOfBirth'].setValue(data.dateOfBirth);
    this.formGroup.controls['protection'].setValue(data.protection);
    this.formGroup.controls['amountByEmployer'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null);
    this.formGroup.controls['amountByInsurance'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
    this.formGroup.controls['amountBySocialBenefit'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
    this.formGroup.controls['id'].setValue(data.id);
    if (data.id) {
      this.selectedIndexId = data.id;
    } else {
      this.selectedIndexId = 0;
    }
  }

  removeSelfValidate() {
    this.removeValidate('amountByInsuranceSelf');
    this.removeValidate('amountByEmployerSelf');
    this.removeValidate('amountBySocialBenefitSelf');
    this.formGroup.controls['amountByInsuranceSelf'].setValue(null);
    this.formGroup.controls['amountByEmployerSelf'].setValue(null);
    this.formGroup.controls['amountBySocialBenefitSelf'].setValue(null);
  }

  addSelfValidate() {
    this.addValidate('amountByInsuranceSelf');
    this.addValidate('amountByEmployerSelf');
    this.addValidate('amountBySocialBenefitSelf');
  }

  removeSpouseValidate() {
    this.removeValidate('amountByInsuranceSpouse');
    this.removeValidate('amountByEmployerSpouse');
    this.removeValidate('amountBySocialBenefitSpouse');
    this.removeValidate('dateOfBirthSpouse');
    this.formGroup.controls['amountByInsuranceSpouse'].setValue(null);
    this.formGroup.controls['amountByEmployerSpouse'].setValue(null);
    this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(null);
  }

  addSpouseValidate() {
    this.addValidate('amountByInsuranceSpouse');
    this.addValidate('amountByEmployerSpouse');
    this.addValidate('amountBySocialBenefitSpouse');
    this.removeValidate('dateOfBirthSpouse');
  }

  removeChildValidate() {
    this.removeValidate('amountByInsurance');
    this.removeValidate('amountByEmployer');
    this.removeValidate('amountBySocialBenefit');
    this.formGroup.controls['amountByInsurance'].setValue(null);
    this.formGroup.controls['amountByEmployer'].setValue(null);
    this.formGroup.controls['amountBySocialBenefit'].setValue(null);
  }

  addChildValidate() {
    this.addValidate('amountByInsurance');
    this.addValidate('amountByEmployer');
    this.addValidate('amountBySocialBenefit');
  }

  async saveAndNextHealth() {
    if (this.selectedIndex <= 5) {
      if (this.selectedIndex == 2) {
        if (this.formGroup.value.protectionSelf) {
          await this.addSelfValidate();
        } else {
          await this.removeSelfValidate();
        }
        if (this.formGroup.value.protectionSpouse) {
          await this.addSpouseValidate();
        } else {
          await this.removeSpouseValidate()
        }
      } else {
        await this.removeSelfValidate();
        await this.removeSpouseValidate();
      }

      if (this.formGroup.value.protection) {
        await this.addChildValidate();
      } else {
        await this.removeChildValidate();
      }

      if (this.formGroup.invalid) {
        await validateAllFields(this.formGroup);
      } else {
        if (this.selectedIndex == 2) {
          if (this.formGroup.value.selfId) {
            await this.fnaHealthManageService.updateHealth(this.getSelfInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[0] = this.getSelfInsurance();
                this.tempChildList[0].id = res;
              }
            });
          } else {
            await this.fnaHealthManageService.saveHealth(this.getSelfInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[0] = this.getSelfInsurance();
                this.tempChildList[0].id = res;
              }
            });
          }

          if (this.formGroup.value.spouseId) {
            await this.fnaHealthManageService.updateHealth(this.getSpouseInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[1] = this.getSpouseInsurance();
                this.tempChildList[1].id = res;
              }
            });
          } else {
            await this.fnaHealthManageService.saveHealth(this.getSpouseInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[1] = this.getSpouseInsurance();
                this.tempChildList[1].id = res;
              }
            });
          }

          this.products.push.apply(this.products, this.fnaService.getFNAProduct('Health', ''))
          this.products = this.removeDuplicates(this.products);
          this.fnaService.fnaUpdateProducts.concat(this.products);
          let reqBody = {
            customerId: this.customerId,
            fnaType: "LPP",
            grandDiscount: 0,
            highDiscount: 0,
            id: this.fnaId,
            products: this.products
          }

          await this.fnaService.updateFNAProduct(reqBody).toPromise().then((res: any) => {
            if (res) {

            }
          });
          if (this.formGroup.value.id) {
            await this.fnaHealthManageService.updateHealth(this.getChildInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                this.tempChildList[this.selectedIndex].id = res;
                this.alertService.activate('This record was updated', 'Success Message').then(result => {
                  if (this.selectedIndex == 5) {
                    this.changeAnalysis.emit('aboutLLP');
                  }
                });
              }
            });
          } else {
            await this.fnaHealthManageService.saveHealth(this.getChildInsurance()).toPromise().then(async (res: any) => {
              if (res) {
                this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                this.tempChildList[this.selectedIndex].id = res;
                this.alertService.activate('This record was created', 'Success Message').then(result => {
                  if (this.selectedIndex == 5) {
                    this.changeAnalysis.emit('aboutLLP');
                  }
                });
              }
            });
          }
        } else {
          if (this.formGroup.value.id) {
            await this.fnaHealthManageService.updateHealth(this.getChildInsurance()).toPromise().then((res: any) => {
              if (res) {
                this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                this.alertService.activate('This record was updated', 'Success Message').then(result => {
                  if (this.selectedIndex == 5) {
                    this.changeAnalysis.emit('aboutLLP');
                  }
                });
              }
            });
          } else {
            await this.fnaHealthManageService.saveHealth(this.getChildInsurance()).toPromise().then(async (res: any) => {
              if (res) {
                this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                this.tempChildList[this.selectedIndex].id = res;
                this.alertService.activate('This record was created', 'Success Message').then(result => {
                  if (this.selectedIndex == 5) {
                    this.changeAnalysis.emit('aboutLLP');
                  }
                });
              }
            });
          }
        }

        // if (this.selectedIndex <= 4) {
        //   this.healthDto = new HealthDto();
        //   this.loadForm();
        //   this.selectedIndex++;
        // }

        // if (this.selectedIndex <= 4) {
        //   this.healthDto = new HealthDto();
        //   this.loadForm();
        //   this.selectedIndex++;
        // }

        this.healthDto = this.tempChildList[this.selectedIndex];
        if (this.healthDto) {
          await this.setChildInsurance(this.tempChildList[this.selectedIndex]);
        }
      }
      await this.checkNextChild();
      FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
    }

  }

  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }

  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  removeValidate(formControlName) {
    this.formGroup.get(formControlName).clearValidators();
    this.formGroup.get(formControlName).updateValueAndValidity();
  }

  addValidate(formControlName) {
    this.formGroup.get(formControlName).setValidators([Validators.required]);
    this.formGroup.get(formControlName).updateValueAndValidity();
  }

  getAllFNAHealth() {
    // this.tempChildList = [];
    //this.fnaHealthManageService.getAllHealth(this.fnaId).toPromise().then((res: any) => {
    if (this.tempChildList.length > 0) {
      if (this.selectedIndex == 2) {
        this.setSelfInsurance(this.tempChildList[0])
        this.setSpouseInsurance(this.tempChildList[1]);
        this.setChildInsurance(this.tempChildList[2]);
      } else {
        this.healthDto = this.tempChildList[this.selectedIndex];
        if (this.healthDto) {
          this.setChildInsurance(this.healthDto);
          this.cdf.detectChanges();
        } else {
          this.healthDto = new HealthDto();
        }
      }
    }
    // });
  }

  async deleteHealthById() {
    if (this.selectedIndexId != 0) {
      this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(async result => {
        if (result) {
          await this.fnaHealthManageService.deleteHealthById(this.selectedIndexId).toPromise().then(async (res: any) => {
            if (res) {
              this.tempChildList = this.tempChildList.filter(item => item.id !== this.selectedIndexId);
              this.healthDto = new HealthDto;
              this.loadForm();
              let obj = this.tempChildList[this.selectedIndex];
              if (obj) {
                this.selectedIndexId = this.tempChildList[this.selectedIndex].id;
                this.setChildInsurance(this.tempChildList[this.selectedIndex]);
              } else {
                this.selectedIndexId = 0;
              }
            }
          });
        }
      });
    }
    this.checkNextChild();
    FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }

  updateCommaInputSelf(ev, type) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      if (type == 'amountByInsuranceSelf') {
        this.formGroup.controls['amountByInsuranceSelf'].setValue('');
      }
      if (type == 'amountByEmployerSelf') {
        this.formGroup.controls['amountByEmployerSelf'].setValue('');
      }
      if (type == 'amountBySocialBenefitSelf') {
        this.formGroup.controls['amountBySocialBenefitSelf'].setValue('');
      }
    } else {
      if (type == 'amountByInsuranceSelf') {
        this.formGroup.controls['amountByInsuranceSelf'].setValue(num.toLocaleString());
      }
      if (type == 'amountByEmployerSelf') {
        this.formGroup.controls['amountByEmployerSelf'].setValue(num.toLocaleString());
      }
      if (type == 'amountBySocialBenefitSelf') {
        this.formGroup.controls['amountBySocialBenefitSelf'].setValue(num.toLocaleString());
      }
    }
  }

  updateCommaInputSpouse(ev, type) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      if (type == 'amountByInsuranceSpouse') {
        this.formGroup.controls['amountByInsuranceSpouse'].setValue('');
      }
      if (type == 'amountByEmployerSpouse') {
        this.formGroup.controls['amountByEmployerSpouse'].setValue('');
      }
      if (type == 'amountBySocialBenefitSpouse') {
        this.formGroup.controls['amountBySocialBenefitSpouse'].setValue('');
      }
    } else {
      if (type == 'amountByInsuranceSpouse') {
        this.formGroup.controls['amountByInsuranceSpouse'].setValue(num.toLocaleString());
      }
      if (type == 'amountByEmployerSpouse') {
        this.formGroup.controls['amountByEmployerSpouse'].setValue(num.toLocaleString());
      }
      if (type == 'amountBySocialBenefitSpouse') {
        this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(num.toLocaleString());
      }
    }
  }

  updateCommaInputChild(ev, type) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      if (type == 'amountByInsurance') {
        this.formGroup.controls['amountByInsurance'].setValue('');
      }
      if (type == 'amountByEmployer') {
        this.formGroup.controls['amountByEmployer'].setValue('');
      }
      if (type == 'amountBySocialBenefit') {
        this.formGroup.controls['amountBySocialBenefit'].setValue('');
      }
    } else {
      if (type == 'amountByInsurance') {
        this.formGroup.controls['amountByInsurance'].setValue(num.toLocaleString());
      }
      if (type == 'amountByEmployer') {
        this.formGroup.controls['amountByEmployer'].setValue(num.toLocaleString());
      }
      if (type == 'amountBySocialBenefit') {
        this.formGroup.controls['amountBySocialBenefit'].setValue(num.toLocaleString());
      }
    }
  }

  backToStartAction() {
    this.changeAnalysis.emit('aboutLLP');
  }

  viewAll() {
    if (this.tempChildList.length > 0) {
      this.fnaService.openModal('Health');
    }
  }

  doValid(type) {
    if (type == 'dateOfBirthSpouse') {
      let value = this.formGroup.controls['dateOfBirthSpouse'].value;
      if (value) {
        let toDate = moment(this.formGroup.controls['dateOfBirthSpouse'].value).add(0, 'years')
        this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        this.formGroup.controls['dateOfBirthSpouse'].setValue(toDate.format('YYYY-MM-DD'))
      }
    }

    if (type == 'dateOfBirth') {
      let value = this.formGroup.controls['dateOfBirth'].value;
      if (value) {
        let toDate = moment(this.formGroup.controls['dateOfBirth'].value).add(0, 'years')
        this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'))
      }
    }
  }

  addChild(type) {
    if (this.selectedIndex <= 4) {
      this.healthDto = new HealthDto();
      this.loadForm();
      this.selectedIndex++;
      this.healthDto = this.tempChildList[this.selectedIndex];
      if (this.healthDto) {
        this.setChildInsurance(this.tempChildList[this.selectedIndex]);
      }
    }
    if (type == 'add') {
      this.selectedIndexId = 0
    }

  }

  clearDOB(type) {
    if (type == 'dateOfBirth') {
      this.formGroup.controls['dateOfBirth'].setValue(null);
    } else {
      this.formGroup.controls['dateOfBirthSpouse'].setValue(null);
    }
  }

  checkNextChild() {
    let next = this.tempChildList.length;
    this.nextCount = next - 2;
  }



}
