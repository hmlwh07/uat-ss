import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardKbzMsSeniorPage } from './dashboard-kbz-ms-senior.page';



const routes: Routes = [
  {
    path: '',
    component: DashboardKbzMsSeniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardKbzMsSeniorPageRoutingModule {}
