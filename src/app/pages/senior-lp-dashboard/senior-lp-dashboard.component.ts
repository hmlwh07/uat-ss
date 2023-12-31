import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ApexMarkers
} from 'ng-apexcharts';

import { DashboardService } from './senior-lp-dashboard.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MenuDataRoleService } from 'src/app/core/menu-data-role.service';
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
  selector: 'app-senior-lp-dashboard',
  templateUrl: './senior-lp-dashboard.component.html',
  styleUrls: ['./senior-lp-dashboard.component.scss']
})
export class SeniorLpDashboardComponent implements OnInit, OnDestroy {
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
  activeRoute: any;
  agentLineChartCategories: string[] = [];
  agentLineChartDatas: number[] = [];
  currentMonthIndex: number = new Date().getUTCMonth();
  currentYear: number = new Date().getUTCFullYear();
  id: any;
  roleId: any;
  months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  unsub: any;
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(private cdf: ChangeDetectorRef, private route: ActivatedRoute, private auth: AuthService, private dashboardService: DashboardService, private router: Router, private ngzone: NgZone, private menuDataRoleService: MenuDataRoleService
  ) {
    // this.unsub = this.auth.currentUserSubject.subscribe((res) => {
    //   if (res) {
    //     this.authObj = res;
    //   }
    // })
    this.route.queryParams.subscribe(async (params) => {
      if (params.empId) {
        this.id = JSON.parse(params.empId);
        this.roleId = JSON.parse(params.roleId);
        this.loadForm();
      } else {
        this.id = this.auth.currentUserValue.id
        this.loadForm();
      }
    });

    this.loadForm();
  }


  async ngOnInit() {
    this.getList();
    this.getLeadList();
    this.getAgentList();
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl( this.id)
    })
  }

  getList(id?) {
    let post = {
      empId: id
    }
    this.ngzone.run(_ => {
      this.dashboardService.getList(id ? post : this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.data = res;
          this.setChartOptions('agent');
          this.cdf.detectChanges();
        }
      })
    })
  }

  getLeadList(id?) {
    let post = {
      empId: id
    }
    this.dashboardService.getLeadList(id ? post : this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.leadObj = res;
        this.setChartOptions('lead');
        this.cdf.detectChanges();
      }
    })
  }

  getAgentList(id?) {
    let post = {
      empId: id
    }
    this.ngzone.run(_ => {
      // this.agentLineChartCategories = this.agentLineChartDatas = [];
      this.dashboardService.getAgentList(id ? post : this.actForm.value).pipe(map((res: any) => {
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

  // goToLPManager(agent: any) {
  //   this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } })
  // }


  async goToLPManager(agent: any) {
    console.log(agent);
    this.getSaleRoleData(agent)
  }

  getSaleRoleData(agent: any) {
    this.menuDataRoleService.getMenusRoleData(agent.roleId).toPromise().then((res) => {
      // console.log(res);
      let page = ''
      if (res) {
        res.forEach(data => {
          if (data.title == "Dashboard") {
            if (data.submenu) {
              data.submenu.forEach(res => {
                if (res.dataAccess.view) {
                  page = res.page
                }
              })
            }
          }
        })

      }
      if (page) {
        let pg = "/" + page
        if (pg == this.activeRoute) {
          this.getList(agent.empId)
          this.getLeadList(agent.empId);
          this.getAgentList(agent.empId);
        }
        else {
          this.router.navigate([page], { queryParams: { empId: agent.empId, roleId: agent.roleId }, })
        }
      }
    })
  }

  goToSalePolicies() {
    this.router.navigate(['/sales/application/list']);
  }

  goToActivities() {
    this.router.navigate(['activity/activity-management-list']);
  }

  setChartOptions(type: string) {
    // console.log("lof", type);

    let key = type == 'lead' ? 'chartOptions' : 'chartOptionsAgent';
    let maxAg = Math.max(...this.agentLineChartDatas)
    this[key] = type == 'lead' ?
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
            show: false
          },
          height: 160,
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
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: type == 'lead' ? this.leadObj.leadAssignCount : this.data.assigned,
          labels: {
            style: {
              fontSize: "1rem",
              fontFamily: "Roboto"
            }
          }
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
        }
      } :
      {
        series: [
          {
            name: "",
            data: this.agentLineChartDatas,
            color: "#005f99"
          }
        ],
        stroke: {
          curve: 'smooth',
        },
        chart: {
          height: 160,
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
            fontSize: "1.1rem",
            fontFamily: "Roboto"
          }

        },
        xaxis: {
          type: 'category',
          categories: this.agentLineChartCategories,
          labels: {
            style: {
              fontSize: "1rem",
              fontFamily: "Roboto"
            }
          }
        },
        yaxis: {
          min: 0,
          max: maxAg > 10 ? maxAg : 10,
          tickAmount: 5,
          labels: {
            style: {
              fontSize: "1rem",
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
      };
    this.cdf.detectChanges();
  }
}
