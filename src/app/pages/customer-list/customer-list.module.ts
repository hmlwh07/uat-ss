import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { CustomerListComponent } from './customer-list.component';
import { CustomerListShareModule } from './customer-list.share.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomerListShareModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerListComponent,
      },
    ]),
  ],
  providers:[NgbActiveModal]
})
export class CustomerListModule { }
