import { Component, OnInit } from '@angular/core';
import {Orders} from "../../func/Orders";
import {Router} from "@angular/router";
import {Random} from "../../core/utils";

@Component({
  selector: 'app-my-bring',
  templateUrl: './my-bring.page.html',
  styleUrls: ['./my-bring.page.scss'],
})
export class MyBringPage implements OnInit {
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
