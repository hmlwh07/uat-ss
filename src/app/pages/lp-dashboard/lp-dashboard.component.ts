import { Component, OnDestroy, OnInit } from '@angular/core';
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
  
  recentObj : any;
  campaign : any;
  unsub: any;
  id : any;
  constructor(private route: ActivatedRoute,public auth:AuthService, private dashboardService: DashboardService,private router : Router) { 
    this.route.queryParams.subscribe(async params => {

      this.id = JSON.parse(params.empId);
      this.loadForm();
    });
  }

  async ngOnInit() {
    this.getList();
    this.getRecentList();
    this.getCampaignList();
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.id)
    });
  }

  getList() {
    this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.data = res
      }
    })
  }

  getRecentList() {
    this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.recentObj = res
        console.log('this.recentObj',this.recentObj)
      }
    })
  }

  getCampaignList() {
    this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.campaign = res
      }
    })
  }

  ngOnDestroy() {
  }
}
