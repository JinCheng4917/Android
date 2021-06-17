import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyViewPage } from './my-view.page';

const routes: Routes = [
  {
    path: '',
    component: MyViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyViewPageRoutingModule {}
