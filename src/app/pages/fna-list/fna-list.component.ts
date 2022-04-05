import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FANService } from '../fna-detail/fna-manage.service';
import { FANListService } from './fna-list-manage.service';
import { FnaTypeComponent } from './fna-type/fna-type.component';
import { FNAListCol, FNAListDisplayCol } from './fna.list.const';

@Component({
  selector: 'app-fna-list',
  templateUrl: './fna-list.component.html',
  styleUrls: ['./fna-list.component.scss']
})
export class FnaListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  ELEMENT_COL = FNAListCol;
  displayedColumns = FNAListDisplayCol;
  fnaList = [];
  user: any = {};
  indexObj: any;

  constructor(private cdf: ChangeDetectorRef, private router: Router, private fnaService: FANService,
    private fnaListService: FANListService, private authService: AuthService,
    private modalService: NgbModal, private alertService: AlertService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.getAllFNA();
  }

  async actionBtn(event) {
    this.fnaService.fnaUpdateProducts = [];
    if (event.cmd == 'edit') {
      this.indexObj = event.data;
      this.createOrEdit('edit', event.data.id)
    } else {
      this.indexObj = null;
      await this.delete(event.data.id)
    }
  }

  displayFNAType() {
    const modalRef = this.modalService.open(FnaTypeComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = 'modal'
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.fnaType == "BPM") {
          this.router.navigate(["/fna/fna-bram"], { queryParams: { passValue: JSON.stringify({ res }) } })
        }

        if (res.fnaType == "LPP") {
          this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(res) } })
        }
      }
    });
  }

  async createOrEdit(data, id?: string) {
    let passValue: any;
    if (this.indexObj) {
      passValue = {
        conductedBy: this.indexObj.conductedBy,
        createdAt: this.indexObj.createdAt,
        createdBy: this.indexObj.createdBy,
        customerId: this.indexObj.customerId,
        updatedAt: this.indexObj.updatedAt,
        fnaId: id,
        type: 'type',
        pageStatus: data
      }
    }
    if (this.indexObj.fnaType == "BRAM") {
      this.router.navigate(["/fna/fna-bram"], { queryParams: { passValue: JSON.stringify(passValue) } })
    } else {
      this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(passValue) } })
    }

  }

  async getAllFNA() {
    await this.fnaListService.findAll().toPromise().then((res: any) => {
      this.fnaList = [];
      if (res) {
        this.fnaList = res
        for (var i = 0; i < this.fnaList.length; i++) {
          this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
          this.fnaList[i].conductedBy = this.user.username;
        }
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      }
    })
  }

  async delete(id) {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(async result => {
      if (result) {
        await this.fnaListService.delete(id).toPromise().then(async (res: any) => {
          this.fnaList = this.fnaList.filter(data =>
            data.id !== id);
          this.cdf.detectChanges();
          this.matTable.reChangeData();
          this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
          });
        });
      }
    });
  }


  convertDateFormatMMDDYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  convertDateFormatDDMMYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

  isActive = false;

  toggle() {
    this.isActive = !this.isActive;
  }

}
