import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  ApexGrid
} from 'ng-apexcharts';

import { DashboardService } from './../senior-lp-dashboard/senior-lp-dashboard.service';
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
  selector: 'app-lp-manager-dashboard',
  templateUrl: './lp-manager-dashboard.component.html',
  styleUrls: ['./lp-manager-dashboard.component.scss']
})

export class LpManagerDashboardComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>; 
  data: any;
  actForm: FormGroup;
  leadObj : any;
  id: any;
  constructor(private route: ActivatedRoute, public auth: AuthService, private dashboardService: DashboardService, private router: Router) {
    this.route.queryParams.subscribe(async params => {
      this.id = JSON.parse(params.empId);
      this.loadForm();
    });
  }

  async ngOnInit() {
    this.getList();
    this.getLeadList();
    //this.setChartOptions();
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

  getLeadList() {
    this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.leadObj = res
        this.setChartOptions();
      }
    })
  }
  

  ngOnDestroy() {
  }

  goToLPDashboard(agent: any) {
    this.router.navigate(['/dashboard/lp-dashboard'], { queryParams: { empId: agent.empId } })
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

