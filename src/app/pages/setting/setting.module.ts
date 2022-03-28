import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageModule,
    SettingPageRoutingModule
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
