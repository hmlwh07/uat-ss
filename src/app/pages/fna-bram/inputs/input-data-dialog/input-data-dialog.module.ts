import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDataDialogComponent } from './input-data-dialog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InputDataDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
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
