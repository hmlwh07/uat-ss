import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorCheckListPageRoutingModule } from './motor-check-list-routing.module';

import { MotorCheckListPage } from './motor-check-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorCheckListPageRoutingModule
  ],
  declarations: []
})
export class MotorCheckListPageModule {}
