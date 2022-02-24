import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from './../senior-lp-dashboard/senior-lp-dashboard.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexGrid,
} from 'ng-apexcharts';
type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

interface ViewObjData {
  quotations?: any[]
  policies?: any[]
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: 'app-lp-dashboard',
  templateUrl: './lp-dashboard.component.html',
  styleUrls: ['./lp-dashboard.component.scss']
})

export class LpDashboardComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data: any;
  actForm: FormGroup;

  recentObj: ViewObjData = {
    quotations: [],
    policies: []
  };
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
  leadObj: any;
  months = [
    'JAN',
    'FEB',
    'Mar',
    'APR',
    'MAY',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  currentMonthIndex: number = new Date().getUTCMonth();
  constructor(private cdf: ChangeDetectorRef, private ngzone: NgZone, private route: ActivatedRoute, public auth: AuthService, private dashboardService: DashboardService, private router: Router) {
    this.route.queryParams.subscribe(async params => {

      this.id = JSON.parse(params.empId);
      this.loadForm();
    });
  }

  ngOnInit() {
    this.getList();
    this.getLeadList();
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

  getLeadList() {
    this.dashboardService
      .getLeadList(this.actForm.value)
      .toPromise()
      .then((res) => {
        if (res) {
          this.leadObj = res;
          this.setChartOptions();
          this.cdf.detectChanges();
        }
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
        this.campaign.map(c => {
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
          this.cdf.detectChanges();
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
  setChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [this.leadObj.leadWinCount, this.leadObj.leadAssignCount],
        },
      ],
      chart: {
        height: 150,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '20%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['Converted', this.leadObj.leadWinCount],
          ['Assigned', this.leadObj.leadAssignCount],
        ],
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
  }

}

