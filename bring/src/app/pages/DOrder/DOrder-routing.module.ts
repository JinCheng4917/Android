import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DOrderPage } from './DOrder.page';

const routes: Routes = [
  {
    path: '',
    component: DOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
