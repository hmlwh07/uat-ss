import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { StaticPagesModule } from '../static-pages/static-pages.module';
import { QrSourceLinkComponent } from './qr-source-link.component';

@NgModule({
  declarations: [QrSourceLinkComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: QrSourceLinkComponent,
      },
    ]),
  ],
  providers: [DatePipe,DecimalPipe]
})
export class QrModule {}
