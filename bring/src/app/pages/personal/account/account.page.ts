import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../../func/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  /**
   * 当前登录用户
   */
  currentUser: User;

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }
}
