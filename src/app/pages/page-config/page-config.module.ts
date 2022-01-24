import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageConfigComponent } from './page-config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormComponentModule } from '../form-component/form-component.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ColAPIService } from './col.service';
import { TableAPIService } from './table.service';
import { DashboardShareModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [PageConfigComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    DashboardShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageConfigComponent,
      },
    ]),
  ],
  providers: [ColAPIService,TableAPIService]
})
export class PageConfigModule {}
