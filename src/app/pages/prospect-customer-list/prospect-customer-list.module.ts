import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { ProspectCustomerListComponent } from './prospect-customer-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShareComponentModule } from '../share-components/share-component.module';
import { throwIfAlreadyLoaded } from 'src/app/modules/loading-toast/module-import-guard';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  declarations:[ProspectCustomerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgSelectModule,
    CRUDTableModule,
    LanguageModule,
    ShareComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProspectCustomerListComponent,
      },
    ]),

  ]
})
export class ProspectCustomerListModule {
  constructor(@Optional() @SkipSelf() parentModule: ProspectCustomerListModule) {
    throwIfAlreadyLoaded(parentModule, 'ProspectCustomerListModule')
  }
 }
