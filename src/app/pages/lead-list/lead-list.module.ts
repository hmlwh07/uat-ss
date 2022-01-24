import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListComponent } from './lead-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { LeadListShareModule } from './lead-list.share.module';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbDatepickerModule,
    LeadListShareModule,
    NgSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadListComponent,
      },
    ]),

  ]
})
export class LeadListModule { }
