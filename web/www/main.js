(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "//Q6":
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/*! exports provided: Random, randomChineseString, randomTimestamp, randomBoolean, randomNumber, randomString, waitsFor, waits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomChineseString", function() { return randomChineseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomTimestamp", function() { return randomTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomBoolean", function() { return randomBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumber", function() { return randomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomString", function() { return randomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitsFor", function() { return waitsFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waits", function() { return waits; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



// 解码
const decodeUnicode = (str) => {
    str = '\\u' + str;
    str = str.replace(/\\/g, '%');
    str = unescape(str);
    str = str.replace(/%/g, '\\');
    return str;
};
class Random {
    /**
     * 获取随机数据
     * @param width 位宽
     */
    static nextNumber(width = 32) {
        let range = 1;
        while (width > 0) {
            range = range * 2;
            width--;
        }
        return Math.floor(Math.random() * range);
    }
    /**
     * 获取随机字符串
     * @param prefix 返回字符串的前缀
     * @param length 字符串长度
     */
    static nextString(prefix = '', length = 4) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return prefix + result;
    }
}
/*
* 获取取机的中文字符串
*/
const randomChineseString = (preString = '', length = 3) => {
    let name = '';
    for (let i = 0; i < length; i++) {
        let unicodeNum = '';
        unicodeNum = randomNumberByRange(0x4e00, 0x9fa5).toString(16);
        name += decodeUnicode(unicodeNum);
    }
    return preString + name;
};
/**
 * 获取指定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 */
const randomNumberByRange = (min = 0, max = 1000) => {
    return Math.floor(Math.random() * (min - max) + max);
};
/**
 * 随机时间戳
 * @param day 随机生成的时间范围（天）
 * @param baseDate 生成时间范围基于某天
 * @sample
 * randomTimestamp(10, new Date(2020, 7, 12))
 * 返回：2020年7月12日前后10天的随机一天
 */
const randomTimestamp = (day = 7, baseDate = new Date()) => {
    const range = 1000 * 60 * 60 * 24 * day * 2;
    return baseDate.getTime() + randomNumber(range) - range / 2;
};
const randomBoolean = () => {
    return randomNumber(10) % 2 === 0;
};
const randomNumber = (range = 1000) => {
    return Math.floor(Math.random() * range);
};
const randomString = (prefix = '', length = 4) => {
    return prefix + Math.random().toString(36).slice(-length);
};
/**
 * 等待方法体中的函数返回true后，再返回promise
 * @param untilTruthy 返回boolean值的函数
 */
const waitsFor = (lastMethod, failureMessage = '花费的时间过长，请检查判断条件', timeout = 2000) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    let spentTime = 0;
    while (!lastMethod()) {
        if (spentTime > timeout) {
            throw new Error('花费的时间过长，请检查判断条件');
        }
        yield Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(25).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
        spentTime += 25;
    }
    return Promise.resolve(true);
});
/**
 * 等待一会
 * @param timeout 中断时长
 */
const waits = (timeout = 25) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    while (timeout > 0) {
        yield Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(25).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
        timeout -= 25;
    }
    return Promise.resolve();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/person.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jincheng/Documents/Products/LogisticsTransportationPlatform/web/src/person.ts */"zUnb");


/***/ }),

/***/ "25OI":
/*!******************************************!*\
  !*** ./src/app/func/pipe/Status.pipe.ts ***!
  \******************************************/
/*! exports provided: StatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPipe", function() { return StatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let StatusPipe = class StatusPipe {
    transform(value) {
        switch (value) {
            case 0:
                return `未揽收`;
                break;
            case 1:
                return `已揽收`;
                break;
            case 2:
                return `运输中`;
                break;
            case 3:
                return `已送达`;
                break;
            case 4:
                return `已完成`;
                break;
        }
    }
};
StatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'status'
    })
], StatusPipe);



/***/ }),

/***/ "5LMi":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "8cFx");







let AuthService = class AuthService {
    constructor(httpClient, router, commonService) {
        this.httpClient = httpClient;
        this.router = router;
        this.commonService = commonService;
        this.baseDir = 'auth';
        /**
         * buffer 设置为 1
         * 只保留最新的登录用户
         */
        this.currentLoginUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        /**
         * 用户注销时触发的回调函数
         * 一般用于清除缓存
         */
        this.loginTriggerCallbacks = new Array();
        this.appOnReadyItem = this.commonService.getAppOnReadyItem();
        // 如果当前不是登录模块，请求当前登录用户
        if (!this.router.url.startsWith(`/login`)) {
            this.requestCurrentLoginUser();
        }
        else {
            this.appOnReadyItem.ready = true;
        }
    }
    login(user) {
        // 新建Headers，并添加认证信息
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        // 添加 content-type
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // 添加认证信息
        headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + encodeURIComponent(user.password)));
        // 发起get请求并返回
        return this.httpClient.get(`${this.baseDir}/login`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
        }));
    }
    /**
     * 获取当前登录用户
     */
    getCurrentLoginUser$() {
        return this.currentLoginUser$;
    }
    /**
     * 设置当前登录用户
     * @param user 登录用户
     */
    setCurrentLoginUser(user) {
        this.currentLoginUser = user;
        this.currentLoginUser$.next(user);
    }
    /**
     * 请求当前登录用户
     */
    requestCurrentLoginUser(callback) {
        this.appOnReadyItem.ready = false;
        // 由于在构造函数中使用了本函数, 不加setTimeout在其他地方注入时可能会造成undefined的问题
        // 为什么httpClient请求不以异步进行 需要setTimeout还没研究明白
        setTimeout(() => {
            this.httpClient.get(`${this.baseDir}/user`)
                .subscribe((user) => {
                this.triggerLoginCallbacks();
                this.setCurrentLoginUser(user);
            }, () => {
                this.appOnReadyItem.ready = true;
            }, () => {
                this.appOnReadyItem.ready = true;
                if (callback) {
                    callback();
                }
            });
        });
    }
    /**
     * 调用登录成功后的回调函数
     */
    triggerLoginCallbacks() {
        this.loginTriggerCallbacks.forEach(callback => {
            if (callback) {
                callback();
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "8cFx":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: AppOnReadyItem, CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppOnReadyItem", function() { return AppOnReadyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "pfSe");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assert */ "9lTW");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_secondUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/secondUtils */ "OhJW");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/utils */ "//Q6");











/**
 * 应用程序准备完毕的影响元素
 * 用于程序程序时，设置：应用程序准备完毕状态
 * 比如系统启用动需要首先获取当前登录用户及系统菜单
 * 当所有的加载完成后，我们认为系统已准备完毕，此时可以进行相应的其它请求
 *
 */
class AppOnReadyItem {
    constructor(fn) {
        /*本元素（比如：系统菜单）是否准备完毕*/
        this._READY = false;
        /* 当发送是否准备完毕状态时执行的回调方法 */
        this.sendReadyFn = (() => {
        });
        this.sendReadyFn = fn;
    }
    get ready() {
        return this._READY;
    }
    set ready(value) {
        this._READY = value;
        this.sendReadyFn(value);
    }
}
let CommonService = class CommonService {
    constructor(router) {
        this.router = router;
        /**
         * 应用是否准备完毕
         */
        this.appIsReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        /**
         * 影响应用准备完毕的项
         * 遵循：对扩展开放，对修改关闭的原则。其它模块如果有影响系统启动的项时，将其添加到本属性中即可
         */
        this.appOnReadyItems = Array();
        /**
         * 缓存的当应用准备完毕后回调的函数
         * 该函数仅当应用准备完毕后调用1次
         */
        this.appOnReadyCacheCallbacks = [];
        /** 当前是否处于后退状态 */
        this.isBack = false;
        /** 当前路由是否能后退观察者 */
        this.canBack$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        /** 所有路由信息 */
        this.routeStates = [];
        /** 字符集 */
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        /** 全局唯一 id 列表 */
        this.uniqueIds = new Set();
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading$ = this.loadingSubject.asObservable();
        this.appIsReady$ = this.appIsReadySubject.asObservable();
        this.appIsReady$.subscribe(isReady => {
            if (isReady) {
                this.invokeOnReadyCacheCallback();
            }
        });
        /** 订阅路由事件 */
        this.router.events
            /** 过滤：路由结束事件 */
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
        }))
            /** 订阅路由结束后执行的方法 */
            .subscribe((routeState) => {
            this.currentUrl = routeState.urlAfterRedirects;
            if (this.isBack) {
                /** 如果处于后退状态，清空状态 */
                /** 获取完历史参数以后再清除后退状态 */
                this.isBack = false;
            }
            else if (!this.currentUrl.startsWith('/auth')) {
                /** 如果不是认证模块，将当前路由添加到数组中 */
                if (this.routeStates.length >= 50) {
                    this.routeStates.splice(0, 1);
                }
                this.routeStates.push({ url: this.currentUrl, state: this.router.getCurrentNavigation().extras.state });
            }
            /** 更新是否能后退信息 */
            this.canBack$.next(this.routeStates.length >= 2);
        });
    }
    /**
     * 使用ID进行比较
     * @param item1 第一个比较的对象
     * @param item2 第二个比较的对象
     */
    static comparedWithId(item1, item2) {
        if (item2 === item1) {
            return true;
        }
        if (item1 === null && item2 === undefined) {
            return true;
        }
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(item1) && Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(item2)) {
            return item1.id === item2.id;
        }
        return false;
    }
    /**
     * 转换为中文字符
     * 11 -> 十一
     * 支持两位及以下
     * @param num 输入数字
     */
    static convertToChineseCharacter(num) {
        /** 截取字符串 */
        const arr = String(num).split('');
        const length = arr.length;
        /** 校验支持长度 */
        if (length <= 0 || length >= 3) {
            return '';
        }
        /** 一位，直接转换成数字 */
        if (length === 1) {
            return this.digits[num];
        }
        /** 两位，拼接单位 十 */
        let result = '';
        if (arr[0] !== '1') {
            result += this.digits[arr[0]];
        }
        result += '十';
        if (arr[1] !== '0') {
            result += this.digits[arr[1]];
        }
        return result;
    }
    /**
     * 应用程序准备就绪
     * @param callback 回调方法
     */
    appOnReady(callback) {
        if (this.appIsReadySubject.getValue()) {
            callback();
        }
        else {
            this.appOnReadyCacheCallbacks.push(callback);
        }
    }
    /** 路由后退 */
    back() {
        /** 清空当前的路由信息 */
        this.clearCurrentRoute();
        if (this.routeStates.length > 0) {
            /** 获取待后退的url */
            const state = this.routeStates[this.routeStates.length - 1];
            /** 设置后退状态 */
            this.isBack = true;
            /** 路由跳转 */
            this.router.navigateByUrl(state.url, { state: state.state });
        }
    }
    canBack() {
        return this.canBack$;
    }
    /**
     * 判断是否为指定浏览器并且版本不低于要求最低版本
     * @param type 浏览器类型
     * @param version 浏览器版本
     * b
     * @author zhaokaiqiang
     */
    checkBrowserTypeAndVersion(type, version) {
        if (this.getBrowserTypeAndVersion().type === type && this.compareVersion(this.getBrowserTypeAndVersion().version, version) >= 0) {
            return true;
        }
        return false;
    }
    /**
     * 清空当前路由信息
     */
    clearCurrentRoute() {
        this.routeStates.pop();
    }
    /**
     * @ sample
     * compareVersion('10.2.3.0,', '9.0.0.0') = 1;
     * compareVersion('10.2.3.0,', '10.2.3.0') = 0;
     * compareVersion('9.0.0.0,', '10.2.3.0') = -1;
     * @param version1 版本号1
     * @param version2 版本号2
     * @author zhaokaiqiang
     */
    compareVersion(version1, version2) {
        assert__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"](version1, version2, '传入的参考不能为null');
        const versionArray1 = version1.split('\.'); // 注意此处为正则匹配，不能用"."；
        const versionArray2 = version2.split('\.');
        const minLength = Math.min(versionArray1.length, versionArray2.length); // 取最小长度值
        let diff = 0;
        for (let idx = 0; idx < minLength; idx++) {
            if (versionArray1[idx].length - versionArray2[idx].length !== 0) { // 先比较长度
                diff = versionArray1[idx].length - versionArray2[idx].length;
                break;
            }
            else if (versionArray1[idx].localeCompare(versionArray2[idx]) !== 0) { // 再比较字符
                diff = versionArray1[idx].localeCompare(versionArray2[idx]);
                break;
            }
        }
        // 如果已经分出大小，则直接返回，如果未分出大小，则再比较位数，有子版本的为大；
        diff = (diff !== 0) ? diff : versionArray1.length - versionArray2.length;
        return diff;
    }
    /**
     * 计算是否所有的系统启动项均已准备完毕
     * 遍历元素，所有的元素全部准备完毕，发送true
     * @param readyState 准备状态
     */
    computeAppIsReady(readyState) {
        if (!readyState) {
            this.appIsReadySubject.next(false);
        }
        else {
            let result = true;
            this.appOnReadyItems.forEach(readyItem => {
                if (!readyItem.ready) {
                    result = false;
                }
            });
            this.appIsReadySubject.next(result);
        }
    }
    /**
     * 是否确认提示框
     * @param callback    回调
     * @param description 描述
     * @param title       标题
     */
    confirm(callback, description = '该操作不可逆，请谨慎操作', title = '请确认', confirmButtonText = '确定', cancelButtonText = '取消', options = { icon: 'question' }) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            titleText: title,
            text: description,
            icon: options.icon,
            background: '#F7F8FA',
            allowOutsideClick: false,
            confirmButtonText,
            confirmButtonColor: '#007BFF',
            showCancelButton: true,
            cancelButtonText,
            cancelButtonColor: '#6C757D'
        }).then((result) => {
            if (result.value) {
                // 执行回调
                if (callback) {
                    callback(result.value);
                }
            }
            else {
                callback(false);
            }
        });
    }
    /**
     * 操作失败提示框
     * @param callback    回调
     * @param description 描述
     * @param title       标题
     */
    error(callback, description = '', title = '操作失败') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            titleText: title,
            text: description,
            icon: 'error',
            background: '#F7F8FA',
            allowOutsideClick: false,
            confirmButtonText: '确定',
            confirmButtonColor: '#007BFF',
            showCancelButton: false
        }).then((result) => {
            if (result.value) {
                // 执行回调
                if (callback) {
                    callback();
                }
            }
        });
    }
    /**
     * 添加影响APP是否准备好的项
     * 1. 每新添加一项，则重新计算一次系统是否准备好，并对应的发送通知
     * 2. 每新项增加回调函数（以使得其在变更_ready时，能够解发重新计算APP是否准备好的方法并发送通知）
     * 3. 将新添加的项添加到影响系统是否启动完毕的数组中
     * @param isReady 是否准备完毕的初始化
     * @return appOnReadyItem 应用准备完毕项
     */
    getAppOnReadyItem(isReady = false) {
        // 实初化
        const appOnReadyItem = new AppOnReadyItem((readyState) => {
            this.computeAppIsReady(readyState);
        });
        appOnReadyItem.ready = isReady;
        this.appOnReadyItems.push(appOnReadyItem);
        // 当前项为：未就绪，则重新计算
        if (!isReady) {
            this.computeAppIsReady(isReady);
        }
        return appOnReadyItem;
    }
    /**
     * 获取当前路由的状态值
     */
    getCurrentRouteState() {
        if (this.routeStates.length === 0) {
            return {};
        }
        const state = this.routeStates[this.routeStates.length - 1].state;
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(state)) {
            return {};
        }
        return state;
    }
    /**
     * 获取浏览器类型和版本
     * @author zhaokaiqiang
     */
    getBrowserTypeAndVersion() {
        let type = 'other';
        let version = null;
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.match(/msie ([\d.]+)/)) {
            type = 'msie';
            version = userAgent.match(/msie ([\d.]+)/)[1];
        }
        else if (userAgent.match(/edge\/([\d.]+)/)) {
            type = 'edge';
            version = userAgent.match(/edge\/([\d.]+)/)[1];
        }
        else if (userAgent.match(/edg\/([\d.]+)/)) {
            type = 'edge';
            version = userAgent.match(/edg\/([\d.]+)/)[1];
        }
        else if (userAgent.match(/firefox\/([\d.]+)/)) {
            type = 'firefox';
            version = userAgent.match(/firefox\/([\d.]+)/)[1];
        }
        else if (userAgent.match(/opr.([\d.]+)/)) {
            type = 'opera';
            version = userAgent.match(/opr.([\d.]+)/)[1];
        }
        else if (userAgent.match(/chrome\/([\d.]+)/)) {
            type = 'chrome';
            version = userAgent.match(/chrome\/([\d.]+)/)[1];
        }
        else if (userAgent.match(/version\/([\d.]+).*safari/)) {
            type = 'safari';
            version = userAgent.match(/version\/([\d.]+).*safari/)[1];
        }
        else if (userAgent.match(/rv:([\d.]+)/)) {
            type = 'msie';
            version = userAgent.match(/rv:([\d.]+)/)[1];
        }
        return { type, version };
    }
    /**
     * 生成随机 id
     * 暂定 8 位，该 API 可能会在以后的版本中更改，建议不少于 6 位，
     */
    getUniqueId() {
        /** 生成随机字符串 */
        let result = '';
        const length = this.characters.length;
        for (let i = 0; i < 8; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * length));
        }
        if (this.uniqueIds.has(result)) {
            /** 如果重复，重新生成 */
            return this.getUniqueId();
        }
        else {
            /** 添加到集合中 */
            this.uniqueIds.add(result);
            return result;
        }
    }
    httpError(httpError, callback) {
        return this.error(callback, httpError.error.message, '请求错误');
    }
    /**
     * 友情提示消息框
     * @param callback    回调
     * @param description 描述
     * @param title       标题
     * @param options showConfirmButton: 是否显示确认按钮
     */
    info(callback, description = '', title = '友情提示', options = { showConfirmButton: true }) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            titleText: title,
            text: description,
            icon: 'info',
            background: '#F7F8FA',
            allowOutsideClick: false,
            confirmButtonText: '确定',
            confirmButtonColor: '#007BFF',
            showCancelButton: false,
            showConfirmButton: options.showConfirmButton
        }).then((result) => {
            if (result.value) {
                // 执行回调
                if (callback) {
                    callback();
                }
            }
        });
    }
    /**
     * 调用缓存的回调方法，并在调用后清空缓存以防止被二次调用
     */
    invokeOnReadyCacheCallback() {
        this.appOnReadyCacheCallbacks.forEach(callback => {
            callback();
        });
        this.appOnReadyCacheCallbacks.splice(0, this.appOnReadyCacheCallbacks.length);
    }
    /**
     * 判断当前 字符串 是否是手机号
     * @param mobile 手机号字符串
     */
    isMobile(mobile) {
        const regex = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-9]{1}))+\d{8})$/;
        return regex.test(mobile);
    }
    /**
     * 正在加载中弹窗
     * 标题每1秒钟自动更新一次，加入 . 后缀
     * @param title 标题
     * @param description 描述信息
     * @param currentProcess 当前进度
     * @param maxStack 最大堆栈数（防止意外关闭窗口后的内存溢出）
     * @return close 关闭弹窗 currentProcessSubject 用于发送当前进度的数据源
     */
    loading(title = '请稍后', description = '', currentProcess = '', maxStack = 1000) {
        const html = `${description}<br><b>${currentProcess}</b>`;
        const tips = [];
        const currentProcessSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        currentProcessSubject.asObservable().subscribe((tip) => {
            tips.push(tip);
        });
        const loadingTipsTimerInterval = setInterval(() => {
            const tip = tips.shift();
            if (tip) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getContent().querySelector('b').textContent = tip;
            }
        }, 1500);
        let stack = 0;
        let timerInterval;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title,
            html,
            timerProgressBar: true,
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
                timerInterval = setInterval(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getTitle().textContent = Object(_core_secondUtils__WEBPACK_IMPORTED_MODULE_8__["convertToLoadingFormat"])(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getTitle().textContent);
                    stack++;
                    if (stack > maxStack) {
                        clearInterval(timerInterval);
                        clearInterval(loadingTipsTimerInterval);
                    }
                }, 1000);
            },
            onClose() {
                clearInterval(timerInterval);
            }
        });
        return {
            close: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close();
                clearInterval(loadingTipsTimerInterval);
            },
            currentProcessSubject
        };
    }
    /**
     * 获取特定长度的随机字符串
     * @param length 特定长度
     * @deprecated 请使用test/utils.ts的同名方法
     */
    randomString(length) {
        return _core_utils__WEBPACK_IMPORTED_MODULE_9__["Random"].nextString('', length);
    }
    /**
     * 应用在准备的阶段需要设置正在加载中状态
     * @param state 状态
     */
    setLoading(state) {
        this.loadingSubject.next(state);
    }
    /**
     * 操作成功提示框
     * @param callback    回调
     * @param description 描述
     * @param title       标题
     */
    success(callback, description = '', title = '操作成功', options = { confirmButtonText: '确定' }) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            titleText: title,
            text: description,
            icon: 'success',
            background: '#F7F8FA',
            allowOutsideClick: false,
            confirmButtonText: options.confirmButtonText,
            confirmButtonColor: '#007BFF',
            showCancelButton: false
        }).then((result) => {
            if (result.value) {
                // 执行回调
                if (callback) {
                    callback();
                }
            }
        });
    }
    // 设置当前路由的参数
    updateCurrentRouteState(state) {
        this.routeStates[this.routeStates.length - 1].state = state;
    }
};
CommonService.digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
CommonService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "A/8M":
/*!**************************************************************************!*\
  !*** ./src/app/func/selecter/goods-selector/goods-selector.component.ts ***!
  \**************************************************************************/
/*! exports provided: GoodsSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsSelectorComponent", function() { return GoodsSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_goods_selector_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./goods-selector.component.html */ "P9jo");
/* harmony import */ var _goods_selector_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-selector.component.scss */ "a2MQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_goods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/goods.service */ "la8e");





let GoodsSelectorComponent = class GoodsSelectorComponent {
    constructor(goodsService) {
        this.goodsService = goodsService;
        this.state = {};
        this.goodsSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    set goods(value) {
        console.log(value);
        this.state.goods = value;
    }
    get goods() {
        console.log(this.state.goods);
        return this.state.goods;
    }
    ngOnInit() {
        this.state.goods = null;
        this.getAllGoodsType();
    }
    getAllGoodsType() {
        this.goodsService.getAll().subscribe((goodsTypes) => {
            console.log(goodsTypes);
            this.state.goodsTypes = goodsTypes;
        });
    }
    change(goodsType) {
        this.goodsSelect.emit(goodsType);
    }
    comparedWithId(item1, item2) {
        const result1 = item1 === item2;
        let result2;
        if (item1 && item2) {
            result2 = item1.id === item2.id;
        }
        return result1 || result2;
    }
};
GoodsSelectorComponent.ctorParameters = () => [
    { type: _service_goods_service__WEBPACK_IMPORTED_MODULE_4__["GoodsService"] }
];
GoodsSelectorComponent.propDecorators = {
    goods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    goodsSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
GoodsSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-goods-select',
        template: _raw_loader_goods_selector_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_goods_selector_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoodsSelectorComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    color: '#007BFF',
    title: '物流运输平台',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EK2B":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.component.html */ "vX/9");
/* harmony import */ var _account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.component.scss */ "5LMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "Ouoq");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");






let AccountComponent = class AccountComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getCurrentLoginUser$()
            .subscribe((user) => {
            this.currentUser = user;
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountComponent);



/***/ }),

/***/ "OhJW":
/*!*************************************!*\
  !*** ./src/app/core/secondUtils.ts ***!
  \*************************************/
/*! exports provided: hash, convertToLoadingFormat, Assert, isNotNullOrUndefined, isNullOrUndefined, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToLoadingFormat", function() { return convertToLoadingFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return Assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotNullOrUndefined", function() { return isNotNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/**
 * 对字符串进行简单的加密
 * @param string 加密后的字符串
 */
function hash(sourceString) {
    let hashCode = 0;
    let i;
    let chr;
    for (i = 0; i < sourceString.length; i++) {
        chr = sourceString.charCodeAt(i);
        // tslint:disable-next-line:no-bitwise
        hashCode = ((hashCode << 5) - hashCode) + chr;
        // tslint:disable-next-line:no-bitwise
        hashCode |= 0; // Convert to 32bit integer
    }
    return hashCode;
}
/**
 * 转换为loading字样
 * @param target 目标字符串
 * @param suffix 后缀
 * @param length 长度
 * @example
 * '请稍候' => '请稍候.'
 * '请稍候.' => '请稍候..'
 * '请稍候..' => '请稍候...'
 * '请稍候...' => '请稍候'
 */
function convertToLoadingFormat(target, suffix = '.', length = 3) {
    const strings = target.split(suffix);
    if (strings.length <= length) {
        target += '.';
    }
    else {
        target = strings[0];
    }
    return target;
}
class Assert {
    /**
     * 断言是数组
     * @param value 断言的值
     * @param message 出错提示
     */
    static isArray(value, message) {
        if (!isNotNullOrUndefined(value) || !Array.isArray(value)) {
            throw new Error(message);
        }
    }
    /**
     * 断言被定义
     * undefined 异常
     * null 成功
     * other 成功
     * @param args 多参数
     */
    static isDefined(...args) {
        const message = this.validateArgs(args);
        args.forEach(value => {
            if (!isDefined(value)) {
                throw new Error(message);
            }
        });
    }
    static isObject(...args) {
        const message = this.validateArgs(args);
        args.forEach(arg => {
            const type = typeof arg;
            const isObject = type === 'function' || type === 'object' && !!arg;
            if (!isObject) {
                throw new Error(message);
            }
        });
    }
    /**
     * 断言输入的值为字符串
     * @param args 字符串1，字符串2...提示信息
     */
    static isString(...args) {
        const message = this.validateArgs(args);
        args.forEach(value => {
            if (typeof value !== 'string') {
                throw new Error(message);
            }
        });
    }
    static isNotNullOrUndefined(...args) {
        const message = this.validateArgs(args);
        args.forEach(value => {
            if (!isNotNullOrUndefined(value)) {
                throw new Error(message);
            }
        });
    }
    /**
     * 校验参考并返回参数的最后一项做为message提示消息返回
     * @param args 多个参数
     */
    static validateArgs(args) {
        if (args.length < 2) {
            throw new Error('最少输入两个参数');
        }
        if (typeof (args[args.length - 1]) !== 'string') {
            throw new Error('最后一个参数必须为字符串');
        }
        const message = args.pop();
        return message;
    }
    static isUndefined(param) {
        if (typeof param !== 'undefined') {
            throw new Error('变量已定义');
        }
    }
    /**
     * 断言为null
     * null 成功
     * undefined 异常
     * other 异常
     * @param param 输入
     */
    static isNull(param) {
        if (typeof param === 'undefined' || param !== null) {
            throw new Error('变量非空');
        }
    }
}
/**
 * 是否不为null或undefined
 * undefined -> false
 * null -> false
 * other -> true
 * @param value 值
 */
function isNotNullOrUndefined(value) {
    return value !== undefined && value !== null;
}
/**
 * 为null或undefined
 * @param value 值
 */
function isNullOrUndefined(value) {
    return !isNotNullOrUndefined(value);
}
/**
 * 是否被定义
 * undefined -> false
 * other -> true
 * @param value 校验值
 */
function isDefined(value) {
    return value !== undefined;
}


/***/ }),

/***/ "Ouoq":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "8cFx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_vuser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/vuser */ "aSBa");








let UserService = class UserService {
    constructor(commonService, httpClient, router) {
        this.commonService = commonService;
        this.httpClient = httpClient;
        this.router = router;
        this.currentLoginUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.url = 'user';
        /**
         * 验证新密码与确认密码是否相同
         * @param control 表单
         */
        this.confirmPasswordValidator = (control) => {
            const newPassword = control.get('newPassword').value;
            const confirmNewPassword = control.get('confirmNewPassword').value;
            // 判断确认密码与新密码是否相同
            if (newPassword && confirmNewPassword) {
                return newPassword !== confirmNewPassword ? { confirmPasswordError: true } : null;
            }
            return null;
        };
        this.currentLoginUser$ = this.currentLoginUserSubject.asObservable();
        this.getCurrentLoginUser();
    }
    getCurrentLoginUser() {
        const appOnReadyItem = this.commonService.getAppOnReadyItem();
        this.httpClient.get(`${this.url}/me`)
            .subscribe(user => {
            appOnReadyItem.ready = true;
            this.setCurrentLoginUser(user);
        }, () => {
            appOnReadyItem.ready = true;
            this.setCurrentLoginUser(null);
        });
    }
    /**
     * 获取登录用户时，应该结合appOnReady。示例：
     * this.commonService.appOnReady(() => {const user = this.userService.getCurrentUser();});
     */
    getCurrentUser() {
        return this.currentLoginUser;
    }
    login(user) {
        // 新建Headers，并添加认证信息
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        // 添加 content-type
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // 添加认证信息
        headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + encodeURIComponent(user.password)));
        // 发起get请求并返回
        return this.httpClient.get(this.url + '/me', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((data) => {
            this.setCurrentLoginUser(data);
        }));
    }
    logout() {
        return this.httpClient.get(`${this.url}/logout`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            this.setCurrentLoginUser(null);
        }));
    }
    registerDriver(driver) {
        return this.httpClient.post(`${this.url}/driverRegister`, driver);
    }
    registerOwner(owner) {
        return this.httpClient.post(`${this.url}/ownerRegister`, owner);
    }
    /**
     * 设置当前登录用户
     * @param user 登录用户
     */
    setCurrentLoginUser(user) {
        this.currentLoginUser = user;
        this.currentLoginUserSubject.next(user);
    }
    /**
     * 校验密码是否正确
     * @param password 密码
     */
    checkPasswordIsRight(password) {
        const vUser = new _base_vuser__WEBPACK_IMPORTED_MODULE_7__["VUser"]();
        vUser.password = password;
        return this.httpClient.post(`${this.url}/checkPasswordIsRight`, vUser);
    }
    /**
     * 验证原密码是否正确
     */
    oldPasswordValidator() {
        return (ctrl) => {
            return this.checkPasswordIsRight(ctrl.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((isRight) => (isRight ? null : { passwordError: true })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() => null));
        };
    }
    /**
     * 登录用户修改密码
     * @param newPassword 新密码
     * @param oldPassword 旧密码
     */
    updatePassword(newPassword, oldPassword) {
        const vUser = new _base_vuser__WEBPACK_IMPORTED_MODULE_7__["VUser"]();
        vUser.password = oldPassword;
        vUser.newPassword = encodeURIComponent(newPassword);
        return this.httpClient.put(`${this.url}/updatePassword`, vUser);
    }
    /**
     * 更新
     */
    update(userId, user) {
        console.log(user);
        return this.httpClient.put(`${this.url}/${userId.toString()}`, user);
    }
    /**
     * 重置密码
     * @param id  用户id
     * @param student  学生
     */
    resetPassword(id) {
        console.log(this.url + '/resetPassword/' + id);
        return this.httpClient.put(this.url + '/resetPassword/' + id, id);
    }
};
UserService.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "P9jo":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/func/selecter/goods-selector/goods-selector.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<select [compareWith]=\"comparedWithId\" class=\"form-control\" [(ngModel)]=\"this.state.goods\" (change)=\"change(goods)\">\n  <option [ngValue]=\"null\" >请选择货物类型...</option>\n  <option *ngFor=\"let _goodsType of state.goodsTypes\" [ngValue]=\"_goodsType\">{{_goodsType.name}}</option>\n</select>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'web';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _func_func_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/func.module */ "rDpx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _net_yunzhi_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./net/yunzhi.interceptor */ "toiG");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account/account.component */ "EK2B");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _func_func_module__WEBPACK_IMPORTED_MODULE_5__["FuncModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"].forRoot()
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _net_yunzhi_interceptor__WEBPACK_IMPORTED_MODULE_7__["YunzhiInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a2MQ":
/*!****************************************************************************!*\
  !*** ./src/app/func/selecter/goods-selector/goods-selector.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmMvc2VsZWN0ZXIvZ29vZHMtc2VsZWN0b3IvZ29vZHMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "aSBa":
/*!*******************************!*\
  !*** ./src/app/base/vuser.ts ***!
  \*******************************/
/*! exports provided: VUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VUser", function() { return VUser; });
/**
 * user 对应的vo
 */
class VUser {
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "la8e":
/*!******************************************!*\
  !*** ./src/app/service/goods.service.ts ***!
  \******************************************/
/*! exports provided: GoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return GoodsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let GoodsService = class GoodsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'goodsType';
    }
    getAll() {
        return this.httpClient.get(`${this.url}`);
    }
};
GoodsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GoodsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GoodsService);



/***/ }),

/***/ "rDpx":
/*!*************************************!*\
  !*** ./src/app/func/func.module.ts ***!
  \*************************************/
/*! exports provided: FuncModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncModule", function() { return FuncModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _selecter_goods_selector_goods_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecter/goods-selector/goods-selector.component */ "A/8M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipe_Status_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/Status.pipe */ "25OI");







let FuncModule = class FuncModule {
};
FuncModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _selecter_goods_selector_goods_selector_component__WEBPACK_IMPORTED_MODULE_2__["GoodsSelectorComponent"],
            _pipe_Status_pipe__WEBPACK_IMPORTED_MODULE_6__["StatusPipe"]
        ],
        exports: [
            _selecter_goods_selector_goods_selector_component__WEBPACK_IMPORTED_MODULE_2__["GoodsSelectorComponent"],
            _pipe_Status_pipe__WEBPACK_IMPORTED_MODULE_6__["StatusPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        entryComponents: []
    })
], FuncModule);



/***/ }),

/***/ "toiG":
/*!*******************************************!*\
  !*** ./src/app/net/yunzhi.interceptor.ts ***!
  \*******************************************/
/*! exports provided: YunzhiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YunzhiInterceptor", function() { return YunzhiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common.service */ "8cFx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../conf/app.conf */ "uzq4");
/* harmony import */ var _core_secondUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/secondUtils */ "OhJW");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");
var YunzhiInterceptor_1;










/**
 * Yunzhi拦截器，用于实现添加url，添加header，全局异常处理
 * 个别请求不需要进行拦截的，请在请求的header中加入：do_not_intercept,值为true
 */
let YunzhiInterceptor = YunzhiInterceptor_1 = class YunzhiInterceptor {
    constructor(commonService, authService, router) {
        this.commonService = commonService;
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        /**
         * 为request加上服务端前缀
         */
        let url = req.url;
        // header中带有do_not_intercept，且值为true，则不添加url前缀
        if (('true' !== req.headers.get(YunzhiInterceptor_1.DONT_INTERCEPT_HEADER_KEY))
            && !url.startsWith('https://') && !url.startsWith('http://')) {
            url = _conf_app_conf__WEBPACK_IMPORTED_MODULE_7__["config"].server + url;
        }
        let request = req.clone({ url });
        /**
         * 设置headers，防止弹出对话框
         * https://stackoverflow.com/questions/37763186/spring-boot-security-shows-http-basic-auth-popup-after-failed-login
         */
        let headers = request.headers;
        headers = headers.append('X-Requested-With', 'XMLHttpRequest');
        request = request.clone({ headers });
        /**
         * 过滤到null及undefined
         */
        let cleanedParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        request.params.keys().forEach(x => {
            if (Object(_core_secondUtils__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(request.params.get(x))) {
                cleanedParams = cleanedParams.append(x, req.params.get(x));
            }
        });
        request = request.clone({ headers, params: cleanedParams });
        this.commonService.setLoading(true);
        /**
         * 数据过滤
         */
        return next.handle(request).pipe(
        // mergeMap = merge + map
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((event) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.commonService.setLoading(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return this.handleHttpException(error);
        }));
    }
    handleHttpException(error) {
        switch (error.status) {
            case 401:
                if (!this.router.url.startsWith(`/login`)) {
                    // 未登录，跳转到登录页
                    this.router.navigateByUrl('/login');
                }
                break;
            default:
                break;
        }
        // 最终将异常抛出来，便于组件个性化处理
        throw error;
    }
};
YunzhiInterceptor.DONT_INTERCEPT_HEADER_KEY = 'do_not_intercept';
YunzhiInterceptor.ctorParameters = () => [
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
YunzhiInterceptor = YunzhiInterceptor_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], YunzhiInterceptor);



/***/ }),

/***/ "uzq4":
/*!**********************************!*\
  !*** ./src/app/conf/app.conf.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    server: '/api/',
    size: 10,
    version: '1.0.0',
    autoSaveInterval: 10 * 60 * 1000,
    screenLockTime: 10 * 60 * 1000,
    logoutTime: 30 * 60 * 1000,
    errorResponseCodeKey: 'code',
    errorResponseMessageKey: 'message',
    phoneNumber: 'thisIsOurPhoneNumber' // 系统报错时提示的联系电话
};


/***/ }),

/***/ "vX/9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row mt-2\">\n  <div class=\"col-md-4 offset-md-2\">\n    <div class=\"row\">\n      <div class=\"col-md-4 text-right\">\n        <label for=\"name\">姓名：</label>\n      </div>\n      <div class=\"col-md-8\">\n        <div id=\"name\">\n          {{currentUser?.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row mt-2\">\n  <div class=\"col-md-4 offset-md-2\">\n    <div class=\"row\">\n      <div class=\"col-md-4 text-right\">\n        <label for=\"phone\">电话：</label>\n      </div>\n      <div class=\"col-md-8\">\n        <div id=\"phone\">\n          {{currentUser?.username}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-2\">\n  <div class=\"col-md-4 offset-md-2\">\n    <div class=\"row\">\n      <div class=\"col-md-4 text-right\">\n        <label for=\"quota\">余额：</label>\n      </div>\n      <div class=\"col-md-8\">\n        <div id=\"quota\">\n          {{currentUser?.quota}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row mt-4\">\n  <div class=\"col-md-4 offset-md-2\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <a class=\"btn btn-primary btn-sm mr-2\" routerLink=\"/account/add\">\n          <i class=\"fas fa-edit\"></i>\n          账户充值\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-login-login-module */ "pages-auth-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/auth/login/login.module */ "qdgq")).then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardModule),
        data: {
            title: '仪表盘'
        }
    },
    {
        path: 'order',
        loadChildren: () => Promise.all(/*! import() | pages-owner-order-order-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-owner-order-order-module")]).then(__webpack_require__.bind(null, /*! ./pages/owner/order/order.module */ "HiHu")).then(m => m.OrderModule),
        data: {
            title: '订单管理'
        }
    },
    {
        path: 'driverOrder',
        loadChildren: () => Promise.all(/*! import() | pages-driver-dOrders-dOrder-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-driver-dOrders-dOrder-module")]).then(__webpack_require__.bind(null, /*! ./pages/driver/dOrders/dOrder.module */ "cd4b")).then(m => m.DOrderModule),
        data: {
            title: '订单管理'
        }
    },
    {
        path: 'driverOrderManage',
        loadChildren: () => Promise.all(/*! import() | pages-driver-order-manage-orderManage-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-driver-order-manage-orderManage-module")]).then(__webpack_require__.bind(null, /*! ./pages/driver/order-manage/orderManage.module */ "12r7")).then(m => m.OrderManageModule),
        data: {
            title: '查看订单'
        }
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-account-account-module */ "pages-account-account-module").then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "4+IK")).then(m => m.AccountModule),
        data: {
            title: '账户管理'
        }
    },
    {
        path: 'personalCenter',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-personal-center-personal-center-module */ "pages-personal-center-personal-center-module").then(__webpack_require__.bind(null, /*! ./pages/personal-center/personal-center.module */ "FeC4")).then(m => m.PersonalCenterModule),
        data: {
            title: '个人中心'
        }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/person.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=person.js.map
