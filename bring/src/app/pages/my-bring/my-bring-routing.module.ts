import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBringPage } from './my-bring.page';

const routes: Routes = [
  {
    path: '',
    component: MyBringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBringPageRoutingModule {}
