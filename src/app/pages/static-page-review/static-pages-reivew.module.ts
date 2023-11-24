import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StaticPageViewDirective } from './static-pages-reivew.directive';
import { MatRadioModule } from '@angular/material/radio';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { SimplePageViewComponent } from './simple-page-view/simple-page-view.component';
import { AddonViewComponent } from './addon-view/addon-view.component';
import { CoverageViewComponent } from './coverage-view/coverage-view.component';
import { EducationLifeGripViewComponent } from './education-life-griph-view/education-life-griph-view.component';
import { EducationLifeViewComponent } from './education-life-view/education-life-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FireBuildingComponent } from './fire-building/fire-building.component';
import { CalculatedBuildingComponent } from './calculated-building/calculated-building.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FireRiskViewComponent } from './fire-risk-view/fire-risk-view.component';
import { FirePageViewComponent } from './fire-page-view/fire-page-view.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { EndoGripViewComponent } from './endo-griph-view/endo-griph-view.component';
import { EndoViewComponent } from './endo-view/endo-view.component';
import { MotorAddonComponent } from '../static-pages/motor-addon/motor-addon.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MotorAddonViewComponent } from './motor-addon-view/motor-addon-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HealthQuoViewComponent } from './health-quo-view/health-quo-view.component';
import { TravelViewComponent } from './travel-page-view/travel-page-view.component';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
@NgModule({
  declarations: [
    StaticPageViewDirective,
    SimplePageViewComponent,
    AddonViewComponent,
    CoverageViewComponent,
    HealthQuoViewComponent,
    EducationLifeViewComponent,
    EducationLifeGripViewComponent,
    FireBuildingComponent,
    CalculatedBuildingComponent,
    FireRiskViewComponent,
    FirePageViewComponent,
    EndoGripViewComponent,
    EndoViewComponent,
    MotorAddonViewComponent,
    TravelViewComponent,
  ],
  exports: [
    StaticPageViewDirective,
    SimplePageViewComponent,
    AddonViewComponent,
    CoverageViewComponent,
    HealthQuoViewComponent,
    EducationLifeViewComponent,
    EducationLifeGripViewComponent,
    FirePageViewComponent,
    FireRiskViewComponent,
    EndoGripViewComponent,
    EndoViewComponent,
    MotorAddonViewComponent,
    TravelViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CRUDTableModule,
    ReactiveFormsModule,
    NgbModalModule,
    MatRadioModule,
    MatDatepickerModule,
    NgbDatepickerModule,
    MatSlideToggleModule,
    NgApexchartsModule,
    NgSelectModule,
    LanguageModule,
  ]
})
export class StaticPagesViewModule { }
