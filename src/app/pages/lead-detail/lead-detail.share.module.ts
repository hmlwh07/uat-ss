import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { LeadDetailComponent } from './lead-detail.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { ProductShareModule } from '../products/products-share.module';



@NgModule({
  declarations: [LeadDetailComponent,CampaignListComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
    NgSelectModule,
    MatDatepickerModule,
    CustomerListShareModule,
    ProductShareModule,
    MatRadioModule,
    MatInputModule,
  ]
})
export class LeadDetailShareModule { }
