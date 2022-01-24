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
import { HealthQuoViewComponent } from './health-quo-view/health-quo-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    StaticPageViewDirective,
    SimplePageViewComponent,
    AddonViewComponent,
    CoverageViewComponent,
    HealthQuoViewComponent,
    EducationLifeViewComponent,
    EducationLifeGripViewComponent
  ],
  exports: [
    StaticPageViewDirective,
    SimplePageViewComponent,
    AddonViewComponent,
    CoverageViewComponent,
    HealthQuoViewComponent,
    EducationLifeViewComponent,
    EducationLifeGripViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CRUDTableModule,
    ReactiveFormsModule,
    NgbModalModule,
    MatRadioModule,
    NgbDatepickerModule,
    NgApexchartsModule
  ]
})
export class StaticPagesViewModule { }
