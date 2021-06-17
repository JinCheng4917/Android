import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyViewPageRoutingModule } from './my-view-routing.module';

import { MyViewPage } from './my-view.page';
import {FuncModule} from '../../../func/func.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyViewPageRoutingModule,
        FuncModule
    ],
  declarations: [MyViewPage]
})
export class MyViewPageModule {}
