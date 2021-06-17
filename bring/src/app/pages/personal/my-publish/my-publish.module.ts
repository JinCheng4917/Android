import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPublishPageRoutingModule } from './my-publish-routing.module';

import { MyPublishPage } from './my-publish.page';
import {FuncModule} from '../../../func/func.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyPublishPageRoutingModule,
        FuncModule
    ],
  declarations: [MyPublishPage]
})
export class MyPublishPageModule {}
