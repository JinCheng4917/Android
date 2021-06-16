(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-order-manage-orderManage-module"],{

/***/ "/CXQ":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/order-manage/view/eva-view.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"orderForm\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-1\">\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>货物名称<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.goodsName}}</h4>\n        </div>\n      </div>\n\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 text-right\">\n          <label>货物类型：</label>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"custom-control-inline\">\n               <h4>{{order?.goods?.name}}</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>运输起点<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.startPlace}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>运输目的地<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n         <h4>{{order?.endPlace}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>运费<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.freight}}</h4>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>发布时间<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.startTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>结束时间<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.startTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4 text-right\">\n          <label>货物状态：</label>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"custom-control-inline\">\n                <h4 [style.color]=\"getFontColor(order.status)\">{{order?.status | status}}</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-4\">\n        <div class=\"col-md-4 form-text text-right\">\n          <label>发布人<code>*</code></label>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>{{order?.owner?.user.name}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-8 offset-md-3\">\n          <button class=\"btn btn-info btn-sm\" (click)=\"transfer(order)\" [disabled]=\"order.status != 1\">\n            <i class=\"fas fa-truck-moving\"></i>\n            &nbsp;开始运输\n          </button>\n          <button class=\"btn btn-danger btn-sm offset-md-3\" (click)=\"complete(order)\" [disabled]=\"order.status != 2\">\n            <i class=\"fas fa-people-carry\"></i>\n            &nbsp;完成运输\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "12r7":
/*!*****************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/orderManage.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageModule", function() { return OrderManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _func_func_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../func/func.module */ "rDpx");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "M4ub");
/* harmony import */ var _orderManage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderManage-routing.module */ "8Pvs");
/* harmony import */ var _order_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-manage.component */ "94d1");








let OrderManageModule = class OrderManageModule {
};
OrderManageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_manage_component__WEBPACK_IMPORTED_MODULE_7__["OrderManageComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _orderManage_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderManageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _func_func_module__WEBPACK_IMPORTED_MODULE_4__["FuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]
    })
], OrderManageModule);



/***/ }),

/***/ "2cSg":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/order-manage/order-manage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form (ngSubmit)=\"onQuery()\">\n  <label>出发地：<input name=\"name\" [formControl]=\"queryParams.startPlace\" type=\"text\"/></label>\n  &nbsp;\n  <label>目的地：<input name=\"no\" [formControl]=\"queryParams.endPlace\" type=\"text\"/></label>\n\n  <button type=\"submit\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-search\"></i>查询</button>\n  &nbsp;\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" [checked]=\"1\" (change)=\"onCheckBoxChange($event, 0)\" id=\"customRadioInline0\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline0\">全部</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 1)\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline1\">已揽收</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 2)\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline2\">运输中</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 3)\" id=\"customRadioInline3\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline3\">已送达</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"radio\" (change)=\"onCheckBoxChange($event, 4)\" id=\"customRadioInline4\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline4\">已完成</label>\n  </div>\n  <button class=\"btn btn-sm btn-warning\" (click)=\"clear()\">\n    <i class=\"fas fa-trash-alt\"></i>\n    清空\n  </button>\n</form>\n\n<table class=\"table table-striped table-bordered mt-2\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">序号</th>\n    <th scope=\"col\">货物名称</th>\n    <th scope=\"col\">货物类别</th>\n    <th scope=\"col\">运输起点</th>\n    <th scope=\"col\">运输目的地</th>\n    <th scope=\"col\">运费(单位：元)</th>\n    <th scope=\"col\">发布人</th>\n    <th scope=\"col\">状态</th>\n    <th scope=\"col\">发布时间</th>\n    <th scope=\"col\">结束时间</th>\n    <th scope=\"col\">操作</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of orders.content; let $index = index;\">\n    <td>{{$index + 1}}</td>\n    <td>{{order.goodsName}}</td>\n    <td>{{order?.goods?.name}}</td>\n    <td>{{order.startPlace}}</td>\n    <td>{{order.endPlace}}</td>\n    <td>{{order.freight}}</td>\n    <td>{{order.owner.user.name}}</td>\n    <td [style.color]=\"getFontColor(order.status)\">{{order.status | status}}</td>\n    <td>{{order.startTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</td>\n    <td>{{order.endTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</td>\n    <td>\n      <button class=\"btn btn-info btn-sm mr-2\" routerLink=\"/driverOrderManage/view/{{order.id}}\"\n              [disabled]=\"order.status === 3 || order.status === 4\">\n        <i class=\"fas fa-tasks\"></i>\n        变更状态\n      </button>\n      <button class=\"btn btn-danger btn-sm mr-2\" *ngIf=\"order.status === 1\" (click)=\"default(order)\">\n        取消订单\n      </button>\n      <button class=\"btn btn-danger btn-sm mr-2\" *ngIf=\"order.status!== 1\" [disabled]=\"order.status != 1\">\n        删除订单\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<app-page *ngIf=\"orders.totalPages != 0\" [setTotalPages]=\"orders.totalPages\" [setPage]=\"params.page\"\n          [setSize]=\"params.size\" (selectedPage)=\"onPageSelected($event)\"\n          (selectedSize)=\"onSizeSelected($event)\"></app-page>\n\n");

/***/ }),

/***/ "8Pvs":
/*!*************************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/orderManage-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OrderManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageRoutingModule", function() { return OrderManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-manage.component */ "94d1");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "M4ub");





const routes = [
    {
        path: '',
        component: _order_manage_component__WEBPACK_IMPORTED_MODULE_3__["OrderManageComponent"],
        data: {
            title: '首页'
        }
    },
    {
        path: 'view/:id',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
        data: {
            title: '查看订单'
        }
    }
];
let OrderManageRoutingModule = class OrderManageRoutingModule {
};
OrderManageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderManageRoutingModule);



/***/ }),

/***/ "94d1":
/*!*********************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/order-manage.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageComponent", function() { return OrderManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_manage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-manage.component.html */ "2cSg");
/* harmony import */ var _order_manage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-manage.component.scss */ "oz6w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/common.service */ "8cFx");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/user.service */ "Ouoq");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/orders.service */ "IFaF");
/* harmony import */ var _conf_app_conf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../conf/app.conf */ "uzq4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let OrderManageComponent = class OrderManageComponent {
    constructor(builder, commonService, userService, orderService, route, ordersService) {
        this.builder = builder;
        this.commonService = commonService;
        this.userService = userService;
        this.orderService = orderService;
        this.route = route;
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
            startPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            endPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
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
    pageAll() {
        this.ordersService.pageByDriver(this.params.page, this.params.size)
            .subscribe((response) => {
            this.orders = response;
            // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
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
        this.params.size = _conf_app_conf__WEBPACK_IMPORTED_MODULE_8__["config"].size;
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
        _conf_app_conf__WEBPACK_IMPORTED_MODULE_8__["config"].size = size;
        this.ngOnInit();
    }
    /**
     * 加载数据
     */
    loadData() {
        const queryParams = {
            page: this.params.page,
            size: _conf_app_conf__WEBPACK_IMPORTED_MODULE_8__["config"].size,
            status: this.queryParams.status,
            startPlace: this.queryParams.startPlace.value,
            endPlace: this.queryParams.endPlace.value
        };
        this.ordersService.driverQuery(queryParams)
            .subscribe((response) => {
            this.orders = response;
            // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
    onQuery() {
        this.loadData();
    }
    clear() {
        this.queryParams.startPlace = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.queryParams.endPlace = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.status = 0;
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
        }
        this.loadData();
    }
    default(orders) {
        this.route.params.subscribe(params => {
            this.orderService.default(orders.id, orders).subscribe(() => {
                this.commonService.success(() => {
                    this.commonService.back();
                }, '订单取消成功');
            }, (response) => {
                this.commonService.error(() => {
                }, response.error.message);
            });
        });
    }
};
OrderManageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] }
];
OrderManageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-manage',
        template: _raw_loader_order_manage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_manage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderManageComponent);



/***/ }),

/***/ "M4ub":
/*!******************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/view/eva-view.component.ts ***!
  \******************************************************************/
/*! exports provided: EvaViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eva-view.component.html */ "/CXQ");
/* harmony import */ var _view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eva-view.component.scss */ "xuWi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/orders.service */ "IFaF");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../service/common.service */ "8cFx");








let ViewComponent = class ViewComponent {
    constructor(builder, router, route, orderService, commonService) {
        this.builder = builder;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.commonService = commonService;
        this.fontColor = '';
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
    ngOnInit() {
        this.getEditOrder();
    }
    /**
     * 获取要编辑的用户
     */
    getEditOrder() {
        this.route.params.subscribe(params => {
            this.orderService.getById(params.id).subscribe((order) => {
                this.order = order;
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
    transfer(order) {
        // 确认框
        this.commonService.confirm((confirm) => {
            if (confirm) {
                this.orderService.updateStatus(order.id, 2).subscribe(() => {
                    this.commonService.success(() => {
                    }, '状态变更成功');
                }, (response) => {
                    this.commonService.httpError(response);
                });
            }
        }, '即将变更订单状态');
    }
    complete(order) {
        // 确认框
        this.commonService.confirm((confirm) => {
            if (confirm) {
                this.orderService.completeOrder(order.id, order).subscribe(() => {
                    this.commonService.success(() => {
                    }, '状态变更成功');
                }, (response) => {
                    this.commonService.httpError(response);
                });
            }
        }, '即将变更订单状态');
    }
};
ViewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view',
        template: _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewComponent);



/***/ }),

/***/ "oz6w":
/*!***********************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/order-manage.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9vcmRlci1tYW5hZ2Uvb3JkZXItbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "xuWi":
/*!********************************************************************!*\
  !*** ./src/app/pages/driver/order-manage/view/eva-view.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9vcmRlci1tYW5hZ2Uvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-driver-order-manage-orderManage-module.js.map
