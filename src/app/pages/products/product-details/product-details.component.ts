import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../_metronic/core/services/products.service';
import { CoverageModalComponent } from '../coverage-modal/coverage-modal.component';
import { v4 } from 'uuid';
import { PageUIModalComponent } from '../page-ui-modal/page-ui-modal.component';
import { SortConfigModalComponent } from '../../form-component/sort-config-modal/sort-config-modal.component';
import { ProductDataService } from '../services/products-data.service';
import { CoverageDataService } from '../services/coverage-data.service';
import { AddOnDataService } from '../services/add-on-data.service';
import { ProductUIDeleteService, ProductUIService } from '../services/products-UI.service';
import { IsJsonString } from '../../../core/is-json';
import { PageUI, PageUIType, Product } from '../models/product.dto';
import { FormUI } from '../../dashboard/models/form-ui.dto';
import { ConfigInput, ConfigPage, FromGroupData } from '../../form-component/field.interface';
import { ViewUIModalComponent } from '../view-ui-modal/view-ui-modal.component';
import { StaticUIModalComponent } from '../static-ui-modal/static-ui-modal.component';
import { InputConfigModalComponent } from '../input-config-modal/input-config-modal.component';
import { PrintConfig, PrintFormat, PrintTable } from '../models/print-config.interface';
import { PrintFormsModalComponent } from '../print-forms-modal/print-forms-modal.component';
import { PrintConfigModalComponent } from '../print-config-modal/print-config-modal.component';
import { PrintPreviewModalComponent } from '../print-preview-modal/print-preview-modal.component';
import { AttachmentUploadService } from '../../../_metronic/core/services/attachment-data.service';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { environment } from '../../../../environments/environment';
import { EditSourceModalComponent } from '../edit-source-modal/edit-source-modal.component';
import { ValidityPeriodService } from '../services/validity-period.service';
import { getFileReader } from '../../../core/get-file-reader';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  items: string[] = [
    "Product Attributes",
    "Basic Coverage",
    "AddOn",
  ]
  @ViewChild('selectedFile1') selectedFileEl1: ElementRef;
  @ViewChild('selectedFile2') selectedFileEl2: ElementRef;
  @ViewChild('selectedFile3') selectedFileEl3: ElementRef;
  activePage: string = "Product Attributes"
  product: Product = {}
  products: any[] = []
  unsubscribe: Subscription[] = []
  uiData: any[] = []
  formGroup: FormGroup;
  lump: boolean = false
  annually: boolean = false
  prodIndex: number
  quotation: boolean = false
  application: boolean = false
  Default_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;

  coverage = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  addOn = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  leadSources: any[] = []
  private subscriptions: Subscription[] = [];
  printConfig: PrintConfig = {}
  staticPrintForm: any[] = []
  defaultCol = [
    {
      title: "Premimun",
      background: "#DDEBF7",
      color: "#1F4E78",
      rowspan: 1,
      colspan: 1,
      align: 'center',
      static: true,
      key: "premimun"
    },
    {
      title: "Policy Number",
      background: "#DDEBF7",
      color: "#1F4E78",
      rowspan: 1,
      colspan: 1,
      align: 'center',
      static: true,
      key: "policy_number"
    },
    {
      title: "Insurer",
      background: "#DDEBF7",
      color: "#1F4E78",
      rowspan: 1,
      colspan: 1,
      align: 'center',
      static: true,
      key: "insurer_name"
    }
  ]
  constructor(private itemService: ProductDataService, private location: Location,
    private modalService: NgbModal, private fb: FormBuilder, private cdRef: ChangeDetectorRef,
    private coverageService: CoverageDataService, private addOnService: AddOnDataService,
    private productUI: ProductUIService, private prodDel: ProductUIDeleteService,
    private fileUpload: AttachmentUploadService, private loading: LoadingService,
    private validityPeriodService: ValidityPeriodService, private alertService: AlertService,
    private encryption: EncryptService) {

  }

  ngOnInit(): void {
    if (!this.itemService.selectedProd) {
      this.loadForm()
      this.location.back()
    } else {
      this.product = this.itemService.selectedProd
      if (this.product.smallIcon) {
        let small = this.encryption.encryptData(this.product.smallIcon)
        this.product.smallIcon = (small)
      }
      if (this.product.icon) {
        let icon = this.encryption.encryptData(this.product.icon)
        this.product.icon = (icon)
      }
      if (this.product.coverIcon) {
        let cover = this.encryption.encryptData(this.product.coverIcon)
        this.product.coverIcon = (cover)
      }
      this.product.coverages = this.product.coverages || []
      this.product.addOns = this.product.addOns || []
      this.loadForm()
      this.getDetail()
      // const itemScb = this.itemService.items$.subscribe(data => {
      //   this.uiData = data.forms
      //   this.products = data.products
      //   this.prodIndex = this.products.findIndex(x => x.id == this.product.id)
      // })
      // this.unsubscribe.push(itemScb);
    }
  }

  getDetail() {

    this.itemService.findOne(this.product.id).toPromise().then((res) => {
      //console.log(res);

      if (res) {
        this.product = res
        if (this.product.smallIcon) {
          let small = this.encryption.encryptData(this.product.smallIcon)
          this.formGroup.controls['smallIcon'].setValue(this.product.smallIcon)
        }
        if (this.product.icon) {
          let icon = this.encryption.encryptData(this.product.icon)
          this.formGroup.controls['icon'].setValue(this.product.icon)
        }
        if (this.product.coverIcon) {
          let cover = this.encryption.encryptData(this.product.coverIcon)
          this.formGroup.controls['coverIcon'].setValue(this.product.coverIcon)
        }
        this.product.coverages = this.product.coverages || []
        this.product.addOns = this.product.addOns || []
        this.product.application_page = []
        this.product.application_ui = []
        this.product.quotation_ui = []
        this.product.quotation_page = []
        this.leadSources = this.product.validityPeriod || []
        if (this.product.coverages && this.product.coverages.length > 0) {
          this.coverage = {
            isSum: this.product.coverages[0].sumInsured,
            isUnit: this.product.coverages[0].unit,
            isPremium: this.product.coverages[0].premium,
          }
        }
        if (this.product.addOns && this.product.addOns.length > 0) {
          this.addOn = {
            isSum: this.product.addOns[0].sumInsured,
            isUnit: this.product.addOns[0].unit,
            isPremium: this.product.addOns[0].premium,
          }
        }
        if (IsJsonString(this.product.config) && this.product.config) {
          let temp = JSON.parse(this.product.config)
          this.product = {
            ...this.product,
            application_page: temp.application || [],
            quotation_page: temp.quotation || [],
            application_view: temp.application_view || 'ui1',
            quotation_view: temp.quotation_view || 'ui1',
            quotation_input: temp.quotation_input || {},
            application_input: temp.application_input || {}
          }
          if (IsJsonString(this.product.pdfConfig) && this.product.pdfConfig) {

            this.printConfig = JSON.parse(this.product.pdfConfig)

          } else {
            this.printConfig = {
              default: [],
              prinitUI: [],
              printFormat: []
            }
          }
          this.product.productUIs.forEach(x => {
            if (x.type == 'application') {
              this.product.application_ui.push(x)
            } else if (x.type == 'quotation') {
              this.product.quotation_ui.push(x)
            }
          })
        }
        this.cdRef.detectChanges();

      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  createOrEdit(type: string, data?, id?: string) {
    const modalRef = this.modalService.open(CoverageModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.prodId = this.product.id
    modalRef.componentInstance.prodCode = this.product.code
    modalRef.componentInstance.type = type
    modalRef.componentInstance.prodName = this.product.name
    modalRef.componentInstance.id = id
    let defaultType = {
      sumInsured: this[type].isSum,
      unit: this[type].isUnit,
      premium: this[type].isPremium
    }
    modalRef.componentInstance.oldData = data || defaultType
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save' && type == 'coverage') {
          if (id) {
            let index = this.product.coverages.findIndex(x => x.id == id)
            this.product.coverages[index] = { ...res.data, id: id }
          } else {
            this.getDetail()
          }
        }
        if (res.type == 'save' && type == 'addOn') {
          if (id) {
            let index = this.product.addOns.findIndex(x => x.id == id)
            this.product.addOns[index] = { ...res.data, id: id }
          } else {
            this.getDetail()
          }
        }
        this.cdRef.detectChanges();
      }
    })
  }
  changePage(page: string) {
    if (this.activePage == page) return false
    this.activePage = page
  }

  loadForm() {
    this.application = this.product.application
    this.quotation = this.product.quotation
    this.formGroup = this.fb.group({
      productName: [this.product.name || null, Validators.compose([Validators.required, Validators.nullValidator])],
      productCode: [this.product.code || null, Validators.compose([Validators.required, Validators.nullValidator])],
      coverName: [this.product.coverName || null, Validators.compose([Validators.required, Validators.nullValidator])],
      stamDuty: [this.product.stamDuty || false, Validators.compose([Validators.required, Validators.nullValidator])],
      isAllowBackDate: [this.product.isAllowBackDate || null, Validators.compose([Validators.required, Validators.nullValidator])],
      showInList: [this.product.showInList || null, Validators.compose([Validators.required, Validators.nullValidator])],
      allowDays: [this.product.allowDays || null],
      ruleDate: [this.product.quotationDay || null, Validators.compose([Validators.required, Validators.nullValidator])],
      ruleType: [this.product.quotationRule || null, Validators.compose([Validators.required, Validators.nullValidator])],
      policyDay: [this.product.policyDay || null, Validators.compose([Validators.required, Validators.nullValidator])],
      policyRule: [this.product.policyRule || null, Validators.compose([Validators.required, Validators.nullValidator])],
      type: [this.product.type || null, Validators.compose([Validators.required, Validators.nullValidator])],
      statusCd: [this.product.statusCd || "02", Validators.compose([Validators.required, Validators.nullValidator])],
      paymentFrequency: [this.product.paymentFrequencyType ? this.product.paymentFrequencyType.split(',') : null],
      icon: [this.product.icon ? this.product.icon : null],
      smallIcon: [this.product.smallIcon ? this.product.smallIcon : null],
      coverIcon: [this.product.coverIcon ? this.product.coverIcon : null]
    });
    if (this.product.id) {
      this.lump = (this.product.paymentFrequencyType as string).includes('lump')
      this.annually = (this.product.paymentFrequencyType as string).includes('annually')
    }
    if (this.quotation) {
      this.items.push('quotation form')
    }
    if (this.application) {
      this.items.push('application form')
    }

  }

  save() {
    if (this.product.id) {
      // this.products[this.prodIndex] = { ...this.formGroup.value, id: this.product.id }
      // this.product = { ...this.formGroup.value, id: this.product.id }
      // this.activePage = 1

      let formData = this.formGroup.value
      //console.log(formData.isAllowBackDate);
      let postData = {
        id: this.product.id,
        name: formData.productName,
        code: formData.productCode,
        coverName: formData.coverName,
        type: formData.type,
        quotationDay: formData.ruleDate,
        quotationRule: formData.ruleType,
        policyDay: formData.policyDay,
        policyRule: formData.policyRule,
        paymentFrequencyType: "",
        application: this.application,
        quotation: this.quotation,
        isAllowBackDate: formData.isAllowBackDate,
        showInList: formData.showInList,
        allowDays: formData.allowDays,
        stamDuty: formData.stamDuty,
        statusCd: formData.statusCd,
        config: this.product.config,
        icon: formData.icon,
        smallIcon: formData.smallIcon,
        coverIcon: formData.coverIcon,
        pdfConfig: this.product.pdfConfig
      }
      this.itemService.updateNoID(postData).toPromise().then(res => {
        if (res) {
          this.activePage = 'Basic Coverage'
          this.product = { ...this.product, ...postData, id: this.product.id }
          this.changeOther('quotation')
          this.changeOther('application')
          this.cdRef.detectChanges();
        }
      })
    }
  }

  delete(type: string, id: number, index: number) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        const optionService = type == 'coverage' ? this.coverageService : this.addOnService
        optionService.delete(id).toPromise().then(res => {
          if (res) {
            if (type == 'coverage') {
              (this.product.coverages as []).splice(index, 1)
            }
            else {
              (this.product.addOns as []).splice(index, 1)
            }
            this.cdRef.detectChanges();
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {

            });
          }
        });
      }
    });
  }
  encryptData(attid) {
    return this.encryption.encryptData(attid)
  }

  changePayment(type: string) {
    let value = this[type]
    let data: any[] = this.formGroup.value['paymentFrequency'] || []
    if (value) {
      data.push(type)
    } else {
      let index = data.findIndex(x => x == type)
      data.splice(index, 1)
    }
    this.formGroup.controls['paymentFrequency'].setValue(data);
  }

  changeOther(type: string) {
    // return false
    let value = this[type]
    let data: any[] = this.items
    this.product['is' + type] = this[type]
    if (value) {
      let index = data.findIndex(x => x == type + " form")
      if (index < 0)
        data.push(type + " form")
    } else {
      let index = data.findIndex(x => x == type + " form")
      if (index >= 0)
        data.splice(index, 1)
    }
  }

  importForm(type: string) {
    let refData = this.product[type + "_ui"] || []
    const modalRef = this.modalService.open(PageUIModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.selected = refData.map((x: any) => x.dynamicProduct)

    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          if (type) {
            this.reChangeUI(type, res.data)
          }
          this.cdRef.detectChanges();
        }
      }
    })
  }

  importStatic(type: string) {
    let oldData = JSON.parse(JSON.stringify(this.product[type + "_page"]))
    const modalRef = this.modalService.open(StaticUIModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.selected = oldData.filter((x: any) => x.type == PageUIType.STATIC)
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          if (type) {
            this.reChangeStaticPage(type, res.data)
          }
          this.cdRef.detectChanges();
        }
      }
    })

  }

  goQuo() {
    if (this.items.length < 4) return
    this.activePage = this.items[3]
  }

  reChangeStaticPage(type: string, data: any[]) {
    this.product[type + "_page"] = this.product[type + "_page"].filter(x => x.type == PageUIType.DYN)
    this.product[type + "_page"].push(...data)
    if (type == 'application') {
      this.printConfig.default = this.printConfig.default ? this.printConfig.default.filter(x => x.type == PageUIType.DYN) : []
      this.printConfig.default.push(...data)
    }
    this.cdRef.detectChanges()
    this.reSaveUpdatePageOrder()
  }

  async reChangeUI(type: string, data: any[]) {
    this.alertService.activate('Are you sure want to change UI?', 'Warning Message').then(async result => {
      if (result) {
        await this.prodDel.deleteMany("type=" + type + "&productId=" + this.product.id).toPromise()
        let success = []
        for (let index = 0; index < data.length; index++) {
          try {
            const postData = {
              "productId": this.product.id,
              "type": type,
              "dyProductID": data[index].dyProductID
            }
            let res = await this.productUI.save(postData).toPromise();
            if (res)
              success.push({ id: res, ...postData, dynamicProduct: data[index] })
          } catch (error) {

          }

        }
        //console.log(success,type);

        this.product[type + "_ui"] = success
        this.product[type + "_input"] = {}
        this.pageReorder(type);
        this.alertService.activate('This record was changed', 'Success Message').then(result => {

        });
      }
    });


  }

  configInputDetail(type: string, page) {
    let parent = this.product[type + "_ui"].find(x => x.dynamicProduct.pageName == page.parent)
    if (parent) {
      parent = parent.dynamicProduct
      let configInput = this.findPageValue(JSON.parse(parent.config), page.id)

      let tempInput = this.reMapConfig(configInput, this.product[type + '_input'][page.id] || {})
      const modalRef = this.modalService.open(InputConfigModalComponent, { backdrop: false });
      modalRef.componentInstance.inputData = tempInput
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == 'save') {
            if (type) {
              // console.log(res);
              this.product[type + '_input'][page.id] = res.data
              this.reSaveUpdatePageOrder()
            }
            this.cdRef.detectChanges();
          }
        }
      })
    }
  }

  reMapConfig(configInput: ConfigInput[], oldObj: any) {
    let obj = JSON.parse(JSON.stringify(oldObj))
    let temp = {}
    configInput.forEach(x => {
      if (x.input != "underline" && x.input != "label")
        temp[x.name] = obj[x.name] >= 0 ? obj[x.name] : x.show ? 1 : 0
      else if (x.input == "label")
        temp[x.placeholder] = obj[x.placeholder] >= 0 ? obj[x.placeholder] : x.show ? 1 : 0
    })
    return temp
  }

  findPageValue(parent: any, value: string) {
    let data: FromGroupData
    data = parent.fromGroup.find(x => x.id == value);
    if (data)
      return data.controls
    return []
  }

  reSaveUpdatePageOrder() {
    let postData = {
      id: this.product.id,
      name: this.product.name,
      code: this.product.code,
      coverName: this.product.coverName,
      quotationDay: this.product.quotationDay,
      quotationRule: this.product.quotationRule,
      policyDay: this.product.policyDay,
      policyRule: this.product.policyRule,
      paymentFrequencyType: this.product.paymentFrequencyType,
      application: this.application,
      quotation: this.quotation,
      isAllowBackDate: this.product.isAllowBackDate,
      showInList: this.product.showInList,
      allowDays: this.product.allowDays,
      stamDuty: this.product.stamDuty,
      statusCd: this.product.statusCd,
      type: this.product.type,
      icon: this.product.icon,
      smallIcon: this.product.smallIcon,
      coverIcon: this.product.coverIcon,
      config: JSON.stringify({ application: this.product.application_page, application_view: this.product.application_view, quotation: this.product.quotation_page, quotation_view: this.product.quotation_view, application_input: this.product.application_input, quotation_input: this.product.quotation_input }),
      pdfConfig: JSON.stringify(this.printConfig)
    }

    this.itemService.updateNoID(postData).toPromise().then(res => {
      if (res) {
        this.product.config = postData.config
        this.product.pdfConfig = postData.pdfConfig
      }
    })
  }

  pageReorder(type: string) {
    let pagesList: PageUI[] = []
    if (type == 'application') {
      this.printConfig.default = this.printConfig.default ? this.printConfig.default.filter(x => x.type == PageUIType.STATIC) : []
    }
    for (const element of this.product[type + "_ui"]) {
      //console.log(element,IsJsonString(element.dynamicProduct.config));
      if (IsJsonString(element.dynamicProduct.config)) {
        let tempConfig = JSON.parse(element.dynamicProduct.config) as ConfigPage
        for (const page of tempConfig.fromGroup) {
          pagesList.push({ pageTitle: page.pageTitle, pageIcon: page.pageIcon, tableName: page.tableName, id: page.id, pageType: page.pageType, parent: tempConfig.pageName, type: PageUIType.DYN })
          if (type == 'application') {
            this.printConfig.default.push({ ...page, parent: tempConfig.pageName, type: PageUIType.DYN })
          }
        }
      }
    }
    // pagesList.push({ pageTitle: 'Basic Coverage', tableName: "coverage", id: "coverage", pageType: "form", pageIcon: "fa-clipboard-check", parent: "" })
    // pagesList.push({ pageTitle: 'Addon', tableName: "addon", id: "addon", pageType: "form", pageIcon: "fa-briefcase", parent: "" })
    // this.product[type+"_ui"].forEach((element: FormUI) => {

    // });
    this.product[type + "_page"] = this.product[type + "_page"].filter(x => x.type == PageUIType.STATIC)
    this.product[type + "_page"].push(...pagesList)

    //console.log(pagesList,type);

    this.cdRef.detectChanges()
    this.reSaveUpdatePageOrder()
  }

  sortUi(type: string) {
    let refData = []
    if (type == "print-config") {
      refData = this.printConfig.prinitUI
    } else {
      refData = this.product[type + "_page"]
    }
    // let refData = this.product[type + "_page"]
    const modalRef = this.modalService.open(SortConfigModalComponent, { size: 'lg' });
    modalRef.componentInstance.showData = refData
    modalRef.componentInstance.type = 'page'
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          if (type) {
            if (type == "print-config") {
              this.printConfig.prinitUI = res.data
              this.reSaveUpdatePageOrder()
            } else {
              this.product[type + "_page"] = res.data
              this.reSaveUpdatePageOrder()
            }
          }
          this.cdRef.detectChanges();
        }
      }
    })
  }

  selectUI(type: string) {
    const modalRef = this.modalService.open(ViewUIModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.selectedUI = this.product[type + "_view"]
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.product[type + "_view"] = res.data
          this.reSaveUpdatePageOrder()
          this.cdRef.detectChanges();
        }
      }
    })
  }
  changePageType(item, index) {
    this.printConfig.prinitUI[index].pageType = item.pageType == 'form' ? 'table' : "form"
  }

  changeOption(data, type) {
    this[type] = data;
    if (type == 'coverage') {
      this.product.coverages = this.product.coverages.map((x) => {
        x = { ...x, premium: data.isPremium, sumInsured: data.isSum, unit: data.isUnit }
        return x
      })
      this.product.coverages.forEach(async (x) => {
        x = { ...x, premium: data.isPremium, sumInsured: data.isSum, unit: data.isUnit }
        await this.coverageService.updateNoID(x).toPromise()
      })
    } else {
      this.product.addOns = this.product.addOns.map((x) => {
        x = { ...x, premium: data.isPremium, sumInsured: data.isSum, unit: data.isUnit }
        return x
      })
      this.product.addOns.forEach(async (x) => {
        x = { ...x, premium: data.isPremium, sumInsured: data.isSum, unit: data.isUnit }
        await this.addOnService.updateNoID(x).toPromise()
      })
    }
    this.cdRef.detectChanges();
  }

  // helpers for View
  isControlValid(controlName: string, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.dirty || control.touched;
  }

  importPrintForm() {
    let oldData = JSON.parse(JSON.stringify(this.printConfig.prinitUI || []))
    const modalRef = this.modalService.open(PrintFormsModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.selected = oldData
    modalRef.componentInstance.listData = JSON.parse(JSON.stringify(this.printConfig.default || []))
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.printConfig.prinitUI = JSON.parse(JSON.stringify(res.data || []))
          this.reSaveUpdatePageOrder()
          this.cdRef.detectChanges();
        }
      }
    })
  }

  configPrint(printForm: FromGroupData, type: string) {
    let oldData: PrintFormat = {}
    let oldIndex: number = -1
    if (this.printConfig.printFormat) {
      oldIndex = this.printConfig.printFormat.findIndex(x => x.id == printForm.id)
      oldData = this.printConfig.printFormat[oldIndex] || {}
    }
    let newFromData = this.printConfig.default.find(x => x.id == printForm.id)

    if (newFromData) {
      printForm = JSON.parse(JSON.stringify(newFromData))
    }

    const modalRef = this.modalService.open(PrintConfigModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.configData = oldData
    modalRef.componentInstance.listData = [...printForm.controls, ...this.defaultCol]
    modalRef.componentInstance.defaultObj = JSON.parse(JSON.stringify(printForm))
    modalRef.componentInstance.defaultObj.pageType = type
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          if (oldData.id) {
            this.printConfig.printFormat[oldIndex] = JSON.parse(JSON.stringify(res.data))
          } else {
            if (this.printConfig.printFormat) {
              this.printConfig.printFormat.push(JSON.parse(JSON.stringify(res.data)))
            } else {
              this.printConfig.printFormat = [JSON.parse(JSON.stringify(res.data))]
            }
          }
          // this.printConfig.prinitUI = JSON.parse(JSON.stringify(res.data || []))
          this.reSaveUpdatePageOrder()
          // this.cdRef.detectChanges();
        }
      }
    })
  }

  viewPrint() {
    const modalRef = this.modalService.open(PrintPreviewModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.configData = this.printConfig.printFormat
    modalRef.componentInstance.configOrder = this.printConfig.prinitUI
    modalRef.componentInstance.product = this.product
    modalRef.result.then(() => { }, (res) => {

    })
  }

  openFile(type: string) {
    if (type == "cover")
      this.selectedFileEl3.nativeElement.click()
    else if (type == "small")
      this.selectedFileEl2.nativeElement.click()
    else
      this.selectedFileEl1.nativeElement.click()
  }

  handleUpload(event, type: string) {
    if (event) {
      const file = event.target.files[0];
      // console.log(file);
      const reader = getFileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader);
        if (reader.result) {
          let base64 = reader.result.toString().split(",")[1];
          let data = {
            fileStr: base64,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            contentType: file.type,
            fileExtension: file.name.split('.').pop(),
          }
          this.loading.activate()
          this.fileUpload.save(data).toPromise().then((res) => {
            if (res) {
              if (type == "cover") {
                let cover = this.encryption.encryptData(res)
                this.formGroup.controls['coverIcon'].setValue(cover)
              } else if (type == "small") {
                let small = this.encryption.encryptData(res)
                this.formGroup.controls['smallIcon'].setValue(small)
              } else {
                let icon = this.encryption.encryptData(res)
                this.formGroup.controls['icon'].setValue(icon)
              }
            }
            this.cdRef.detectChanges()
            this.loading.deactivate()
          }).catch(e => {
            this.loading.deactivate()
          })
        };
      }
    }
  }

  createOrEditLead(index?: number, lead?: any) {

    const modalRef = this.modalService.open(EditSourceModalComponent, { size: 'sm', backdrop: false });
    modalRef.componentInstance.oldData = lead || {}
    modalRef.componentInstance.configOrder = this.printConfig.prinitUI
    modalRef.componentInstance.product = this.product
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          let postData = {
            ...res.data,
            productId: this.product.id
          }
          if (lead) {
            this.validityPeriodService.updateNoID({ ...postData, id: lead.id }).toPromise().then(res => {
              if (res) {
                this.leadSources[index] = { ...lead, ...postData }
                this.cdRef.detectChanges()
              }

            })
          } else {
            this.validityPeriodService.save(postData).toPromise().then(res => {
              if (res) {
                this.leadSources.push({ ...postData, id: res })
                this.cdRef.detectChanges()
              }
            })

          }
        }
      }
    })
  }

  deleteLead(id: number, index: number) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.validityPeriodService.delete(id).toPromise().then(res => {
          if (res) {
            (this.leadSources as []).splice(index, 1)
            this.cdRef.detectChanges()
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {

            });
          }
        });
      }
    });
  }

}
