import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product } from '../../products/models/product.dto';
import { QuotationDTO } from '../../quotations/quotation.dto';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexMarkers
} from "ng-apexcharts";
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { EducationLifeID } from '../../static-pages/static-pages.data';
import { StaticActionType, StaticPageAction } from '../../static-pages/static-field.interface';
import { EduPaymentService } from '../../static-pages/education-life/models&services/education-life.service';

export type ChartOptions = {
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
  selector: 'app-education-life-grip-view',
  templateUrl: './education-life-griph-view.component.html',
  styleUrls: ['./education-life-griph-view.component.scss']
})
export class EducationLifeGripViewComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  // showValue = [636000, 1272000, 1908000, 2544000, 3180000, 3816000, 4452000]
  @Input() parentData: any
  showDatas: any[] = []
  show: boolean = false
  constructor(private alertService: AlertService, private globalFun: GlobalFunctionService, 
    private eduPayment: EduPaymentService, private cdf: ChangeDetectorRef) {
    this.chartOptions = {
      series: [
        {
          name: "Premium Amount",
          data: [],
          color: "#005f99"
        }
      ],
      chart: {
        height: 450,
        type: "line",
        toolbar: {
          show: false
        }
      },
      title: {
        text: "Basic Benefit Illustration",
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
        categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
        labels: {
          style: {
            fontSize: "1rem",
            fontFamily: "Roboto"
          }
        }
      },
      yaxis: {
        min: 0,
        max: 5000000,
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
        enabled: true,
        textAnchor: 'middle',
        offsetX: -10,
        offsetY: -5,
        enabledOnSeries: [0]
      },
      markers: {
        size: [5, 0, 0],
      }
    };
  }
  ngOnInit(): void {
    // this.createListData()
    let dataArr: any[] = this.parentData.map((x) => {

      if (x.premiumPaid)
        return x.premiumPaid > 0 ? x.premiumPaid : null
      else return null
    })
    dataArr.unshift(null)
    this.chartOptions.series[0].data = dataArr

    if (this.parentData.length > 0) {
      if (this.parentData[0].benefitPlan == '002') {
        this.chartOptions.title.text = "Double Benefit Illustration"
        this.chartOptions.yaxis.max = 5000000 * 2
        this.chartOptions.series[1] = {
          data: [],
          name: "Goal"
        }
        this.chartOptions.series[2] = {
          data: [],
          name: "2X Goal"
        }
        this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000]
        this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000]
      }
    }

  }
  createListData() {
    this.eduPayment.getMany(this.resourcesId).toPromise().then((res: any) => {
      // console.log(res);
      if (res) {
        let dataArr: any[] = res.map((x) => {
          if (x.premiumPaid)
            return x.premiumPaid
        })
        dataArr.unshift(0)
        // console.log(dataArr, res);
        if (res.length > 0) {
          if (res[0].benefitPlan == '002') {
            this.chartOptions.title.text = "Double Benefit Illustration"
            this.chartOptions.yaxis.max = 5000000 * 2
          }
        }
        this.chartOptions.series[0].data = dataArr.filter(x => x >= 0)
        this.show = true
        this.cdf.detectChanges()
      }
    })
  }

}
