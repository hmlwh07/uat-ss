import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CurrencyAddFormComponent } from './add-form/currency-add-form.component';
import { CurrencyExchange, CurrencyExchangeService } from './currency-exchange.service';
import { CurrencyCol, CurrencyDisplayCol } from './currency.const';
@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExChangeComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  currencyList: CurrencyExchange[] = []
  ELEMENT_COL = JSON.parse(JSON.stringify(CurrencyCol))
  displayedColumns = JSON.parse(JSON.stringify(CurrencyDisplayCol))
  constructor(private currencyService: CurrencyExchangeService, private cdf: ChangeDetectorRef, private modalCrl: NgbModal) {

  }

  ngOnInit() {
    this.getData()
  }
  // ngAfterViewInit(){
  //   this.getData()
  // }

  getData() {
    // console.log(this.matTable);

    this.currencyService.findAll().toPromise().then((res: any) => {
      if (res) {
        this.currencyList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      }
    })

  }

  saveData(event: any) {
    let postData = event
    // console.log(postData);
    this.currencyService.save(postData).toPromise().then((res: any) => {
      if (res) {
        this.getData()
      }
    })
  }

  updateData(postData: any) {
    this.currencyService.update(postData.id, postData).toPromise().then((res: any) => {
      if (res) {
        this.getData()
      }
    })
  }

  editData(data) {
    const modalRef = this.modalCrl.open(CurrencyAddFormComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.oldData = data
    modalRef.componentInstance.id = data.id
    modalRef.componentInstance.isModal = true
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
    this.currencyService.delete(id).toPromise().then((res) => {
      if (res) {
        let index = this.currencyList.findIndex(x => x.id == id)
        if (index >= 0) {
          this.currencyList.splice(index, 1)
          this.matTable.reChangeData()

        }
      }
    })
  }
}
