import {Component, OnInit} from '@angular/core';
import {User} from "../../func/User";
import {HttpErrorResponse} from "@angular/common/http";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {CommonService} from "../../service/common.service";
import {config} from "../../conf/app.conf";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    version: string;

    /** 错误信息 */
    errorInfo: string;

    /** 注册表单对象 */
    registerForm: FormGroup;

    /** 显示注册错误信息 */
    showRegisterErrorInfo: boolean;

    /** 注册错误信息 */
    registerErrorInfo: string;


    constructor(private userService: UserService,
                private authService: AuthService,
                private router: Router,
                private commonService: CommonService,
                private builder: FormBuilder) {
    }

    ngOnInit() {
        this.version = config.version;
        this.initUserTable();
    }

    get username(): AbstractControl {
        return this.registerForm.get('username');
    }

    get name(): AbstractControl {
        return this.registerForm.get('name');
    }


    initUserTable(): void {
        /** 创建司机注册表单 */
        this.registerForm = this.builder.group({
                name: [''],
                phone: [''],
                password: [''],
                confirmPassword: [''],
            },
        );
    }


    userRegister(): void {
        const user = new User();
        user.name = this.registerForm.get('name').value;
        user.phone = this.registerForm.get('phone').value;
        user.password = this.registerForm.get('password').value;

        console.log(user);
        this.userService.registerUser(user)
            .subscribe(() => {
                this.commonService.success(() => {
                    this.changeToLogin();
                }, '注册成功');
            }, (response: HttpErrorResponse) => {
                this.registerErrorInfo = `${response.error.message}请尝试更换用户名或检查您的网络连接`;
                this.showRegisterErrorInfo = true;
            });
    }

    private changeToLogin() {
        this.router.navigateByUrl('/login');
    }
}
