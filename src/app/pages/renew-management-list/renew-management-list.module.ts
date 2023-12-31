import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RenewManagementListComponent } from './renew-management-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';



@NgModule({
  declarations: [RenewManagementListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgSelectModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RenewManagementListComponent,
      },
    ]),

  ]
})
export class RenewManagementListModule { }
