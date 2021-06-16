import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonalCenterModule} from './pages/personal-center/personal-center.module';
import {FuncModule} from './func/func.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {YunzhiInterceptor} from './net/yunzhi.interceptor';
import {AccountComponent} from './pages/dashboard/account/account.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OrderManageComponent} from './pages/driver/order-manage/order-manage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {DashboardModule} from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FuncModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        PersonalCenterModule,
        IonicModule.forRoot(),
        DashboardModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YunzhiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
