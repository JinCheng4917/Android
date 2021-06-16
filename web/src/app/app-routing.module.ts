import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: '仪表盘'
      }
    },
    {
      path: 'driverOrder',
      loadChildren: () => import('./pages/dashboard/dOrders/dOrder.module').then(m => m.DOrderModule),
      data: {
        title: '订单管理'
      }
    },
    {
      path: 'driverOrderManage',
      loadChildren: () => import('./pages/driver/order-manage/orderManage.module').then(m => m.OrderManageModule),
      data: {
        title: '查看订单'
      }
    },
    {
      path: 'personalCenter',
      loadChildren: () => import('./pages/personal-center/personal-center.module').then(m => m.PersonalCenterModule),
      data: {
        title: '个人中心'
      }
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
