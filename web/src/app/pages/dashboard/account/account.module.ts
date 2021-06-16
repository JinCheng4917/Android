import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxAmapModule} from 'ngx-amap';
import {BrowserModule} from '@angular/platform-browser';
import {AcAddComponent} from './add/acAdd.component';
import {IonicModule} from '@ionic/angular';
import {FuncModule} from '../../../func/func.module';

@NgModule({
  declarations: [AcAddComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FuncModule
  ]
})
export class AccountModule {
}
