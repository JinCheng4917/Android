import { Component } from '@angular/core';
import {Orders} from "../../func/Orders";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {OrdersService} from "../../service/orders.service";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private ordersService: OrdersService,
              private httpClient: HttpClient) {}

  public saveOrder(order: Orders): void {
    this.ordersService.save(order).subscribe(() => {
      this.commonService.success(() => {
        this.commonService.back();
      }, '订单发布成功');
    }, (response: HttpErrorResponse) => {
      this.commonService.httpError(response);
    });
  }

  submit(): void {
      this.saveOrder(new Orders());
      console.log(1111);
    }
}
