(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "3Bst":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "EK2B");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "Z+rZ");





const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        data: {
            title: '首页'
        }
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
        data: {
            title: '新增'
        }
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "4+IK":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "3Bst");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "Z+rZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "TIRd":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/add/acAdd.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"userForm\" (ngSubmit)=\"submit()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-1\">\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"Name\">用户名称</label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"Name\" class=\"form-control\" formControlName=\"name\">\n        </div>\n      </div>\n\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"phone\">用户手机号</label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"phone\" class=\"form-control\" formControlName=\"phone\">\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"id\">用户身份证号</label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"id\" class=\"form-control\" formControlName=\"IDNumber\">\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"quota\">充值金额</label>\n        </div>\n        <div class=\"col-md-8\">\n          <ion-input type=\"text\" id=\"quota\" class=\"form-control\" formControlName=\"quota\" placeholder=\"请输入充值金额\"></ion-input>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 offset-md-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\"\n                  type=\"submit\">\n            <i class=\"far fa-save\"></i>\n            &nbsp;保存\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "Z+rZ":
/*!****************************************************!*\
  !*** ./src/app/pages/account/add/acAdd.component.ts ***!
  \****************************************************/
/*! exports provided: AcAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acAdd.component.html */ "TIRd");
/* harmony import */ var _add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acAdd.component.scss */ "sByo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/common.service */ "8cFx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/user.service */ "Ouoq");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");









let AddComponent = class AddComponent {
    constructor(builder, commonService, router, userService, authService) {
        this.builder = builder;
        this.commonService = commonService;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.show = false;
        this.submitting = false;
        this.creatForm();
    }
    creatForm() {
        this.userForm = this.builder.group({
            id: [''],
            role: [''],
            name: [''],
            phone: [''],
            IDNumber: [''],
            quota: [''],
        });
    }
    ngOnInit() {
        this.authService.getCurrentLoginUser$()
            .subscribe((user) => {
            this.currentUser = user;
        });
        this.initForm(this.currentUser);
    }
    initForm(user) {
        this.userForm = this.builder.group({
            id: user.id,
            role: user.role,
            name: user.name,
            phone: user.username,
            IDNumber: user.idnumber,
            quota: [''],
        });
    }
    saveUser(user) {
        this.submitting = true;
        this.userService.update(user.id, user).subscribe(() => {
            this.submitting = false;
            this.commonService.success(() => {
                this.commonService.back();
            }, '账户充值成功');
        }, (response) => {
            this.submitting = false;
            this.commonService.httpError(response);
        });
    }
    submit() {
        this.saveUser(this.userForm.value);
    }
};
AddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add',
        template: _raw_loader_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddComponent);



/***/ }),

/***/ "sByo":
/*!******************************************************!*\
  !*** ./src/app/pages/account/add/acAdd.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-account-account-module.js.map
