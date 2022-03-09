import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { AssectDto } from './asset-manage.dto';
import { FANAssetService } from './asset-manage.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaAssets: any = null;
  @Input() fnaId: any = null;
  @Input() customerId: any = null;

  @Output() changeAnalysis: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  selectedIndex: number = 0;
  assects: Array<AssectDto> = new Array();
  assectDto: AssectDto = new AssectDto()
  objIndex: any = null;
  index: number = 0;
  isNext: boolean = true;
  isAssetType: boolean = false;
  products = [];
  assectTypes = [{ typeCode: "building", typeValue: "Building" }, { typeCode: "motor", typeValue: "Motor" }, { typeCode: "others", typeValue: "Others" }];
  nextCount: number;

  constructor(private fb: FormBuilder, private cdf: ChangeDetectorRef, private alertService: AlertService,
    private fnaAssetService: FANAssetService, public fnaService: FANService) { }

  ngOnInit(): void {
    this.loadForm();
    this.assectDto.fnaId = this.fnaId;
    if (this.fnaService.fnaAssect) {
      this.assects = this.fnaService.fnaAssect;
      FNAConstant.FNA_DETAIL_LIST = this.assects;
    }

    if (this.fnaService.fnaUpdateProducts) {
      this.products = this.fnaService.fnaUpdateProducts;
    }
    this.getAllAsset();
    this.checkNextChild();
  }

  getAllAsset() {
    if (this.assects.length > 0) {
      if (this.selectedIndex == 0) {
        this.assectDto = this.assects[0];
        this.assectDto.costText = this.fnaService.mathRoundTo(this.assects[0].cost, 2);
      } else {
        this.assectDto = this.assects[this.selectedIndex];
        if (!this.assectDto) {
          this.assectDto = new AssectDto();
        } else {
          this.assectDto.costText = this.fnaService.mathRoundTo(this.assects[this.selectedIndex].cost, 2);
        }
      }
      this.loadForm();
      this.cdf.detectChanges();
    }
  }

  async saveAsset() {
    if (this.formGroup.value.assetType == 'others') {
      this.addValidate('remark');
    } else {
      this.removeValidate('remark');
    }

    if (this.formGroup.invalid) {
      validateAllFields(this.formGroup);
    } else {
      if (this.formGroup.value.assetType != 'others') {
        this.formGroup.value.remark = "";
      }

      if (this.formGroup.value.assetType == 'motor' || this.formGroup.value.assetType == 'building') {
        if (this.formGroup.value.assetType == 'motor') {
          this.products.push.apply(this.products, this.fnaService.getFNAProduct('Asset', 'Motor'))
        }
        if (this.formGroup.value.assetType == 'building') {
          this.products.push.apply(this.products, this.fnaService.getFNAProduct('Asset', 'Fire'))
        }
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
      }

      if (this.formGroup.value.id) {
        await this.fnaAssetService.updateAsset(this.formGroup.value).toPromise().then((res: any) => {
          if (res) {
            this.assects[this.selectedIndex] = this.formGroup.value;
            this.alertService.activate('This record was updated', 'Success Message');
          }
        });
      } else {
        await this.fnaAssetService.saveAsset(this.formGroup.value).toPromise().then((res: any) => {
          if (res) {
            this.assects[this.selectedIndex] = this.formGroup.value;
            this.assects[this.selectedIndex].id = res;
            this.assectDto = new AssectDto();
            this.loadForm();
            this.alertService.activate('This record was created', 'Success Message');
          }
        });
      }
      //this.selectedIndex++;
      this.getAllAsset();
    }
    this.checkNextChild();
    FNAConstant.FNA_DETAIL_LIST = this.assects;
  }

  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }





  backAction() {
    this.isNext = false;
    if (this.selectedIndex == 0) {
      this.changeAnalysis.emit('aboutLLP');
    } else {
      this.selectedIndex--;
      this.assectDto = this.assects[this.selectedIndex];
      this.loadForm();
    }
    this.checkNextChild();
  }


  loadForm() {
    this.formGroup = new FormGroup({
      assetType: new FormControl(this.assectDto.assetType),
      cost: new FormControl(this.assectDto.cost || null, [Validators.required, Validators.nullValidator]),
      costText: new FormControl(this.assectDto.costText || null, [Validators.required, Validators.nullValidator]),
      fnaId: new FormControl(this.assectDto.fnaId),
      id: new FormControl(this.assectDto.id || 0),
      protect: new FormControl(this.assectDto.protect),
      remark: new FormControl(this.assectDto.remark || ''),
      createdAt: new FormControl(this.assectDto.createdAt || ''),
      updatedAt: new FormControl(this.assectDto.updatedAt || '')
    });
    this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
    this.cdf.detectChanges();
  }

  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async deleteAsset() {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(async result => {
      if (result) {
        let deleteIndex = [];
        if (this.assectDto.id) {
          await this.fnaAssetService.deleteAssetById(this.assectDto.id).toPromise().then(async (res: any) => {
            if (res) {
              if (this.formGroup.value.assetType == 'motor' || this.formGroup.value.assetType == 'building') {
                if (this.formGroup.value.assetType == 'motor') {
                  deleteIndex = this.assects.filter(item => item.assetType == 'motor');
                  if (deleteIndex.length == 1) {
                    this.products = this.products.filter(item => item !== this.fnaService.getFNAProduct('Asset', 'Motor')[0]);
                  }
                }
                if (this.formGroup.value.assetType == 'building') {
                  deleteIndex = this.assects.filter(item => item.assetType == 'building');
                  if (deleteIndex.length == 1) {
                    this.products = this.products.filter(item => item !== this.fnaService.getFNAProduct('Asset', 'Fire')[0]);
                  }
                }

                if (deleteIndex.length == 1) {
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
                }
              }
              this.assects = this.assects.filter(item => item.id !== this.assectDto.id);
              this.getAllAsset();
            }
          });
          this.checkNextChild();
          FNAConstant.FNA_DETAIL_LIST = this.assects;
        }
      }
    });


  }

  updateCommaInput(ev) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      this.formGroup.controls['cost'].setValue('');
      this.formGroup.controls['costText'].setValue('');
    } else {
      this.formGroup.controls['cost'].setValue(num);
      this.formGroup.controls['costText'].setValue(num.toLocaleString());
    }
  }



  addAssets(typeCode) {
    let obj = {
      typeCode: '',
      typeValue: '',
    }
    if (typeCode == 'motor') {
      obj.typeCode = 'motor';
      obj.typeValue = 'Motor';
    }
    if (typeCode == 'building') {
      obj.typeCode = 'building';
      obj.typeValue = 'Building';
    }
    if (typeCode == 'others') {
      obj.typeCode = 'others';
      obj.typeValue = 'Others';
    }
    this.assectTypes.push(obj);
  }


  backToStartAction() {
    this.changeAnalysis.emit('aboutLLP');
  }

  viewAll() {
    if (this.assects.length > 0) {
      this.fnaService.openModal('Asset');
    }
  }

  addChild() {
    this.selectedIndex++;
    this.getAllAsset();
  }

  removeValidate(formControlName) {
    this.formGroup.get(formControlName).clearValidators();
    this.formGroup.get(formControlName).updateValueAndValidity();
  }

  addValidate(formControlName) {
    this.formGroup.get(formControlName).setValidators([Validators.required]);
    this.formGroup.get(formControlName).updateValueAndValidity();
  }


  checkNextChild() {
    let next = this.assects.length;
    this.nextCount = next;
  }

}
