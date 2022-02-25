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
  @ViewChild("chartAgent") chartAgent: ChartComponent;
  @ViewChild("chartLead") chartLead: ChartComponent;

  public chartOptionsAgent: Partial<ChartOptions>;
  public chartOptions: Partial<ChartOptions>;
  data: any;
  authObj: any;
  actForm: FormGroup;
  leadObj : any;
  currentMonthIndex : number = new Date().getUTCMonth();
  months = ['JAN','FEB','Mar','APR','MAY','JUL','AUG','SEP','OCT','NOV','DEC'];
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
          this.setChartOptions('agent');
          this.cdf.detectChanges();       
        }
      })
    })
  }

  getLeadList() {
    this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res) => {
      if (res) {
        this.leadObj = res;
        this.setChartOptions('lead');
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

  goToSalePolicies() {
    this.router.navigate(['/sale/application/list']);
  }

  goToActivities() {
    this.router.navigate(['activity/activity-management-list']);
  }

  setChartOptions(type : string){
    let key =  type == 'lead'?  'chartOptions' : 'chartOptionsAgent';
    this[key]= {
      series: [
        {
          name: "",
          data: [type == 'lead'? this.leadObj.leadWinCount : this.data.converted ,type == 'lead'? this.leadObj.leadAssignCount
        : this.data.assigned]
        }
      ],
      chart: {
        toolbar: {
          show: false
        },
        height: 150,
        type: "bar",
        events: {
          click: function(w, e) {
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
        show: false
      },
      xaxis: {
        categories: [
          ["Converted",type == 'lead'? this.leadObj.leadWinCount : this.data.converted],
          ["Assigned", type == 'lead'? this.leadObj.leadAssignCount : this.data.assigned],
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
