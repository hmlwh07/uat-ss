import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardKbzMsManagerPage } from './dashboard-kbz-ms-manager.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardKbzMsManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardKbzMsManagerPageRoutingModule {}
