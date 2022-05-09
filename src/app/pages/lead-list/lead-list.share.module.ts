import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { LeadListComponent } from './lead-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { StaticPagesModule } from '../static-pages/static-pages.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

import { ShareComponentModule } from '../share-components/share-component.module';


@NgModule({
  declarations: [LeadListComponent],
  exports: [LeadListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    MatRadioModule, 
    MatDatepickerModule,
    MatInputModule,
    NgbModalModule,
    LanguageModule,
    StaticPagesModule,
    ShareComponentModule,
    NgSelectModule,
    CustomerListShareModule
  ]
})
export class LeadListShareModule { }
