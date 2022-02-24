import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { LpDashboardComponent } from './lp-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { StaticPagesViewModule } from '../static-page-review/static-pages-reivew.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [LpDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    StaticPagesViewModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LpDashboardComponent,
      },
    ]),
  ],
  providers: [DatePipe, DecimalPipe]
})
export class LpDashboardModule { }
