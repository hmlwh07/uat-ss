import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExChangeComponent } from './currency-exchange.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { CurrencyAddFormComponent } from './add-form/currency-add-form.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';

@NgModule({
  declarations: [CurrencyExChangeComponent, CurrencyAddFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    FormComponentModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: CurrencyExChangeComponent,
      },
    ]),
  ]
})
export class CurrencyExChangeModule { }
