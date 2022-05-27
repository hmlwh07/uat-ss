import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  ApexMarkers,
} from 'ng-apexcharts';

import { DashboardService } from './../senior-lp-dashboard/senior-lp-dashboard.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
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
  selector: 'app-lp-manager-dashboard',
  templateUrl: './lp-manager-dashboard.component.html',
  styleUrls: ['./lp-manager-dashboard.component.scss'],
})
export class LpManagerDashboardComponent implements OnInit, OnDestroy {
  @ViewChild("chartAgent") chartAgent: ChartComponent;
  @ViewChild("chartLead") chartLead: ChartComponent;

  public chartOptionsAgent: Partial<ChartOptionsLine>;
  public chartOptions: Partial<ChartOptions>;
  agentLineChart: any;
  agentLineChartCategories: string[] = [];
  agentLineChartDatas: number[] = [];
  data: any;
  actForm: FormGroup;
  leadObj: any = {};
  id: any;
  currentMonthIndex: number = new Date().getUTCMonth();
  currentYear: number = new Date().getUTCFullYear();
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
  todayActiveAgent: number = 0
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(
    private cdf: ChangeDetectorRef,
    private route: ActivatedRoute,
    public auth: AuthService,
    private dashboardService: DashboardService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(async (params) => {
      if (params.empId) {
        this.id = JSON.parse(params.empId);
        this.loadForm();
      } else {
        this.id = this.auth.currentUserValue.id
        this.loadForm();
      }
    });
  }

  async ngOnInit() {
    this.getList();
    this.getLeadList();
    this.getAgentList();
  }

  loadForm() {
    this.actForm = new FormGroup({
      empId: new FormControl(this.id),
    });
  }

  getList() {
    this.dashboardService
      .getList(this.actForm.value)
      .toPromise()
      .then((res) => {
        if (res) {
          this.data = res;
          this.setChartOptions('agent');
          this.cdf.detectChanges();
        }
      });
  }

  getLeadList() {
    this.dashboardService
      .getLeadList(this.actForm.value)
      .toPromise()
      .then((res) => {
        if (res) {
          this.leadObj = res;
          this.setChartOptions('lead');
          this.cdf.detectChanges();
        }
      });
  }

  getAgentList() {
    // this.agentLineChartCategories = this.agentLineChartDatas = [];
    this.dashboardService.getAgentList(this.actForm.value).pipe(map((res: any) => {
      let weeks = []
      let data = []
      res.weeklyActiveAgents.map((x) => {
        weeks.push(x.weekNo)
        data.push(parseInt(x.noOfActiveAgent))
      })
      return { ...res, data, weeks }
    })).toPromise().then((res) => {
      // console.log(res);
      
      if (res) {
        this.agentLineChart = res;
        this.todayActiveAgent = res.todayNoOfActiveAgent
        this.agentLineChartCategories = res.weeks
        this.agentLineChartDatas = res.data
        // this.agentLineChart = res;
        // this.agentLineChart.weeklyActiveAgents.map(a=> {
        //   this.agentLineChartCategories.push(a.weekNo);
        //   this.agentLineChartDatas.push(parseInt(a.noOfActiveAgent));
        // })
        // res.data.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
        let max = Math.max(...this.agentLineChartDatas)
        this.setChartOptions('agent');
        this.cdf.detectChanges();
      }
    })
  }

  ngOnDestroy() { }

  goToLPDashboard(agent: any) {
    this.router.navigate(['/dashboard/lp-dashboard'], {
      queryParams: { empId: agent.empId },
    });
  }

  goToSalePolicies() {
    this.router.navigate(['/sales/application/list'])
  }

  goToActivities() {
    this.router.navigate(['activity/activity-management-list'])
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
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: type == 'lead' ? this.leadObj.leadAssignCount || 10 : this.data.assigned || 10,
          labels: {
            style: {
              fontSize: "1rem",
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
        chart: {
          height: 160,
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
      });
  }
}
