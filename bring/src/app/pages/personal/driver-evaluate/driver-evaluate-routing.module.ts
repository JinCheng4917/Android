import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverEvaluatePage } from './driver-evaluate.page';

const routes: Routes = [
  {
    path: '',
    component: DriverEvaluatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverEvaluatePageRoutingModule {}
