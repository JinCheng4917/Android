import { Component, OnInit } from '@angular/core';
import {Orders} from "../../func/Orders";
import {Random} from "../../core/utils";

@Component({
  selector: 'app-my-publish',
  templateUrl: './my-publish.page.html',
  styleUrls: ['./my-publish.page.scss'],
})
export class MyPublishPage implements OnInit {

  orders: Array<Orders>;

  constructor() {
  }
  ngOnInit() {
    this.orders = new Array<Orders>();

    for (let i = 0; i < 30; i++) {
      const order = new Orders();
      order.goodsName = Random.nextString('goodsname', 4);
      order.id = Random.nextNumber(2);
      order.status = this.getRandomInt(4);
      this.orders.push(order);
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}
