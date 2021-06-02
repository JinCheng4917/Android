import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBringPageRoutingModule } from './my-bring-routing.module';

import { MyBringPage } from './my-bring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBringPageRoutingModule
  ],
  declarations: [MyBringPage]
})
export class MyBringPageModule {}
