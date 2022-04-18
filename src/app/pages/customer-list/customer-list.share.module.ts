import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { CustomerListComponent } from './customer-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerDataListComponent } from './customer-data-list/customer-data-list.component';



@NgModule({
  declarations: [CustomerListComponent, CustomerDataListComponent],
  exports: [CustomerListComponent, CustomerDataListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
  ]
})
export class CustomerListShareModule { }
