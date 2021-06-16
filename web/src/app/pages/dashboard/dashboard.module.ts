import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TabComponent} from './tab/tab.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {IonicModule} from '@ionic/angular';
import {FuncModule} from '../../func/func.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MyPublishlComponent} from './my-publish/my-publishl.component';
import {MyBringComponent} from './my-bring/my-bring.component';
import {AboutComponent} from './about/about.component';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {TakeComponent} from './take/take.component';
import {DOrdersComponent} from './dOrders/dOrders.component';
import {AddComponent} from './add/add.component';
import {AccountComponent} from './account/account.component';
import {AcAddComponent} from './account/add/acAdd.component';
import {ViewComponent} from './view/view.component';
import {MyViewComponent} from './my-view/my-view.component';
import {OrderComponent} from './order/order.component';
import {MatLineModule} from '@angular/material/core';
import {DriveEvaluateComponent} from './drive-evaluate/drive-evaluate.component';
import {EvaViewComponent} from './eva-view/eva-view.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [TabComponent, MyPublishlComponent, MyBringComponent, AboutComponent, EvaluateComponent, TakeComponent, DOrdersComponent, AddComponent, AccountComponent,
    AcAddComponent, ViewComponent, MyViewComponent, OrderComponent, DriveEvaluateComponent, EvaViewComponent, HomeComponent],
  exports: [
    TabComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    FuncModule,
    MatLineModule,
  ]
})
export class DashboardModule {
}
