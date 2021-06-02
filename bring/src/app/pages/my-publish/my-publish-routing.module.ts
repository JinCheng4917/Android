import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPublishPage } from './my-publish.page';

const routes: Routes = [
  {
    path: '',
    component: MyPublishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPublishPageRoutingModule {}
