import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReportByAgentMonthlyComponent } from './report-by-agent-monthly.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from 'src/app/core/is-json';



@NgModule({
  declarations: [ReportByAgentMonthlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportByAgentMonthlyComponent,
      },
    ]),
  ],
  providers: [DatePipe,{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class ReportByAgentMonthlyModule { }
