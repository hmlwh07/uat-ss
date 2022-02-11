import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { CustomerListComponent } from './customer-list.component';
import { CustomerListShareModule } from './customer-list.share.module';

import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    CustomerListShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerListComponent,
      },
    ]),

  ]
})
export class CustomerListModule { }
