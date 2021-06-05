
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {CommonService} from "../../service/common.service";
import {config} from "../../conf/app.conf";
import Swal from "sweetalert2";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

    /** 当前模式 */
    mode: string;

    /** 登录表单对象 */
    loginForm: FormGroup;


    version: string;

    /** 错误信息 */
    errorInfo: string;


    /** 注册提示信息 */
    registerInfo: string;

    /** 显示注册提示信息 */
    showRegisterInfo: boolean;

    projectConfig: { version: string };

    constructor(private userService: UserService,
                private authService: AuthService,
                private router: Router,
                public alertController: AlertController,
                private commonService: CommonService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.version = config.version;
        /** 创建表单 */
        this.loginForm = this.builder.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required],
        });

    }


    login(): void {
        this.authService.login(this.loginForm.value)
            .subscribe(() => {
                this.authService.requestCurrentLoginUser(() => {
                    this.router.navigateByUrl('/tabs');
                });
            }, () => {
                this.showAlert();
            });
    }

    ngOnDestroy(): void {
    }

    get username(): AbstractControl {
        return this.loginForm.get('username');
    }

    showAlert() {

        this.alertController.create({
            header: '登录失败',
            message: '请检查用户名密码是否正确',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });

    }

}
