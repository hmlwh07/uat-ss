import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { CustomerListComponent } from './customer-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';



@NgModule({
  declarations: [CustomerListComponent],
  exports: [CustomerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
    LanguageModule,
  ]
})
export class CustomerListShareModule { }
