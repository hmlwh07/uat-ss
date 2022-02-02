import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportChannelSummaryByBankBranchComponent } from './report-channel-summary-by-bank-branch.component';
import { RouterModule } from '@angular/router';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ReportChannelSummaryByBankBranchComponent],
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
          component: ReportChannelSummaryByBankBranchComponent,
        },
      ]),
  ]
})
export class ReportChannelSummaryByBankBranchModule { }
