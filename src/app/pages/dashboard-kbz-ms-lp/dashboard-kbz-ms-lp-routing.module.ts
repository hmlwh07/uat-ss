import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardKbzMsLpPage } from './dashboard-kbz-ms-lp.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardKbzMsLpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardKbzMsLpPageRoutingModule {}
