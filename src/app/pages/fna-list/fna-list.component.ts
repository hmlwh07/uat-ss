import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth';
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
    private fnaListService: FANListService, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.getAllFNA();
  }

  async actionBtn(event) {
    // console.log('actionBtn', event)
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
        if (res.type == "BRAM") {
          this.router.navigate(["/fna/fna-bram"], { queryParams: { passValue: JSON.stringify({ res }) } })
        }

        if (res.type == "LPP") {         
          this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(res) } })
        }
      }
    });
  }

  async createOrEdit(data, id?: string) {
    console.log('createOrEdit', this.indexObj);
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
    this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(passValue) } })
  }

  async getAllFNA() {
    await this.fnaListService.findAll().toPromise().then((res: any) => {
      console.log('getAllFNA', res);

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
    await this.fnaListService.delete(id).toPromise().then(async (res: any) => {
      this.fnaList = this.fnaList.filter(data =>
        data.id !== id);
      this.cdf.detectChanges();
      this.matTable.reChangeData();
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
