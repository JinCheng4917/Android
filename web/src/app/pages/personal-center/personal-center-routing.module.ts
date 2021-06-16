import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {ModifyPasswordComponent} from './modify-password/modify-password.component';
import {MyPublishlComponent} from '../dashboard/my-publish/my-publishl.component';
import {MyBringComponent} from '../dashboard/my-bring/my-bring.component';


const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    data: {
      title: '首页'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule {
}
