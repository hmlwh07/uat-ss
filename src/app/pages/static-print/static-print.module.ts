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

@NgModule({
  declarations: [StaticPrintDirective, FarmerPrintComponent, MoterPrintComponent, CoveragePrintComponent, AddonPrintComponent, FireDetailPrintComponent, FireRiskPrintComponent, HealthPrintComponent, PaPrintComponent],
  exports: [StaticPrintDirective, FarmerPrintComponent, MoterPrintComponent, FireDetailPrintComponent, FireRiskPrintComponent, PaPrintComponent, HealthPrintComponent],
  imports: [
    CommonModule
  ]
})
export class StaticPrintModule { }
