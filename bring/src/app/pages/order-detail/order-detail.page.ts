import { Component, OnInit } from '@angular/core';
import {Orders} from "../../func/Orders";
import {Random} from "../../core/utils";
import {User} from "../../func/User";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

    order: Orders;

  constructor() { }

  ngOnInit() {
      let user = new User();
      user.name = Random.nextString('uname' , 6);
      user.phone = Random.nextString('phone',13);
      user.username = Random.nextString('username', 4);

      let collector = new User();
      collector.name = Random.nextString('uname' , 6);
      collector.phone = Random.nextString('phone',13);
      collector.username = Random.nextString('username', 4);

      this.order = new Orders();
      this.order.id = Random.nextNumber(3);
      this.order.goodsName = Random.nextString('name', 6);
      this.order.status = this.getRandomInt(4);
      this.order.startPlace = Random.nextString('startPlace', 4);
      this.order.endPlace = Random.nextString('endPlace', 4);
      this.order.startTime = Random.nextString("startTime", 4);
      this.order.endTime = Random.nextString("endTime", 4);
      this.order.publisher = user;
      this.order.collector = collector;
  }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}
