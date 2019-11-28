(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/pages/tab3/tab3.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.module.ts ***!
  \*******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/pages/tab3/tab3.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab3/tab3.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\"\n                  color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row class=\"top-20\">\n    \n    <ion-col size=\"12\" text-center>\n      <img src=\"assets/avatars/{{ usuario.avatar }}\" class=\"img-avatar\">\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class=\"top-20\">\n    <ion-col size=\"12\" text-center>\n      <ion-label>\n        <h1>Actualizar perfil</h1>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n\n  <app-avatar-selector (avatarSel)=\"usuario.avatar = $event\"\n                       [avatarActual]=\"usuario.avatar\"></app-avatar-selector>\n\n  <form (ngSubmit)=\"actualizar( fActualizar )\" #fActualizar>\n      <ion-row>\n        <ion-col>\n          \n            <ion-list>\n              \n              <ion-item>\n                <ion-label>Email</ion-label>\n                <ion-input name=\"email\"\n                           type=\"email\"\n                           [(ngModel)]=\"usuario.email\"\n                           required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Nombre</ion-label>\n                <ion-input name=\"nombre\"\n                           type=\"text\"\n                           [(ngModel)]=\"usuario.nombre\"\n                           required></ion-input>\n              </ion-item>\n\n\n            </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col text-center>\n          <ion-button type=\"submit\"\n                      color=\"tertiary\"\n                      shape=\"round\">\n          Actualizar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab3/tab3.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-avatar {\n  width: 150px; }\n\n.top-20 {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMy9DOlxcVXNlcnNcXGpvc2VtXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcQ3VhdHJpbWVzdHJlIDEwXFxhcHBmaXRjYW1wL3NyY1xcYXBwXFxwYWdlc1xcdGFiM1xcdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLmltZy1hdmF0YXIge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnRvcC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab3/tab3.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.ts ***!
  \*****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");





var Tab3Page = /** @class */ (function () {
    function Tab3Page(usuarioService, uiService, postsService) {
        this.usuarioService = usuarioService;
        this.uiService = uiService;
        this.postsService = postsService;
        this.usuario = {};
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.usuario = this.usuarioService.getUsuario();
        console.log(this.usuario);
    };
    Tab3Page.prototype.actualizar = function (fActualizar) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actualizado;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fActualizar.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.usuarioService.actualizarUsuario(this.usuario)];
                    case 1:
                        actualizado = _a.sent();
                        if (actualizado) {
                            // toast con el mensaje de actualizado
                            this.uiService.presentToast('Registro actualizado');
                        }
                        else {
                            // toast con el error
                            this.uiService.presentToast('No se pudo actualizar');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.logout = function () {
        this.postsService.paginaPosts = 0;
        this.usuarioService.logout();
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/pages/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/pages/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__["UiServiceService"],
            _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map