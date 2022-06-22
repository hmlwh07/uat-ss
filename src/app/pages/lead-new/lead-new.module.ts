import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { StaticPagesModule } from '../static-pages/static-pages.module';
import { ShareComponentModule } from '../share-components/share-component.module';
import { LeadListShareModule } from '../lead-list/lead-list.share.module';
import { LeadNewComponent } from './lead-new.component';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { LeadDetailShareModule } from '../lead-detail/lead-detail.share.module';


@NgModule({
  declarations: [LeadNewComponent],
  exports: [LeadNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    StaticPagesModule,
    NgbDatepickerModule,
    LeadListShareModule,
    NgSelectModule,
    ShareComponentModule,
    LanguageModule,
    MatRadioModule, 
    NgSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    LeadDetailShareModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadNewComponent,
      },
    ]),

  ]
})
export class LeadNewModule { }
