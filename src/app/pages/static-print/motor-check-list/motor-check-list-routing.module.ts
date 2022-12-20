import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorCheckListPage } from './motor-check-list.page';

const routes: Routes = [
  {
    path: '',
    component: MotorCheckListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorCheckListPageRoutingModule {}
