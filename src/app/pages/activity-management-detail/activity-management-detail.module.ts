import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityManagementDetailComponent } from './activity-management-detail.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatedModalCompoent } from './pop-up-modal/related-modal.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ActivityManagementDetailComponent,RelatedModalCompoent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    CRUDTableModule,
    NgbDatepickerModule,
    MatDatepickerModule,
    MatInputModule,
    NgSelectModule,
    CustomerListShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivityManagementDetailComponent,
      },
    ]),
  ],
})
export class ActivityManagementDetailModule { }
