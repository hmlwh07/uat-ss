import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexGrid,
  ApexTitleSubtitle,
  ApexMarkers,
} from 'ng-apexcharts';


import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { DashboardService } from './dashboard.service';
type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

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

export type ChartOptionsLine = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  dataLabels: ApexDataLabels,
  markers: ApexMarkers
};

@Component({
  selector: 'app-dashboard-kbz-ms-senior',
  templateUrl: './dashboard-kbz-ms-senior.page.html',
  styleUrls: ['./dashboard-kbz-ms-senior.page.scss'],
})
export class DashboardKbzMsSeniorPage implements OnInit {
  @ViewChild("chartAgent") chartAgent: ChartComponent;
  @ViewChild("chartLead") chartLead: ChartComponent;

  public chartOptionsAgent: Partial<ChartOptionsLine>;
  public chartOptions: Partial<ChartOptions>;
  data: any;
  authObj: any;
  actForm: FormGroup;
  leadObj: any = {};
  todayActiveAgent = 0
  agentLineChart: any;
  agentLineChartCategories: string[] = [];
  agentLineChartDatas: number[] = [];
  currentMonthIndex: number = new Date().getUTCMonth();
  currentYear: number = new Date().getUTCFullYear();
  months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  unsub: any;
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  radioW: number;
  radioH: number;
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

  constructor(private platform: Platform, 
    private cdf: ChangeDetectorRef, 
    private auth: AuthService, 
    private dashboardService: DashboardService, 
    private router: Router, 
    private ngzone: NgZone
  ) {
    this.unsub = this.auth.currentUserSubject.subscribe((res) => {
      if (res) {
        this.authObj = res;
      }
    })

    this.loadForm();
  }


  async ngOnInit() {
    this.getList();
    this.getLeadList();
    this.getAgentList();
    this.radioW = this.platform.width();
    this.radioH = this.platform.height();
    this.calculateMainContentHeight(this.radioW, this.radioH);
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.authObj.id)
    })
  }

  getList() {
    this.ngzone.run(_ => {
      this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.data = res;
          this.setChartOptions('agent');
          this.cdf.detectChanges();
        }
      })
    })
  }

  getLeadList() {
    this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res:any) => {
      if (res) {
        this.leadObj = res;
        // this.todayActiveAgent = res.todayActiveAgent
        this.setChartOptions('lead');
        this.cdf.detectChanges();
      }
    })
  }

  getAgentList() {
    this.ngzone.run(_ => {
      // this.agentLineChartCategories = this.agentLineChartDatas = [];
      this.dashboardService.getAgentList(this.actForm.value).pipe(map((res: any) => {
        let weeks = []
        let data = []
        res.weeklyActiveAgents.map((x) => {
          weeks.push(x.weekNo)
          data.push(parseInt(x.noOfActiveAgent))
        })
        return { ...res, data, weeks }
      })).toPromise().then((res: any) => {
        // console.log(res,"res");

        if (res) {
          this.agentLineChart = res;
          this.todayActiveAgent = res.todayNoOfActiveAgent
          this.agentLineChartCategories = res.weeks
          this.agentLineChartDatas = res.data
          // res.weeklyActiveAgents.map(a => {
          //   this.agentLineChartCategories.push(a.weekNo);
          //   this.agentLineChartDatas.push(parseInt(a.noOfActiveAgent));
          // })
          this.setChartOptions('agent');
        }
      })
    })
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

  goToLPManager(agent: any) {
    this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } })
  }

  goToSalePolicies() {
    this.router.navigate(['/sales/application/list']);
  }

  goToActivities() {
    this.router.navigate(['activity/activity-management-list']);
  }

  setChartOptions(type: string) {
    let key = type == 'lead' ? 'chartOptions' : 'chartOptionsAgent';
    let maxAg = Math.max(...this.agentLineChartDatas)
    this[key] = (type == 'lead' ?
      {
        series: [
          {
            name: "",
            data: [type == 'lead' ? this.leadObj.leadWinCount : this.data.converted, type == 'lead' ? this.leadObj.leadAssignCount
              : this.data.assigned]
          }
        ],
        chart: {
          toolbar: {
            show: true
          },
          height: this.chartH - 20,
          type: "bar",
          events: {
            click: function (w, e) {
            }
          }
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8"
        ],
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: type == 'lead' ? this.leadObj.leadAssignCount || 10 : this.data.assigned || 10,
          labels: {
            style: {
              fontSize: "0.79rem",
              fontFamily: "Roboto"
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: true
        },
        xaxis: {
          categories: [
            ["Converted", type == 'lead' ? this.leadObj.leadWinCount : this.data.converted],
            ["Assigned", type == 'lead' ? this.leadObj.leadAssignCount : this.data.assigned],
          ],
          labels: {
            style: {
              colors: [
                "#008FFB",
                "#00E396",
                "#FEB019",
                "#FF4560",
                "#775DD0",
                "#546E7A",
                "#26a69a",
                "#D10CE8"
              ],
              fontSize: "12px"
            }
          }
        },
      } :
      {
        series: [
          {
            name: "",
            data: this.agentLineChartDatas,
            color: "#005f99"
          }
        ],
        chart: {
          height: this.chartH - 20,
          // width: 280,
          type: "line",
          toolbar: {
            show: false
          }
        },
        title: {
          text: "",
          offsetX: 0,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "0.79rem",
            fontFamily: "Roboto"
          }

        },
        xaxis: {
          type: 'category',
          categories: this.agentLineChartCategories,
          labels: {
            style: {
              fontSize: "0.79rem",
              fontFamily: "Roboto"
            }
          },
        },
        yaxis: {
          min: 0,
          max: maxAg > 10 ? maxAg : 10,
          tickAmount: 5,
          labels: {
            show: false,
            style: {
              fontSize: "0.79rem",
              fontFamily: "Roboto"
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        dataLabels: {
          enabled: false,
          textAnchor: 'middle',
          offsetX: -10,
          offsetY: -5,
          enabledOnSeries: [0]
        },

        markers: {
          size: [5, 0, 0],
        }
      });
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
      this.salesHpx = mainContentHeight - 40 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    } else if (width <= 1000 || width < 1200) {
      mainContentHeight = height - (65 + 58 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesHpx = mainContentHeight - 50 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '5px';
      this.productPadding = '5px 0';
    } else {
      mainContentHeight = height - (65 + 58.8 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesHpx = mainContentHeight - 50 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '5px';
      this.productPadding = '5px 0';
    }
    this.mainContentHeight = mainContentHeight;
    this.mainContentHeightPx = mainContentHeight + 'px';

  }

  changeSource(event){
    event.target.src = "./assets/images/user_profile-01.svg"
  }

}
