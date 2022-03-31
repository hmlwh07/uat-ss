import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LeadDetailComponent } from './lead-detail.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import {MatTabsModule} from '@angular/material/tabs'
import { FormComponentModule } from '../form-component/form-component.module';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { LeadDetailShareModule } from './lead-detail.share.module';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormComponentModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbDatepickerModule,
    MatRadioModule, 
    NgSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    LeadDetailShareModule,
    MatInputModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadDetailComponent,
      },
    ]),

  ]
})
export class LeadDetailModule { }
