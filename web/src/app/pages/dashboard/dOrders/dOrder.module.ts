import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import {DOrdersComponent} from './dOrders.component';
import {DOrderRoutingModule} from './dOrder-routing.module';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DOrderRoutingModule,
    ReactiveFormsModule,
    FuncModule,
    FormsModule,
    IonicModule,
    // NgxAmapModule.forRoot({
    //   apiKey: '1c966914bda7a573909e2376cfe05b1d'
    // })
  ]
})
export class DOrderModule {
}
