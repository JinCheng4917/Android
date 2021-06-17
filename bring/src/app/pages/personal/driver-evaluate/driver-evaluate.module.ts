import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverEvaluatePageRoutingModule } from './driver-evaluate-routing.module';

import { DriverEvaluatePage } from './driver-evaluate.page';
import {FuncModule} from '../../../func/func.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriverEvaluatePageRoutingModule,
        FuncModule
    ],
  declarations: [DriverEvaluatePage]
})
export class DriverEvaluatePageModule {}
