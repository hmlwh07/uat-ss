import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { Wizard1Component } from './wizard1/wizard1.component';
import { Wizard2Component } from './wizard2/wizard2.component';
import { Wizard3Component } from './wizard3/wizard3.component';
import { Wizard4Component } from './wizard4/wizard4.component';

@NgModule({
  declarations: [ Wizard1Component, Wizard2Component, Wizard3Component, Wizard4Component],
  exports: [ Wizard1Component, Wizard2Component, Wizard3Component, Wizard4Component],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
  ]
})
export class WizardsModule { }
