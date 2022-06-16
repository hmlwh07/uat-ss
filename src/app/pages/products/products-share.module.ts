import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { ProductsComponent } from './products.component';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { MatRadioModule } from '@angular/material/radio';
import { CoverageModalComponent } from './coverage-modal/coverage-modal.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsPageComponent } from './products-page.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { PageUIModalComponent } from './page-ui-modal/page-ui-modal.component';
import { CoverageOption } from './coverage-option/coverage-option.component';
import { CoverageDataService } from './services/coverage-data.service';
import { AddOnDataService } from './services/add-on-data.service';
import { ProductUIDeleteService, ProductUIService } from './services/products-UI.service';
import { UIPagesComponent } from './ui-pages/ui-pages.component';
import { ViewUIModalComponent } from './view-ui-modal/view-ui-modal.component';
import { WizardsModule } from '../../wizards/wizards.module';
import { StaticUIModalComponent } from './static-ui-modal/static-ui-modal.component';
import { InputConfigModalComponent } from './input-config-modal/input-config-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrintConfigModalComponent } from './print-config-modal/print-config-modal.component';
import { PrintFormsModalComponent } from './print-forms-modal/print-forms-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSortModule } from '@angular/material/sort';
import { EditPrintUIModalComponent } from './edit-print-ui-modal/edit-print-ui-modal.component';
import { PrintPreviewModalComponent } from './print-preview-modal/print-preview-modal.component';
import { EditSourceModalComponent } from './edit-source-modal/edit-source-modal.component';
import { ValidityPeriodService } from './services/validity-period.service';
import { MotorPrintService } from './services/motor-print.service';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { HealthPrintService } from './services/health-print.service';
@NgModule({
  declarations: [ProductsComponent, ProductsModalComponent, CoverageModalComponent, ProductDetailsComponent, PageUIModalComponent, CoverageOption, UIPagesComponent, ViewUIModalComponent, StaticUIModalComponent, InputConfigModalComponent, PrintConfigModalComponent, PrintFormsModalComponent, EditPrintUIModalComponent, PrintPreviewModalComponent, EditSourceModalComponent],

  exports: [ProductsComponent, ProductsModalComponent, CoverageModalComponent, ProductDetailsComponent, PageUIModalComponent, CoverageOption, UIPagesComponent, ViewUIModalComponent, StaticUIModalComponent, InputConfigModalComponent, PrintConfigModalComponent, PrintFormsModalComponent, EditPrintUIModalComponent, PrintPreviewModalComponent, EditSourceModalComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    MatRadioModule,
    CRUDTableModule,
    NgbTypeaheadModule,
    WizardsModule,
    LanguageModule,
    NgSelectModule,
    DragDropModule,
    MatSortModule,
    OverlayModule,
  ],
  providers: [CoverageDataService, AddOnDataService, ProductUIService, ProductUIDeleteService, ValidityPeriodService, MotorPrintService,HealthPrintService]
})
export class ProductShareModule { }
