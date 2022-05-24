import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FnaDetailComponent } from './fna-detail.component';
import { ChartAnalysisComponent } from './chart-analysis/chart-analysis.component';
import { ProductAnalysisComponent } from './chart-analysis/product-analysis/product-analysis.component';
import { LlpAnalysisComponent } from './chart-analysis/llp-analysis/llp-analysis.component';
import { EducationComponent } from './education/education.component';
import { AssetComponent } from './asset/asset.component';
import { IncomeComponent } from './income/income.component';
import { HealthComponent } from './health/health.component';
import { RetirementComponent } from './retirement/retirement.component';
import { FreedomComponent } from './freedom/freedom.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FANService } from './fna-manage.service';
import { FnaDataViewComponent } from './fna-data-view/fna-data-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../core/is-json';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';


@NgModule({
  declarations: [FnaDetailComponent,
    ChartAnalysisComponent,
    ProductAnalysisComponent, RetirementComponent,
    FreedomComponent, FnaDataViewComponent,
    LlpAnalysisComponent, EducationComponent, AssetComponent, IncomeComponent,
    HealthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    CRUDTableModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    LanguageModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: FnaDetailComponent,
      },
    ]),

  ],
  exports: [ChartAnalysisComponent,
    ProductAnalysisComponent,
    RetirementComponent,
    FreedomComponent, FnaDataViewComponent,
    LlpAnalysisComponent, EducationComponent, AssetComponent,
    IncomeComponent,
    HealthComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    providers: [FANService, DatePipe,{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class FnaDetailModule { }
