import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonComponent} from './person/person.component';
import {ModifyPasswordComponent} from './modify-password/modify-password.component';
import {PersonalCenterRoutingModule} from './personal-center-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {NgxEchartsModule} from 'ngx-echarts';
import {DashboardModule} from '../dashboard/dashboard.module';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {FuncModule} from '../../func/func.module';

@NgModule({
  declarations: [PersonComponent, ModifyPasswordComponent, PersonDetailComponent],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    FuncModule,
    DashboardModule,
    NgxEchartsModule
  ], exports: [
    PersonComponent,
    ModifyPasswordComponent,
    PersonDetailComponent,
  ],
})
export class PersonalCenterModule {
}
