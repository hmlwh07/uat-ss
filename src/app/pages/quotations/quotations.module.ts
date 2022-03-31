import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationsComponent } from './list/quotations.component';
import { QuotationPageComponent } from './quotation-page.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';


@NgModule({
  declarations: [QuotationPageComponent,QuotationsComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    CRUDTableModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: 'quotation',
        component: QuotationPageComponent,
        children: [
          {
            path: 'list',
            component: QuotationsComponent,
          },
        ]
      }

    ]),
    ProductsModule,
    CustomerListShareModule
  ]
})
export class QuotationsModule { }
