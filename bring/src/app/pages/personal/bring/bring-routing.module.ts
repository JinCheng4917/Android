import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BringPage } from './bring.page';

const routes: Routes = [
  {
    path: '',
    component: BringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BringPageRoutingModule {}
