(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rutinas-modal-rutinas-modal-module"],{

/***/ "./src/app/pages/rutinas-modal/rutinas-modal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/rutinas-modal/rutinas-modal.module.ts ***!
  \*************************************************************/
/*! exports provided: RutinasModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinasModalPageModule", function() { return RutinasModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rutinas_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rutinas-modal.page */ "./src/app/pages/rutinas-modal/rutinas-modal.page.ts");







var routes = [
    {
        path: '',
        component: _rutinas_modal_page__WEBPACK_IMPORTED_MODULE_6__["RutinasModalPage"]
    }
];
var RutinasModalPageModule = /** @class */ (function () {
    function RutinasModalPageModule() {
    }
    RutinasModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rutinas_modal_page__WEBPACK_IMPORTED_MODULE_6__["RutinasModalPage"]]
        })
    ], RutinasModalPageModule);
    return RutinasModalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/rutinas-modal/rutinas-modal.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/rutinas-modal/rutinas-modal.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button name=\"md-arrow-back\" routerLink=\"/rutinas\">Regresar</ion-button>\n        </ion-buttons>\n\n\n      <ion-title>\n      Rutinas Modal\n      </ion-title>\n    </ion-toolbar>\n  \n</ion-header>\n\n<!-- <ion-content padding>\n    <form>\n    <ion-card>\n      \n      <ion-img src=\"/assets/shapes.svg\"></ion-img>\n\n      <ion-card-content>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero dolor quae eveniet commodi ut amet exercitationem, consequatur quis iusto rerum explicabo tempore eligendi debitis a suscipit rem repudiandae consectetur!\n        <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</ion-button>\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n      \n        <ion-img src=\"/assets/shapes.svg\"></ion-img>\n  \n        <ion-card-content>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero dolor quae eveniet commodi ut amet exercitationem, consequatur quis iusto rerum explicabo tempore eligendi debitis a suscipit rem repudiandae consectetur!\n          <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</ion-button>\n        </ion-card-content>\n  \n      </ion-card>\n\n      <ion-card>\n      \n          <ion-img src=\"/assets/shapes.svg\"></ion-img>\n    \n          <ion-card-content>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero dolor quae eveniet commodi ut amet exercitationem, consequatur quis iusto rerum explicabo tempore eligendi debitis a suscipit rem repudiandae consectetur!\n            <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</ion-button>\n          </ion-card-content>\n    \n        </ion-card>\n\n        <ion-card>\n      \n            <ion-img src=\"/assets/shapes.svg\"></ion-img>\n      \n            <ion-card-content>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero dolor quae eveniet commodi ut amet exercitationem, consequatur quis iusto rerum explicabo tempore eligendi debitis a suscipit rem repudiandae consectetur!\n              <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</ion-button>\n            </ion-card-content>\n      \n          </ion-card>\n\n        \n          <ion-card>\n      \n              <ion-img src=\"/assets/escaladora.jfif\"></ion-img>\n        \n              <ion-card-content>\n                  - Las escaladoras mejoran el rendimiento cardiovascular. ... <br>\n                  - Escalar mejora el rendimiento muscular.... <br>\n                  - Tonifica los glúteos. ...\n                <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Escaladora</ion-button>\n              </ion-card-content>\n        \n            </ion-card>\n  </form>\n\n</ion-content> -->\n"

/***/ }),

/***/ "./src/app/pages/rutinas-modal/rutinas-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/rutinas-modal/rutinas-modal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1dGluYXMtbW9kYWwvcnV0aW5hcy1tb2RhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/rutinas-modal/rutinas-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/rutinas-modal/rutinas-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: RutinasModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinasModalPage", function() { return RutinasModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RutinasModalPage = /** @class */ (function () {
    function RutinasModalPage() {
    }
    RutinasModalPage.prototype.ngOnInit = function () {
    };
    RutinasModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rutinas-modal',
            template: __webpack_require__(/*! ./rutinas-modal.page.html */ "./src/app/pages/rutinas-modal/rutinas-modal.page.html"),
            styles: [__webpack_require__(/*! ./rutinas-modal.page.scss */ "./src/app/pages/rutinas-modal/rutinas-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RutinasModalPage);
    return RutinasModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-rutinas-modal-rutinas-modal-module.js.map