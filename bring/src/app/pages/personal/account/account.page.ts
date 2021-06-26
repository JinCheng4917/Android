import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../../func/User';
import {Router} from '@angular/router';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, AfterViewInit {
  /**
   * 当前登录用户
   */
  currentUser: User;

  quota: number;

  constructor(private userService: UserService,
              private router: Router,
              private zone: NgZone,
              private authService: AuthService) {
    this.zone.run(() => {
      // 要更新视图的代码
      this.ngOnInit();
    });
  }

  public ngOnInit(): void {

    this.userService.getCurrentLoginUser();
    this.currentUser = this.userService.getCurrentUser();
    this.quota = this.currentUser?.quota;
  }


  ngAfterViewInit() {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }


  update(refresher) {
    setTimeout(() => {
      console.log('下拉刷新2');
      this.ngOnInit();
      refresher.detail.complete();
    }, 2000);
  }
}
