import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityManagementListComponent } from './activity-management-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivityDataListComponent } from './activity-data-list/activity-data-list.component';
import { ShareComponentModule } from '../share-components/share-component.module';



@NgModule({
  declarations: [ActivityManagementListComponent, ActivityDataListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    ShareComponentModule,
    NgSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivityManagementListComponent,
      },
    ]),

  ]
})
export class ActivityManagementListModule { }
