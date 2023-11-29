import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RenewManagementDetailComponent } from './renew-management-detail.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { NgxCurrencyDirective } from 'ngx-currency';


@NgModule({
  declarations: [RenewManagementDetailComponent,],
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
    NgbModalModule,
    NgxCurrencyDirective,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RenewManagementDetailComponent,
      },
    ]),
  ],
})
export class RenewManagementDetailModule { }
