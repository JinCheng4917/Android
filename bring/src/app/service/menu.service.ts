import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Menu} from '../func/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Array<Menu>>([
    new Menu({name: '首页', icon: 'home-outline', url: 'dashboard', roles: [Menu.ROLE_OWNER, Menu.ROLE_DRIVER]}),
    new Menu({name: '订单', icon: 'receipt-outline', url: 'order', roles: [Menu.ROLE_OWNER]}),
    new Menu({name: '揽收', icon: 'car-outline', url: 'driverOrder', roles: [Menu.ROLE_DRIVER]}),
    new Menu({name: '订单', icon: 'receipt-outline', url: 'driverOrderManage', roles: [Menu.ROLE_DRIVER]}),
    new Menu({name: '消息', icon: 'chatbubbles-outline',  url: 'account', roles: [Menu.ROLE_DRIVER, Menu.ROLE_OWNER]}),
    new Menu({name: '我的', icon: 'person-outline',  url: 'personalCenter', roles: [Menu.ROLE_OWNER, Menu.ROLE_DRIVER]})
  ]);

  constructor() {
  }

  getAll(): Observable<Array<Menu>> {
    return this.menusSubject.asObservable();
  }

  addMenu(menu: Menu): void {
    const menus = this.menusSubject.value;
    menus.push(menu);
    this.menusSubject.next(menus);
  }
}
