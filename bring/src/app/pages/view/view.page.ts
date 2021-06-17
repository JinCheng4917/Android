import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from '../../func/Orders';
import {User} from '../../func/User';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {OrdersService} from '../../service/orders.service';
import {CommonService} from '../../service/common.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  orderForm: FormGroup;  // 学生表单组
  id: number;
  order: Orders;
  fontColor = '';
  currentUser: User;
  score: number;

  constructor(private builder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              private orderService: OrdersService,
              private commonService: CommonService,
  ) {
    this.creatForm();
  }

  /**
   * 创建表单
   */
  creatForm(): void {
    this.orderForm = this.builder.group({
      goods: null,
      goodsName: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      freight: ['', Validators.required],
    });
  }

  initForm(orders: Orders): void {
    this.orderForm.setValue({
      goods: orders.goods,
      goodsName: orders.goodsName,
      startPlace: orders.startPlace,
      endPlace: orders.endPlace,
      freight: orders.freight,
    });
  }

  ngOnInit(): void {
    this.getEditOrder();

    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }

  /**
   * 获取要编辑的用户
   */
  public getEditOrder(): void {
    this.route.params.subscribe(params => {
      this.orderService.getById(params.id).subscribe((order: Orders) => {
        this.order = order;
        console.log(this.order);
        this.initForm(this.order);
      });
    });
  }

  public updateOrders(orders: Orders): any {
    this.route.params.subscribe(params => {
      this.orderService.update(params.id, orders).subscribe(() => {
        this.commonService.success(() => {
          this.commonService.back();
        }, '订单保存成功');
      }, (response: HttpErrorResponse) => {
        this.commonService.error(() => {
        }, response.error.message);
      });
    });
  }


  public college(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.updateStatus(order.id, 1).subscribe(() => {
          this.commonService.success(() => {
          }, '揽收成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将揽收订单');
  }

  public transfer(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.updateStatus(order.id, 2).subscribe(() => {
          this.commonService.success(() => {
          }, '状态变更成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将变更订单状态');
  }

  public complete(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.completeOrder(order.id, order).subscribe(() => {
          this.commonService.success(() => {
          }, '状态变更成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将变更订单状态');
  }

  public confirm(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.confirmOrder(order.id, order).subscribe(() => {
          this.commonService.success(() => {
          }, '本次交易成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '是否确认送达');
  }

  setScore($event: any) {
    this.score = $event.detail.value;
  }

  public putScore(order: Orders): void {
    const newOrder = new Orders();
    if (this.score != null) {
      newOrder.score = this.score;
    } else {
      newOrder.score = 0;
    }


    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.scoreOrder(order.id, newOrder).subscribe(() => {
          this.commonService.success(() => {
          }, '评价成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '是否确认评价');
  }


  public delete(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.delete(order.id).subscribe(() => {
          this.commonService.success(() => {
          }, '删除成功');
          this.ngOnInit();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将删除订单');
  }
}


