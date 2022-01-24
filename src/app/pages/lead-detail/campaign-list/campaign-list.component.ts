import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CampaignCol, CampaignDisplayCol } from '../FNA-list.const';
import { LeadDetailService } from '../lead-detail.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  campaignForm: FormGroup;
  campaignList: any = []
  @Input() isPopup: boolean = false
  @Output() selectedCampaign = new EventEmitter();
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  ELEMENT_COL = JSON.parse(JSON.stringify(CampaignCol))
  displayedColumns = JSON.parse(JSON.stringify(CampaignDisplayCol))

  constructor(private LeadDetailService: LeadDetailService, private cdf: ChangeDetectorRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadForm()
    this.getList()
  }
  getList() {
    this.LeadDetailService.getCampaignList(this.campaignForm.value).toPromise().then((res: any) => {
      if (res) {
        this.campaignList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      }
    })
  }
  cancel() {
    this.modalService.dismissAll()
  }
  loadForm() {
    this.campaignForm = new FormGroup({
      "cpmNumber": new FormControl(null),
      "cpmName": new FormControl(null),
    })
  }
  rowSelected(event) {
    this.selectedCampaign.emit(event)
  }
  closeModal() {
    this.modalService.dismissAll()
  }
  nextProd() {
    if (this.selected.cpmNumber) {
      this.modalService.dismissAll({ data: this.selected, type: "save" })
    }
  }
  get selected() {
    let campaign
    if (this.matTable) {
      campaign = this.matTable.selection.selected[0]
    }
    return campaign ? campaign : { cpmNumber: 0 }
  }

  //for view
  isControlValid(controlName: string): boolean {
    const control = this.campaignForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.campaignForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.campaignForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }
}
