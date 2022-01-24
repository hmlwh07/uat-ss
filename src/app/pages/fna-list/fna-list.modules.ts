import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FnaListComponent } from './fna-list.component';
import { AuthService } from 'src/app/modules/auth';



@NgModule({
  declarations: [FnaListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: FnaListComponent,
      },
    ]),

  ],
  providers: [AuthService]
})
export class FnaListModule { }
