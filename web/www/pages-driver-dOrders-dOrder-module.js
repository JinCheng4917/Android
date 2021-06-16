(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-dOrders-dOrder-module"],{

/***/ "R0tn":
/*!***********************************************************!*\
  !*** ./src/app/pages/driver/dOrders/dOrders.component.ts ***!
  \***********************************************************/
/*! exports provided: DOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOrdersComponent", function() { return DOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dOrders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dOrders.component.html */ "T8pS");
/* harmony import */ var _dOrders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dOrders.component.scss */ "sqw3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/common.service */ "8cFx");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/user.service */ "Ouoq");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/orders.service */ "IFaF");
/* harmony import */ var _conf_app_conf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../conf/app.conf */ "uzq4");









let DOrdersComponent = class DOrdersComponent {
    constructor(builder, commonService, userService, ordersService) {
        this.builder = builder;
        this.commonService = commonService;
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
    college(order) {
        // 确认框
        this.commonService.confirm((confirm) => {
            if (confirm) {
                this.ordersService.updateStatus(order.id, 1).subscribe(() => {
                    this.commonService.success(() => {
                    }, '揽收成功');
                    this.pageAll();
                }, (response) => {
                    this.commonService.httpError(response);
                });
            }
        }, '即将揽收订单');
    }
    pageAll() {
        this.ordersService.pageByStatus(0, this.params.page, this.params.size)
            .subscribe((response) => {
            this.orders = response;
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
            startPlace: this.queryParams.startPlace.value,
            endPlace: this.queryParams.endPlace.value
        };
        this.ordersService.query(queryParams)
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
        this.loadData();
    }
};
DOrdersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] }
];
DOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-equipment',
        template: _raw_loader_dOrders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dOrders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DOrdersComponent);



/***/ }),

/***/ "T8pS":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver/dOrders/dOrders.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onQuery()\">\n  <label>出发地：<input name=\"name\" [formControl]=\"queryParams.startPlace\" type=\"text\"/></label>\n  &nbsp;\n  <label>目的地：<input name=\"no\" [formControl]=\"queryParams.endPlace\" type=\"text\"/></label>\n  &nbsp;\n  <button type=\"submit\" class=\"btn btn-info btn-sm\"><i class=\"fas fa-search\"></i>查询</button>\n  &nbsp;\n  <button class=\"btn btn-sm btn-warning\" (click)=\"clear()\">\n    <i class=\"fas fa-trash-alt\"></i>\n    清空\n  </button>\n</form>\n\n<table class=\"table table-striped table-bordered mt-2\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">序号</th>\n    <th scope=\"col\">货物名称</th>\n    <th scope=\"col\">货物类别</th>\n    <th scope=\"col\">运输起点</th>\n    <th scope=\"col\">运输目的地</th>\n    <th scope=\"col\">运费(单位：元)</th>\n    <th scope=\"col\">发布人</th>\n    <th scope=\"col\">发布时间</th>\n    <th scope=\"col\">操作</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of orders.content; let $index = index;\">\n    <td>{{$index + 1}}</td>\n    <td>{{order.goodsName}}</td>\n    <td>{{order?.goods?.name}}</td>\n    <td>{{order.startPlace}}</td>\n    <td>{{order.endPlace}}</td>\n    <td>{{order.freight}}</td>\n    <td>{{order.owner.user.name}}</td>\n    <td>{{order.startTime |  date:\"yyyy/MM/dd HH:mm:ss\" }}</td>\n    <td>\n      <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"college(order)\">\n        <i class=\"fas fa-luggage-cart\"></i>\n        揽收\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<app-page *ngIf=\"orders.totalPages != 0\" [setTotalPages]=\"orders.totalPages\" [setPage]=\"params.page\" [setSize]=\"params.size\" (selectedPage)=\"onPageSelected($event)\" (selectedSize)=\"onSizeSelected($event)\"></app-page>\n\n");

/***/ }),

/***/ "cd4b":
/*!*******************************************************!*\
  !*** ./src/app/pages/driver/dOrders/dOrder.module.ts ***!
  \*******************************************************/
/*! exports provided: DOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOrderModule", function() { return DOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _func_func_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../func/func.module */ "rDpx");
/* harmony import */ var _dOrders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dOrders.component */ "R0tn");
/* harmony import */ var _dOrder_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dOrder-routing.module */ "qNFG");







let DOrderModule = class DOrderModule {
};
DOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dOrders_component__WEBPACK_IMPORTED_MODULE_5__["DOrdersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dOrder_routing_module__WEBPACK_IMPORTED_MODULE_6__["DOrderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _func_func_module__WEBPACK_IMPORTED_MODULE_4__["FuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]
    })
], DOrderModule);



/***/ }),

/***/ "qNFG":
/*!***************************************************************!*\
  !*** ./src/app/pages/driver/dOrders/dOrder-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOrderRoutingModule", function() { return DOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dOrders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dOrders.component */ "R0tn");




const routes = [
    {
        path: '',
        component: _dOrders_component__WEBPACK_IMPORTED_MODULE_3__["DOrdersComponent"],
        data: {
            title: '首页'
        }
    },
];
let DOrderRoutingModule = class DOrderRoutingModule {
};
DOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DOrderRoutingModule);



/***/ }),

/***/ "sqw3":
/*!*************************************************************!*\
  !*** ./src/app/pages/driver/dOrders/dOrders.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci9kT3JkZXJzL2RPcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-driver-dOrders-dOrder-module.js.map