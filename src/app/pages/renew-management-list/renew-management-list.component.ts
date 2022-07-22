import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import * as moment from 'moment';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from "rxjs/operators";
import { LoadingService } from 'src/app/modules/loading-toast/loading/loading.service';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { AlertService } from '../../modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { ActivityStatus } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { ProductDataService } from '../products/services/products-data.service';
import { RenewCol, ActivityDisplayCol } from './renew-manage.const';
import { RenewManageService } from './renew-manage.service';


@Component({
  selector: 'app-renew-management-list',
  templateUrl: './renew-management-list.component.html',
  styleUrls: ['./renew-management-list.component.scss']
})
export class RenewManagementListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  ELEMENT_COL = RenewCol
  displayedColumns = ActivityDisplayCol
  renewList = [];
  actForm: FormGroup;
  isTeam: boolean = false;
  activityStatus = ActivityStatus
  productOption: any = []
  statusOption: any = [
    { code: 'ACTIVE', value: 'ACTIVE' },
    { code: 'CONFIRM', value: 'CONFIRM' }
  ]
  product: any;
  private downED = "/attachment-downloader/tcs/"
  // private downEDTCS = "/attachment-downloader/tcs/"
  // private fileNameURL = "attachment-downloader/tcs.htm?fileName="

  constructor(private fb: FormBuilder, private router: Router, private cdf: ChangeDetectorRef,
    private renewService: RenewManageService, private alertService: AlertService,
    private loadingService: LoadingService,
    private attachmentDownloadService: AttachmentDownloadService, private prodctService: ProductDataService) {
    this.loadForm();
  }

  ngOnInit(): void {
    this.getProduct()
  }

  ngAfterViewInit() {
    this.getList()
  }

  cancel() {
    this.actForm.reset();
    this.getOneMonthAndRefresh();
    this.getList();
  }

  loadForm() {
    this.actForm = new FormGroup({
      "policyNumber": new FormControl(""),
      "policyHolder": new FormControl(""),
      "productCode": new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      isTeam: new FormControl(this.isTeam),
      statusCode: new FormControl("")
    })
  }

  getOneMonthAndRefresh() {
    let date = new Date();
    let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1))
    let monthDay = new Date(date.setMonth(date.getMonth() + 1))
    this.actForm.controls['startDate'].setValue(lastMonthDay.toISOString());
    this.actForm.controls['endDate'].setValue(monthDay.toISOString());
    this.actForm.controls.policyNumber.setValue("");
    this.actForm.controls.policyHolder.setValue("");
    this.actForm.controls.productCode.setValue("");
    this.actForm.controls.isTeam.setValue(this.isTeam);
  }


  getList() {
    let searchValues = {
      policyNumber: this.actForm.controls.policyNumber.value || "",
      policyHolder: this.actForm.controls.policyHolder.value || "",
      productCode: this.actForm.controls.productCode.value || "",
      fromDate: this.actForm.controls.startDate.value != null ? moment(this.actForm.controls.startDate.value).format("YYYY-MM-DD") : "",
      toDate: this.actForm.controls.endDate.value != null ? moment(this.actForm.controls.endDate.value).format("YYYY-MM-DD") : "",
      statusCode: this.actForm.controls.statusCode.value || null,
      isTeam: this.isTeam
    }

    this.renewService.getRenewList(searchValues).toPromise().then((res: any) => {
      if (res) {
        this.renewList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      }
    })
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.navigateToDetail(event.data)
    }
    else if (event.cmd == 'view') {
      this.navigateToDetail(event.data)
    }
    else if (event.cmd == "confirm") {
      this.confirmRenew(event.data)
    } else if (event.cmd == 'download') {
      this.download(event.data.documentName);
    }

  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.dirty || control.touched;
  }

  navigateToDetail(data) {
    this.router.navigate(["sales/renew-policy/detail"], { queryParams: { data: JSON.stringify(data) } })
  }

  confirmRenew(data) {
    if (data.status != 'confirm') {
      this.alertService
        .activate('Are you sure want to confirm?', 'Warning Message')
        .then(async (result) => {
          if (result) {
            this.renewService
              .confirmRenew(data.policyNumber)
              .toPromise()
              .then((res) => {
                if (res) {
                  console.log(res);

                  this.alertService.activate(
                    'This record was updated',
                    'Success Message'
                  );
                  this.navigateToDetail(res);
                }
              });
          }
        });
    }
  }

  async download(fileName: string) {
    await this.loadingService.activate()
    let file = this.getFileExt(fileName)
    console.log("FILE",file);
    
    // this.getFileExt(fileName).pipe(mergeMap((x) => {
    //   // let ext = x ? x.docExtension : "pdf"
    this.attachmentDownloadService.getFile(this.downED + file).pipe(map((x) => {
      return { data: x }
    })).toPromise().then(async (res: any) => {
      if (res) {
        if (Capacitor.isNativePlatform()) {
          this.attachmentDownloadService.mobileTCSDownload(file, res.data)
        } else {
          await this.loadingService.deactivate()
          this.attachmentDownloadService.downloadTCSFile(res.data, file)
        }
        await this.loadingService.deactivate()
      }

    })
    // })).toPromise().then(async (res: any) => {
    //  ait this.loadingService.deactivate()

  }

  getFileExt(fileName) {
    if (fileName.includes(".pdf") || fileName.includes(".doc") || fileName.includes(".docx") || fileName.includes(".txt"))
      return fileName
    else
      return fileName + ".pdf"
    // return this.attachmentDownloadService.get(this.downED + fileName).pipe(catchError(() => { return of(null) }))
  }


  getProduct() {
    this.prodctService
      .getAll('yes')
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.product = res;
          this.productOption = res.map((x) => {
            return { code: x.code, value: x.name, type: x.type };
          });
          this.cdf.detectChanges();
          // this.getProductOption()
        }
      });
  }

  clear(key) {
    if (key == 'productCode') {
      this.actForm.controls[key].setValue(null)
    }
  }

  changeView(type) {
    if (type == 'team') {
      this.isTeam = true
    }
    else {
      this.isTeam = false

    }
    this.actForm.controls.isTeam.setValue(this.isTeam)
    this.cdf.detectChanges()
    this.getList()
  }

}
