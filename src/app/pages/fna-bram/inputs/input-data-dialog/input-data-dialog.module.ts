import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDataDialogComponent } from './input-data-dialog.component';
import { RouterModule } from '@angular/router';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';



@NgModule({
  declarations: [InputDataDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    LanguageModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputDataDialogComponent,
      },
    ]),
  ],
 
})
export class InputDataDialogModule { }
