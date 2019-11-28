(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planes-planes-module"],{

/***/ "./src/app/pages/planes/planes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.module.ts ***!
  \***********************************************/
/*! exports provided: PlanesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPageModule", function() { return PlanesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _planes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planes.page */ "./src/app/pages/planes/planes.page.ts");







var routes = [
    {
        path: '',
        component: _planes_page__WEBPACK_IMPORTED_MODULE_6__["PlanesPage"]
    }
];
var PlanesPageModule = /** @class */ (function () {
    function PlanesPageModule() {
    }
    PlanesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_planes_page__WEBPACK_IMPORTED_MODULE_6__["PlanesPage"]]
        })
    ], PlanesPageModule);
    return PlanesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/planes/planes.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n    Planes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-item *ngFor=\"let item of Planes\">\n        <ion-item>\n          <ion-item>\n            <td>Nombre: {{item.nombre}}</td>\n          </ion-item>\n          <ion-item>\n            <td>Desayuno: {{item.desayuno}}</td>\n          </ion-item>\n          <ion-item>\n          <td>Colasion1: {{item.colasion1}}</td>\n          </ion-item>\n          <ion-item>\n          <p>Comida: {{item.comida}}</p>\n        </ion-item>\n        <ion-item>\n          <td>Colasion2: {{item.colasion2}}</td>\n        </ion-item>\n        <ion-item>\n          <p>Cena: {{item.cena}}</p>\n        </ion-item>\n        </ion-item>\n    </ion-item>\n    <ion-item *ngFor=\"let item of Planes\">\n        <ion-button [hidden]=\"visibleEdit\" (click)=\"edit(item)\">Editar</ion-button>\n        <ion-button [hidden]=\"visibleUpdate\" (click)=\"execute(this.addPlanes)\">Actualizar</ion-button>\n        <ion-button (click)=\"delete(item.name)\">Eliminar</ion-button>\n    </ion-item>\n  </form>\n  \n  <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.nombre\"placeholder=\"nombre\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Desayuno</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.desayuno\"placeholder=\"desayuno\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Colasion1</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.colasion1\"placeholder=\"colasion1\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\"position=\"floating\">Comida</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.comida\"placeholder=\"comida\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Colasion2</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.colasion2\"placeholder=\"colasion2\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\"position=\"floating\">Cena</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"addPlanes.cena\"placeholder=\"cena\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-item>\n      <ion-button (click)=\"add(addPlanes)\">Añadir</ion-button>\n    </ion-item>\n\n  </ion-item>\n</ion-content>\n\n\n<!-- <ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n      <ion-label>Nombre: {{ nombre || 'No hay nombre' }}</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" \n                 [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\n\n    <ion-list>\n\n      <ion-list-header>\n        <ion-label>Formulatio template: Valido {{ formulario.valid }} </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\"\n                    name=\"email\"\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                    [(ngModel)]=\"usuario.email\"\n                    required>\n          </ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\"\n                    name=\"password\"\n                    [(ngModel)]=\"usuario.password\"\n                    required>\n          </ion-input>\n      </ion-item>\n    </ion-list>\n    \n    <ion-button expand=\"solid\" type=\"submit\"\n                [disabled]=\"formulario.invalid\">\n      Enviar\n    </ion-button>\n\n\n  </form> \n\n</ion-content> -->\n"

/***/ }),

/***/ "./src/app/pages/planes/planes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW5lcy9wbGFuZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/planes/planes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/planes/planes.page.ts ***!
  \*********************************************/
/*! exports provided: PlanesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPage", function() { return PlanesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlanesPage = /** @class */ (function () {
    function PlanesPage() {
        this.Planes = new Array();
        this.addPlanes = {
            nombre: "",
            desayuno: "",
            colasion1: "",
            comida: "",
            colasion2: "",
            cena: ""
        };
        this.visibleUpdate = true;
        this.visibleEdit = false;
    }
    PlanesPage.prototype.ionViewDidLoad = function () {
        //your code;
    };
    PlanesPage.prototype.execute = function (planesEdit) {
        this.update(planesEdit);
        this.addPlanes = { nombre: "", desayuno: "", colasion1: "", comida: "", colasion2: "", cena: "" };
    };
    PlanesPage.prototype.add = function (Planes) {
        this.Planes.push(Planes);
        this.addPlanes = {
            nombre: "",
            desayuno: "",
            colasion1: "",
            comida: "",
            colasion2: "",
            cena: ""
        };
    };
    PlanesPage.prototype.edit = function (plan) {
        this.visibleUpdate = false;
        this.visibleEdit = true;
        this.addPlanes = {
            nombre: plan.nombre,
            desayuno: plan.desayuno,
            colasion1: plan.colasion1,
            comida: plan.comida,
            colasion2: plan.colasion2,
            cena: plan.cena
        };
    };
    PlanesPage.prototype.update = function (planesEdit) {
        var i = this.Planes.indexOf(planesEdit);
        this.Planes.splice(i, 1);
        this.Planes.push(planesEdit);
        this.visibleUpdate = true;
        this.visibleEdit = false;
    };
    PlanesPage.prototype.delete = function (nombreplanes) {
        var i = this.Planes.indexOf(nombreplanes);
        this.Planes.splice(i, 1);
    };
    PlanesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planes',
            template: __webpack_require__(/*! ./planes.page.html */ "./src/app/pages/planes/planes.page.html"),
            styles: [__webpack_require__(/*! ./planes.page.scss */ "./src/app/pages/planes/planes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlanesPage);
    return PlanesPage;
}());

// nombre: string;
// usuario = {
//    email: '',
//    password: ''
// };
// onSubmitTemplate() {
//   console.log('Form submit');
//   console.log( this.usuario );
//  }
//  otro ejemplo
//   comida: string;
//   alimentos: string;
//   calorias: string;
//   constructor() { }
//   ngOnInit() {
//   }
//   onSubmitTemplate() {
//     console.log('Form submit');
//     console.log( this.usuario );
//   }
// export class PlanesPage {
//   Planes = new Array();
//   addPlanes = {
//     comidas: "",
//     alimentos: "",
//     calorias: ""
//   };
//   visibleUpdate: boolean = true;
//   visibleEdit: boolean = false;
//   constructor() { }
//   ionViewDidLoad(){
//     //your code;
//   }
//   execute(planesEdit) {
//     this.update(planesEdit);
//     this.addPlanes = { comidas: "", alimentos: "", calorias: ""};
//   }
//   add(Planes){
//     this.Planes.push(Planes);
//     this.addPlanes = {
//       comidas: "",
//       alimentos: "",
//       calorias: ""
//     };
//   }
//   edit(plan) {
//     this.visibleUpdate = false;
//     this.visibleEdit = true;
//     this.addPlanes = {
//       comidas: plan.comidas,
//       alimentos: plan.alimentos,
//       calorias: plan.calorias
//     };
//   }
//   update(planesEdit) {
//     var i = this.Planes.indexOf(planesEdit);
//     this.Planes.splice(i, 1);
//     this.Planes.push(planesEdit);
//     this.visibleUpdate = true;
//     this.visibleEdit = false;
//   }
//   delete(comidasplanes){
//     var i = this.Planes.indexOf(comidasplanes);
//     this.Planes.splice(i, 1);
//   }
// }


/***/ })

}]);
//# sourceMappingURL=planes-planes-module.js.map