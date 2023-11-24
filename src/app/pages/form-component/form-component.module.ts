import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from './input-box/input-box.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { CheckboxBoxComponent } from './checkbox-box/checkbox-box.component';
import { FileBoxComponent } from './file-box/file-box.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ButtonBoxComponent } from './button-box/button-box.component';
import { EditButtonModalComponent } from './edit-button-modal/edit-button-modal.component';
import { EditInputModalComponent } from './edit-input-modal/edit-input-modal.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PageConfigModalComponent } from './page-config-modal/page-config-modal.component';
import { NgbDatepickerModule, NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { DateBoxComponent } from './date-box/date-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExportConfigModalComponent } from './export-config-modal/export-config-modal.component';
import { ImportConfigModalComponent } from './import-config-modal/import-config-modal.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FormViewModalComponent } from './form-view-modal/form-view-modal.component';
import { LabelConfigModalComponent } from './label-config-modal/label-config-modal.component';
import { LabelBoxComponent } from './label-box/label-box.component';
// import { NrcPopupPage } from './nrc-popup/nrc-popup.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCurrencyModule } from "ngx-currency";
import { MatNativeDateModule } from '@angular/material/core';
import { PrintViewBoxComponent } from './print-view-box/print-view-box.component';
import { StaticPrintModule } from '../static-print/static-print.module';
import { CustomerListShareModule } from '../customer-list/customer-list.share.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CustomInputAlertComponent } from './custom-input-alert/custom-input-alert.component';
import { LanguageModule } from '../../modules/languages/languages.modules';
import { CustomerDetailShareModule } from '../customer-detail/customer-detail.share.module';
import { ShareComponentModule } from '../share-components/share-component.module';
import { PrintViewBoxMobileComponent } from './print-view-box-mobile/print-view-box-mobile.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    SelectBoxComponent,
    RadioBoxComponent,
    CheckboxBoxComponent,
    FileBoxComponent,
    DialogBoxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ButtonBoxComponent,
    EditButtonModalComponent,
    EditInputModalComponent,
    PageConfigModalComponent,
    CustomDialogComponent,
    CustomInputAlertComponent,
    DateBoxComponent,
    ImportConfigModalComponent,
    ExportConfigModalComponent,
    // SortConfigModalComponent
    FormViewModalComponent,
    LabelConfigModalComponent,
    LabelBoxComponent,
    // NrcPopupPage,
    PrintViewBoxComponent,
    PrintViewBoxMobileComponent
    // CusMatDatePicker,
  ],
  exports: [
    InputBoxComponent,
    SelectBoxComponent,
    RadioBoxComponent,
    CheckboxBoxComponent,
    FileBoxComponent,
    DialogBoxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ButtonBoxComponent,
    EditButtonModalComponent,
    EditInputModalComponent,
    PageConfigModalComponent,
    CustomDialogComponent,
    CustomInputAlertComponent,
    DateBoxComponent,
    ExportConfigModalComponent,
    ImportConfigModalComponent,
    // SortConfigModalComponent
    FormViewModalComponent,
    LabelConfigModalComponent,
    LabelBoxComponent,
    // NrcPopupPage,
    PrintViewBoxComponent,
    PrintViewBoxMobileComponent
    // CusMatDatePicker
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    NgbModalModule,
    NgbDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    CRUDTableModule,
    NgbTypeaheadModule,
    NgSelectModule,
    NgxCurrencyModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StaticPrintModule,
    CustomerListShareModule,
    CustomerDetailShareModule,
    QRCodeModule,
    LanguageModule,
    ShareComponentModule,
  ],
  providers: [DatePipe,DecimalPipe]
})

export class FormComponentModule { }
