function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Expense Splitter';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _dashboard_groups_groups_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dashboard/groups/groups.component */
    "./src/app/dashboard/groups/groups.component.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: 'groups',
        component: _dashboard_groups_groups_component__WEBPACK_IMPORTED_MODULE_14__["GroupsComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: 'login',
            component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            pathMatch: 'full'
          }, {
            path: 'groups',
            component: _dashboard_groups_groups_component__WEBPACK_IMPORTED_MODULE_14__["GroupsComponent"],
            pathMatch: 'full'
          }, {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          }])],
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.url = "http://".concat(location.hostname, ":3000");

        this.getUserInfoFromLocalStorage = function () {
          if (localStorage.getItem('userInfo')) return JSON.parse(localStorage.getItem('userInfo'));
        };

        this.setUserInfoToLocalStorage = function (data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        };
      }

      _createClass(AppService, [{
        key: "signUp",
        value: function signUp(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('isAdmin', data.isAdmin).set('userName', data.userName).set('emailAddress', data.emailAddress).set('password', data.password).set('countryCode', data.countryCode).set('mobileNumber', data.mobileNumber);
          return this.http.post("".concat(this.url, "/api/v1/users/signup"), params);
        }
      }, {
        key: "logIn",
        value: function logIn(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailAddress', data.emailAddress).set('password', data.password);
          return this.http.post("".concat(this.url, "/api/v1/users/login"), params);
        }
      }, {
        key: "logOut",
        value: function logOut(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', data.userId).set('authToken', data.authToken);
          return this.http.post("".concat(this.url, "/api/v1/users/logout"), params);
        }
      }, {
        key: "sendMail",
        value: function sendMail(emailAddress) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailAddress', emailAddress);
          return this.http.post("".concat(this.url, "/api/v1/users/forgotpassword"), params);
        }
      }, {
        key: "verifyCode",
        value: function verifyCode(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailAddress', data.emailAddress).set('verifyingCode', data.verifyingCode);
          return this.http.post("".concat(this.url, "/api/v1/users/verifycode"), params);
        }
      }, {
        key: "findEmailAndUpdatePassword",
        value: function findEmailAndUpdatePassword(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailAddress', data.emailAddress).set('password', data.password);
          return this.http.post("".concat(this.url, "/api/v1/users/updatepassword"), params);
        }
      }, {
        key: "getAllGroupsByUser",
        value: function getAllGroupsByUser(data) {
          return this.http.get("".concat(this.url, "/api/v1/groups/").concat(data.userId, "/view/all?authToken=").concat(data.authToken));
        }
      }, {
        key: "addUserWithGroupOperations",
        value: function addUserWithGroupOperations(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('groupName', data.groupName).set('category', data.category).set('description', data.description).set('userId', data.userId).set('authToken', data.authToken);
          return this.http.post("".concat(this.url, "/api/v1/groups/users/add/").concat(data.groupId), params);
        }
      }, {
        key: "getUsersByGroup",
        value: function getUsersByGroup(data) {
          return this.http.get("".concat(this.url, "/api/v1/groups/").concat(data.groupId, "/view/users/").concat(data.usersInGroup, "?authToken=").concat(data.authToken));
        }
      }, {
        key: "getAllExpensesByGroup",
        value: function getAllExpensesByGroup(data) {
          return this.http.get("".concat(this.url, "/api/v1/expenses/").concat(data.groupId, "/view/all?authToken=").concat(data.authToken));
        }
      }, {
        key: "createExpenseAndAmount",
        value: function createExpenseAndAmount(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('expenseName', data.expenseName).set('category', data.category).set('amount', data.amount).set('transactionDate', data.transactionDate).set('notes', data.notes).set('groupId', data.groupId).set('lendingUserId', data.lendingUserId).set('lendingAmount', data.lendingAmount).set('borrowingData', JSON.stringify(data.borrowingData)).set('expenseHistory', data.expenseHistory).set('authToken', data.authToken);
          return this.http.post("".concat(this.url, "/api/v1/expenses/create"), params, {
            headers: headers
          });
        }
      }, {
        key: "getAmountDetailsByExpense",
        value: function getAmountDetailsByExpense(data) {
          return this.http.get("".concat(this.url, "/api/v1/expenses/").concat(data.expenseId, "/view/amount?authToken=").concat(data.authToken));
        }
      }, {
        key: "getExpenseDetails",
        value: function getExpenseDetails(data) {
          return this.http.get("".concat(this.url, "/api/v1/expenses/").concat(data.expenseId, "/view?authToken=").concat(data.authToken));
        }
      }, {
        key: "updateExpenseAndAmount",
        value: function updateExpenseAndAmount(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('expenseId', data.expenseId).set('expenseName', data.expenseName).set('category', data.category).set('amount', data.amount).set('transactionDate', data.transactionDate).set('notes', data.notes).set('groupId', data.groupId).set('lendingUserId', data.lendingUserId).set('lendingAmount', data.lendingAmount).set('borrowingData', JSON.stringify(data.borrowingData)).set('expenseHistoryData', JSON.stringify(data.expenseHistoryData)).set('authToken', data.authToken);
          return this.http.post("".concat(this.url, "/api/v1/expenses/update"), params, {
            headers: headers
          });
        }
      }, {
        key: "deleteExpenseAndAmount",
        value: function deleteExpenseAndAmount(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('expenseId', data.expenseId).set('expenseName', data.expenseName).set('authToken', data.authToken);
          return this.http.post("".concat(this.url, "/api/v1/expenses/delete"), params);
        }
      }, {
        key: "getAmountDetailsByGroup",
        value: function getAmountDetailsByGroup(data) {
          return this.http.get("".concat(this.url, "/api/v1/groups/").concat(data.groupId, "/balances?authToken=").concat(data.authToken));
        }
      }, {
        key: "getHistoryDetailsByExpense",
        value: function getHistoryDetailsByExpense(data) {
          return this.http.get("".concat(this.url, "/api/v1/expenses/").concat(data.expenseId, "/history?authToken=").concat(data.authToken));
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/balances/balances.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dashboard/balances/balances.component.ts ***!
    \**********************************************************/

  /*! exports provided: BalancesComponent */

  /***/
  function srcAppDashboardBalancesBalancesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BalancesComponent", function () {
      return BalancesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BalancesComponent_div_10_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var balance_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", balance_r4.firstMemberName, " ", balance_r4.firstPrompt, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](balance_r4.balanceAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", balance_r4.secondPrompt, " ", balance_r4.secondMemberName, " ", balance_r4.thirdPrompt, "");
      }
    }

    function BalancesComponent_div_10_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalancesComponent_div_10_div_7_div_1_Template, 8, 6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var totalBalance_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", totalBalance_r1.memberId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.filterMember(totalBalance_r1.memberId));
      }
    }

    function BalancesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BalancesComponent_div_10_div_7_Template, 2, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var totalBalance_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", totalBalance_r1.memberId, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", totalBalance_r1.memberName, " ", totalBalance_r1.firstPrompt, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](totalBalance_r1.balanceAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", totalBalance_r1.secondPrompt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", totalBalance_r1.balanceAmount);
      }
    }

    var BalancesComponent = /*#__PURE__*/function () {
      function BalancesComponent(appService, toastr, router) {
        var _this = this;

        _classCallCheck(this, BalancesComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.groupId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupId');
        this.groupName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupName');
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.memberIds = [];
        this.borrowingInfo = [];
        this.borrowingObj = {};
        this.borrowingArr = [];
        this.totalBorrowingObj = {};
        this.lendingInfo = [];
        this.lendingObj = {};
        this.lendingArr = [];
        this.totalLendingObj = {};
        this.totalBalanceObj = {};
        this.totalBalanceArr = [];
        this.balanceObj = {};
        this.balanceArr = [];

        this.loadDetails = function () {
          var data = {
            groupId: _this.groupId,
            usersInGroup: 'Y',
            authToken: _this.authToken
          };

          _this.appService.getUsersByGroup(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this.membersInGroup = apiResponse.data;

              _this.membersInGroup.forEach(function (x) {
                _this.memberIds.push(x.userId);

                _this.borrowingObj[x.userId] = {};
                _this.lendingObj[x.userId] = {};
                _this.balanceObj[x.userId] = {};
                _this.totalBorrowingObj[x.userId] = 0;
                _this.totalLendingObj[x.userId] = 0;

                _this.membersInGroup.forEach(function (y) {
                  if (x.userId !== y.userId) {
                    _this.borrowingObj[x.userId][y.userId] = 0;
                    _this.lendingObj[x.userId][y.userId] = 0;
                  }
                });
              });

              var _data = {
                groupId: _this.groupId,
                authToken: _this.authToken
              };

              _this.appService.getAmountDetailsByGroup(_data).subscribe(function (apiResponse) {
                _this.memberIds.forEach(function (x) {
                  var borrowedData = apiResponse.data.filter(function (y) {
                    return y.borrowingUserId === x && y.lendingUserId !== x;
                  });
                  borrowedData.forEach(function (z) {
                    _this.borrowingObj[z.borrowingUserId][z.lendingUserId] = (_this.borrowingObj[z.borrowingUserId][z.lendingUserId] || 0) + parseFloat(z.borrowingAmount);
                    _this.totalBorrowingObj[z.borrowingUserId] = (_this.totalBorrowingObj[z.borrowingUserId] || 0) + parseFloat(z.borrowingAmount);
                  });
                  var lendedData = apiResponse.data.filter(function (y) {
                    return y.lendingUserId === x && y.borrowingUserId !== x;
                  });
                  lendedData.forEach(function (z) {
                    _this.lendingObj[z.lendingUserId][z.borrowingUserId] = (_this.lendingObj[z.lendingUserId][z.borrowingUserId] || 0) + parseFloat(z.lendingAmount);
                    _this.totalLendingObj[z.lendingUserId] = (_this.totalLendingObj[z.lendingUserId] || 0) + parseFloat(z.lendingAmount);
                  });
                  _this.totalBalanceObj[x] = _this.totalLendingObj[x] - _this.totalBorrowingObj[x];
                  lendedData.forEach(function (z) {
                    _this.balanceObj[x][z.borrowingUserId] = _this.lendingObj[x][z.borrowingUserId] - _this.borrowingObj[x][z.borrowingUserId];
                  });
                  borrowedData.forEach(function (z) {
                    _this.balanceObj[x][z.lendingUserId] = _this.lendingObj[x][z.lendingUserId] - _this.borrowingObj[x][z.lendingUserId];
                  });
                });

                for (var i in _this.balanceObj) {
                  var _loop = function _loop(j) {
                    var amount = _this.roundToTwoDigits(_this.balanceObj[i][j]);

                    _this.balanceArr.push({
                      firstMemberId: i,
                      firstMemberName: _this.getMemberName(i),
                      firstPrompt: function () {
                        if (amount > 0) return 'gets back';else if (amount < 0) return 'owes';else return '';
                      }(),
                      balanceAmount: function () {
                        if (amount !== 0) return Math.abs(amount);else return '';
                      }(),
                      secondPrompt: function () {
                        if (amount > 0) return 'from';else if (amount < 0) return 'to';else return '';
                      }(),
                      secondMemberId: j,
                      secondMemberName: _this.getMemberName(j),
                      thirdPrompt: function () {
                        if (amount !== 0) return 'in total';else return 'is settled up';
                      }()
                    });
                  };

                  for (var j in _this.balanceObj[i]) {
                    _loop(j);
                  }
                }

                var _loop2 = function _loop2(_i) {
                  var amount = _this.roundToTwoDigits(_this.totalBalanceObj[_i]);

                  _this.totalBalanceArr.push({
                    memberId: _i,
                    memberName: _this.getMemberName(_i),
                    firstPrompt: function () {
                      if (amount > 0) return 'gets back';else if (amount < 0) return 'owes';else return '';
                    }(),
                    balanceAmount: function () {
                      if (amount !== 0) return Math.abs(amount);else return '';
                    }(),
                    secondPrompt: function () {
                      if (amount !== 0) return 'in total';else return 'is settled up';
                    }()
                  });
                };

                for (var _i in _this.totalBalanceObj) {
                  _loop2(_i);
                }
              });
            }
          });
        };

        this.filterMember = function (memberId) {
          return _this.balanceArr.filter(function (x) {
            return x.firstMemberId === memberId;
          });
        };

        this.getMemberName = function (memberId) {
          var memberDetails = _this.membersInGroup.find(function (x) {
            return x.userId === memberId;
          });

          return "".concat(memberDetails.firstName, " ").concat(memberDetails.lastName);
        };

        this.roundToTwoDigits = function (num) {
          return Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100;
        };
      }

      _createClass(BalancesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDetails();
        }
      }]);

      return BalancesComponent;
    }();

    BalancesComponent.ɵfac = function BalancesComponent_Factory(t) {
      return new (t || BalancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    BalancesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BalancesComponent,
      selectors: [["app-balances"]],
      decls: 11,
      vars: 2,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], ["id", "accordionExample", 1, "accordion", "layout", "centerize"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "aria-expanded", "false", 1, "a-action", 2, "font-size", "1.1rem", 3, "href"], ["class", "collapse show", 3, "id", 4, "ngIf"], [1, "collapse", "show", 3, "id"], [4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "mb-0", "p-1"], [1, "font-weight-normal", 2, "vertical-align", "middle"]],
      template: function BalancesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BalancesComponent_div_10_Template, 8, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalBalanceArr);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".layout[_ngcontent-%COMP%] {\r\n    padding:1%;\r\n    width:97%;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n  .list-group-item[_ngcontent-%COMP%] {\r\n      border:1px solid rgba(0, 0, 0, 0.05)\r\n  }\r\n\r\n  .a-action[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n\r\n  .a-action[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration-color:gray;\r\n            text-decoration-color:gray;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JhbGFuY2VzL2JhbGFuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHlDQUF5QztFQUMzQzs7RUFFQTtNQUNJO0VBQ0o7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2JhbGFuY2VzL2JhbGFuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIHBhZGRpbmc6MSU7XHJcbiAgICB3aWR0aDo5NyU7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcblxyXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSlcclxuICB9XHJcbiAgLmEtYWN0aW9uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmEtYWN0aW9uOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjpncmF5O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalancesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-balances',
          templateUrl: './balances.component.html',
          styleUrls: ['./balances.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
    /* harmony import */


    var _groups_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./groups/groups.component */
    "./src/app/dashboard/groups/groups.component.ts");
    /* harmony import */


    var _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./group-details/group-details.component */
    "./src/app/dashboard/group-details/group-details.component.ts");
    /* harmony import */


    var _new_group_new_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./new-group/new-group.component */
    "./src/app/dashboard/new-group/new-group.component.ts");
    /* harmony import */


    var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./users-list/users-list.component */
    "./src/app/dashboard/users-list/users-list.component.ts");
    /* harmony import */


    var _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./expense-details/expense-details.component */
    "./src/app/dashboard/expense-details/expense-details.component.ts");
    /* harmony import */


    var _expense_view_expense_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./expense-view/expense-view.component */
    "./src/app/dashboard/expense-view/expense-view.component.ts");
    /* harmony import */


    var _balances_balances_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./balances/balances.component */
    "./src/app/dashboard/balances/balances.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'groups',
        component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_9__["GroupsComponent"]
      }, {
        path: 'groups/view',
        component: _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_10__["GroupDetailsComponent"]
      }, {
        path: 'groups/new',
        component: _new_group_new_group_component__WEBPACK_IMPORTED_MODULE_11__["NewGroupComponent"]
      }, {
        path: 'groups/view/users',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"]
      }, {
        path: 'expenses/details',
        component: _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseDetailsComponent"]
      }, {
        path: 'expenses/view',
        component: _expense_view_expense_view_component__WEBPACK_IMPORTED_MODULE_14__["ExpenseViewComponent"]
      }, {
        path: 'groups/balances',
        component: _balances_balances_component__WEBPACK_IMPORTED_MODULE_15__["BalancesComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_groups_groups_component__WEBPACK_IMPORTED_MODULE_9__["GroupsComponent"], _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_10__["GroupDetailsComponent"], _new_group_new_group_component__WEBPACK_IMPORTED_MODULE_11__["NewGroupComponent"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"], _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseDetailsComponent"], _expense_view_expense_view_component__WEBPACK_IMPORTED_MODULE_14__["ExpenseViewComponent"], _balances_balances_component__WEBPACK_IMPORTED_MODULE_15__["BalancesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_groups_groups_component__WEBPACK_IMPORTED_MODULE_9__["GroupsComponent"], _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_10__["GroupDetailsComponent"], _new_group_new_group_component__WEBPACK_IMPORTED_MODULE_11__["NewGroupComponent"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"], _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseDetailsComponent"], _expense_view_expense_view_component__WEBPACK_IMPORTED_MODULE_14__["ExpenseViewComponent"], _balances_balances_component__WEBPACK_IMPORTED_MODULE_15__["BalancesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_8__["OwlNativeDateTimeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'groups',
            component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_9__["GroupsComponent"]
          }, {
            path: 'groups/view',
            component: _group_details_group_details_component__WEBPACK_IMPORTED_MODULE_10__["GroupDetailsComponent"]
          }, {
            path: 'groups/new',
            component: _new_group_new_group_component__WEBPACK_IMPORTED_MODULE_11__["NewGroupComponent"]
          }, {
            path: 'groups/view/users',
            component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"]
          }, {
            path: 'expenses/details',
            component: _expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseDetailsComponent"]
          }, {
            path: 'expenses/view',
            component: _expense_view_expense_view_component__WEBPACK_IMPORTED_MODULE_14__["ExpenseViewComponent"]
          }, {
            path: 'groups/balances',
            component: _balances_balances_component__WEBPACK_IMPORTED_MODULE_15__["BalancesComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/expense-details/expense-details.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/dashboard/expense-details/expense-details.component.ts ***!
    \************************************************************************/

  /*! exports provided: ExpenseDetailsComponent */

  /***/
  function srcAppDashboardExpenseDetailsExpenseDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseDetailsComponent", function () {
      return ExpenseDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");

    var _c0 = ["memberModal"];

    function ExpenseDetailsComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", category_r8, " ");
      }
    }

    function ExpenseDetailsComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r9.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r9.firstName, " ", user_r9.lastName, " ");
      }
    }

    function ExpenseDetailsComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_39_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var member_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.removeMember(member_r10.userId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r10.fullName);
      }
    }

    function ExpenseDetailsComponent_div_55_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
      }
    }

    function ExpenseDetailsComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpenseDetailsComponent_div_55_span_1_Template, 1, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_55_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.createExpense();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Expense");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.createInd);
      }
    }

    function ExpenseDetailsComponent_div_56_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
      }
    }

    function ExpenseDetailsComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpenseDetailsComponent_div_56_span_1_Template, 1, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_56_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.updateExpense();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Expense");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.updateInd);
      }
    }

    function ExpenseDetailsComponent_ng_template_59_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "user_", member_r21.userId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", member_r21.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "user_", member_r21.userId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", member_r21.firstName, " ", member_r21.lastName, "");
      }
    }

    function ExpenseDetailsComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Members");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_ng_template_59_Template_button_click_3_listener() {
          var close_r19 = ctx.close;
          return close_r19();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExpenseDetailsComponent_ng_template_59_li_8_Template, 5, 5, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_ng_template_59_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var close_r19 = ctx.close;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.includeMembers(close_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.membersInGroup);
      }
    }

    var ExpenseDetailsComponent = /*#__PURE__*/function () {
      function ExpenseDetailsComponent(appService, toastr, router, modal, socketService) {
        var _this2 = this;

        _classCallCheck(this, ExpenseDetailsComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.modal = modal;
        this.socketService = socketService;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.groupId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupId');
        this.groupName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupName');
        this.borrowingData = [];
        this.expenseName = "";
        this.category = "Choose category..";
        this.lendingUserId = "Choose member..";
        this.categories = ["Food and Drink", "Home and Utilities", "Transportation", "Entertainment", "Other"];
        this.amount = "";
        this.transactionDate = "";
        this.notes = "";
        this.createInd = false;
        this.updateInd = false;
        this.membersIncluded = [];
        this.membersIncludedIds = [];
        this.expenseId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('expenseId');
        this.historyData = [];
        this.exisitngMemberIds = [];

        this.createExpense = function () {
          if (_this2.validateFields()) {
            var expenseHistory = "".concat(_this2.getMemberName(_this2.userInfo.userId), " created this expense");
            _this2.borrowingAmount = _this2.amount / _this2.membersIncluded.length;

            var _iterator = _createForOfIteratorHelper(_this2.membersIncluded),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                _this2.borrowingData.push({
                  borrowingUserId: key.userId,
                  borrowingAmount: _this2.borrowingAmount
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var data = {
              expenseName: _this2.expenseName,
              category: _this2.category,
              amount: _this2.amount,
              transactionDate: _this2.transactionDate,
              notes: _this2.notes,
              groupId: _this2.groupId,
              lendingUserId: _this2.lendingUserId,
              lendingAmount: _this2.borrowingAmount,
              borrowingData: _this2.borrowingData,
              expenseHistory: expenseHistory,
              authToken: _this2.authToken
            };
            _this2.createInd = true;

            _this2.appService.createExpenseAndAmount(data).subscribe(function (apiResponse) {
              _this2.createInd = false;

              if (apiResponse.status === 200) {
                _this2.toastr.success("Expense successfully added"); // this.router.navigate(['groups/view']);


                window.history.back();

                _this2.membersIncludedIds.forEach(function (x) {
                  _this2.notify("You have been added to the expense", x, _this2.expenseName);
                });
              }

              if (apiResponse.error) {
                _this2.toastr.error("Failed to add an expense!");
              }
            });
          }
        };

        this.includeMember = function () {
          _this2.modal.open(_this2.memberModal, {
            size: 'md'
          });
        };

        this.getMemberName = function (memberId) {
          var memberDetails = _this2.membersInGroup.find(function (x) {
            return x.userId === memberId;
          });

          return "".concat(memberDetails.firstName, " ").concat(memberDetails.lastName);
        };

        this.removeMember = function (memberId) {
          _this2.remove(_this2.membersIncludedIds, memberId);

          _this2.membersIncluded = _this2.removeByAttr(_this2.membersIncluded, 'userId', memberId);
        };

        this.remove = function (arr, value) {
          var index = arr.indexOf(value);

          if (index >= 0) {
            arr.splice(index, 1);
          }
        };

        this.removeByAttr = function (arr, attr, value) {
          var i = arr.length;

          while (i--) {
            if (arr[i][attr] === value) arr.splice(i, 1);
          }

          return arr;
        };

        this.updateExpense = function () {
          if (_this2.validateFields()) {
            _this2.borrowingAmount = _this2.amount / _this2.membersIncluded.length;

            var _iterator2 = _createForOfIteratorHelper(_this2.membersIncluded),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var key = _step2.value;

                _this2.borrowingData.push({
                  borrowingUserId: key.userId,
                  borrowingAmount: _this2.borrowingAmount
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this2.trackChanges();

            var data = {
              expenseId: _this2.expenseId,
              expenseName: _this2.expenseName,
              category: _this2.category,
              amount: _this2.amount,
              transactionDate: _this2.transactionDate,
              notes: _this2.notes,
              groupId: _this2.groupId,
              lendingUserId: _this2.lendingUserId,
              lendingAmount: _this2.borrowingAmount,
              borrowingData: _this2.borrowingData,
              expenseHistoryData: _this2.historyData,
              authToken: _this2.authToken
            };
            _this2.updateInd = true;

            _this2.appService.updateExpenseAndAmount(data).subscribe(function (apiResponse) {
              _this2.updateInd = false;

              if (apiResponse.status === 200) {
                _this2.toastr.success("Expense successfully updated"); // this.router.navigate(['expenses/view']);


                window.history.back();

                _this2.membersIncludedIds.forEach(function (x) {
                  _this2.notify("Expense has been updated", x, _this2.expenseName);
                });
              }

              if (apiResponse.error) {
                _this2.toastr.error("Failed to update an expense!");
              }
            });
          }
        };

        this.trackChanges = function () {
          if (_this2.exisitnglendingUserId !== _this2.lendingUserId) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the payer from ").concat(_this2.getMemberName(_this2.exisitnglendingUserId), " to ").concat(_this2.getMemberName(_this2.lendingUserId)));
          if (_this2.oldData.amount !== _this2.amount) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the amount from ").concat(_this2.oldData.amount, " to ").concat(_this2.amount));
          if (_this2.oldData.transactionDate !== _this2.transactionDate) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the transaction date from ").concat(_this2.oldData.transactionDate, " to ").concat(_this2.transactionDate));
          if (_this2.oldData.category !== _this2.category) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the category"));
          if (_this2.oldData.notes !== _this2.notes) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the notes"));
          if (_this2.oldData.expenseName !== _this2.expenseName) _this2.historyData.push("".concat(_this2.getMemberName(_this2.userInfo.userId), " updated the expense name"));

          _this2.membersIncludedIds.forEach(function (x) {
            if (!_this2.exisitngMemberIds.includes(x)) _this2.historyData.push("".concat(_this2.getMemberName(x), " was added to the expense"));
          });

          _this2.exisitngMemberIds.forEach(function (x) {
            if (!_this2.membersIncludedIds.includes(x)) _this2.historyData.push("".concat(_this2.getMemberName(x), " was removed from the expense"));
          });
        };

        this.notify = function (message, userId, title) {
          _this2.socketService.emit('notify-updates', {
            message: message,
            userId: userId,
            title: title
          });
        };

        this.validateFields = function () {
          if (!_this2.expenseName) _this2.toastr.warning("Please provide the expense name");else if (_this2.category === "Choose category..") _this2.toastr.warning("Please select the category");else if (_this2.lendingUserId === "Choose member..") _this2.toastr.warning("Please select the payer");else if (_this2.membersIncludedIds.length === 0) _this2.toastr.warning("Please select the members to be included");else if (!_this2.amount) _this2.toastr.warning("Please provide the amount");else if (!_this2.transactionDate) _this2.toastr.warning("Please provide the transaction date");else return true;
        };
      }

      _createClass(ExpenseDetailsComponent, [{
        key: "loadExpenseDetails",
        value: function loadExpenseDetails() {
          var _this3 = this;

          this.userInfo = this.appService.getUserInfoFromLocalStorage();
          var data = {
            groupId: this.groupId,
            usersInGroup: 'Y',
            authToken: this.authToken
          };
          this.appService.getUsersByGroup(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this3.membersInGroup = apiResponse.data;

              if (_this3.expenseId) {
                var expenseData = {
                  expenseId: _this3.expenseId,
                  authToken: _this3.authToken
                };

                _this3.appService.getExpenseDetails(expenseData).subscribe(function (apiResponse) {
                  if (apiResponse.status === 200) {
                    _this3.oldData = apiResponse.data;
                    _this3.expenseName = apiResponse.data.expenseName;
                    _this3.category = apiResponse.data.category;
                    _this3.amount = apiResponse.data.amount;
                    _this3.transactionDate = apiResponse.data.transactionDate;
                    _this3.notes = apiResponse.data.notes;
                  }
                });

                var amountData = {
                  expenseId: _this3.expenseId,
                  authToken: _this3.authToken
                };

                _this3.appService.getAmountDetailsByExpense(amountData).subscribe(function (apiResponse) {
                  if (apiResponse.status === 200) {
                    _this3.exisitnglendingUserId = apiResponse.data[0].lendingUserId;
                    _this3.lendingUserId = apiResponse.data[0].lendingUserId;
                    apiResponse.data.forEach(function (x) {
                      var memberId = x.borrowingUserId;

                      _this3.exisitngMemberIds.push(memberId);

                      _this3.membersIncludedIds.push(memberId);

                      _this3.membersIncluded.push({
                        userId: memberId,
                        fullName: _this3.getMemberName(memberId)
                      });
                    });
                  }
                });
              }
            }
          });
        }
      }, {
        key: "includeMembers",
        value: function includeMembers(close) {
          var _this4 = this;

          var checkedList = document.querySelectorAll('.users-checkbox:checked');

          if (checkedList.length > 0) {
            checkedList.forEach(function (x) {
              var memberId = x['value'];

              if (!_this4.membersIncludedIds.includes(memberId)) {
                _this4.membersIncludedIds.push(memberId);

                _this4.membersIncluded.push({
                  userId: memberId,
                  fullName: x.nextSibling.textContent
                });
              }
            });
          }

          close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadExpenseDetails();
        }
      }]);

      return ExpenseDetailsComponent;
    }();

    ExpenseDetailsComponent.ɵfac = function ExpenseDetailsComponent_Factory(t) {
      return new (t || ExpenseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]));
    };

    ExpenseDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpenseDetailsComponent,
      selectors: [["app-expense-details"]],
      viewQuery: function ExpenseDetailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.memberModal = _t.first);
        }
      },
      decls: 61,
      vars: 15,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], [1, "layout", "centerize"], [1, "text-center", "font-weight-normal"], [1, "form-group", "centerize", "col-md-11"], ["for", "expense_expenseName"], ["type", "text", "name", "expenseName", "id", "expense_expenseName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "expense_category"], ["id", "expense_category", "name", "category", 1, "form-control", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "expense_lendingUser"], ["id", "expense_lendingUser", "name", "lendingUserId", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "centerize", "col-md-11", "mb-0"], [1, "btn", "btn-link", "float-right", "p-0", 3, "click"], [1, "member-box"], ["class", "list-group-item action", 4, "ngFor", "ngForOf"], ["for", "expense_amount"], ["type", "text", "name", "amount", "id", "expense_amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "expense_transactionDate"], ["name", "transactionDate", "id", "expense_transactionDate", 1, "form-control", 3, "ngModel", "owlDateTime", "owlDateTimeTrigger", "ngModelChange"], [3, "pickerType"], ["owlTransaction", ""], ["for", "expense_notes"], ["name", "notes", "id", "expense_notes", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group centerize col-md-11", 4, "ngIf"], ["memberModal", ""], [3, "value"], [1, "list-group-item", "action"], [1, "mb-0", "p-1"], [1, "font-weight-normal", 2, "vertical-align", "middle"], [1, "fa", "fa-times", "float-right", 3, "click"], ["class", "spinner-border float-right", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "float-right", 3, "click"], ["role", "status", 1, "spinner-border", "float-right"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "id", "close_button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "height", "600px"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["ngbAutofocus", "", "type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", "users-checkbox", 3, "id", "value"], [1, "custom-control-label", 3, "for"]],
      template: function ExpenseDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expense Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.expenseName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose category..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExpenseDetailsComponent_option_24_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Payers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_select_ngModelChange_28_listener($event) {
            return ctx.lendingUserId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Choose member..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ExpenseDetailsComponent_option_31_Template, 2, 3, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Members Included");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseDetailsComponent_Template_button_click_35_listener() {
            return ctx.includeMember();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Include Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ExpenseDetailsComponent_div_39_Template, 5, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Transaction Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.transactionDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "owl-date-time", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_Template_textarea_ngModelChange_53_listener($event) {
            return ctx.notes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ExpenseDetailsComponent_div_55_Template, 4, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ExpenseDetailsComponent_div_56_Template, 4, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ExpenseDetailsComponent_ng_template_59_Template, 12, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expenseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lendingUserId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.membersInGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.membersIncluded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transactionDate)("owlDateTime", _r3)("owlDateTimeTrigger", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pickerType", "calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expenseId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expenseId);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: [".layout[_ngcontent-%COMP%] {\r\n    padding: 2% 1%;\r\n    width:90%;\r\n    max-width: 800px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n  .member-box[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    overflow:auto;\r\n    border-style: solid;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .fa-times[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .btn-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .btn-link[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration-color:white;\r\n            text-decoration-color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2V4cGVuc2UtZGV0YWlscy9leHBlbnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9leHBlbnNlLWRldGFpbHMvZXhwZW5zZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIHBhZGRpbmc6IDIlIDElO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLm1lbWJlci1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICB9XHJcblxyXG4gIC5mYS10aW1lcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnRuLWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIC5idG4tbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expense-details',
          templateUrl: './expense-details.component.html',
          styleUrls: ['./expense-details.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]
        }];
      }, {
        memberModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['memberModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/expense-view/expense-view.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dashboard/expense-view/expense-view.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExpenseViewComponent */

  /***/
  function srcAppDashboardExpenseViewExpenseViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseViewComponent", function () {
      return ExpenseViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["deleteModal"];

    function ExpenseViewComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " owes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var member_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r5.borrowingMemberName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r5.borrowingAmount);
      }
    }

    function ExpenseViewComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var history_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", history_r6, "");
      }
    }

    function ExpenseViewComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }
    }

    function ExpenseViewComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseViewComponent_ng_template_43_Template_button_click_3_listener() {
          var close_r7 = ctx.close;
          return close_r7();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Are yo sure you want to delete this expense? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseViewComponent_ng_template_43_Template_button_click_9_listener() {
          var close_r7 = ctx.close;
          return close_r7("Yes");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseViewComponent_ng_template_43_Template_button_click_11_listener() {
          var close_r7 = ctx.close;
          return close_r7("No");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ExpenseViewComponent = /*#__PURE__*/function () {
      function ExpenseViewComponent(appService, modal, toastr, router, socketService) {
        var _this5 = this;

        _classCallCheck(this, ExpenseViewComponent);

        this.appService = appService;
        this.modal = modal;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.expenseId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('expenseId');
        this.groupId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupId');
        this.groupName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupName');
        this.membersInGroup = [];
        this.amountData = [];
        this.borrowingMemberData = [];
        this.expenseDetails = {};
        this.expenseHistory = [];
        this.deleteInd = false;

        this.getAmountDetailsByExpense = function () {
          var data = {
            expenseId: _this5.expenseId,
            authToken: _this5.authToken
          };

          _this5.appService.getAmountDetailsByExpense(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this5.amountData = apiResponse.data;
              _this5.lendingMemberName = _this5.getMemberName(_this5.amountData[0].lendingUserId);
              _this5.borrowingMemberData = _this5.amountData.map(function (x) {
                return {
                  borrowingMemberId: x.borrowingUserId,
                  borrowingMemberName: _this5.getMemberName(x.borrowingUserId),
                  borrowingAmount: x.lendingAmount
                };
              });
            }
          });
        };

        this.getExpenseDetails = function () {
          var data = {
            expenseId: _this5.expenseId,
            authToken: _this5.authToken
          };

          _this5.appService.getExpenseDetails(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this5.expenseDetails = apiResponse.data;
            }
          });
        };

        this.getHistoryDetailsByExpense = function () {
          var data = {
            expenseId: _this5.expenseId,
            authToken: _this5.authToken
          };

          _this5.appService.getHistoryDetailsByExpense(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              apiResponse.data.reverse();
              apiResponse.data.forEach(function (x) {
                return _this5.expenseHistory.push(x.expenseHistory);
              });
            }
          });
        };

        this.getMembers = function () {
          var data = {
            groupId: _this5.groupId,
            usersInGroup: 'Y',
            authToken: _this5.authToken
          };

          _this5.appService.getUsersByGroup(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this5.membersInGroup = apiResponse.data;

              if (_this5.expenseId) {
                _this5.getAmountDetailsByExpense();

                _this5.getExpenseDetails();

                _this5.getHistoryDetailsByExpense();
              }
            }
          });
        };

        this.getMemberName = function (memberId) {
          var memberDetails = _this5.membersInGroup.find(function (x) {
            return x.userId === memberId;
          });

          return "".concat(memberDetails.firstName, " ").concat(memberDetails.lastName);
        };

        this.updateExpense = function () {
          _this5.router.navigate(['expenses/details']);
        };

        this.deleteExpense = function () {
          var data = {
            expenseId: _this5.expenseId,
            expenseName: _this5.expenseDetails.expenseName,
            authToken: _this5.authToken
          };
          _this5.deleteInd = true;

          _this5.appService.deleteExpenseAndAmount(data).subscribe(function (apiResponse) {
            _this5.deleteInd = false;

            if (apiResponse.status === 200) {
              _this5.toastr.success("Expense successfully deleted"); // this.router.navigate(['groups/view']);


              window.history.back();

              _this5.amountData.forEach(function (x) {
                _this5.notify("Expense has been deleted", x.borrowingUserId, _this5.expenseDetails.expenseName);
              });
            }

            if (apiResponse.error) {
              _this5.toastr.error("Failed to delete an expense!");
            }
          });
        };

        this.openDeleteConfirmation = function () {
          _this5.modal.open(_this5.deleteModal, {
            size: 'md',
            centered: true
          }).result.then(function (result) {
            if (result === 'Yes') _this5.deleteExpense();
          });
        };

        this.notify = function (message, userId, title) {
          _this5.socketService.emit('notify-updates', {
            message: message,
            userId: userId,
            title: title
          });
        };

        this.formatDate = function (date) {
          var dateFormat = new Date(date);
          var monthDate = dateFormat.getDate();
          var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          var stringDate = monthDate < 10 ? "0".concat(monthDate) : monthDate;
          return "".concat(monthNames[dateFormat.getMonth()], " ").concat(stringDate, " ").concat(dateFormat.getFullYear());
        };
      }

      _createClass(ExpenseViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMembers();
        }
      }]);

      return ExpenseViewComponent;
    }();

    ExpenseViewComponent.ɵfac = function ExpenseViewComponent_Factory(t) {
      return new (t || ExpenseViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]));
    };

    ExpenseViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpenseViewComponent,
      selectors: [["app-expense-view"]],
      viewQuery: function ExpenseViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
        }
      },
      decls: 45,
      vars: 9,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], [1, "layout", "centerize"], [1, "text-center", "jumbotron", "display-4"], [1, "ml-2", 2, "font-size", "1.4rem"], [1, "centerize", "col-md-11"], ["for", "", 1, "mt-1", "h6", "mb-3"], [1, "member-box"], ["class", "list-group-item action", 4, "ngFor", "ngForOf"], ["id", "accordion", 1, "card"], [1, "card-header"], ["data-toggle", "collapse", "href", "#showHistory", "aria-expanded", "false", 1, "a-action", 2, "font-size", "1.1rem"], ["id", "showHistory", "data-parent", "#accordion", 1, "collapse"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "btn", "btn-dark", "float-right", 3, "click"], ["class", "spinner-border float-left", "role", "status", 4, "ngIf"], [1, "btn", "btn-outline-dark", 3, "click"], ["deleteModal", ""], [1, "list-group-item", "action"], [1, "mb-0", "p-1"], [1, "font-weight-light", 2, "vertical-align", "middle"], [1, "card-body"], [1, "font-weight-light"], ["role", "status", 1, "spinner-border", "float-left"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["ngbAutofocus", "", 1, "btn", "btn-dark", 3, "click"]],
      template: function ExpenseViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Split Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExpenseViewComponent_div_28_Template, 8, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Expense History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ExpenseViewComponent_div_35_Template, 3, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseViewComponent_Template_button_click_37_listener() {
            return ctx.updateExpense();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Edit Expense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ExpenseViewComponent_span_39_Template, 1, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseViewComponent_Template_button_click_40_listener() {
            return ctx.openDeleteConfirmation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Delete Expense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExpenseViewComponent_ng_template_43_Template, 13, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expenseDetails.expenseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lendingMemberName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expenseDetails.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" on ", ctx.formatDate(ctx.expenseDetails.transactionDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expenseDetails.notes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.borrowingMemberData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expenseHistory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteInd);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".layout[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    width:90%;\r\n    max-width: 800px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n  .member-box[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border: 1px solid #ced4da;\r\n  }\r\n\r\n  .a-action[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n\r\n  .a-action[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration-color:gray;\r\n            text-decoration-color:gray;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2V4cGVuc2Utdmlldy9leHBlbnNlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2V4cGVuc2Utdmlldy9leHBlbnNlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAubWVtYmVyLWJveCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICB9XHJcblxyXG4gIC5hLWFjdGlvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5hLWFjdGlvbjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6Z3JheTtcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expense-view',
          templateUrl: './expense-view.component.html',
          styleUrls: ['./expense-view.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]
        }];
      }, {
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['deleteModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/group-details/group-details.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/group-details/group-details.component.ts ***!
    \********************************************************************/

  /*! exports provided: GroupDetailsComponent */

  /***/
  function srcAppDashboardGroupDetailsGroupDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function () {
      return GroupDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["userModal"];

    function GroupDetailsComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_div_16_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var expense_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.goToExpenseDetails(expense_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var expense_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx_r0.getCategoryIcon(expense_r1.category), " fa-2x mr-4 blue p-3 white-text rounded ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r1.expenseName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r1.amount);
      }
    }

    var GroupDetailsComponent = /*#__PURE__*/function () {
      function GroupDetailsComponent(appService, toastr, router) {
        var _this6 = this;

        _classCallCheck(this, GroupDetailsComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.groupId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupId');
        this.groupName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupName');
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');

        this.viewUsers = function () {
          _this6.router.navigate(['groups/view/users']);
        };

        this.addExpense = function () {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('expenseId', "");

          _this6.router.navigate(['expenses/details']);
        };

        this.getAllExpensesByGroup = function () {
          var data = {
            groupId: _this6.groupId,
            authToken: _this6.authToken
          };

          _this6.appService.getAllExpensesByGroup(data).subscribe(function (apiResponse) {
            _this6.expenses = apiResponse.data;
          });
        };

        this.goToExpenseDetails = function (data) {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('expenseId', data.expenseId);

          _this6.router.navigate(['expenses/view']);
        };

        this.goToBalances = function () {
          _this6.router.navigate(['groups/balances']);
        };

        this.getCategoryIcon = function (category) {
          //["Food and Drink", "Home and Utilities", "Transportation", "Entertainment", "Other"];
          if (category === "Food and Drink") return "fa-hamburger";else if (category === "Home and Utilities") return "fa-home";else if (category === "Transportation") return "fa-taxi";else if (category === "Entertainment") return "fa-music";else return "fa-info-circle";
        };
      }

      _createClass(GroupDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllExpensesByGroup();
        }
      }]);

      return GroupDetailsComponent;
    }();

    GroupDetailsComponent.ɵfac = function GroupDetailsComponent_Factory(t) {
      return new (t || GroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    GroupDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupDetailsComponent,
      selectors: [["app-group-details"]],
      viewQuery: function GroupDetailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userModal = _t.first);
        }
      },
      decls: 18,
      vars: 2,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], [1, "btn", "btn-dark", "float-right", "mr-2", 3, "click"], [1, "btn", "btn-outline-dark", "float-right", "mr-2", 3, "click"], [1, "btn", "btn-link", "float-right", "mr-2", 3, "click"], [1, "list-group-flush", "layout", "centerize"], ["class", "action list-group-item d-flex justify-content-between align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "action", "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "click"], [1, "mb-0"], ["aria-hidden", "true", 2, "vertical-align", "middle"], [1, "h5", 2, "vertical-align", "middle"], [1, "badge", "badge-dark", "badge-pill", "float-right", 2, "vertical-align", "middle", "font-size", "0.9rem"]],
      template: function GroupDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_Template_button_click_6_listener() {
            return ctx.addExpense();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Expense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_Template_button_click_8_listener() {
            return ctx.goToBalances();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Balances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupDetailsComponent_Template_button_click_10_listener() {
            return ctx.viewUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupDetailsComponent_div_16_Template, 7, 5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expenses);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".action[_ngcontent-%COMP%]:hover {\r\n    background-color: #f8f9fa;\r\n}\r\n\r\n.action[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    padding-top: 0.5%;\r\n    width:97%;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n.btn-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    text-decoration: underline;\r\n  }\r\n\r\n.btn-link[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration-color:white;\r\n            text-decoration-color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dyb3VwLWRldGFpbHMvZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QseUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UsWUFBWTtJQUNaLDBCQUEwQjtFQUM1Qjs7QUFDQTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ3JvdXAtZGV0YWlscy9ncm91cC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjUlO1xyXG4gICAgd2lkdGg6OTclO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAuYnRuLWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIC5idG4tbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-details',
          templateUrl: './group-details.component.html',
          styleUrls: ['./group-details.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        userModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['userModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/groups/groups.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/groups/groups.component.ts ***!
    \******************************************************/

  /*! exports provided: GroupsComponent */

  /***/
  function srcAppDashboardGroupsGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () {
      return GroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["groupModal"];

    function GroupsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var group_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.goToGroupDetails(group_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx_r0.getCategoryIcon(group_r1.category), " fa-2x mr-4 blue p-3 white-text rounded ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.groupName);
      }
    }

    var GroupsComponent = /*#__PURE__*/function () {
      function GroupsComponent(appService, modal, toastr, router) {
        var _this7 = this;

        _classCallCheck(this, GroupsComponent);

        this.appService = appService;
        this.modal = modal;
        this.toastr = toastr;
        this.router = router;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');

        this.getAllGroupsByUser = function () {
          var data = {
            userId: _this7.userInfo.userId,
            authToken: _this7.authToken
          };

          _this7.appService.getAllGroupsByUser(data).subscribe(function (apiResponse) {
            _this7.groups = apiResponse.data;
          });
        };

        this.newGroup = function () {
          _this7.router.navigate(['groups/new']);
        };

        this.goToGroupDetails = function (data) {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('groupId', data.groupId);
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('groupName', data.groupName);

          _this7.router.navigate(['groups/view']);
        };

        this.getCategoryIcon = function (category) {
          if (category === "Apartment") return "fa-building";else if (category === "Trip") return "fa-taxi";else return "fa-users";
        };
      }

      _createClass(GroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userInfo = this.appService.getUserInfoFromLocalStorage();
          if (!this.userInfo) this.router.navigate(['/login']);else this.getAllGroupsByUser();
        }
      }]);

      return GroupsComponent;
    }();

    GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
      return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupsComponent,
      selectors: [["app-groups"]],
      viewQuery: function GroupsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupModal = _t.first);
        }
      },
      decls: 14,
      vars: 1,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], [1, "btn", "btn-dark", "float-right", 3, "click"], [1, "list-group-flush", "layout", "centerize"], ["class", "list-group-item action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "action", 3, "click"], [1, "mb-0"], ["aria-hidden", "true", 2, "vertical-align", "middle"], [1, "h5", 2, "vertical-align", "middle"]],
      template: function GroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_Template_button_click_6_listener() {
            return ctx.newGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GroupsComponent_div_12_Template, 5, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".action[_ngcontent-%COMP%]:hover {\r\n    background-color: #f8f9fa;\r\n}\r\n\r\n.action[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    padding-top: 0.5%;\r\n    width:97%;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULHlDQUF5QztFQUMzQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjUlO1xyXG4gICAgd2lkdGg6OTclO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-groups',
          templateUrl: './groups.component.html',
          styleUrls: ['./groups.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, {
        groupModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['groupModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/new-group/new-group.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashboard/new-group/new-group.component.ts ***!
    \************************************************************/

  /*! exports provided: NewGroupComponent */

  /***/
  function srcAppDashboardNewGroupNewGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGroupComponent", function () {
      return NewGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewGroupComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewGroupComponent_div_15_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.defaultCategory = $event;
        })("ngModelChange", function NewGroupComponent_div_15_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.choose($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", category_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", category_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.defaultCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", category_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2);
      }
    }

    function NewGroupComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
      }
    }

    var NewGroupComponent = /*#__PURE__*/function () {
      function NewGroupComponent(appService, toastr, router) {
        var _this8 = this;

        _classCallCheck(this, NewGroupComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.defaultCategory = "Apartment";
        this.category = this.defaultCategory;
        this.categories = ["Apartment", "Trip", "Other"];
        this.createInd = false;

        this.create = function () {
          if (_this8.validateFields()) {
            var data = {
              groupName: _this8.groupName,
              category: _this8.category,
              description: _this8.description,
              userId: _this8.userInfo.userId,
              groupId: '0',
              authToken: _this8.authToken
            };
            _this8.createInd = true;

            _this8.appService.addUserWithGroupOperations(data).subscribe(function (apiResponse) {
              _this8.createInd = false;

              if (apiResponse.status === 200) {
                _this8.toastr.success("Group successfully created");

                window.history.back(); // this.router.navigate(['groups/view']);

                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('groupId', apiResponse.data.groupId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('groupName', apiResponse.data.groupName);
              }

              if (apiResponse.error) {
                _this8.toastr.error("Failed to create a group!");
              }
            });
          }
        };

        this.validateFields = function () {
          if (!_this8.groupName) _this8.toastr.warning("Please provide the group name");else return true;
        };
      }

      _createClass(NewGroupComponent, [{
        key: "choose",
        value: function choose(value) {
          this.category = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userInfo = this.appService.getUserInfoFromLocalStorage();
        }
      }]);

      return NewGroupComponent;
    }();

    NewGroupComponent.ɵfac = function NewGroupComponent_Factory(t) {
      return new (t || NewGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NewGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewGroupComponent,
      selectors: [["app-new-group"]],
      decls: 28,
      vars: 4,
      consts: [[1, "layout", "centerize"], [1, "text-center", "font-weight-normal"], [1, "form-group", "centerize", "col-md-11"], ["for", "group_groupName"], ["type", "text", "name", "groupName", "id", "group_groupName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "custom-control custom-radio custom-control-inline", 4, "ngFor", "ngForOf"], ["for", "group_description"], ["name", "description", "id", "group_description", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "spinner-border float-right", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "float-right", 3, "click"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", 1, "custom-control-input", 3, "ngModel", "value", "name", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], ["role", "status", 1, "spinner-border", "float-right"]],
      template: function NewGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Group Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewGroupComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.groupName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewGroupComponent_div_15_Template, 4, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewGroupComponent_Template_textarea_ngModelChange_20_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NewGroupComponent_span_23_Template, 1, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupComponent_Template_button_click_24_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Create Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createInd);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"]],
      styles: [".layout[_ngcontent-%COMP%] {\r\n    padding: 2% 1%;\r\n    width:90%;\r\n    max-width: 800px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25ldy1ncm91cC9uZXctZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlDQUF5QztFQUMzQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9uZXctZ3JvdXAvbmV3LWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIHBhZGRpbmc6IDIlIDElO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-group',
          templateUrl: './new-group.component.html',
          styleUrls: ['./new-group.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/users-list/users-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/dashboard/users-list/users-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppDashboardUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["userModal"];

    function UsersListComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r3.firstName, " ", user_r3.lastName, "");
      }
    }

    function UsersListComponent_ng_template_14_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "user_", user_r7.userId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r7.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "user_", user_r7.userId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r7.firstName, " ", user_r7.lastName, "");
      }
    }

    function UsersListComponent_ng_template_14_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
      }
    }

    function UsersListComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_ng_template_14_Template_button_click_3_listener() {
          var close_r4 = ctx.close;
          return close_r4();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersListComponent_ng_template_14_li_8_Template, 5, 5, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_ng_template_14_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var close_r4 = ctx.close;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.addUsers(close_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UsersListComponent_ng_template_14_div_12_Template, 1, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.usersNotInGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.addInd);
      }
    }

    var UsersListComponent = /*#__PURE__*/function () {
      function UsersListComponent(modal, appService) {
        var _this9 = this;

        _classCallCheck(this, UsersListComponent);

        this.modal = modal;
        this.appService = appService;
        this.groupId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupId');
        this.groupName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('groupName');
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.usersNotInGroup = [];
        this.usersInGroup = [];
        this.addInd = false;
        this.countChecked = 0;

        this.addUser = function () {
          _this9.getUsersNotInGroup();

          _this9.modal.open(_this9.userModal, {
            size: 'md'
          });
        };
      }

      _createClass(UsersListComponent, [{
        key: "addUsers",
        value: function addUsers(close) {
          var _this10 = this;

          var data = {
            groupName: "",
            category: "",
            description: "",
            userId: "",
            groupId: this.groupId,
            authToken: this.authToken
          };
          var checkedList = document.querySelectorAll('.users-checkbox:checked');

          if (checkedList.length > 0) {
            checkedList.forEach(function (x) {
              data['userId'] = x['value'];
              _this10.countChecked++;

              _this10.appService.addUserWithGroupOperations(data).subscribe(function (apiResponse) {
                if (checkedList.length === _this10.countChecked) {
                  _this10.getUsersInGroup();

                  close();
                }
              });
            });
          }
        }
      }, {
        key: "getUsersNotInGroup",
        value: function getUsersNotInGroup() {
          var _this11 = this;

          var data = {
            groupId: this.groupId,
            usersInGroup: 'N',
            authToken: this.authToken
          };
          this.appService.getUsersByGroup(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this11.usersNotInGroup = apiResponse.data;
            }
          });
        }
      }, {
        key: "getUsersInGroup",
        value: function getUsersInGroup() {
          var _this12 = this;

          var data = {
            groupId: this.groupId,
            usersInGroup: 'Y',
            authToken: this.authToken
          };
          this.appService.getUsersByGroup(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this12.usersInGroup = apiResponse.data;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsersInGroup();
        }
      }]);

      return UsersListComponent;
    }();

    UsersListComponent.ɵfac = function UsersListComponent_Factory(t) {
      return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersListComponent,
      selectors: [["app-users-list"]],
      viewQuery: function UsersListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userModal = _t.first);
        }
      },
      decls: 16,
      vars: 2,
      consts: [[1, "top-fixed", "p-3", "pt-4"], [1, "h4"], [1, "btn", "btn-dark", "float-right", "mr-2", 3, "click"], [1, "list-group-flush", "layout", "centerize"], ["class", "list-group-item action", 4, "ngFor", "ngForOf"], ["userModal", ""], [1, "list-group-item", "action"], [1, "mb-0", "p-3"], [1, "h5", 2, "vertical-align", "middle"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "id", "close_button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "height", "600px"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["ngbAutofocus", "", "type", "button", 1, "btn", "btn-dark", 3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", "users-checkbox", 3, "id", "value"], [1, "custom-control-label", 3, "for"], ["role", "status", 1, "spinner-border"]],
      template: function UsersListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_6_listener() {
            return ctx.addUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UsersListComponent_div_12_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsersListComponent_ng_template_14_Template, 13, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.groupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersInGroup);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".action[_ngcontent-%COMP%]:hover {\r\n    background-color: #f8f9fa;\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    padding-top: 0.5%;\r\n    width:97%;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCx5Q0FBeUM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNSU7XHJcbiAgICB3aWR0aDo5NyU7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-list',
          templateUrl: './users-list.component.html',
          styleUrls: ['./users-list.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, {
        userModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['userModal', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var DataService = function DataService(http) {
      var _this13 = this;

      _classCallCheck(this, DataService);

      this.http = http;
      this.jsonFiles = '../../assets/JSON files';

      this.getCodeList = function (callback) {
        return _this13.http.get("".concat(_this13.jsonFiles, "/phone.json")).subscribe(function (response) {
          return callback(response.json());
        });
      };

      this.getCountryList = function (callback) {
        return _this13.http.get("".concat(_this13.jsonFiles, "/names.json")).subscribe(function (response) {
          return callback(response.json());
        });
      };
    };

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../socket.service */
    "./src/app/socket.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(appService, router, toastr, socketService) {
        var _this14 = this;

        _classCallCheck(this, HeaderComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.socketService = socketService;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');

        this.logOut = function () {
          var data = {
            userId: _this14.userInfo.userId,
            authToken: _this14.authToken
          };

          _this14.appService.logOut(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('authToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('receiverId');
              localStorage.setItem('userInfo', "");

              _this14.router.navigate(['login']);

              _this14.toastr.info("You have been logged out");
            }
          });
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.userInfo = this.appService.getUserInfoFromLocalStorage();
          this.socketService.listen('verifyUser').subscribe(function () {
            _this15.socketService.emit('set-user', _this15.authToken);
          });
          this.socketService.listen('online-user-list').subscribe();
          this.socketService.listen(this.userInfo.userId).subscribe(function (apiResponse) {
            _this15.toastr.info(apiResponse['message'], apiResponse['title']);
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "fixed-top"], [1, "navbar-brand", "text-white"], [1, "ml-auto", "mr-2"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "hover-override"], [1, "dropdown-item", "font-weight-light", "hover-override"], [1, "dropdown-divider"], [1, "btn", "btn-dark", "float-right", "mr-2", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Expense Splitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userInfo == null ? null : ctx.userInfo.emailAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userInfo == null ? null : ctx.userInfo.firstName, " ", ctx.userInfo == null ? null : ctx.userInfo.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Mobile: ", ctx.userInfo == null ? null : ctx.userInfo.countryCode, " ", ctx.userInfo == null ? null : ctx.userInfo.mobileNumber, "");
        }
      },
      styles: [".hover-override[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXItb3ZlcnJpZGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppSharedHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(appService) {
        var _this16 = this;

        _classCallCheck(this, HomeComponent);

        this.appService = appService;

        this.initOnLoad = function () {
          if (localStorage.getItem('userInfo').length > 0) {
            var data = {
              userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'),
              authToken: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken')
            };

            _this16.appService.logOut(data).subscribe(function (apiResponse) {
              if (apiResponse.status === 200) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('authToken');
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"]["delete"]('receiverId');
              }
            });
          }

          localStorage.setItem('userInfo', "");
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initOnLoad();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "fixed-top"], ["href", "#", 1, "navbar-brand", "text-white"], ["href", "login", 1, "ml-auto", "mr-4"], ["href", "signup", 1, ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Expense Splitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["a[_ngcontent-%COMP%] {\r\n    color:white;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n    color: yellow;\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/shared/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SocketService = function SocketService(http) {
      var _this17 = this;

      _classCallCheck(this, SocketService);

      this.http = http;
      this.url = "http://".concat(location.hostname, ":3000");

      this.listen = function (eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
          _this17.socket.on(eventName, function (data) {
            observer.next(data);
          });
        });
      };

      this.emit = function (eventName, data) {
        _this17.socket.emit(eventName, data);
      };

      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    };

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/home/home.component */
    "./src/app/shared/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_36_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.verifyingCode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please provide the code that is sent in the mentioned Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.verifyingCode);
      }
    }

    function LoginComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_37_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.newPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newPassword);
      }
    }

    function LoginComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_38_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.confirmNewPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.confirmNewPassword);
      }
    }

    function LoginComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(appService, router, toastr) {
        var _this18 = this;

        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.spinInd = false;
        this.codeInd = false;
        this.passwordInd = false;

        this.logIn = function () {
          if (!_this18.emailAddress) _this18.toastr.warning("Please enter your Email Address");else if (!_this18.password) _this18.toastr.warning("Please enter your Password");else {
            _this18.spinInd = true;
            var data = {
              emailAddress: _this18.emailAddress,
              password: _this18.password
            };

            _this18.appService.logIn(data).subscribe(function (apiResponse) {
              _this18.spinInd = false;

              if (apiResponse.status === 200) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('authToken', apiResponse.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);

                _this18.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails);

                _this18.router.navigate(['/groups']);

                _this18.toastr.show("Welcome ".concat(apiResponse.data.userDetails.firstName, " ").concat(apiResponse.data.userDetails.lastName, "!"));
              }
            }, function (error) {
              _this18.spinInd = false;
              if (error.status == 404) _this18.toastr.error("No user found with the provided email");else if (error.status == 400) _this18.toastr.error("Your password is incorrect!");else _this18.toastr.error("Error while logging in", "Error!");
            });
          }
        };

        this.enterKey = function (event) {
          if (event.keyCode === 13) {
            // For Enter.
            _this18.logIn();
          }
        };
      }

      _createClass(LoginComponent, [{
        key: "submit",
        value: function submit() {
          var _this19 = this;

          if (!this.emailAddress) this.toastr.warning("Please enter your Email");else {
            this.spinInd = true;

            if (!this.codeInd && !this.passwordInd) {
              this.appService.sendMail(this.emailAddress).subscribe(function (apiResponse) {
                _this19.spinInd = false;

                if (apiResponse.status === 200) {
                  _this19.codeInd = true;

                  _this19.toastr.info("A code has been sent to your email");
                }

                if (apiResponse.code === "EENVELOPE") {
                  _this19.toastr.error("Email address is invalid!");
                }
              });
            }

            if (this.codeInd) {
              var data = {
                emailAddress: this.emailAddress,
                verifyingCode: this.verifyingCode
              };
              this.appService.verifyCode(data).subscribe(function (apiResponse) {
                _this19.spinInd = false;
                if (!_this19.verifyingCode) _this19.toastr.warning("Please enter the code");else {
                  if (apiResponse.status === 200) {
                    _this19.verifyingCode = "";
                    _this19.passwordInd = true;
                    _this19.codeInd = false;
                  }

                  if (apiResponse.error) {
                    _this19.toastr.error(apiResponse.message);
                  }
                }
              });
            }

            if (this.passwordInd) {
              this.spinInd = false;

              if (this.newPassword && this.confirmNewPassword) {
                if (this.newPassword === this.confirmNewPassword) {
                  var _data2 = {
                    emailAddress: this.emailAddress,
                    password: this.newPassword
                  };
                  this.appService.findEmailAndUpdatePassword(_data2).subscribe(function (apiResponse) {
                    document.getElementById("close_button").click();

                    _this19.toastr.success("New password successfully changed");
                  });
                } else {
                  this.toastr.error("Passwords doesn't match");
                }
              } else {
                this.toastr.warning("Please provide both the passwords");
              }
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          document.getElementById("close_button").addEventListener("click", function () {
            _this20.spinInd = false;
            _this20.codeInd = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 43,
      vars: 9,
      consts: [[1, "layout", "centerize"], [1, "text-center", "font-weight-normal"], [1, "form-group", "centerize", "col-md-11"], ["type", "email", "id", "login_email", "name", "emailAddress", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "login_password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown"], ["class", "text-center", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "btn-block", 3, "click"], ["href", "", "data-toggle", "modal", "data-target", "#forgotPasswordModal", 1, "password-link", "font-weight-light", "float-right"], ["id", "forgotPasswordModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "forgotPasswordLabel", "aria-hidden", "true", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "forgotPasswordLabel", 1, "modal-title"], ["type", "button", "id", "close_button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "centerize"], ["for", "forgotpassword_email"], ["type", "email", "id", "forgotpassword_email", "name", "emailAddress", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["class", "form-group centerize", 4, "ngIf"], [1, "modal-footer"], [1, "text-center"], ["role", "status", 1, "spinner-border"], ["for", "forgotpassword_code"], ["type", "text", "id", "forgotpassword_code", "name", "verifyingCode", "aria-describedby", "forgotpassword_code_hint", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "forgotpassword_code_hint", 1, "form-text", "text-muted"], ["for", "forgotpassword_newpassword"], ["type", "password", "id", "forgotpassword_newpassword", "name", "newPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "forgotpassword_confirmpassword"], ["type", "password", "id", "forgotpassword_confirmpassword", "name", "confirmNewPassword", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.password = $event;
          })("keydown", function LoginComponent_Template_input_keydown_13_listener($event) {
            return ctx.enterKey($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
            return ctx.logIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LoginComponent_div_36_Template, 6, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_div_38_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LoginComponent_div_39_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_41_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinInd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAddress)("readonly", ctx.codeInd || ctx.passwordInd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codeInd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordInd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordInd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinInd);
        }
      },
      directives: [_shared_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".password-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.password-link[_ngcontent-%COMP%]:hover {\r\n    -webkit-text-decoration-color:gray;\r\n            text-decoration-color:gray;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    padding: 4% 0%;\r\n    width:90%;\r\n    height: 80%;\r\n    max-width: 450px;\r\n    max-height: 450px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    overflow: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBhc3N3b3JkLWxpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOmdyYXk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA0JSAwJTtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/home/home.component */
    "./src/app/shared/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var countryCode_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", countryCode_r4.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", countryCode_r4.country, " ");
      }
    }

    function SignupComponent_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.countryCode);
      }
    }

    function SignupComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(appService, data, router, toastr) {
        var _this21 = this;

        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.data = data;
        this.router = router;
        this.toastr = toastr;
        this.firstName = "";
        this.lastName = "";
        this.countryCode = "Choose country..";
        this.mobileNumber = "";
        this.spinInd = false;
        this.countryList = [];
        this.codeList = [];
        this.countryCodeList = [];

        this.signUp = function () {
          if (!_this21.firstName) _this21.toastr.warning("Please enter your First Name");else if (!_this21.lastName) _this21.toastr.warning("Please enter your Last Name");else if (!_this21.emailAddress) _this21.toastr.warning("Please enter your Email");else if (!_this21.password) _this21.toastr.warning("Please enter your Password");else if (!_this21.countryCode) _this21.toastr.warning("Please fill the Country Code");else if (!_this21.mobileNumber) _this21.toastr.warning("Please enter your Mobile Number");else {
            _this21.spinInd = true;
            var _data3 = {
              firstName: _this21.firstName,
              lastName: _this21.lastName,
              emailAddress: _this21.emailAddress,
              password: _this21.password,
              countryCode: _this21.countryCode,
              mobileNumber: _this21.mobileNumber
            };

            _this21.appService.signUp(_data3).subscribe(function (apiResponse) {
              _this21.spinInd = false;
              if (apiResponse.error) _this21.toastr.error(apiResponse.message);

              if (apiResponse.status === 200) {
                var _data4 = {
                  emailAddress: _this21.emailAddress,
                  password: _this21.password
                };

                _this21.appService.logIn(_data4).subscribe(function (apiResponse) {
                  if (apiResponse.status === 200) {
                    _this21.router.navigate(['/groups']);

                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('authToken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);

                    _this21.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails); //this.toastr.show(`Welcome ${apiResponse.data.userDetails.userName}!`);

                  }
                });
              }
            });
          }
        };
      }

      _createClass(SignupComponent, [{
        key: "fetchCountryCodeList",
        value: function fetchCountryCodeList() {
          var _this22 = this;

          this.data.getCountryList(function (countries) {
            var countryArray = Object.entries(countries);

            for (var _i2 = 0, _countryArray = countryArray; _i2 < _countryArray.length; _i2++) {
              var country = _countryArray[_i2];

              _this22.countryList.push({
                id: country[0],
                country: country[1]
              });
            }
          });
          this.data.getCodeList(function (codes) {
            var codeArray = Object.entries(codes);

            for (var _i3 = 0, _codeArray = codeArray; _i3 < _codeArray.length; _i3++) {
              var code = _codeArray[_i3];

              _this22.codeList.push({
                id: code[0],
                code: code[1]
              });
            }

            _this22.countryCodeList = _this22.countryList.map(function (item, i) {
              return Object.assign({}, item, _this22.codeList[i]);
            });

            _this22.countryCodeList.sort(function (a, b) {
              if (a['country'] < b['country']) return -1;
              if (a['country'] > b['country']) return 1;
              return 0;
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchCountryCodeList();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 45,
      vars: 9,
      consts: [[1, "layout", "centerize"], [1, "text-center", "font-weight-normal"], [1, "form-group", "centerize", "col-md-11"], ["for", "signup_firstname"], ["type", "text", "id", "signup_firstname", "name", "firstName", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "signup_lastname"], ["type", "text", "id", "signup_lastname", "name", "lastName", "placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "signup_email"], ["type", "email", "id", "signup_email", "name", "emailAddress", "placeholder", "Email Address (e.g. example@mail.com)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "signup_password"], ["type", "password", "id", "signup_password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "signup_country"], ["id", "signup_country", "name", "countryCode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["country", ""], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "centerize", "col-md-11"], ["for", "signup_mobile"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["class", "input-group-text", "id", "signup_code", 4, "ngIf"], ["type", "text", "id", "signup_mobile", "name", "mobileNumber", "placeholder", "Mobile Number (e.g. 1234567890)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "centerize col-md-11 col-3", 4, "ngIf"], [1, "btn", "btn-dark", "col-3", 3, "click"], [3, "value"], ["id", "signup_code", 1, "input-group-text"], [1, "centerize", "col-md-11", "col-3"], ["role", "status", 1, "spinner-border"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register for Expense Splitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_27_listener($event) {
            return ctx.countryCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Choose country..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_option_31_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_span_37_Template, 2, 1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignupComponent_div_40_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_42_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.countryCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryCodeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.countryCode !== "Choose country.." && ctx.countryCode !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinInd);
        }
      },
      directives: [_shared_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".centerize[_ngcontent-%COMP%] {\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    padding: 2% 1%;\r\n    width:90%;\r\n    max-width: 600px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlDQUF5QztFQUMzQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcml6ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDIlIDElO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'signup',
            component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\AngProj\proj-2-expense-splitter\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map