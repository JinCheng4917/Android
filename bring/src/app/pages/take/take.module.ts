import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BringPageRoutingModule } from './take-routing.module';

import { TakePage } from './take.page';
import {FuncModule} from '../../func/func.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BringPageRoutingModule,
    FuncModule
  ],
  declarations: [TakePage]
})
export class BringPageModule {}
