import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FuncModule} from '../../../func/func.module';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FuncModule,
        IonicModule,
    ]
})
export class LoginModule { }
