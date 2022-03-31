import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ResetPasswordComponent } from './reset-password.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  declarations: [ResetPasswordComponent, OtpModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    MatDatepickerModule,
    LanguageModule,
    FormComponentModule,
    NgxOtpInputModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResetPasswordComponent,
      },
    ]),
  ]
})
export class ResetPasswordModule { }
