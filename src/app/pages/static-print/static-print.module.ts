import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerPrintComponent } from './farmer-print/farmer-print.component';
import { MoterPrintComponent } from './moter-print/moter-print.component';
import { StaticPrintDirective } from './static-print-view.directive';
import { CoveragePrintComponent } from './coverage-print/coverage-print.component';
import { AddonPrintComponent } from './addon-print/addon-print.component';
import { FireDetailPrintComponent } from './fire-detail-print/fire-detail-print.component';
import { FireRiskPrintComponent } from './fire-risk-print/fire-risk-print.component';
import { HealthPrintComponent } from './health-print/health-print.component';
import { PaPrintComponent } from './pa-print/pa-print.component';
import { EndoPrintComponent } from './endo-print/endo-print.component';
import { EndoGripPrintComponent } from './endo-griph-print/endo-griph-print.component';
import { EndoSignPrintComponent } from './endo-sign-print/endo-sign-print.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EducationLifeGripPrintComponent } from './education-life-griph-print/education-life-griph-print.component';
import { EducationLifePrintComponent } from './education-life-print/education-life-print.component';
import { SimplePagePrintComponent } from './simple-page-print/simple-page-print.component';
import { HealthQuoPrintComponent } from './health-quo-print/health-quo-print.component';
import { FirePrintComponent } from './fire-print/fire-print.component';
import { MotorPrintService } from '../products/services/motor-print.service';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';
import { HolderPrintComponent } from './policy-holder-print/policy-holder-print.component';
import { TravelPrintComponent } from './travel-print/travel-print.component';
import { HealthCiPrintComponent } from './health-ci-print/health-ci-print.component';
import { PersonalAccidentPrintComponent } from './personal-accident-print/personal-accident-print.component';
import { PaPrintService } from '../products/services/pa.service';
import { HealthPrintService } from '../products/services/health-print.service';
import { MotorPrintMobileComponent } from './motor-print-mobile/motor-print-mobile.component';
import { HealthCiPrintMobileComponent } from './health-ci-print-mobile/health-ci-print-mobile.component';
import { FirePrintMobileComponent } from './fire-print-mobile/fire-print-mobile.component';
import { TravelPrintMobileComponent } from './travel-print-mobile/travel-print-mobile.component';
import { PersonalAccidentPrintMobileComponent } from './personal-accident-print-mobile/personal-accident-print-mobile.component';

@NgModule({
  declarations: [
    StaticPrintDirective,
    FarmerPrintComponent,
    MoterPrintComponent,
    CoveragePrintComponent,
    AddonPrintComponent,
    FireDetailPrintComponent,
    FireRiskPrintComponent,
    HealthPrintComponent,
    PaPrintComponent,
    EndoPrintComponent,
    EndoGripPrintComponent,
    EndoSignPrintComponent,
    EducationLifeGripPrintComponent,
    EducationLifePrintComponent,
    SimplePagePrintComponent,
    HealthQuoPrintComponent,
    FirePrintComponent,
    HolderPrintComponent,
    TravelPrintComponent,
    HealthCiPrintComponent,
    PersonalAccidentPrintComponent,
    MotorPrintMobileComponent,
    HealthCiPrintMobileComponent,
    FirePrintMobileComponent,
    TravelPrintMobileComponent,
    PersonalAccidentPrintMobileComponent
  ],
  exports: [
    StaticPrintDirective,
    FarmerPrintComponent,
    MoterPrintComponent,
    FireDetailPrintComponent,
    FireRiskPrintComponent,
    PaPrintComponent,
    HealthPrintComponent,
    EndoPrintComponent,
    EndoGripPrintComponent,
    EndoSignPrintComponent,
    EducationLifeGripPrintComponent,
    EducationLifePrintComponent,
    SimplePagePrintComponent,
    HealthQuoPrintComponent,
    FirePrintComponent,
    HolderPrintComponent,
    TravelPrintComponent,
    HealthCiPrintComponent,
    PersonalAccidentPrintComponent,
    MotorPrintMobileComponent,
    HealthCiPrintMobileComponent,
    FirePrintMobileComponent,
    TravelPrintMobileComponent,
    PersonalAccidentPrintMobileComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    LanguageModule,
  ],
  providers: [
    MotorPrintService,
    PaPrintService,
    HealthPrintService
  ]
})
export class StaticPrintModule { }
