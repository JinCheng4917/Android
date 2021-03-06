import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {CommonService} from '../../../service/common.service';
import {UserService} from '../../../service/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.page.html',
  styleUrls: ['./modify-password.page.scss'],
})
export class ModifyPasswordPage implements OnInit {
  modifyPasswordForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private commonService: CommonService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * 初始化表单
   */
  initForm(): void {
    this.modifyPasswordForm = this.fb.group({
        oldPassword: [null, {
          validators: [Validators.required],
          asyncValidators: [this.userService.oldPasswordValidator()],
          updateOn: 'blur'
        }],
        newPassword: [null, [Validators.required, Validators.minLength(5)]],
        confirmNewPassword: [null, Validators.required]
      }, {validators: this.userService.confirmPasswordValidator},
    );
  }

  submit(): void {
    this.userService.updatePassword(this.modifyPasswordForm.get('newPassword').value,
      this.modifyPasswordForm.get('oldPassword').value)
      .subscribe(() => {
        this.commonService.success(() => {
          this.userService.logout().subscribe(() => {
            this.router.navigateByUrl('login');
          });
        }, '修改密码成功');
      }, (response: HttpErrorResponse) => {
        this.commonService.httpError(response);
      });
  }
}

