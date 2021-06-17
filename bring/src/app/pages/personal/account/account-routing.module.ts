import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountPage} from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
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
export class AccountPageRoutingModule {
}
