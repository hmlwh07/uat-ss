import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoveragePageComponent } from './coverage-page/coverage-page.component';
import { AddonPageComponent } from './addon-page/addon-page.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { StaticPageDirective } from './static-pages.directive';
import { MatRadioModule } from '@angular/material/radio';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { HealthQuoComponent } from './health-quo/health-quo.component';
import { EducationLifeComponent } from './education-life/education-life.component';
import { EducationLifeGripComponent } from './education-life-griph/education-life-griph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplePagePolicyComponent } from './simple-page-policy/simple-page-policy.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SurroundingBuildingComponent } from './surrounding-building/surrounding-building.component';
import { SurroundingDetailComponent } from './surrounding-building/surrounding-detail/surrounding-detail.component';
import {  NgSelectModule } from '@ng-select/ng-select';
import { CalculatedBuildingComponent } from './calculated-building/calculated-building.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TablesComponent } from './tables/tables.component';
@NgModule({
  declarations: [CoveragePageComponent, AddonPageComponent, SimplePageComponent, StaticPageDirective, HealthQuoComponent, EducationLifeComponent,EducationLifeGripComponent,SimplePagePolicyComponent, SurroundingBuildingComponent, SurroundingDetailComponent, CalculatedBuildingComponent, TablesComponent],
  exports: [CoveragePageComponent, AddonPageComponent, SimplePageComponent, StaticPageDirective, HealthQuoComponent,EducationLifeComponent,EducationLifeGripComponent,SimplePagePolicyComponent,SurroundingBuildingComponent,SurroundingDetailComponent,CalculatedBuildingComponent],
  imports: [
    CommonModule,
    FormsModule,
    CRUDTableModule,
    ReactiveFormsModule,
    NgbModalModule,
    MatRadioModule,
    NgbDatepickerModule,
    NgSelectModule,
    MatSlideToggleModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class StaticPagesModule { }
