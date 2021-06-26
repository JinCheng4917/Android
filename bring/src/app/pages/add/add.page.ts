import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../func/User';
import {CommonService} from '../../service/common.service';
import {Router} from '@angular/router';
import {OrdersService} from '../../service/orders.service';
import {AuthService} from '../../service/auth.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GoodsType} from '../../func/GoodsType';
import {Orders} from '../../func/Orders';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  ordersForm: FormGroup;
  show = false;
  submitting = false;
  currentUser: User;

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private userService: UserService,
              private ordersService: OrdersService,
              private authService: AuthService,
              private httpClient: HttpClient) {}

  public initForm(): void {
    this.ordersForm = this.builder.group({
      goods: null,
      goodsName: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      freight: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.userService.getCurrentLoginUser();
    this.currentUser = this.userService.getCurrentUser();
    this.initForm();
  }

  /**
   * 选择学院
   *
   * @param goodsType 学院
   */
  bindGoods(goodsType: GoodsType): void {
    if (goodsType && goodsType.id) {
      // 合法，设置 college
      this.ordersForm.patchValue({
        goods: goodsType
      });
    } else {
      this.ordersForm.patchValue({
        goods: null
      });
    }
  }


  public saveOrder(order: Orders): void {
    this.submitting = true;
    this.ordersService.save(order).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.router.navigateByUrl('/tabs/order');
      }, '订单发布成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.httpError(response);
    });
  }

  submit(): void {
    if (this.ordersForm.get('freight').value > this.currentUser.quota) {
      this.commonService.error(() => {
        this.router.navigateByUrl('/tabs/personal/account');
      }, '您的余额不足，请及时充值');

    }else {
      this.saveOrder(this.ordersForm.value);
    }
  }
}

