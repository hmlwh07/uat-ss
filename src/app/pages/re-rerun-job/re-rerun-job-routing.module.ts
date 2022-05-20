import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReRerunJobPage } from './re-rerun-job.page';

const routes: Routes = [
  {
    path: '',
    component: ReRerunJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReRerunJobPageRoutingModule {}
