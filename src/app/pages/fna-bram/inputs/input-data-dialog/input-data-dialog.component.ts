import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { validateAllFields } from '../../../../../app/core/valid-all-feild';
import { AuthService } from '../../../../../app/modules/auth';
import { AlertService } from '../../../../../app/modules/loading-toast/alert-model/alert.service';
import { FANService } from '../../../../../app/pages/fna-detail/fna-manage.service';
import { FNABRAMInputService } from '../../inputs.manage.service';
import { HumanResourcesService } from '../human-resources/human-resources.manage.service';
import { InboundlogisticsService } from '../inbound-logistics/inbound-logistics.manage.service';
import { InputsService } from '../inputs.manage.service';
import { ManagementInfrastructureService } from '../management-infrastructure/management-infrastructure.manage.service';
import { MarketingSalesService } from '../marketing-sales/marketing-sales.manage.service';
import { OperationService } from '../operation/operation.manage.service';
import { OutboundLogisticsService } from '../outbound-logistics/outbound-logistics.manage.service';
import { BRAMServiceService } from '../service/service.manage.service';
import { TechnologyService } from '../technology/technology.manage.service';
import { InputDataDto } from './input-data.dto';
import { HUMAN_RESOURCES, INBOUND_LOGISTICS, MANAGEMENT_INFRASTRUCTURE, MARKETING_SALES, OPERATION, OUTBOUND_LOGISTICS, SERVICE, TECHNOLOGY } from './input.data.enum';

@Component({
  selector: 'app-input-data-dialog',
  templateUrl: './input-data-dialog.component.html',
  styleUrls: ['./input-data-dialog.component.scss']
})
export class InputDataDialogComponent implements OnInit {
  fnaId: string = null;
  type: string = null;
  menuType: string = null;
  data: any;
  dataDto: InputDataDto = new InputDataDto();
  formGroup: FormGroup;
  isShowAssetDescription: boolean = false;
  isShowNoofUnits: boolean = false;
  isShowVehicleNo: boolean = false;
  isShowEngineCapacity: boolean = false;
  isShowShipping: boolean = false;
  isShowQuestion: boolean = false;
  isShowAnswer: boolean;
  isShowEstimatedValue: boolean;
  isShowNoOfPeople: boolean;
  isShowAvageAge: boolean;
  isShowPackage: boolean;
  isShowHumanResourcesProduct: boolean;
  isShowNoOfLocations: boolean;
  isShowServiceAssetDescription: boolean;
  isShowJobDescription: boolean;
  products = [];
  user: any;
  isHumanResources: boolean;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    public modal: NgbActiveModal, private inboundlogisticsService: InboundlogisticsService,
    private alertService: AlertService, private humanResourcesService: HumanResourcesService,
    private managementInfrastructureService: ManagementInfrastructureService, private inputsService: InputsService,
    private marketingSalesService: MarketingSalesService, private operationService: OperationService,
    private outboundLogisticsService: OutboundLogisticsService, private bramServiceService: BRAMServiceService,
    private technologyService: TechnologyService, private authService: AuthService, private fnaService: FANService) {
    this.getAllProducts();
  }

  async ngOnInit() {
    this.loadForm();
    // console.log('menuType', this.menuType);
    // console.log('type', this.type);
    // console.log('fnaId', this.fnaId);
    this.user = this.authService.currentUserValue;
    if (this.data) {
      this.dataDto = this.data;
      if (this.data.valueLaks) {
        this.data.valueLaksText = this.data.valueLaks;
        //this.data.valueLaksText = Number(this.data.valueLaks.replace(/,/g, ''));
      }
      this.loadForm(this.data);
    }
    // this.showHide();
  }

  setData(data) {
    this.formGroup.controls['id'].setValue(data.id);
    this.formGroup.controls['description'].setValue(data.description);
    this.formGroup.controls['fnaId'].setValue(data.fnaId);
    this.formGroup.controls['productId'].setValue(data.productId);
    this.formGroup.controls['riskCode'].setValue(data.riskCode);
    this.formGroup.controls['type'].setValue(data.type);
    this.formGroup.controls['unit'].setValue(data.unit);
    this.formGroup.controls['shipping'].setValue(data.shipping);
    this.formGroup.controls['engineCapacity'].setValue(data.engineCapacity);
    this.formGroup.controls['answer'].setValue(data.answer);
    this.formGroup.controls['question'].setValue(data.question);
    this.formGroup.controls['averageAge'].setValue(data.averageAge);
    this.formGroup.controls['noOfPeople'].setValue(data.noOfPeople);
    this.formGroup.controls['packages'].setValue(data.packages);
    this.formGroup.controls['noOfLocation'].setValue(data.noOfLocation);
    this.formGroup.controls['valueLaksText'].setValue(data.valueLaksText);
    this.formGroup.controls['valueLaks'].setValue(data.valueLaks);
    this.formGroup.controls['createdAt'].setValue(data.createdAt);
    this.formGroup.controls['updatedAt'].setValue(data.updatedAt);
  }

  loadForm(data?) {
    if (data) {
      this.dataDto = data;
    }
    this.formGroup = new FormGroup({
      id: new FormControl(this.dataDto.id || null || 0),
      description: new FormControl(this.dataDto.description || ''),
      fnaId: new FormControl(this.dataDto.fnaId || null),
      productId: new FormControl(this.dataDto.productId || null, [Validators.required, Validators.nullValidator]),
      riskCode: new FormControl(this.dataDto.riskCode || null, [Validators.required, Validators.nullValidator]),
      type: new FormControl(this.dataDto.type || null),
      unit: new FormControl(this.dataDto.unit || null),
      shipping: new FormControl(this.dataDto.shipping || null),
      engineCapacity: new FormControl(this.dataDto.engineCapacity || null),
      answer: new FormControl(this.dataDto.answer || null),
      question: new FormControl(this.dataDto.question || null),
      averageAge: new FormControl(this.dataDto.averageAge || null),
      noOfPeople: new FormControl(this.dataDto.noOfPeople || null),
      packages: new FormControl(this.dataDto.packages || null),
      noOfLocation: new FormControl(this.dataDto.noOfLocation || null),
      valueLaksText: new FormControl(this.dataDto.valueLaksText || '', [Validators.required, Validators.nullValidator]),
      valueLaks: new FormControl(this.dataDto.valueLaks || null),
      createdAt: new FormControl(this.dataDto.createdAt || new Date()),
      updatedAt: new FormControl(this.dataDto.updatedAt || new Date()),
    });
    this.cdf.detectChanges();
  }

  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    if (!control.value) {
      this.formGroup.controls[controlName].setValue('');
      //control.markAsUntouched();
    }
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    if (!control.value) {
      this.formGroup.controls[controlName].setValue('');
      //control.markAsUntouched();
    }
    return control.invalid && (control.dirty || control.touched);
  }

  updateCommaInput(ev) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      this.formGroup.controls['valueLaksText'].setValue('');
      this.formGroup.controls['valueLaksText'].setValue('');
    } else {
      if (this.type == "Warehouse") {
        if (num <= 999999999) {
          this.formGroup.controls['valueLaksText'].setValue(num.toLocaleString());
        } else {
          this.formGroup.controls['valueLaksText'].setValue("");
        }
      } else {
        this.formGroup.controls['valueLaksText'].setValue(num.toLocaleString());
      }
    }
  }

  validateCommaInput(ev, fieldType) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      if (fieldType == 'unit') {
        this.formGroup.controls['unit'].setValue('');
      }
      if (fieldType == 'Engine Capacity') {
        this.formGroup.controls['unit'].setValue('');
        this.formGroup.controls['engineCapacity'].setValue('');
      }
      if (fieldType == 'No. of Locations') {
        this.formGroup.controls['noOfLocation'].setValue('');
      }
      if (fieldType == 'No. of People') {
        this.formGroup.controls['noOfPeople'].setValue('');
      }

      if (fieldType == 'Average Age') {
        this.formGroup.controls['averageAge'].setValue('');
      }

    }
  }

  closeInputDialog() {
    this.modal.close()
  }

  save() {
    if (
      (this.menuType == 'ManagementInfrastructure' && (this.type == 'Management team' || this.type == 'Location of Business'))) {
      this.removeValidate('valueLaksText');
    } else {
      this.addValidate('valueLaksText');
      this.addValidate('riskCode');
      this.addValidate('productId');
      this.formGroup.value.valueLaks = Number(this.formGroup.value.valueLaksText.replace(/,/g, ''));
    }

    if (this.menuType == 'HumanResources' && this.type == 'Recruitment and Training') {
      this.removeValidate('valueLaksText');
      this.addValidate('packages');
    }

    if (this.menuType == 'OutboundLogistics' && this.type == 'Goods In Transporation') {
      this.addValidate('shipping');
    }

    if ((this.menuType == 'MarketingSales' && this.type == 'Sales Team')) {
      this.addValidate('answer');
      this.removeValidate('valueLaksText');
    }

    if ((this.menuType == 'Service' && this.type == 'Service Infrastructure')) {
      this.addValidate('description');
    }

    if ((this.menuType == 'Service' && this.type == 'Servicing employees')) {
      this.addValidate('description');
    }

    if (this.menuType == 'HumanResources' && this.type == 'Recruitment and Training') {
      this.addValidate('noOfPeople');
      this.addValidate('averageAge');
      this.isHumanResources = true;
    } else {
      this.isHumanResources = false;
    }

    if (this.menuType == 'ManagementInfrastructure' && (this.type == 'Management team' || this.type == 'Location of Business')) {
      this.addValidate('riskCode');
      this.addValidate('productId');
    }

    if (this.menuType == 'ManagementInfrastructure' && this.type == 'Fixed assets and their management') {
      this.addValidate('valueLaksText');
      this.addValidate('riskCode');
      this.addValidate('productId');
    }


    if (this.formGroup.invalid) {
      validateAllFields(this.formGroup);
    } else {
      this.formGroup.value.fnaId = this.fnaId;
      this.formGroup.value.productId = Number(this.formGroup.value.productId);

      this.formGroup.value.description = this.formGroup.value.description ? this.formGroup.value.description : '';
      this.formGroup.value.productId = this.formGroup.value.productId ? this.formGroup.value.productId : 0;
      this.formGroup.value.riskCode = this.formGroup.value.riskCode ? this.formGroup.value.riskCode : '';
      this.formGroup.value.type = this.formGroup.value.type ? this.formGroup.value.type : '';
      this.formGroup.value.unit = this.formGroup.value.unit ? this.formGroup.value.unit : 0;
      this.formGroup.value.engineCapacity = this.formGroup.value.engineCapacity ? this.formGroup.value.engineCapacity : 0;
      this.formGroup.value.averageAge = this.formGroup.value.averageAge ? this.formGroup.value.averageAge : 0;
      this.formGroup.value.noOfPeople = this.formGroup.value.noOfPeople ? this.formGroup.value.noOfPeople : 0;
      this.formGroup.value.packages = this.formGroup.value.packages ? this.formGroup.value.packages : '';
      this.formGroup.value.noOfLocation = this.formGroup.value.noOfLocation ? this.formGroup.value.noOfLocation : 0;
      this.formGroup.value.risk = this.formGroup.value.risk ? this.formGroup.value.risk : '';
      this.formGroup.value.question = this.formGroup.value.question ? this.formGroup.value.question : '';

      if (this.formGroup.value.valueLaksText) {
        this.formGroup.value.valueLaks = Number(this.formGroup.value.valueLaksText.replace(/,/g, ''));
      }

      if (this.menuType == 'InboundLogistics') {
        this.createInboundlogistics(this.formGroup.value.id);
      }

      if (this.menuType == 'Operation') {
        this.createOperation(this.formGroup.value.id);
      }

      if (this.menuType == 'OutboundLogistics') {
        this.createOutboundLogistics(this.formGroup.value.id);
      }

      if (this.menuType == 'MarketingSales') {
        this.createMarketingSales(this.formGroup.value.id);
      }

      if (this.menuType == 'Service') {
        this.createBRAMServiceService(this.formGroup.value.id);
      }

      if (this.menuType == 'Technology') {
        this.createTechnologyService(this.formGroup.value.id);
      }

      if (this.menuType == 'HumanResources') {
        this.createHumanResources(this.formGroup.value.id);
      }

      if (this.menuType == 'ManagementInfrastructure') {
        this.createManagementInfrastructure(this.formGroup.value.id);
      }


    }
  }

  showHide() {
    if (this.menuType == 'InboundLogistics' && (this.type == 'Warehouse' || this.type == 'Raw Material Storage'
      || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'InboundLogistics' && this.type == 'Transportation') {
      this.isShowVehicleNo = true;
      this.isShowEngineCapacity = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'Operation' && (this.type == 'Factory Building/s' || this.type == 'Machinery'
      || this.type == 'Manufacturing Process' || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }


    if (this.menuType == 'OutboundLogistics' && (this.type == 'Warehousing' || this.type == 'Goods In Warehouses'
      || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'OutboundLogistics' && this.type == 'Goods In Transporation') {
      this.isShowVehicleNo = true;
      this.isShowEstimatedValue = true;
      this.isShowShipping = true;
    }

    if (this.menuType == 'OutboundLogistics' && this.type == 'Transporation') {
      this.isShowVehicleNo = true;
      this.isShowEngineCapacity = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'MarketingSales' && (this.type == 'Marketing Assets' || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'MarketingSales' && this.type == 'Sales Team') {
      this.isShowQuestion = true;
      this.isShowAnswer = true;
    }

    if (this.menuType == 'MarketingSales' && this.type == 'Transporation') {
      this.isShowVehicleNo = true;
      this.isShowEngineCapacity = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'Service' && this.type == 'Service Infrastructure') {
      this.isShowServiceAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'Service' && (this.type == 'Call Center' || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'Service' && this.type == 'Servicing employees') {
      this.isShowJobDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'Technology' && (this.type == 'Hardware' ||
      this.type == 'System and Software' || this.type == 'Customer Data and Information' || this.type == 'Others')) {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }

    if (this.menuType == 'HumanResources' && this.type == 'Recruitment and Training') {
      this.isShowNoOfPeople = true;
      this.isShowAvageAge = true;
      this.isShowPackage = true;
      this.isShowHumanResourcesProduct = true;
    }

    if (this.menuType == 'ManagementInfrastructure' && this.type == 'Management team') {
      this.isShowNoOfPeople = true;
    }

    if (this.menuType == 'ManagementInfrastructure' && this.type == 'Location of Business') {
      this.isShowNoOfLocations = true;
    }

    if (this.menuType == 'ManagementInfrastructure' && this.type == 'Fixed assets and their management') {
      this.isShowAssetDescription = true;
      this.isShowNoofUnits = true;
      this.isShowEstimatedValue = true;
    }
  }

  createInboundlogistics(id) {
    if (this.type == 'Warehouse') {
      this.formGroup.value.type = INBOUND_LOGISTICS.WAREHOUSE.toString();
    } else if (this.type == 'Raw Material Storage') {
      this.formGroup.value.type = INBOUND_LOGISTICS.RAW_MATERIAL.toString();
    } else if (this.type == 'Transportation') {
      this.formGroup.value.type = INBOUND_LOGISTICS.TRANSPORTATION.toString();
    } else {
      this.formGroup.value.type = INBOUND_LOGISTICS.OTHERS.toString();
    }
    if (id) {
      this.inboundlogisticsService.saveInboundlogistics(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.inboundlogisticsService.updateInboundlogistics(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createHumanResources(id) {
    let riskValue: string = '';
    if (this.type == 'Recruitment and Training') {
      this.formGroup.value.type = HUMAN_RESOURCES.RECRUITMENT_AND_TRAINING.toString();
    }

    if (this.formGroup.value.riskCode == '001') {
      riskValue = 'Low';
    } else if (this.formGroup.value.riskCode == '002') {
      riskValue = 'Medium';
    } else {
      riskValue = 'High';
    }

    let reqBody = {
      "averageAge": this.formGroup.value.averageAge,
      "createdAt": new Date(),
      "createdBy": this.user.id,
      "fnaId": this.fnaId,
      "id": id,
      "noOfPeople": this.formGroup.value.noOfPeople,
      "packages": this.formGroup.value.packages,
      "productId": this.formGroup.value.productId,
      "risk": this.formGroup.value.riskCode,
      "riskValue": riskValue,
      "type": this.formGroup.value.type,
      "updatedAt": new Date(),
      "updatedBy": this.user.id
    }

    if (id) {
      this.humanResourcesService.updateHumanResources(reqBody).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.humanResourcesService.saveHumanResources(reqBody).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createManagementInfrastructure(id) {
    if (this.type == 'Management team') {
      this.formGroup.value.type = MANAGEMENT_INFRASTRUCTURE.MANAGEMENT_TEAM.toString();
    } else if (this.type == 'Location of Business') {
      this.formGroup.value.type = MANAGEMENT_INFRASTRUCTURE.LOCATION_BUSINESS.toString();
    } else if (this.type == 'Fixed assets and their management') {
      this.formGroup.value.type = MANAGEMENT_INFRASTRUCTURE.FIX_ASSET_MANAGEMENT.toString();
    }

    let reqBody = {
      "createdAt": new Date(),
      "createdBy": this.user.id,
      "description": this.formGroup.value.description,
      "fnaId": this.fnaId,
      "id": id,
      "noOfLocation": this.formGroup.value.noOfLocation,
      "noOfPeople": this.formGroup.value.noOfPeople,
      "productId": this.formGroup.value.productId,
      "risk": this.formGroup.value.riskCode,
      "type": this.formGroup.value.type,
      "unit": this.formGroup.value.unit,
      "updatedAt": new Date(),
      "updatedBy": this.user.id,
      "valueLaks": this.formGroup.value.valueLaks
    }

    if (id) {
      this.managementInfrastructureService.updateManagementInfrastructure(reqBody).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.managementInfrastructureService.saveManagementInfrastructure(reqBody).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createMarketingSales(id) {
    if (this.type == 'Marketing Assets') {
      this.formGroup.value.type = MARKETING_SALES.MARKETING_ASSETS.toString();
    } else if (this.type == 'Sales Team') {
      this.formGroup.value.type = MARKETING_SALES.SALES_TEAM.toString();
    } else if (this.type == 'Transporation') {
      this.formGroup.value.type = MARKETING_SALES.TRANSPORATION.toString();
    } else {
      this.formGroup.value.type = MARKETING_SALES.OTHERS.toString();
    }

    if (this.type == 'Sales Team') {
      if (this.formGroup.value.answer == 'Yes') {
        this.formGroup.value.answer = true;
      } else if (this.formGroup.value.answer == 'No') {
        this.formGroup.value.answer = false;
      } else {
        this.formGroup.value.answer = null;
      }
      this.formGroup.value.answer

    }

    // let reqBody = {
    //   "answer": this.formGroup.value.answer,
    //   "createdAt": new Date(),
    //   "description": this.formGroup.value.question,
    //   "engineCapacity": this.formGroup.value.engineCapacity,
    //   "fnaId": this.fnaId,
    //   "id": id,
    //   "productId": this.formGroup.value.productId,
    //   "riskCode": this.formGroup.value.riskCode,
    //   "type": this.formGroup.value.type,
    //   "unit": this.formGroup.value.unit,
    //   "updatedAt": new Date(),
    //   "valueLaks": this.formGroup.value.valueLaks
    // }


    if (id) {
      this.marketingSalesService.saveMarketingSales(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.marketingSalesService.updateMarketingSales(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createOperation(id) {
    if (this.type == 'Factory Building/s') {
      this.formGroup.value.type = OPERATION.FACTORY_BUILDING.toString();
    } else if (this.type == 'Machinery') {
      this.formGroup.value.type = OPERATION.MACHINERY.toString();
    } else if (this.type == 'Manufacturing Process') {
      this.formGroup.value.type = OPERATION.MANUFACTURING.toString();
    } else {
      this.formGroup.value.type = OPERATION.OTHERS.toString();
    }

    if (id) {
      this.operationService.saveOperation(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.operationService.updateOperation(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createOutboundLogistics(id) {
    if (this.type == 'Warehousing') {
      this.formGroup.value.type = OUTBOUND_LOGISTICS.WAREHOUSING.toString();
    } else if (this.type == 'Goods In Warehouses') {
      this.formGroup.value.type = OUTBOUND_LOGISTICS.GOODS_WAREHOUSE.toString();
    } else if (this.type == 'Goods In Transporation') {
      this.formGroup.value.type = OUTBOUND_LOGISTICS.GOODS_TRANSPORTATION.toString();
    } else if (this.type == 'Transporation') {
      this.formGroup.value.type = OUTBOUND_LOGISTICS.TRANSPORATION.toString();
    } else {
      this.formGroup.value.type = OUTBOUND_LOGISTICS.OTHERS.toString();
    }

    if (id) {
      this.outboundLogisticsService.saveOutboundLogistics(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.outboundLogisticsService.updateOutboundLogistics(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createBRAMServiceService(id) {
    if (this.type == 'Service Infrastructure') {
      this.formGroup.value.type = SERVICE.SERVICE_INFRASTRUCTURER.toString();
    } else if (this.type == 'Call Center') {
      this.formGroup.value.type = SERVICE.CALL_CENTER.toString();
    } else if (this.type == 'Servicing employees') {
      this.formGroup.value.type = SERVICE.SERVICING_EMPLOYEES.toString();
    } else {
      this.formGroup.value.type = SERVICE.OTHERS.toString();
    }

    if (id) {
      this.bramServiceService.saveBRAMService(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.bramServiceService.updateBRAMService(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  createTechnologyService(id) {
    if (this.type == 'Hardware') {
      this.formGroup.value.type = TECHNOLOGY.HARDWARE.toString();
    } else if (this.type == 'System and Software') {
      this.formGroup.value.type = TECHNOLOGY.SYSTEM_SOFTWARE.toString();
    } else if (this.type == 'Customer Data and Information') {
      this.formGroup.value.type = TECHNOLOGY.CUST_DATA_INFORMATION.toString();
    } else {
      this.formGroup.value.type = TECHNOLOGY.OTHER.toString();
    }
    if (id) {
      this.technologyService.saveTechnology(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    } else {
      this.technologyService.updateTechnology(this.formGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message').then(result => {
            this.modal.dismiss(res);
          });
        }
      });
    }
  }

  async getAllProducts() {
    await this.inputsService.getAllProducts().toPromise().then(async (res: any) => {
      console.log('getAllProducts', this.type);
      if (this.menuType == "OutboundLogistics" && this.type == "Goods In Transporation") {
        this.products = res.filter(x => x.code === 'CLMA01');
      } else if (this.menuType == "HumanResources" && this.type == "Recruitment and Training") {
        this.products = res.filter(x => x.code === 'PCHL01');
      } else {
        this.products = res.filter(x => x.code === 'CLFR01' || x.code === 'PLMO02' ||
          x.code === 'PCPA01' || x.code === 'PLPA01' || x.code === 'CLCS01' || x.code === 'CLCT01' || x.code === 'CLFD01');
      }
    });
  }

  removeValidate(formControlName) {
    this.formGroup.get(formControlName).clearValidators();
    this.formGroup.get(formControlName).updateValueAndValidity();
  }

  addValidate(formControlName) {
    this.formGroup.get(formControlName).setValidators([Validators.required]);
    this.formGroup.get(formControlName).updateValueAndValidity();
  }


}
