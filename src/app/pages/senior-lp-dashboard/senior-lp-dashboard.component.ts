import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttachmentDownloadService } from '../../_metronic/core/services/attachment-data.service';
import { checkVaidDep } from '../check-parent';
import { ConfigInput, ConfigPage, FromGroupData, OptionValue } from '../form-component/field.interface';
import { PageDataService } from '../product-form/page-data.service';
import { PrintConfig } from '../products/models/print-config.interface';
import { PageUIType, ProductPages } from '../products/models/product.dto';
import { PrintPreviewModalComponent } from '../products/print-preview-modal/print-preview-modal.component';
import { AddOnQuoService } from '../products/services/add-on-quo.service';
import { CoverageQuoService } from '../products/services/coverage-quo.service';
import { ProductDataService } from '../products/services/products-data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  plotOptions : ApexPlotOptions;
  stroke : ApexStroke;
  fill : ApexFill;
  tooltip : ApexTooltip;
};

@Component({
  selector: 'app-senior-lp-dashboard',
  templateUrl: './senior-lp-dashboard.component.html',
  styleUrls: ['./senior-lp-dashboard.component.scss']
})
export class SeniorLpDashboardComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private productService: ProductDataService, private location: Location, private pageDataService: PageDataService, private addonQuo: AddOnQuoService, private coverageQuo: CoverageQuoService, private router: Router, private cdf: ChangeDetectorRef, private downloadService: AttachmentDownloadService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private modalService: NgbModal) { 
    this.chartOptions = {
      series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
    };
  }

  
  async ngOnInit() {
    
  }

  ngOnDestroy() {
  }

  goToLPManager(){
    this.router.navigate(['/dashboard/lp-manager-dashboard']);
  }
}
