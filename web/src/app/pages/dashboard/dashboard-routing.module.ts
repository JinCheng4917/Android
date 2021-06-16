import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabComponent} from './tab/tab.component';
import {PersonalCenterModule} from '../personal-center/personal-center.module';
import {PersonComponent} from '../personal-center/person/person.component';
import {PersonDetailComponent} from '../personal-center/person-detail/person-detail.component';
import {ModifyPasswordComponent} from '../personal-center/modify-password/modify-password.component';
import {MyPublishlComponent} from './my-publish/my-publishl.component';
import {MyBringComponent} from './my-bring/my-bring.component';
import {AboutComponent} from './about/about.component';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {TakeComponent} from './take/take.component';
import {DOrdersComponent} from './dOrders/dOrders.component';
import {AddComponent} from './add/add.component';
import {AccountComponent} from './account/account.component';
import {AcAddComponent} from './account/add/acAdd.component';
import View from 'echarts/types/src/coord/View';
import {ViewComponent} from './view/view.component';
import {MyViewComponent} from './my-view/my-view.component';
import {OrderComponent} from './order/order.component';
import {DriveEvaluateComponent} from './drive-evaluate/drive-evaluate.component';
import {EvaViewComponent} from './eva-view/eva-view.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TabComponent,
    data: {
      title: '首页'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '首页'
    }
  },
  {
    path: 'personal',
    component: PersonComponent,
    data: {
      title: '我的'
    }
  },
  {
    path: 'detail',
    component: PersonDetailComponent,
    data: {
      title: '个人信息'
    }
  },
  {
    path: 'modifyPassword',
    component: ModifyPasswordComponent,
    data: {
      title: '修改密码'
    }
  },
  {
    path: 'publish',
    component: MyPublishlComponent,
    data: {
      title: '发布'
    }
  },
  {
    path: 'bring',
    component: MyBringComponent,
    data: {
      title: '揽收'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: '关于'
    }
  },
  {
    path: 'evaluate',
    component: EvaluateComponent,
    data: {
      title: '评价'
    }
  },
  {
    path: 'driver-evaluate',
    component: DriveEvaluateComponent,
    data: {
      title: '评价'
    }
  },
  {
    path: 'take',
    component: TakeComponent,
    data: {
      title: '揽收'
    }
  },
  {
    path: 'dOrder',
    component: DOrdersComponent,
    data: {
      title: '订单'
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      title: '订单'
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: '发布'
    }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {
      title: '账户管理'
    }
  },
  {
    path: 'accountAdd',
    component: AcAddComponent,
    data: {
      title: '新增'
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      title: '新增'
    }
  },
  {
    path: 'my-view/:id',
    component: MyViewComponent,
    data: {
      title: '新增'
    }
  },
  {
    path: 'eva-view/:id',
    component: EvaViewComponent,
    data: {
      title: '新增'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
