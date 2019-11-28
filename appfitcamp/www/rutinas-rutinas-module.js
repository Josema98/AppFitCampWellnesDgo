(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rutinas-rutinas-module"],{

/***/ "./src/app/pages/rutinas/rutinas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rutinas/rutinas.module.ts ***!
  \*************************************************/
/*! exports provided: RutinasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinasPageModule", function() { return RutinasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rutinas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rutinas.page */ "./src/app/pages/rutinas/rutinas.page.ts");







var routes = [
    {
        path: '',
        component: _rutinas_page__WEBPACK_IMPORTED_MODULE_6__["RutinasPage"]
    }
];
var RutinasPageModule = /** @class */ (function () {
    function RutinasPageModule() {
    }
    RutinasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rutinas_page__WEBPACK_IMPORTED_MODULE_6__["RutinasPage"]]
        })
    ], RutinasPageModule);
    return RutinasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/rutinas/rutinas.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/rutinas/rutinas.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n    Rutinas\n    </ion-title>\n  </ion-toolbar>\n\n<!-- <ion-searchbar animated\n              (ionInput)=\"buscar($event)\">\n  </ion-searchbar> -->\n\n\n</ion-header>\n\n<ion-content padding>\n    <form>\n    <ion-card>\n      \n      <ion-img src=\"/assets/pierna.jfif\"></ion-img>\n\n      <ion-card-content>\n          - Ayuda a perder peso....<br>\n          - Ayuda a fortalecer los lumbares....<br>\n          - Nos permite mejorar en otros deportes....<br>\n        <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('https://www.youtube.com/watch?v=Q3hW6KKyi9s')\">Pierna</ion-button>\n      \n        <!-- <button (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</button> -->\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n      \n        <ion-img src=\"/assets/brazo.jfif\"></ion-img>\n  \n        <ion-card-content>\n            - Resistencia....<br>\n            - Pérdida de grasa....<br>\n            - Equipo....<br>\n            - Estiliza tu figura....<br>\n            - Trabajas todos los músculos....<br>\n          <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('https://www.youtube.com/watch?v=8JcEiHJYhqE')\">Brazo</ion-button>\n        \n          <!-- <button (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</button> -->\n        </ion-card-content>\n  \n      </ion-card>\n\n      <ion-card>\n      \n          <ion-img src=\"/assets/espalda.jfif\"></ion-img>\n    \n          <ion-card-content>\n              - Mejora la fuerza y la masa muscular del cuerpo completo....<br>\n              - Mejora la flexibilidad....<br>\n              - Mejora condiciones como el balance y el equilibrio, a través de los distintos ejercicios que se integran en un plan de entrenamiento.<br>\n            <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('https://www.youtube.com/watch?v=x09bohlned0')\">Espalda</ion-button>\n          \n            <!-- <button (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</button> -->\n          </ion-card-content>\n    \n        </ion-card>\n\n        <ion-card>\n      \n            <ion-img src=\"/assets/abdomen.jfif\"></ion-img>\n      \n            <ion-card-content>\n                - Quemas calorías porque es una rutina de alta intensidad.<br>\n                - Mejoras la movilidad, porque implicas un número grande de músculos en cada ejercicio.<br>\n                - Tonificas sin aumentar la masa.<br>\n                - Favoreces la coordinación.<br>\n              <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('https://www.youtube.com/watch?v=Zt8lFYngERg')\">Abdomen</ion-button>\n            \n              <!-- <button (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</button> -->\n            </ion-card-content>\n      \n          </ion-card>\n\n        \n          <ion-card>\n      \n              <ion-img src=\"/assets/escaladora.jfif\"></ion-img>\n        \n              <ion-card-content>\n                  - Las escaladoras mejoran el rendimiento cardiovascular. ... <br>\n                  - Escalar mejora el rendimiento muscular.... <br>\n                  - Tonifica los glúteos. ...\n                <ion-button class=\"top-20\" fill=\"solid\" (click)=\"whatch('https://www.youtube.com/watch?v=HPSEzaHKlKI&t=99s')\">Escaladora</ion-button>\n              \n                <!-- <button (click)=\"whatch('i1DiaXP9nCk&t=167s')\">Pierna</button> -->\n              </ion-card-content>\n        \n            </ion-card>\n  </form>\n\n</ion-content>\n\n\n\n\n<!--  <ion-content padding>\n\n  <ion-item button routerLink=\"/rutinas-modal\" *ngFor=\"let item of lista\">\n  {{item}}\n  </ion-item> \n\n</ion-content> -->\n"

/***/ }),

/***/ "./src/app/pages/rutinas/rutinas.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rutinas/rutinas.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1dGluYXMvcnV0aW5hcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/rutinas/rutinas.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rutinas/rutinas.page.ts ***!
  \***********************************************/
/*! exports provided: RutinasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinasPage", function() { return RutinasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");



var RutinasPage = /** @class */ (function () {
    function RutinasPage(youtube) {
        this.youtube = youtube;
    }
    RutinasPage.prototype.ngOnInit = function () {
    };
    RutinasPage.prototype.whatch = function (_whatch) {
        this.youtube.openVideo('whatch');
    };
    RutinasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rutinas',
            template: __webpack_require__(/*! ./rutinas.page.html */ "./src/app/pages/rutinas/rutinas.page.html"),
            styles: [__webpack_require__(/*! ./rutinas.page.scss */ "./src/app/pages/rutinas/rutinas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__["YoutubeVideoPlayer"]])
    ], RutinasPage);
    return RutinasPage;
}());

// export class RutinasPage {
//   lista: string[];
//   constructor() {
//       this.inicializar();
//     }
//     inicializar() {
//         this.lista = [
//           'Pierna',
//           'Brazo',
//           'Espalda',
//           'Abdomen',
//           'Éscaladora'
//         ];
//     }
//     buscar(ev: any) {
//       this.inicializar();
//       const val = ev.target.value;
//       if (val && val.trim() !== '' ) {
//         this.lista = this.lista.filter((item) => {
//           return (item.toLowerCase().indexOf(val.toLowerCase()) > -1 );
//         });
//       }
//     }
//   }
// ngOnInit() {
// }
// buscar( event ) {
//    console.log(event);
//   // this.textoBuscar = event.detail.value;
// }


/***/ })

}]);
//# sourceMappingURL=rutinas-rutinas-module.js.map