import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerPrintComponent } from './farmer-print/farmer-print.component';
import { MoterPrintComponent } from './moter-print/moter-print.component';
import { StaticPrintDirective } from './static-print-view.directive';
import { CoveragePrintComponent } from './coverage-print/coverage-print.component';
import { AddonPrintComponent } from './addon-print/addon-print.component';

@NgModule({
  declarations: [StaticPrintDirective,FarmerPrintComponent,MoterPrintComponent, CoveragePrintComponent, AddonPrintComponent],
  exports: [StaticPrintDirective,FarmerPrintComponent,MoterPrintComponent],
  imports: [
    CommonModule
  ]
})
export class StaticPrintModule { }
