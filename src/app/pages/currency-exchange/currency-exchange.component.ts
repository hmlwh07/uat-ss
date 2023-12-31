import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MY_FORMATS } from 'src/app/core/is-json';
import { defaultAccessObj, MenuDataService } from 'src/app/core/menu-data.service';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CurrencyAddFormComponent } from './add-form/currency-add-form.component';
import { CurrencyExchange, CurrencyExchangeService } from './currency-exchange.service';
import { CurrencyCol, CurrencyDisplayCol } from './currency.const';
import { Location } from "@angular/common";
@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CurrencyExChangeComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  currencyList: CurrencyExchange[] = []
  ELEMENT_COL = JSON.parse(JSON.stringify(CurrencyCol))
  displayedColumns = JSON.parse(JSON.stringify(CurrencyDisplayCol))
  exchangeForm: FormGroup
  exchangeRateAccess = defaultAccessObj
  isViewUser: boolean = true
  constructor(
    private currencyService: CurrencyExchangeService,
    private cdf: ChangeDetectorRef,
    private modalCrl: NgbModal,
    private alertService: AlertService,
    private location: Location,
    private menuService: MenuDataService
  ) { }

  ngOnInit() {
    this.loadForm()
    this.checkPermission()
  }

  checkPermission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        
        this.exchangeRateAccess = res['exchange_rate']
        // console.log(res, this.exchangeRateAccess );
        // console.log(this.displayedColumns)
        if (this.exchangeRateAccess.create) {
          this.isViewUser = true
        } else {
          this.isViewUser = false
        }
        if (this.exchangeRateAccess.delete) {
          this.ELEMENT_COL[3].btn.delete = true
        } else {
          this.ELEMENT_COL[3].btn.delete = false
        }
        if (this.exchangeRateAccess.edit) {
          this.ELEMENT_COL[3].btn.edit = true
        } else {
          this.ELEMENT_COL[3].btn.edit = false
        }
        if (!this.exchangeRateAccess.delete && !this.exchangeRateAccess.edit) {
          this.displayedColumns.pop()
        }
        this.cdf.detectChanges()
      }
    })
  }

  ngAfterViewInit() {
    this.getData()
  }
  loadForm() {
    this.exchangeForm = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      currency: new FormControl('usd'),
    })
  }
  cancel() {
    this.exchangeForm.reset();
    this.getData();
  }
  getData() {
    // console.log(this.matTable);

    // this.currencyService.findAll().toPromise().then((res: any) => {
    //   if (res) {
    //     this.currencyList = res
    //     this.cdf.detectChanges()
    //     this.matTable.reChangeData()
    //   }
    // })
    this.currencyService.getList(this.exchangeForm.value).toPromise().then((res: any) => {
      if (res) {
        this.currencyList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      }
    })

  }
  addData() {
    const modalRef = this.modalCrl.open(CurrencyAddFormComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.isModal = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.cmd == 'save') {
          this.saveData(res.data)
        }
      }
    })
  }

  saveData(event: any) {
    let postData = event
    // console.log(postData);
    this.currencyService.save(postData).toPromise().then((res: any) => {
      if (res) {
        this.getData()
        this.alertService.activate('This record was created', 'Success Message');
      }
    })
  }

  updateData(postData: any) {
    // console.log('UPDATE', postData);
    this.currencyService.update(postData.id, postData).toPromise().then((res: any) => {
      if (res) {
        this.getData()
        this.alertService.activate('This record was updated', 'Success Message');
      }
    })
  }

  editData(data) {
    const modalRef = this.modalCrl.open(CurrencyAddFormComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.oldData = data
    modalRef.componentInstance.id = data.id
    modalRef.componentInstance.isModal = true
    modalRef.componentInstance.isEdit = true
    modalRef.result.then(() => { }, (res) => {

      if (res) {
        if (res.cmd == 'save') {
          this.updateData(res.data)
        }
      }
    })
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.editData(event.data)
    }
    else if (event.cmd == 'delete') {
      this.deleleData(event.data.id)
    }
  }

  deleleData(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.currencyService.delete(id).toPromise().then((res) => {
          if (res) {
            let index = this.currencyList.findIndex(x => x.id == id)
            if (index >= 0) {
              this.currencyList.splice(index, 1)
              this.matTable.reChangeData()
              this.alertService.activate('This record was deleted', 'Success Message').then(result => {

              });
            }
          }
        })
      }
    });
  }
}
