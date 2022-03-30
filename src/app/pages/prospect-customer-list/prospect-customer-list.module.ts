import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { ProspectCustomerListComponent } from './prospect-customer-list.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations:[ProspectCustomerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgSelectModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProspectCustomerListComponent,
      },
    ]),

  ]
})
export class ProspectCustomerListModule { }
