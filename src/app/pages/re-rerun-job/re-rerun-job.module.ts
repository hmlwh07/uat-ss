import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReRerunJobPageRoutingModule } from './re-rerun-job-routing.module';

import { ReRerunJobPage } from './re-rerun-job.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { ErrorDetailsComponent } from './error-details/error-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgSelectModule,
    CRUDTableModule,
    LanguageModule,
    ReRerunJobPageRoutingModule
  ],
  declarations: [ReRerunJobPage,ErrorDetailsComponent],
  providers:[]
})
export class ReRerunJobPageModule { }
