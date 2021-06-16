(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-order-order-module"],{

/***/ "/Xdo":
/*!**********************************************************!*\
  !*** ./src/app/pages/owner/order/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.component.html */ "axMJ");
/* harmony import */ var _edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.component.scss */ "R2GW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _func_Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../func/Orders */ "GR96");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/orders.service */ "IFaF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/common.service */ "8cFx");









let EditComponent = class EditComponent {
    constructor(builder, router, route, orderService, commonService) {
        this.builder = builder;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.commonService = commonService;
        this.orders = new _func_Orders__WEBPACK_IMPORTED_MODULE_5__["Orders"]();
        this.creatForm();
    }
    /**
     * 创建表单
     */
    creatForm() {
        this.orderForm = this.builder.group({
            goods: null,
            goodsName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            startPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            endPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            freight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    initForm(orders) {
        this.orderForm.setValue({
            goods: orders.goods,
            goodsName: orders.goodsName,
            startPlace: orders.startPlace,
            endPlace: orders.endPlace,
            freight: orders.freight,
        });
    }
    /**
     * 选择学院
     * @param goodsType 学院
     */
    bindGoods(goodsType) {
        if (goodsType && goodsType.id) {
            // 合法，设置 college
            this.orderForm.patchValue({
                goods: goodsType
            });
        }
        else {
            this.orderForm.patchValue({
                goods: null
            });
        }
    }
    ngOnInit() {
        this.getEditOrder();
    }
    /**
     * 获取要编辑的用户
     */
    getEditOrder() {
        this.route.params.subscribe(params => {
            this.orderService.getById(params.id).subscribe((order) => {
                this.initForm(order);
            });
        });
    }
    updateOrders(orders) {
        this.route.params.subscribe(params => {
            this.orderService.update(params.id, orders).subscribe(() => {
                this.commonService.success(() => {
                    this.commonService.back();
                }, '订单保存成功');
            }, (response) => {
                this.commonService.error(() => {
                }, response.error.message);
            });
        });
    }
    submit() {
        this.updateOrders(this.orderForm.value);
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditComponent);



/***/ }),

/***/ "0zRA":
/*!***********************************************************!*\
  !*** ./src/app/pages/owner/order/order-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "Tzfj");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "/Xdo");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.component */ "hRz5");






const routes = [
    {
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"],
        data: {
            title: '首页'
        }
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
        data: {
            title: '新增'
        }
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
        data: {
            title: '编辑'
        }
    }
];
let OrderRoutingModule = class OrderRoutingModule {
};
OrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderRoutingModule);



/***/ }),

/***/ "58ZE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/order/order.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form (ngSubmit)=\"onQuery()\">\n  <label>出发地：<input name=\"name\" [formControl]=\"queryParams.startPlace\" type=\"text\"/></label>\n  &nbsp;\n  <label>目的地：<input name=\"no\" [formControl]=\"queryParams.endPlace\" type=\"text\"/></label>\n\n  <button type=\"submit\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-search\"></i>查询</button>\n  &nbsp;\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" [checked]=\"1\" (change)=\"onCheckBoxChange($event, 5)\" id=\"customRadioInline5\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline5\">全部</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 0)\" id=\"customRadioInline0\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline0\">未揽收</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 1)\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline1\">已揽收</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 2)\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline2\">运输中</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 3)\" id=\"customRadioInline3\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline3\">已送达</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 4)\" id=\"customRadioInline4\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline4\">已完成</label>\n  </div>\n  <button class=\"btn btn-sm btn-warning\" (click)=\"clear()\">\n    <i class=\"fas fa-trash-alt\"></i>\n    清空\n  </button>\n</form>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  </div>\n  <div class=\"col-lg-8 text-right button-group\">\n    <a class=\"btn btn-primary btn-sm\" routerLink=\"/order/add\">\n      <i class=\"fas fa-plus\"></i>\n      发布订单\n    </a>\n  </div>\n</div>\n<table class=\"table table-striped table-bordered mt-2\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">序号</th>\n    <th scope=\"col\">货物名称</th>\n    <th scope=\"col\">货物类别</th>\n    <th scope=\"col\">运输起点</th>\n    <th scope=\"col\">运输目的地</th>\n    <th scope=\"col\">运费(单位：元)</th>\n    <th scope=\"col\">发布时间</th>\n    <th scope=\"col\">结束时间</th>\n    <th scope=\"col\">运输司机</th>\n    <th scope=\"col\">状态</th>\n    <th scope=\"col\">操作</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of orders.content; let $index = index;\">\n    <td>{{$index + 1}}</td>\n    <td>{{order.goodsName}}</td>\n    <td>{{order?.goods?.name}}</td>\n    <td>{{order.startPlace}}</td>\n    <td>{{order.endPlace}}</td>\n    <td>{{order.freight}}</td>\n    <td>{{order.startTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</td>\n    <td>{{order.endTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</td>\n    <td>{{order.driver?.user.name}}</td>\n    <td [style.color]=\"getFontColor(order.status)\">{{order.status | status}}</td>\n    <td>\n      <button class=\"btn btn-primary btn-sm mr-2\" routerLink=\"/order/edit/{{order.id}}\" [disabled]=\"order.status === 3 || order.status === 4\">\n        <i class=\"fas fa-edit\"></i>\n        编辑\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-sm mr-2\" (click)=\"delete(order)\" [disabled]=\"order.status != 1\">\n        <i class=\"fas fa-trash-alt\"></i>\n        删除\n      </button>\n      <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"confirm(order)\" [disabled]=\"order.status !== 3\">\n        <i class=\"fas fa-check-circle\"></i>\n      确认收货\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<app-page *ngIf=\"orders.totalPages != 0\" [setTotalPages]=\"orders.totalPages\" [setPage]=\"params.page\" [setSize]=\"params.size\" (selectedPage)=\"onPageSelected($event)\" (selectedSize)=\"onSizeSelected($event)\"></app-page>\n");

/***/ }),

/***/ "ACfY":
/*!********************************************************!*\
  !*** ./src/app/pages/owner/order/order.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "GR96":
/*!********************************!*\
  !*** ./src/app/func/Orders.ts ***!
  \********************************/
/*! exports provided: Orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders", function() { return Orders; });
class Orders {
    constructor(param) {
        if (param) {
            this.goodsName = param.name;
            this.id = param.id;
            this.goods = param.goods;
            this.startPlace = param.startPlace;
            this.endPlace = param.endPlace;
            this.freight = param.freight;
            this.driver = param.driver;
            this.startTime = param.startTime;
            this.endTime = param.engTime;
            this.status = param.status;
        }
    }
}


/***/ }),

/***/ "HiHu":
/*!***************************************************!*\
  !*** ./src/app/pages/owner/order/order.module.ts ***!
  \***************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "0zRA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _func_func_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../func/func.module */ "rDpx");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "Tzfj");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "/Xdo");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order.component */ "hRz5");









let OrderModule = class OrderModule {
};
OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _func_func_module__WEBPACK_IMPORTED_MODULE_5__["FuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]
    })
], OrderModule);



/***/ }),

/***/ "R2GW":
/*!************************************************************!*\
  !*** ./src/app/pages/owner/order/edit/edit.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL29yZGVyL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Tzfj":
/*!********************************************************!*\
  !*** ./src/app/pages/owner/order/add/acAdd.component.ts ***!
  \********************************************************/
/*! exports provided: AcAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acAdd.component.html */ "qW2N");
/* harmony import */ var _add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acAdd.component.scss */ "d6aW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/common.service */ "8cFx");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/orders.service */ "IFaF");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/auth.service */ "6uu6");










let AddComponent = class AddComponent {
    constructor(builder, commonService, router, ordersService, authService, httpClient) {
        this.builder = builder;
        this.commonService = commonService;
        this.router = router;
        this.ordersService = ordersService;
        this.authService = authService;
        this.httpClient = httpClient;
        this.show = false;
        this.submitting = false;
    }
    initForm() {
        this.ordersForm = this.builder.group({
            goods: null,
            goodsName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            startPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            endPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            freight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.authService.getCurrentLoginUser$()
            .subscribe((user) => {
            this.currentUser = user;
        });
        this.initForm();
    }
    /**
     * 选择学院
     * @param goodsType 学院
     */
    bindGoods(goodsType) {
        if (goodsType && goodsType.id) {
            // 合法，设置 college
            this.ordersForm.patchValue({
                goods: goodsType
            });
        }
        else {
            this.ordersForm.patchValue({
                goods: null
            });
        }
    }
    saveOrder(order) {
        this.submitting = true;
        this.ordersService.save(order).subscribe(() => {
            this.submitting = false;
            this.commonService.success(() => {
                this.commonService.back();
            }, '订单发布成功');
        }, (response) => {
            this.submitting = false;
            this.commonService.httpError(response);
        });
    }
    submit() {
        if (this.ordersForm.get('freight').value > this.currentUser.quota) {
            this.commonService.error(() => {
                this.commonService.back();
            }, '您的余额不足，请及时充值');
        }
        else {
            this.saveOrder(this.ordersForm.value);
        }
    }
};
AddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add',
        template: _raw_loader_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddComponent);



/***/ }),

/***/ "axMJ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/order/edit/edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"orderForm\" (ngSubmit)=\"submit()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-1\">\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"goodsName\">货物名称<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"goodsName\" class=\"form-control\" formControlName=\"goodsName\" placeholder=\"请输入货物名称\"/>\n        </div>\n      </div>\n\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 text-right\">\n          <label>货物类型：</label>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"custom-control-inline\">\n                <app-goods-select (goodsSelect)=\"bindGoods($event)\" [goods]=\"orderForm.get('goods').value\"></app-goods-select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"startPlace\">运输起点<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"startPlace\" class=\"form-control\" formControlName=\"startPlace\" placeholder=\"请输入运输起点\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"endPlace\">运输目的地<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"endPlace\" class=\"form-control\" formControlName=\"endPlace\" placeholder=\"请输入运输目的地\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"freight\">运费<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"freight\" class=\"form-control\" formControlName=\"freight\" placeholder=\"请输入运费\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-8 offset-md-4\">\n          <button class=\"btn btn-dark btn-sm\"\n                  type=\"submit\">\n            <i class=\"far fa-save\"></i>\n            &nbsp;保存\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "d6aW":
/*!**********************************************************!*\
  !*** ./src/app/pages/owner/order/add/acAdd.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL29yZGVyL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "hRz5":
/*!******************************************************!*\
  !*** ./src/app/pages/owner/order/order.component.ts ***!
  \******************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order.component.html */ "58ZE");
/* harmony import */ var _order_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component.scss */ "ACfY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/common.service */ "8cFx");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/orders.service */ "IFaF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../conf/app.conf */ "uzq4");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/user.service */ "Ouoq");









let OrderComponent = class OrderComponent {
    constructor(builder, commonService, orderService, userService, ordersService) {
        this.builder = builder;
        this.commonService = commonService;
        this.orderService = orderService;
        this.userService = userService;
        this.ordersService = ordersService;
        this.searchButtonSubmitting = false;
        this.importButtonSubmitting = false;
        this.fontColor = '';
        /**
         * 分页信息
         */
        this.params = {
            page: 0,
            size: 10,
        };
        /* 分页数据 */
        this.orders = {
            totalPages: 0,
            content: new Array()
        };
        /* 查询参数 */
        this.queryParams = {
            page: 0,
            status: undefined,
            size: this.params.size,
            startPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            endPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        };
        this.commonService.appOnReady(() => {
            const user = this.userService.getCurrentUser();
            this.user = user;
        });
    }
    ngOnInit() {
        this.orderForm = this.builder.group({
            goodsName: null,
            goods: null,
            startPlace: null,
            endPlace: null,
            freight: null,
            startTime: null,
            endTime: null,
            driver: null
        });
        this.paramsInit();
        this.pageAll();
    }
    delete(order) {
        // 确认框
        this.commonService.confirm((confirm) => {
            if (confirm) {
                this.ordersService.delete(order.id).subscribe(() => {
                    this.commonService.success(() => {
                    }, '删除成功');
                    this.pageAll();
                }, (response) => {
                    this.commonService.httpError(response);
                });
            }
        }, '即将删除订单');
    }
    pageAll() {
        this.ordersService.pageById(this.params.page, this.params.size)
            .subscribe((response) => {
            this.orders = response;
            console.log(response);
            // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
    search() {
        this.searchButtonSubmitting = true;
        this.pageAll();
    }
    /**
     * 重新加载数据 根据 size
     */
    reloadBySize(size) {
        this.params.size = size;
        this.pageAll();
    }
    /**
     * 重新加载数据 根据 page
     */
    reloadByPage(page) {
        this.params.page = page;
        this.pageAll();
    }
    /**
     * 参数初始化
     */
    paramsInit() {
        this.params.page = 0;
        this.params.size = _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__["config"].size;
        // 获取历史参数
        const params = this.commonService.getCurrentRouteState();
        if (params.page) {
            this.params.page = params.page;
        }
        if (params.size) {
            this.params.size = params.size;
        }
    }
    /**
     * 保存历史参数
     */
    updateCurrentRouteParams() {
        const params = {};
        params.page = this.params.page;
        params.size = this.params.size;
        params.name = this.orderForm.getRawValue().name;
        this.commonService.updateCurrentRouteState(params);
    }
    getFontColor(status) {
        if (status === 0) {
            this.fontColor = '#000000';
        }
        else if (status === 1) {
            this.fontColor = '#2e5fee';
        }
        else if (status === 2) {
            this.fontColor = '#37be2e';
        }
        else if (status === 3) {
            this.fontColor = '#2eb9be';
        }
        else if (status === 4) {
            this.fontColor = '#df2e2e';
        }
        return this.fontColor;
    }
    onPageSelected(page) {
        this.params.page = page;
        this.pageAll();
    }
    onSizeSelected(size) {
        _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__["config"].size = size;
        this.ngOnInit();
    }
    /**
     * 加载数据
     */
    loadData() {
        const queryParams = {
            page: this.params.page,
            size: _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__["config"].size,
            status: this.queryParams.status,
            startPlace: this.queryParams.startPlace.value,
            endPlace: this.queryParams.endPlace.value
        };
        this.ordersService.ownerQuery(queryParams)
            .subscribe((response) => {
            this.orders = response;
            // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
    onQuery() {
        this.loadData();
    }
    clear() {
        this.queryParams.startPlace = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.queryParams.endPlace = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.loadData();
    }
    /**
     * 单选框被用户点击时
     * @param $event 弹射值
     * @param reviewed 评阅状态码1默认2已评阅3未评阅
     */
    onCheckBoxChange($event, reviewed) {
        switch (reviewed) {
            case 0:
                this.queryParams.status = 0;
                break;
            case 1:
                this.queryParams.status = 1;
                break;
            case 2:
                this.queryParams.status = 2;
                break;
            case 3:
                this.queryParams.status = 3;
                break;
            case 4:
                this.queryParams.status = 4;
                break;
            case 5:
                this.queryParams.status = 5;
                break;
        }
        this.loadData();
    }
    confirm(order) {
        // 确认框
        this.commonService.confirm((confirm) => {
            if (confirm) {
                this.orderService.confirmOrder(order.id, order).subscribe(() => {
                    this.commonService.success(() => {
                    }, '本次交易成功');
                }, (response) => {
                    this.commonService.httpError(response);
                });
            }
        }, '是否确认送达');
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }
];
OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderComponent);



/***/ }),

/***/ "qW2N":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/order/add/acAdd.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"ordersForm\" (ngSubmit)=\"submit()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-1\">\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"goodsName\">货物名称<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"goodsName\" class=\"form-control\" formControlName=\"goodsName\" placeholder=\"请输入货物名称\"/>\n        </div>\n      </div>\n\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 text-right\">\n          <label>货物类型：</label>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"custom-control-inline\">\n                <app-goods-select (goodsSelect)=\"bindGoods($event)\"></app-goods-select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"startPlace\">运输起点<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"startPlace\" class=\"form-control\" formControlName=\"startPlace\" placeholder=\"请输入运输起点\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"endPlace\">运输目的地<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"endPlace\" class=\"form-control\" formControlName=\"endPlace\" placeholder=\"请输入运输目的地\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label for=\"freight\">运费<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <input type=\"text\" id=\"freight\" class=\"form-control\" formControlName=\"freight\" placeholder=\"请输入运费\"/>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 offset-md-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\"\n                  type=\"submit\">\n            <i class=\"far fa-save\"></i>\n            &nbsp;保存\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=pages-owner-order-order-module.js.map
