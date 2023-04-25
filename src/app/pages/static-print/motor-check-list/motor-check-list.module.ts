import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorCheckListPageRoutingModule } from './motor-check-list-routing.module';

import { MotorCheckListPage } from './motor-check-list.page';
import { TranslatePipe } from 'src/app/modules/languages/translate.pipe';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageModule,
    MotorCheckListPageRoutingModule
  ],
  declarations: [],
})
export class MotorCheckListPageModule {}
