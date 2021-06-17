import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'dOrder',
        loadChildren: () => import('../DOrder/DOrder.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'take',
        loadChildren: () => import('../take/take.module').then(m => m.BringPageModule)
      },
      {
        path: 'personal',
        loadChildren: () => import('../personal/personal.module').then(m => m.PersonalPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../add/add.module').then(m => m.AddPageModule)
      },
      {
        path: 'view/:id',
        loadChildren: () => import('../view/view.module').then( m => m.ViewPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
