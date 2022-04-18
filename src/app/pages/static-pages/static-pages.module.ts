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
import { NgSelectModule } from '@ng-select/ng-select';
import { CalculatedBuildingComponent } from './calculated-building/calculated-building.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TablesComponent } from './tables/tables.component';
import { AddCalculatedBuildingComponent } from './calculated-building/add-calculated-building/add-calculated-building.component';
import { FirePageComponent } from './fire-simple-page/fire-simple-page.component';
import { FireRiskComponent } from './fire-risk/fire-risk.component';
import { RiskDetailComponent } from './fire-risk/risk-detail/risk-detail.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { EndoGripComponent } from './endo-griph/endo-griph.component';
import { EndoComponent } from './endo/endo.component';
import { TravelComponent } from './travel-page/travel-page.component';
// import { ChildComponent } from './common-list/child.component';
// //listings
// import {ListingsPagerComponent} from './pager/pager.component';
// import { CommonListingComponent,ListingPipe} from './common-list/common-list.component';
// import {ListingsLeadListComponent } from './listings/lead/listings-lead-list.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [CoveragePageComponent, AddonPageComponent, SimplePageComponent, StaticPageDirective, HealthQuoComponent, EducationLifeComponent, EducationLifeGripComponent, SimplePagePolicyComponent, FirePageComponent, FireRiskComponent, SurroundingBuildingComponent, SurroundingDetailComponent, CalculatedBuildingComponent, TablesComponent, AddCalculatedBuildingComponent,RiskDetailComponent,EndoComponent,EndoGripComponent,TravelComponent],
  exports: [CoveragePageComponent, AddonPageComponent, SimplePageComponent, StaticPageDirective, HealthQuoComponent, EducationLifeComponent, EducationLifeGripComponent, SimplePagePolicyComponent, SurroundingBuildingComponent, FirePageComponent, FireRiskComponent, SurroundingDetailComponent, CalculatedBuildingComponent,RiskDetailComponent,EndoComponent,EndoGripComponent,TravelComponent],
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
    NgxCurrencyModule,
    MatMenuModule
  ]
})
export class StaticPagesModule { }
