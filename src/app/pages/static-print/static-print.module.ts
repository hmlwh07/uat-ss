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
import { PersonalAccidentPrintComponent } from './personal-accident-print/personal-accident-print.component';

@NgModule({
  declarations: [StaticPrintDirective, FarmerPrintComponent, MoterPrintComponent, CoveragePrintComponent, AddonPrintComponent, FireDetailPrintComponent, FireRiskPrintComponent, HealthPrintComponent, PaPrintComponent, EndoPrintComponent, EndoGripPrintComponent, EndoSignPrintComponent, EducationLifeGripPrintComponent, EducationLifePrintComponent, SimplePagePrintComponent, HealthQuoPrintComponent, FirePrintComponent, HolderPrintComponent, TravelPrintComponent, PersonalAccidentPrintComponent],
  exports: [StaticPrintDirective, FarmerPrintComponent, MoterPrintComponent, FireDetailPrintComponent, FireRiskPrintComponent, PaPrintComponent, HealthPrintComponent, EndoPrintComponent, EndoGripPrintComponent, EndoSignPrintComponent, EducationLifeGripPrintComponent, EducationLifePrintComponent, SimplePagePrintComponent, HealthQuoPrintComponent, FirePrintComponent, HolderPrintComponent, TravelPrintComponent, PersonalAccidentPrintComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    LanguageModule,
  ],
  providers: [MotorPrintService]
})
export class StaticPrintModule { }
