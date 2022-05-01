import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardKbzMsManagerPageRoutingModule } from './dashboard-kbz-ms-manager-routing.module';

import { DashboardKbzMsManagerPage } from './dashboard-kbz-ms-manager.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    DashboardKbzMsManagerPageRoutingModule
  ],
  declarations: [DashboardKbzMsManagerPage]
})
export class DashboardKbzMsManagerPageModule {}
