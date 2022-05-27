import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { StaticPagesModule } from '../static-pages/static-pages.module';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    StaticPagesModule,
    LanguageModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductFormComponent,
      },
    ]),
  ],
  providers: [DatePipe,DecimalPipe]
})
export class ProductFormModule {}
