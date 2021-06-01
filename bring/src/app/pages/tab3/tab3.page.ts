import {Component, OnInit} from '@angular/core';
import {Orders} from '../../func/Orders';
import {Random} from '../../core/utils';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  orders: Array<Orders>;

  constructor() {
  }

  ngOnInit(): void {
    this.orders = new Array<Orders>();

    for (let i = 0; i < 30; i++) {
      const order = new Orders();
      order.goodsName = Random.nextString('name', 4);
      order.id = Random.nextNumber(2);
      order.status = this.getRandomInt(4);
      this.orders.push(order);
    }
  }

   getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


    getOrderDetail(order: Orders) {
        console.log(order.id);
    }
}
