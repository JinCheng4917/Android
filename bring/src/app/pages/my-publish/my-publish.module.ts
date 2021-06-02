import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPublishPageRoutingModule } from './my-publish-routing.module';

import { MyPublishPage } from './my-publish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPublishPageRoutingModule
  ],
  declarations: [MyPublishPage]
})
export class MyPublishPageModule {}
