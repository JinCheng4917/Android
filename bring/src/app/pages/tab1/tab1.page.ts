import {Component, OnInit} from '@angular/core';
import {Orders} from '../../func/Orders';
import {Random} from '../../core/utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  orders: Array<Orders>;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.orders = new Array<Orders>();

    for (let i = 0; i < 30; i++) {
      const order = new Orders();
      order.goodsName = Random.nextString('name', 4);
      order.id = Random.nextNumber(2);
      this.orders.push(order);
    }
  }

  jumpToOrder(id: number) {
    console.log(id);
    // this.router.navigateByUrl(`/order/edit/{{order.id}}`);
  }
}
