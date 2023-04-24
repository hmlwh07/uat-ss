import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PolicyService } from '../../policy/policy.service';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.scss'],
})
export class ApplicationItemComponent implements OnInit {
  @Input() itemData: any = {};
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  constructor(private policyService: PolicyService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.itemData) {
      // if (this.itemData.submittedCode != null) {
        this.policyService.getTcsStatus(this.itemData.submittedCode).toPromise().then((res: any) => {
          console.log("RES", res);

          if (res.datum) {
            this.itemData.tcsStatus = res.datum.policyStatusDesc
            this.cdf.detectChanges()
          } else {
            this.itemData.tcsStatus = null
            this.cdf.detectChanges()
          }
        })

        this.cdf.detectChanges()
      }
    
  }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }
  getTcsStatus(data) {
    if (data.submittedCode != null) {
      this.policyService.getTcsStatus(data.submittedCode).toPromise().then((res: any) => {
        console.log("RES", res);
        if (res.datum) {
          data.tcsStatus = res.datum.policyStatusDesc
          this.cdf.detectChanges()
        } else {
          data.tcsStatus = null
          this.cdf.detectChanges()
        }
      })

      this.cdf.detectChanges()
    } else {

    }
  }

}
