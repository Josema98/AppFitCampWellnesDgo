(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n\n  <ion-slides class=\"mainSlide\" #slidePrincipal>\n    \n    <ion-slide>\n\n      <form (ngSubmit)=\"login( fLogin )\" #fLogin=\"ngForm\">\n        <ion-grid fixed>\n\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/avatars/av-1.png\">\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col>\n              \n                <ion-list>\n                  \n                  <ion-item>\n                    <ion-label>Email</ion-label>\n                    <ion-input name=\"email\"\n                                type=\"email\"\n                                [(ngModel)]=\"loginUser.email\"\n                                required></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Password</ion-label>\n                    <ion-input name=\"password\"\n                                type=\"password\"\n                                [(ngModel)]=\"loginUser.password\"\n                                required></ion-input>\n                  </ion-item>\n\n                </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\">\n                Login\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </form>\n    \n\n\n    </ion-slide>\n\n    <ion-slide>\n\n      \n      <ion-grid fixed>\n\n            <!-- Avatar Selector -->\n            <app-avatar-selector (avatarSel)=\"registerUser.avatar = $event\"></app-avatar-selector>\n        \n            <form (ngSubmit)=\"registro( fRegistro )\" #fRegistro=\"ngForm\">\n                <ion-row>\n                    <ion-col>\n                        \n                        <ion-list>\n                            \n                            <ion-item>\n                            <ion-label>Email</ion-label>\n                            <ion-input name=\"email\" \n                                        type=\"email\"\n                                        [(ngModel)]=\"registerUser.email\"\n                                        required></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                            <ion-label>Nombre</ion-label>\n                            <ion-input name=\"nombre\"\n                                        type=\"text\"\n                                        [(ngModel)]=\"registerUser.nombre\"\n                                        required></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                            <ion-label>Password</ion-label>\n                            <ion-input name=\"password\"\n                                        type=\"password\"\n                                        [(ngModel)]=\"registerUser.password\"\n                                        required></ion-input>\n                            </ion-item>\n\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\">\n                        Crear usuario\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            \n            </form>\n        </ion-grid>\n  \n  \n      </ion-slide>\n\n\n  </ion-slides>\n\n\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar>\n    \n    <ion-row>\n\n      <ion-col>\n          <ion-button shape=\"round\"\n                      expand=\"full\"\n                      size=\"small\"\n                      fill=\"outline\"\n                      color=\"tertiary\"\n                      (click)=\"mostrarRegistro()\">\n            Ingresar\n          </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button shape=\"round\"\n                    expand=\"full\"\n                    size=\"small\"\n                    fill=\"outline\"\n                    color=\"tertiary\"\n                    (click)=\"mostrarLogin()\">\n          Registrarme\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%; }\n\nimg {\n  width: 120px; }\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3; }\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxqb3NlbVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEN1YXRyaW1lc3RyZSAxMFxcYXBwZml0Y2FtcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLCtCQUErQjtFQUMvQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui-service.service */ "./src/app/services/ui-service.service.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(usuarioService, navCtrl, uiService) {
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.loginUser = {
            email: 'test1@test.com',
            password: '123456'
        };
        this.registerUser = {
            email: 'test',
            password: '123456',
            nombre: 'Test',
            avatar: 'av-1.png'
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
    };
    LoginPage.prototype.login = function (fLogin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fLogin.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.usuarioService.login(this.loginUser.email, this.loginUser.password)];
                    case 1:
                        valido = _a.sent();
                        if (valido) {
                            // navegar al tabs
                            this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
                        }
                        else {
                            // mostrar alerta de usuario y contraseña no correctos
                            this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.registro = function (fRegistro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fRegistro.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.usuarioService.registro(this.registerUser)];
                    case 1:
                        valido = _a.sent();
                        if (valido) {
                            // navegar al tabs
                            this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
                        }
                        else {
                            // mostrar alerta de usuario y contraseña no correctos
                            this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.mostrarRegistro = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    };
    LoginPage.prototype.mostrarLogin = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map