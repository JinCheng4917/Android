import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import {User} from '../../../../func/User';
import {Router} from '@angular/router';
import {UserService} from '../../../../service/user.service';
import {AuthService} from '../../../../service/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.page.html',
  styleUrls: ['./account-add.page.scss'],
})
export class AccountAddPage implements OnInit {
  userForm: FormGroup;
  show = false;
  submitting = false;
  /**
   * 当前登录用户
   */
  currentUser = new User();

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
    this.creatForm();
  }


  public creatForm(): void {
    this.userForm = this.builder.group({
      id: [''],
      role: [''],
      name: [''],
      phone: [''],
      quota: [''],
    });

  }


  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
        this.initForm(this.currentUser);
      });
  }

  public initForm(user: User): void {

    console.log(user);

    this.userForm = this.builder.group({
      id: user?.id,
      role: user?.role,
      name: user?.name,
      phone: user?.username,
      quota: [''],
    });
  }


  public saveUser(user: User): void {
    this.submitting = true;
    this.userService.update(user.id, user).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
      }, '账户充值成功');
      this.router.navigateByUrl('/tabs/personal/account');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.httpError(response);
    });
  }

  submit(): void {
    this.saveUser(this.userForm.value);
  }
}
