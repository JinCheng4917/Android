import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BringPageRoutingModule } from './bring-routing.module';

import { BringPage } from './bring.page';
import {FuncModule} from '../../../func/func.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BringPageRoutingModule,
        FuncModule
    ],
  declarations: [BringPage]
})
export class BringPageModule {}
