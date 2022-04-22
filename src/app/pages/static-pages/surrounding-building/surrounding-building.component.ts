import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { SurroundingBuildingService } from './models&services/surrounding-building.service';
import { SurroundingDisplayCol, SURROUNDING_COL } from './models&services/surrounding-list.const';
import { SurroundingDetailComponent } from './surrounding-detail/surrounding-detail.component';

@Component({
  selector: 'app-surrounding-building',
  templateUrl: './surrounding-building.component.html',
  styleUrls: ['./surrounding-building.component.scss']
})
export class SurroundingBuildingComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() riskId: number = 1
  ELEMENT_COL = JSON.parse(JSON.stringify(SURROUNDING_COL));
  displayedColumns = JSON.parse(JSON.stringify(SurroundingDisplayCol));
  isPopup: boolean = false
  surrounding: any[] = []
  constructor(private surroundingBuildingService: SurroundingBuildingService,
    private modalService: NgbModal, private cdf: ChangeDetectorRef,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.surroundingBuildingService.getByRiskId(this.riskId).toPromise().then((res: any) => {
      if (res) {
        this.surrounding = res
        this.cdf.detectChanges()
      }
    })
  }
  add(type, data?) {
    let modalRef;
    modalRef = this.modalService.open(SurroundingDetailComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = type
    modalRef.componentInstance.riskId = this.riskId
    modalRef.componentInstance.oldData = data
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        // console.log("RESSSS", res)
        if (res.type == "save") {
          // this.surrounding=res.data
          let oldVal = data ? data : { id: 0 }
          let index = this.surrounding.findIndex(x => x.id == oldVal.id)
          if (index < 0)
            this.surrounding.push(res.data)
          else
            this.surrounding[index] = res.data
          this.cdf.detectChanges()
        }
      }
    })
  }
  onActionView(data, type) {
    // console.log("data", data, "type", type)
    if (type == 'delete') {
      this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
        if (result) {
          this.surroundingBuildingService.delete(data.id).toPromise()
            .then((res) => {
              if (res) {
                let index = this.surrounding.findIndex(x => x.id == data.id)
                if (index >= 0) {
                  this.surrounding.splice(index, 1)
                  this.cdf.detectChanges()
                }
              }
            });
          this.alertService.activate('This record was deleted', 'Success Message').then(result => {

          });
        }
      });
    } else {
      this.add(type, data)
    }
  }
}
