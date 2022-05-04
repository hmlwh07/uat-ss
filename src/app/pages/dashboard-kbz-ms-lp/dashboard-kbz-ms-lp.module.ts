import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardKbzMsLpPageRoutingModule } from './dashboard-kbz-ms-lp-routing.module';

import { DashboardKbzMsLpPage } from './dashboard-kbz-ms-lp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardKbzMsLpPageRoutingModule
  ],
  declarations: [DashboardKbzMsLpPage]
})
export class DashboardKbzMsLpPageModule {}
