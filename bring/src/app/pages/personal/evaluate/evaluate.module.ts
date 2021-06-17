import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluatePageRoutingModule } from './evaluate-routing.module';

import { EvaluatePage } from './evaluate.page';
import {FuncModule} from '../../../func/func.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EvaluatePageRoutingModule,
        FuncModule
    ],
  declarations: [EvaluatePage]
})
export class EvaluatePageModule {}
