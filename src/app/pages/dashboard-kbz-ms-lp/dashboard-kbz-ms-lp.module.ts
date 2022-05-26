import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardKbzMsLpPageRoutingModule } from './dashboard-kbz-ms-lp-routing.module';

import { DashboardKbzMsLpPage } from './dashboard-kbz-ms-lp.page';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageModule,
    DashboardKbzMsLpPageRoutingModule
  ],
  declarations: [DashboardKbzMsLpPage]
})
export class DashboardKbzMsLpPageModule {}
