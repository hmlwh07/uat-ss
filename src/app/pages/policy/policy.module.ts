import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './list/policy.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { PolicyPageComponent } from './policy-page.component';
import { ApplicationDataListComponent } from '../sales/application-data-list/application-data-list.component';


@NgModule({
  declarations: [PolicyPageComponent,PolicyComponent, ApplicationDataListComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    ProductsModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: 'application',
        component: PolicyPageComponent,
        children: [
          {
            path: 'list',
            component: PolicyComponent,
          },
        ]
      }

    ]),
  ]
})
export class PolicyModule { }
