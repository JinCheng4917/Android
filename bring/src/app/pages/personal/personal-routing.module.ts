import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalPage } from './personal.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalPage
  },
  {
    path: 'modify-password',
    loadChildren: () => import('./modify-password/modify-password.module').then( m => m.ModifyPasswordPageModule)
  },
  {
    path: 'personal-detail',
    loadChildren: () => import('./personal-detail/personal-detail.module').then( m => m.PersonalDetailPageModule)
  },
  {
    path: 'bring',
    loadChildren: () => import('./bring/bring.module').then( m => m.BringPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('./evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },
  {
    path: 'driver-evaluate',
    loadChildren: () => import('./driver-evaluate/driver-evaluate.module').then( m => m.DriverEvaluatePageModule)
  },
  {
    path: 'my-view/:id',
    loadChildren: () => import('./my-view/my-view.module').then( m => m.MyViewPageModule)
  },
  {
    path: 'publish',
    loadChildren: () => import('./my-publish/my-publish.module').then( m => m.MyPublishPageModule)
  },
  {
    path: 'account-add',
    loadChildren: () => import('./account-add/account-add.module').then(m => m.AccountAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalPageRoutingModule {}
