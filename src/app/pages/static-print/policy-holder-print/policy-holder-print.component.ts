import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
@Component({
  selector: 'app-policy-holder-print',
  templateUrl: './policy-holder-print.component.html',
  styleUrls: ['./policy-holder-print.component.scss'],
})
export class HolderPrintComponent implements OnInit {

  @Input() resourcesId?: string
  listData: any[] = []
  detail: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  constructor(private policyHolderService: PolicyHolderService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPolicyHolder()
  }

  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
        console.log("policy", this.policyHolder);
        this.cdf.detectChanges()
      }
    })
  }
}