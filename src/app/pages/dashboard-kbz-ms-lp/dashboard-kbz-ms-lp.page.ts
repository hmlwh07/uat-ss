import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { DashboardService } from '../dashboard-kbz-ms-senior/dashboard.service';
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
  selector: 'app-dashboard-kbz-ms-lp',
  templateUrl: './dashboard-kbz-ms-lp.page.html',
  styleUrls: ['./dashboard-kbz-ms-lp.page.scss'],
})
export class DashboardKbzMsLpPage implements OnInit {
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
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  currentMonthIndex: number = new Date().getUTCMonth();

  icons = [
    {
      activityType : 'Face to Face',
      image : "./assets/images/group_chat_color-01.svg"
    },
    {
      activityType : 'Online',
      image : "./assets/images/world_color-01.svg"
    },
    {
      activityType : 'Phone Call',
      image : "./assets/images/phone_color-01.svg"
    },
  ];
  radioW: any;
  radioH: any;
  chartH: number;
  profileHpx: string;
  salesHpx: string;
  thingsHpx: string;
  chartHpx: string;
  profileImgW: string;
  profilePadding: string;
  productPadding: string;
  mainContentHeight: number;
  mainContentHeightPx: string;
  salesH: number;
  productImageWidth: string;
  constructor(private platform: Platform, 
    private cdf: ChangeDetectorRef, 
    private ngzone: NgZone, 
    private route: ActivatedRoute, 
    public auth: AuthService, 
    private dashboardService: DashboardService, 
    private router: Router) {
    this.route.queryParams.subscribe(async params => {
      if (params.empId) {
        this.id = JSON.parse(params.empId);
        this.loadForm();
      } else {
        this.id = this.auth.currentUserValue.id;
        this.loadForm();
      }
    });
  }

  ngOnInit() {
    this.getList();
    this.getRecentList();
    this.getCampaignList();
    this.getFollowupList();
    this.getBacklogList();
    this.getLeadAssignList();
    this.radioW = this.platform.width();;
    this.radioH = this.platform.height();;

    this.calculateMainContentHeight(this.radioW, this.radioH)
  }

  getImageURL(type){
    let index = this.icons.findIndex(i=> i.activityType == type);
    return this.icons[index].image;
  }
  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.id)
    });
  }

  getList() {
    this.ngzone.run(_ => {
      this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.data = res;
          this.setChartOptions();
          this.cdf.detectChanges();
        }
      })
    });
  }

  getRecentList() {
    this.ngzone.run(_ => {
      this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.recentObj = res;
          console.log('recentObj', this.recentObj)
          this.cdf.detectChanges();
        }
      })
    });
  }

  getCampaignList() {
    this.ngzone.run(_ => {
      this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.campaign = res
          this.campaign.map(c => {
            this.campaignArray.push(c);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }

  getBacklogList() {
    this.ngzone.run(_ => {
      this.dashboardService.getBacklogList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.backlog = res;
          this.backlog.map(log => {
            this.backlogArray.push(log);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }

  getLeadAssignList() {
    this.ngzone.run(_ => {
      this.dashboardService.getLeadAssignList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.assignlead = res;
          this.assignlead.map(log => {
            this.assignLeadArray.push(log);
          })
          this.cdf.detectChanges();
        }
      })
    });
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

  goToCalendar() {
    this.router.navigate(['/mycalendar'])
  }

  goToLeadList() {
    this.router.navigate(['/lead/lead-list'])
  }

  setChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [this.data.converted, this.data.assigned],
        },
      ],
      chart: {
        toolbar: {
          show: false
        },
        height: 150,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
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
          ['Converted', this.data.converted],
          ['Assigned', this.data.assigned],
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

  onResize(event) {
    this.radioW = event.target.innerWidth
    this.radioH = event.target.innerHeight;
    this.calculateMainContentHeight(this.radioW, this.radioH);
  }

  calculateMainContentHeight(width, height) {
    let mainContentHeight: number = 0;
    this.chartH = 0;
    if (width < 1000) {
      mainContentHeight = height - (55 + 58.8 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 15 + 'px';     
      this.salesH = mainContentHeight / 3;
      this.salesHpx = this.salesH - 25 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.chartHpx = this.chartH - 49 + 'px';
      this.profileImgW = '120px';
      this.productImageWidth = '35px';
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    } else if (width <= 1000 || width < 1200) {
      mainContentHeight = height - (65 + 58 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesH = mainContentHeight / 3;
      this.salesHpx = this.salesH - 40 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.chartHpx = this.chartH - 60 + 'px';
      this.profileImgW = '120px';
      this.productImageWidth = '35px';
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    } else {
      mainContentHeight = height - (65 + 58.8 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesH = mainContentHeight / 3;
      this.salesHpx = this.salesH - 30 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.chartHpx = this.chartH - 55 + 'px';
      this.profileImgW = '120px';
      this.productImageWidth = '35px';
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    }
    this.mainContentHeight = mainContentHeight;
    this.mainContentHeightPx = mainContentHeight + 'px';

  }

  changeSource(event){
    event.target.src = ""
  }

}
