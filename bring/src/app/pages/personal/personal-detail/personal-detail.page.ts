import { Component, OnInit } from '@angular/core';
import {User} from '../../../func/User';
import {Owner} from '../../../func/Owner';
import {Driver} from '../../../func/Driver';
import {AuthService} from '../../../service/auth.service';
import {UserService} from '../../../service/user.service';
import {DriverService} from '../../../service/driver.service';
import {OwnerService} from '../../../service/owner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.page.html',
  styleUrls: ['./personal-detail.page.scss'],
})
export class PersonalDetailPage implements OnInit {

  /**
   * 当前登录用户
   */
  currentUser: User;
  currentDriver: Driver;
  currentOwner: Owner;

  constructor(private authService: AuthService,
              private userService: UserService,
              private driverService: DriverService,
              private ownerService: OwnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }

  logout(): void {
    this.userService.logout()
      .subscribe(() => {
      }, () => {
      }, () => {
        this.router.navigateByUrl('');
      });
  }
}

