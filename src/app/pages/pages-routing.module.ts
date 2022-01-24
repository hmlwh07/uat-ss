import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'product/page-group',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'config-layout',
        loadChildren: () =>
          import('./page-config/page-config.module').then((m) => m.PageConfigModule),
      },
      {
        path: 'product-form',
        loadChildren: () =>
          import('./product-form/product-form.module').then((m) => m.ProductFormModule),
      },
      {
        path: 'product/products-config',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('./quotations/quotations.module').then((m) => m.QuotationsModule),
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('./policy/policy.module').then((m) => m.PolicyModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('../modules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'resourse-detail',
        loadChildren: () =>
          import('./resourse-detail/resourse-detail.module').then(
            (m) => m.ResourseDetailModule
          ),
      },
      {
        path: 'currency-exchange',
        loadChildren: () =>
          import('./currency-exchange/currency-exchange.module').then(
            (m) => m.CurrencyExChangeModule
          ),
      },
      {
        path: 'activity/activity-management-list',
        loadChildren: () =>
          import('./activity-management-list/activity-management-list.module').then(
            (m) => m.ActivityManagementListModule
          ),
      },
      {
        path: 'activity/activity-management-detail',
        loadChildren: () =>
          import('./activity-management-detail/activity-management-detail.module').then(
            (m) => m.ActivityManagementDetailModule
          ),
      },
      {
        path: 'customer/customer-list',
        loadChildren: () =>
          import('./customer-list/customer-list.module').then(
            (m) => m.CustomerListModule
          ),
      },
      {
        path: 'customer/customer-detail',
        loadChildren: () =>
          import('./customer-detail/customer-detail.module').then(
            (m) => m.CustomerDetailModule
          ),
      },
      {
        path: 'lead/lead-list',
        loadChildren: () =>
          import('./lead-list/lead-list.module').then(
            (m) => m.LeadListModule
          ),
      },
      {
        path: 'lead/lead-detail',
        loadChildren: () =>
          import('./lead-detail/lead-detail.module').then(
            (m) => m.LeadDetailModule
          ),
      },
      {
        path: 'fna/fna-list',
        loadChildren: () =>
          import('./fna-list/fna-list.modules').then(
            (m) => m.FnaListModule
          ),
      },
      {
        path: 'fna/fna-detail',
        loadChildren: () =>
          import('./fna-detail/fna-detail.modules').then(
            (m) => m.FnaDetailModule
          ),
      },
      {
        path: 'fna/fna-bram',
        loadChildren: () =>
          import('./fna-bram/fna-bram.module').then(
            (m) => m.FnaBramModule
          ),
      },
     
      {
        path: '',
        redirectTo: '/product/page-group',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
