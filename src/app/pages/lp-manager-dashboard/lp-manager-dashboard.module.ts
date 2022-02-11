import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { LpManagerDashboardComponent } from './lp-manager-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { StaticPagesViewModule } from '../static-page-review/static-pages-reivew.module';
import { ColumnChartModule } from './../_column-chart/column-chart.component.module';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [LpManagerDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    StaticPagesViewModule,
    ColumnChartModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LpManagerDashboardComponent,
      },
    ]),
  ],
  providers: [DatePipe, DecimalPipe]
})
export class LpManagerDashboardModule { }
