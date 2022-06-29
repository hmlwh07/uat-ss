import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';


import { ShareComponentModule } from '../share-components/share-component.module';
import { throwIfAlreadyLoaded } from 'src/app/modules/loading-toast/module-import-guard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProspectCustomerListComponent } from './prospect-customer-list.component';

@NgModule({
  declarations: [ProspectCustomerListComponent],
  exports: [ProspectCustomerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
    LanguageModule,
    ShareComponentModule
  ],
  providers:[NgbActiveModal]
})
export class ProspectCustomerListShareModule { 
  constructor(@Optional() @SkipSelf() parentModule: ProspectCustomerListShareModule) {
    throwIfAlreadyLoaded(parentModule, 'CustomerListShareModule')
  }
}
