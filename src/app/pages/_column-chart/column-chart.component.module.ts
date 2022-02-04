//import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from "ng-apexcharts";

import { ColumnChartComponent } from "./column-chart.component";

@NgModule({
  declarations: [ColumnChartComponent],
  imports: [CommonModule, NgApexchartsModule],
  exports: [
    ColumnChartComponent
  ],
  providers: [],
  bootstrap: [ColumnChartComponent]
})
export class ColumnChartModule {}
