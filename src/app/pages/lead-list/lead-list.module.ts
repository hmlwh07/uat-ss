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
import { StaticPagesModule } from './../static-pages/static-pages.module';
import { ShareComponentModule } from '../share-components/share-component.module';
import { LeadNewComponent } from '../lead-new/lead-new.component';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    StaticPagesModule,
    NgbDatepickerModule,
    LeadListShareModule,
    NgSelectModule,
    ShareComponentModule,
    LanguageModule,
    MatDatepickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadListComponent,
      },
    ]),

  ]
})
export class LeadListModule { }
