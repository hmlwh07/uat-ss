import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../_metronic/core/services/products.service';
import { ButtonBoxComponent } from '../form-component/button-box/button-box.component';
import { DynamicFormComponent } from '../form-component/dynamic-form.component';
import { EditButtonModalComponent } from '../form-component/edit-button-modal/edit-button-modal.component';
import { EditInputModalComponent } from '../form-component/edit-input-modal/edit-input-modal.component';
import { ActionType, BtnColor, BtnConfig, BtnPostion, ConfigInput, ConfigPage, InputBoxType, InputType } from '../form-component/field.interface';
import { ExportConfigModalComponent } from '../form-component/export-config-modal/export-config-modal.component';
import { PageConfigModalComponent } from '../form-component/page-config-modal/page-config-modal.component';
import { ImportConfigModalComponent } from '../form-component/import-config-modal/import-config-modal.component';
import { SortConfigModalComponent } from '../form-component/sort-config-modal/sort-config-modal.component';
import { FormUI } from '../dashboard/models/form-ui.dto';
import { FormUIService } from '../dashboard/services/form-ui.service';
import { IsJsonString } from '../../core/is-json';
import { v4 } from 'uuid';
import { LabelConfigModalComponent } from '../form-component/label-config-modal/label-config-modal.component';
import { TableAPIService } from './table.service';
import { ColAPIService } from './col.service';
import { EditModalComponent } from '../dashboard/edit-modal/edit-modal.component';

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.scss']
})
export class PageConfigComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynForm: DynamicFormComponent
  @ViewChild(ButtonBoxComponent) btnBox: ButtonBoxComponent;
  item: FormUI
  defaultBtnStyle: BtnConfig = {
    label: "",
    type: ActionType.RESET,
    size: null,
    position: BtnPostion.CENTER,
    color: BtnColor.SECONDARY,
    fill: true
  }
  defaultInputStype: ConfigInput = {
    input: "",
    name: "",
    coreName: "",
    isLabel: true,
    label: "",
    size: 12,
    mdSize: 12,
    lgSize: 12,
    inlineStyle: false,
    show: true,
    readonly: false,
    disabled: false,
    break: 'false'
  }
  configPage: ConfigPage = {
    totalPage: 1,
    pageName: "",
    fromGroup: [
      {
        pageTitle: "",
        id: v4(),
        pageIcon: "",
        pageType: "form",
        tableName: "",
        controls: [],
        buttons: [
          {
            label: "Reset",
            type: ActionType.RESET,
            size: 3,
            position: BtnPostion.CENTER,
            color: BtnColor.SECONDARY,
            fill: true
          },
          {
            label: "Save",
            type: ActionType.SUBMIT,
            size: 3,
            position: BtnPostion.RIGHT,
            color: BtnColor.PRIMARY,
            fill: true
          }
        ]
      }
    ]
  }
  formObjs: any[] = []
  exportedPage: any = []
  activePage: number = 1
  private unsubscribe: Subscription[] = []
  constructor(
    private itemService: FormUIService,
    private tableService: TableAPIService,
    private colService: ColAPIService,
    private router: Router,
    private location: Location,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef,
  ) {

  }

  ngOnDestroy() {
    if (this.item)
      this.item['totalPage'] = this.configPage.totalPage
    // this.saveForm(true)
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  ngOnInit() {
    if (!this.itemService.selectedForm || !this.itemService.selectedForm.dyProductID) {
      this.location.back()
    } else {
      this.item = this.itemService.selectedForm

      let config = IsJsonString(this.item.config) ? JSON.parse(this.item.config) : {}
      this.configPage = config.pageName ? config : this.configPage
      this.editPage()
    }
  }

  clickBtn(index: any) {
    this.openModal(index)
  }

  edit() {
    const modalRef = this.modalService.open(EditModalComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.oldData = this.item
    modalRef.componentInstance.id = this.item.dyProductID
    modalRef.componentInstance.name = JSON.parse(JSON.stringify(this.item)).pageName
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'edit') {
          this.item = res.data
          this.cdRef.detectChanges()
        }
      }
    })
  }

  openModal(id?: number) {
    const modalRef = this.modalService.open(EditButtonModalComponent, { size: 'xl' });
    const pageIndex = this.activePage - 1
    modalRef.componentInstance.config = id ? this.configPage.fromGroup[pageIndex].buttons[id] : this.defaultBtnStyle;
    // let thisObj = this
    modalRef.componentInstance.id = id + 1
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res && res.type == 'save') {
          if (id >= 0) {
            this.configPage.fromGroup[pageIndex].buttons[id] = res.data

          } else {
            this.configPage.fromGroup[pageIndex].buttons.push(res.data)
          }
        } else if (res.type == 'delete') {
          this.configPage.fromGroup[pageIndex].buttons.splice(id, 1)
        }
        this.cdRef.detectChanges();
      }
    });
  }

  openModalInput(type: string, id?: number,) {
    const modalRef = this.modalService.open(EditInputModalComponent, { size: 'xl' });
    const pageIndex = this.activePage - 1
    modalRef.componentInstance.config = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id] : JSON.parse(JSON.stringify(this.defaultInputStype));
    let oldCol: string;
    let oldParty: boolean;
    if (id >= 0) {
      oldCol = this.configPage.fromGroup[pageIndex].controls[id].name
      oldParty = this.configPage.fromGroup[pageIndex].controls[id].party
    }
    // =  ? this.configPage.fromGroup[pageIndex].controls[id].name : ""
    // let thisObj = this
    modalRef.componentInstance.id = id >= 0 ? id + 1 : null
    modalRef.componentInstance.input = type
    modalRef.componentInstance.isTable = this.configPage.fromGroup[pageIndex].pageType == "table"
    modalRef.componentInstance.isParty = this.configPage.fromGroup[pageIndex].party || false
    modalRef.result.then(() => { }, async (res) => {
      if (res) {
        if (res.data && res.type == 'save') {
          if (id >= 0) {
            try {
              if (oldParty != res.data.party) {
                let response = await this.updateCol(this.configPage.fromGroup[pageIndex].tableName, res.data)
              }
              //   if (response) {
              //     this.configPage.fromGroup[pageIndex].controls[id] = { ...this.configPage.fromGroup[pageIndex].controls[id], ...res.data }
              //     this.saveForm(true)
              //   }
              // }
              // else {
              this.configPage.fromGroup[pageIndex].controls[id] = { ...this.configPage.fromGroup[pageIndex].controls[id], ...res.data }
              this.saveForm(true)
              // }
            } catch (error) {

            }

          } else {
            // if (type != 'label')
            try {
              let response = await this.createCol(this.configPage.fromGroup[pageIndex].tableName, { input: type, ...res.data })
              if (response) {
                this.configPage.fromGroup[pageIndex].controls.push({ input: type, ...res.data })
                this.saveForm(true)
              }
            } catch (error) {

            }
          }
        } else if (res.type == 'delete') {
          this.configPage.fromGroup[pageIndex].controls.splice(id, 1)
        }
        this.dynForm.reCreateFrom()
        this.cdRef.detectChanges();
      }
    });
  }

  async createCol(tableName: string, control: ConfigInput) {
    //control.input == 'input' && control.type == 'number' ? 'integer' : 
    let postData = {
      tableName: tableName,
      cols: [
        {
          operation: "create",
          name: control.name,
          type: 'String',
          party: control.party || false
        }
      ]
    }
    if (control.input == 'date' && control.type == 'policy') {
      postData.cols.push({
        operation: "create",
        name: control.endName,
        type: 'String',
        party: control.party || false
      })
    }
    return await this.colService.save(postData).toPromise()

  }
  async updateCol(tableName: string, control: ConfigInput,) {
    //control.input == 'input' && control.type == 'number' ? 'integer' :
    console.log(typeof control.party);
    
    let postData = {
      tableName: tableName,
      cols: [
        {
          operation: "create",
          name: control.name,
          type: 'String',
          party: control.party || false
        }
      ]
    }
    if (control.input == 'date' && control.type == 'policy') {
      postData.cols.push({
        operation: "create",
        name: control.endName,
        type: 'String',
        party: control.party || false
      })
    }
    return await this.colService.save(postData).toPromise()
  }

  openModalLabel(id?: number) {
    const pageIndex = this.activePage - 1
    const modalRef = this.modalService.open(LabelConfigModalComponent, { size: 'xl' });
    modalRef.componentInstance.name = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].name : ''
    modalRef.componentInstance.label = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].label : ''
    modalRef.componentInstance.coreName = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].coreName : ''
    modalRef.componentInstance.endLabel = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].endLabel : ''
    modalRef.componentInstance.endLabelMM = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].endLabelMM : ''
    modalRef.componentInstance.labelSize = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].labelSize : ''
    modalRef.componentInstance.multi = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].multi : ''
    modalRef.componentInstance.readonly = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].readonly : ''
    modalRef.componentInstance.disabled = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].disabled : ''
    modalRef.componentInstance.id = id >= 0 ? id + 1 : null
    modalRef.componentInstance.inlineStyle = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].inlineStyle : ''
    modalRef.componentInstance.placeholder = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].placeholder : ''
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.data && res.type == 'save') {
          if (id >= 0) {
            this.configPage.fromGroup[pageIndex].controls[id] = { input: 'label', ...res.data, break: true, size: 12, mdSize: 12, lgSize: 12, show: true }
          } else {
            this.configPage.fromGroup[pageIndex].controls.push({ input: 'label', ...res.data, break: true, size: 12, mdSize: 12, lgSize: 12, show: true })
            this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls)
          }
        } else if (res.type == 'delete') {
          this.configPage.fromGroup[pageIndex].controls.splice(id, 1)
          this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls)
        }
        this.saveForm(true)
        this.cdRef.detectChanges();
      }
    })
  }

  saveForm(destory?: boolean) {
    this.configPage.pageName = this.itemService.selectedForm.pageName
    let simpleText = this.configPage.fromGroup.map(e => e.pageTitle).join(", ");

    let postData: FormUI = {
      ...this.item,
      simpleTest: simpleText,
      config: JSON.stringify(this.configPage)
    }
    this.itemService.updateNoID(postData).toPromise().then((res) => {
      if (res && !destory) {
        this.location.back()
      }
    })
    // const id = this.formObjs.findIndex(x => x.formId == this.item.id)
    // if (id < 0) {
    //   this.formObjs.push({ ...this.configPage, formId: this.item.id })
    // } else {
    //   this.formObjs[id] = { ...this.configPage, formId: this.item.id }
    // }
  }

  getNewPage() {
    this.configPage.totalPage += 1
    const myId: string = v4();
    this.configPage.fromGroup.push({
      id: myId,
      pageTitle: "",
      pageIcon: "",
      tableName: "",
      pageType: "form",
      controls: [],
      buttons: [],
    })
    this.activePage += 1
    this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls)
    this.cdRef.detectChanges();
    this.editPage()
  }

  removePage() {
    this.activePage -= 1
    this.configPage.totalPage -= 1
    this.configPage.fromGroup.splice(this.activePage, 1)
    this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls)
    this.cdRef.detectChanges();
  }

  backPage() {

    if (this.activePage > 1) {
      this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 2].controls)
      this.activePage -= 1
      this.cdRef.detectChanges();
    }

  }

  nextPage() {
    if (this.configPage.fromGroup.length > this.activePage) {
      this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage].controls)
      this.activePage += 1
      this.cdRef.detectChanges();
    }
  }

  editPage() {
    const pageIndex = this.activePage - 1
    const modalRef = this.modalService.open(PageConfigModalComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.title = this.configPage.fromGroup[pageIndex].pageTitle
    modalRef.componentInstance.icon = this.configPage.fromGroup[pageIndex].pageIcon
    modalRef.componentInstance.type = this.configPage.fromGroup[pageIndex].pageType
    modalRef.componentInstance.tableName = this.configPage.fromGroup[pageIndex].tableName
    modalRef.componentInstance.function = this.configPage.fromGroup[pageIndex].function
    modalRef.componentInstance.party = this.configPage.fromGroup[pageIndex].party
    modalRef.componentInstance.unitCode = this.configPage.fromGroup[pageIndex].unitCode
    
    const editAble = this.configPage.fromGroup[pageIndex].tableName ? true : false
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          if (editAble) {
            this.editTable({ tableName: res.data.tableName, oldTableName: this.configPage.fromGroup[pageIndex].tableName }, res, pageIndex)
          } else {
            this.createTable(res.data.tableName, res, pageIndex)
          }

        }
      }

    })
  }

  createTable(tableName, res, pageIndex) {
    const postData = { tableName }
    this.tableService.save(postData).toPromise().then((response) => {
      if (res) {
        this.configPage.fromGroup[pageIndex].pageTitle = res.data.title
        this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon
        this.configPage.fromGroup[pageIndex].pageType = res.data.type
        this.configPage.fromGroup[pageIndex].tableName = res.data.tableName
        this.configPage.fromGroup[pageIndex].function = res.data.function
        this.configPage.fromGroup[pageIndex].party = res.data.party
        this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode
        this.cdRef.detectChanges();
      }
    })
  }

  editTable(data: any, res, pageIndex) {
    if (data.oldTableName == data.tableName) {
      this.configPage.fromGroup[pageIndex].pageTitle = res.data.title
      this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon
      this.configPage.fromGroup[pageIndex].pageType = res.data.type
      this.configPage.fromGroup[pageIndex].tableName = res.data.tableName
      this.configPage.fromGroup[pageIndex].function = res.data.function
      this.configPage.fromGroup[pageIndex].party = res.data.party
      this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode
      this.cdRef.detectChanges();
    } else {
      this.tableService.updateNoID(data).toPromise().then((response) => {
        if (res) {
          this.configPage.fromGroup[pageIndex].pageTitle = res.data.title
          this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon
          this.configPage.fromGroup[pageIndex].pageType = res.data.type
          this.configPage.fromGroup[pageIndex].tableName = res.data.tableName
          this.configPage.fromGroup[pageIndex].function = res.data.function
          this.configPage.fromGroup[pageIndex].party = res.data.party
          this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode
          this.cdRef.detectChanges();
        }
      })
    }

  }


  editInput(event) {
    if (event >= 0) {
      const pageIndex = this.activePage - 1
      let type = this.configPage.fromGroup[pageIndex].controls[event].input
      if (type == 'label') {
        this.openModalLabel(event)
      } else if (type == 'underline') {
        this.configPage.fromGroup[pageIndex].controls.splice(event, 1)
        this.cdRef.detectChanges();
        this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls)
      } else {
        this.openModalInput(type, event)
      }
    }
  }

  addNewLine() {
    const pageIndex = this.activePage - 1
    this.configPage.fromGroup[pageIndex].controls.push({ input: 'underline', })
    this.cdRef.detectChanges();
    this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls)
  }

  moveNext() {
    let index = this.activePage
    let arr = this.moveArrayItemToNewIndex(this.configPage.fromGroup, index - 1, index)
    this.nextPage()
    // this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage-1].controls)
    // this.cdRef.detectChanges();
  }

  moveBack() {
    let arr = this.moveArrayItemToNewIndex(this.configPage.fromGroup, this.activePage - 1, this.activePage - 2)
    this.backPage()
    // this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage-1].controls)
    // this.cdRef.detectChanges();
  }

  moveArrayItemToNewIndex(arr, old_index, new_index) {

    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  exportPage() {
    const pageIndex = this.activePage - 1
    const modalRef = this.modalService.open(ExportConfigModalComponent, { size: 'md' });
    modalRef.componentInstance.config = this.configPage.fromGroup[pageIndex]

    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.exportPageAPI(res.data)
        }
      }
    })
  }

  exportPageAPI(res) {
    let postData = {
      pageName: res.label,
      config: JSON.stringify(res),
      simpleTest: res.simple,
      type: "Page",
    }
    this.itemService.save(postData).toPromise().then(res => {
      if (res) {

      }
    })
  }

  importPage() {
    const pageIndex = this.activePage - 1
    const modalRef = this.modalService.open(ImportConfigModalComponent, { size: 'lg' });
    modalRef.componentInstance.showData = this.exportedPage
    modalRef.result.then(() => { }, async (res) => {
      if (res) {
        if (res.type == 'save') {
          if (res.data) {
            if (IsJsonString(res.data.config)) {
              let groupData = JSON.parse(res.data.config)
              for (let index = 0; index < groupData.controls.length; index++) {
                let element: ConfigInput = groupData.controls[index];
                // console.log(element);

                try {
                  if (element.input == "label" || element.input == "underline") {
                    this.configPage.fromGroup[pageIndex].controls.push(element)
                  } else {
                    let res = await this.createCol(this.configPage.fromGroup[pageIndex].tableName, element)
                    if (res) {
                      this.configPage.fromGroup[pageIndex].controls.push(element)
                    }
                  }
                } catch (error) {
                  console.log(error);

                }
              }
              // Array.prototype.push.apply(this.configPage.fromGroup[pageIndex].controls, groupData.controls)
              Array.prototype.push.apply(this.configPage.fromGroup[pageIndex].buttons, groupData.buttons)
              this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls)
              // this.configPage.fromGroup[pageIndex].pageTitle = groupData.title
              // this.configPage.fromGroup[pageIndex].pageIcon = groupData.icon
              this.cdRef.detectChanges();
            }

          }
          this.exportedPage = res.listData
        }
      }
    })
  }

  sortConfig() {
    const pageIndex = this.activePage - 1
    const modalRef = this.modalService.open(SortConfigModalComponent, { size: 'lg' });
    modalRef.componentInstance.showData = this.configPage.fromGroup[pageIndex].controls
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.configPage.fromGroup[pageIndex].controls = []
          this.configPage.fromGroup[pageIndex].controls = res.data
          this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls)
          this.cdRef.detectChanges();
        }
      }
    })
  }

  reOrder() {
    const modalRef = this.modalService.open(SortConfigModalComponent, { size: 'lg' });
    modalRef.componentInstance.showData = this.configPage.fromGroup
    modalRef.componentInstance.type = 'page'
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.configPage.fromGroup = []
          this.configPage.fromGroup = res.data
          this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls)
          this.cdRef.detectChanges();
        }
      }
    })
  }

}
