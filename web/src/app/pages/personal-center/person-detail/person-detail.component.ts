import {Component, OnInit} from '@angular/core';
import {User} from '../../../func/User';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {DriverService} from '../../../service/driver.service';
import {OwnerService} from '../../../service/owner.service';
import {Driver} from '../../../func/Driver';
import {Owner} from '../../../func/Owner';
import {Route, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.sass']
})
export class PersonDetailComponent implements OnInit {

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
