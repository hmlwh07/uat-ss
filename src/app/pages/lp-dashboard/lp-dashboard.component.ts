import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from './../senior-lp-dashboard/senior-lp-dashboard.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';

@Component({
  selector: 'app-lp-dashboard',
  templateUrl: './lp-dashboard.component.html',
  styleUrls: ['./lp-dashboard.component.scss']
})

export class LpDashboardComponent implements OnInit, OnDestroy {
  data: any;
  actForm: FormGroup;

  recentObj: any = {};
  campaign: any = [];
  campaignArray = [];
  followup: any = [];
  followUpArray = [];
  assignlead: any = [];
  assignLeadArray = [];
  backlog: any = [];
  backlogArray = [];
  unsub: any = {};
  id: any;

  constructor(private cdf: ChangeDetectorRef,private ngzone: NgZone, private route: ActivatedRoute, public auth: AuthService, private dashboardService: DashboardService, private router: Router) {
    this.route.queryParams.subscribe(async params => {

      this.id = JSON.parse(params.empId);
      this.loadForm();
    });
  }

  ngOnInit() {
      this.getList();
      this.getRecentList();
      this.getCampaignList();
      this.getFollowupList();
      this.getBacklogList();
      this.getLeadAssignList();
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.id)
    });
  }

  getList() {
    this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.data = res;
        this.cdf.detectChanges();
      }
    })
  }

  getRecentList() {
    this.ngzone.run(_ => {
    this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.recentObj = res
        this.cdf.detectChanges();
      }
    })
  });
  }

  getCampaignList() {
    this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.campaign = res
        this.campaign.map(c=>{
          this.campaignArray.push(c);
        })
        this.cdf.detectChanges();
      }
    })
  }

  getBacklogList() {
    this.dashboardService.getBacklogList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.backlog = res;
        this.backlog.map(log => {
          this.backlogArray.push(log);
        })
        this.cdf.detectChanges();
      }
    })
  }

  getLeadAssignList() {
    this.dashboardService.getLeadAssignList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.assignlead = res;
        this.assignlead.map(log => {
          this.assignLeadArray.push(log);
        })
        this.cdf.detectChanges();
      }
    })
  }

  getFollowupList() {
    this.ngzone.run(_ => {

    this.dashboardService.getFollowupList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.followup = res;
        this.followup.map(log => {
          this.followUpArray.push(log);
        })
      }
    })
  });
  }


  ngOnDestroy() {
  }

  goToSaleQuotation() {
    this.router.navigate(['/sale/quotation/list'])
  }

  goToSalePolicies() {
    this.router.navigate(['/sale/application/list'])
  }
}
