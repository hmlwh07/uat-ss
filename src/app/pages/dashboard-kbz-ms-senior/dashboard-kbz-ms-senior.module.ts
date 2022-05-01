import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';




import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardKbzMsSeniorPage } from './dashboard-kbz-ms-senior.page';
import { DashboardKbzMsSeniorPageRoutingModule } from './dashboard-kbz-ms-senior-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    DashboardKbzMsSeniorPageRoutingModule
  ],
  declarations: [DashboardKbzMsSeniorPage]
})
export class DashboardKbzMsSeniorPageModule {}
