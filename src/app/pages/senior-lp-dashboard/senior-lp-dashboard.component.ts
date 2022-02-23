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
  ApexGrid
} from 'ng-apexcharts';

import { DashboardService } from './senior-lp-dashboard.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
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

@Component({
  selector: 'app-senior-lp-dashboard',
  templateUrl: './senior-lp-dashboard.component.html',
  styleUrls: ['./senior-lp-dashboard.component.scss']
})
export class SeniorLpDashboardComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data: any = {};
  authObj: any;
  actForm: FormGroup;
  // leadObj = {
  //   leadWinRate: 56,
  //   leadWinCount : 100,
  //   taskToday: 15,
  //   todayActiveAgent: 4,
  //   leadAssignCount: 100,
  //   leadToday: 58
  // };
  leadObj : any;

  unsub: any;

  constructor(private cdf: ChangeDetectorRef,private auth: AuthService, private dashboardService: DashboardService,private router : Router,private ngzone : NgZone
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
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.authObj.id)
    })
  }

  getList() {
    this.ngzone.run(_=>{
      this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.data = res;
          this.cdf.detectChanges();        }
      })
    })
  }

  getLeadList() {
    this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.leadObj = res
        this.setChartOptions();
        this.cdf.detectChanges();
      }
    })
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

  goToLPManager(agent: any) {
    this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId : agent.empId } })
  }

  setChartOptions(){
    this.chartOptions = {
      series: [
        {
          name: "",
          data: [this.leadObj.leadWinCount,this.leadObj.leadAssignCount]
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
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
          columnWidth: "45%",
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
        show: false
      },
      xaxis: {
        categories: [
          ["Converted", this.leadObj.leadWinCount],
          ["Assigned", this.leadObj.leadAssignCount],
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
    };
  }
}
