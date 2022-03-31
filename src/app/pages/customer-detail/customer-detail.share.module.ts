import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerDetailComponent } from './customer-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormComponentModule } from '../form-component/form-component.module';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';



@NgModule({
  declarations: [CustomerDetailComponent],
  exports: [CustomerDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
    NgSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    LanguageModule,
    FormComponentModule
  ]
})
export class CustomerDetailShareModule { }
