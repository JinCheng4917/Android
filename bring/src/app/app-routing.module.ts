import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgxEchartsModule} from "ngx-echarts";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'orderDetail/:id',
        loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
    },

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
