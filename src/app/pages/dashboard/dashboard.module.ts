import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
@NgModule({
  declarations: [EditModalComponent],
  exports: [EditModalComponent],
  imports: [CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    CRUDTableModule,
    LanguageModule
  ]
})
export class DashboardShareModule { }

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    CRUDTableModule,
    DashboardShareModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class DashboardModule { }


