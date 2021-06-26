import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EvaViewPage } from './eva-view.page';
import {FuncModule} from '../../../func/func.module';
import {EvaViewPageRoutingModule} from './eva-view-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EvaViewPageRoutingModule,
        FuncModule
    ],
  declarations: [EvaViewPage]
})
export class EvaViewPageModule {}
