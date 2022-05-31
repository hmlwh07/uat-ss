import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReportByAgentYearlyComponent } from './report-by-agent-yearly.component';
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
import { MY_FORMATS, MY_MONTH_YEAR_FORMATS, MY_YEAR_FORMATS } from 'src/app/core/is-json';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';



@NgModule({
  declarations: [ReportByAgentYearlyComponent],
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
    LanguageModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportByAgentYearlyComponent,
      },
    ]),
  ],
  providers: [DatePipe,{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_MONTH_YEAR_FORMATS}]
})
export class ReportByAgentYearlyModule { }
