import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponentModule } from '../form-component/form-component.module';
import { RouterModule } from '@angular/router';
import { StaticPagesViewModule } from '../static-page-review/static-pages-reivew.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LayoutDynamicComponent } from './layout-dynamic.component';
import { LayoutDynamicDetailComponent } from './layout-dynamic-detail/layout-dynamic-detail.component';
import { LayoutDynamicListComponent } from './layout-dynamic-list/layout-dynamic-list.component';

@NgModule({
  declarations: [LayoutDynamicComponent, LayoutDynamicDetailComponent, LayoutDynamicListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
    StaticPagesViewModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutDynamicComponent,
        children: [
          {
            path: 'list',
            component: LayoutDynamicListComponent,
          },
          {
            path: 'detail',
            component: LayoutDynamicDetailComponent,
          },
        ]
      },
    ]),
  ],
  providers: [DatePipe, DecimalPipe]
})
export class LayoutDynamicModule { }
