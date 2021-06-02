import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  },
  {
    path: 'person-detail',
    loadChildren: () => import('../person-detail/person-detail.module').then( m => m.PersonDetailPageModule)
  },
  {
    path: 'my-bring',
    loadChildren: () => import('../my-bring/my-bring.module').then( m => m.MyBringPageModule)
  },
  {
    path: 'my-publish',
    loadChildren: () => import('../my-publish/my-publish.module').then( m => m.MyPublishPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('../evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}
