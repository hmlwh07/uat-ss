import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { SeniorLpDashboardComponent } from './senior-lp-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { StaticPagesViewModule } from '../static-page-review/static-pages-reivew.module';
import { ColumnChartModule } from './../_column-chart/column-chart.component.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  declarations: [SeniorLpDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    StaticPagesViewModule,
    ColumnChartModule,
    NgApexchartsModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: SeniorLpDashboardComponent,
      },
    ]),
  ],
  providers: [DatePipe, DecimalPipe]
})
export class SeniorLpDashboardModule { }
