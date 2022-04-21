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
import { LeadDataListComponent } from './lead-data-list/lead-data-list.component';
import { ShareComponentModule } from '../share-components/share-component.module';


@NgModule({
  declarations: [LeadListComponent, LeadDataListComponent],
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
    StaticPagesModule,
    ShareComponentModule,
    NgSelectModule,
    CustomerListShareModule
  ]
})
export class LeadListShareModule { }
