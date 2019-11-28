(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n      Nuevo Post\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"crearPost()\"\n                  [disabled]=\"post.mensaje.length < 1 || cargandoGeo\"\n                  color=\"primary\">\n        Compartir\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    \n    <ion-item>\n      <ion-label position=\"floating\">Mensaje</ion-label>\n      <ion-textarea [(ngModel)]=\"post.mensaje\"></ion-textarea>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Posición actual</ion-label>\n        \n        <ion-spinner name=\"lines-small\"\n                     *ngIf=\"cargandoGeo\"></ion-spinner>\n        <ion-toggle slot=\"end\"\n                    [(ngModel)]=\"post.posicion\"\n                    (ionChange)=\"getGeo()\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"camara()\">\n        <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n        Cámara\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"libreria()\">\n        <ion-icon slot=\"start\" name=\"images\"></ion-icon>\n        Galería\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col size=\"3\" *ngFor=\"let image of tempImages\">\n      <ion-card>\n        <img [src]=\"image | imageSanitizer\">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






var Tab2Page = /** @class */ (function () {
    function Tab2Page(postsService, route, geolocation, camera) {
        this.postsService = postsService;
        this.route = route;
        this.geolocation = geolocation;
        this.camera = camera;
        this.tempImages = [];
        this.cargandoGeo = false;
        this.post = {
            mensaje: '',
            coords: null,
            posicion: false
        };
    }
    Tab2Page.prototype.crearPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var creado;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.post);
                        return [4 /*yield*/, this.postsService.crearPost(this.post)];
                    case 1:
                        creado = _a.sent();
                        this.post = {
                            mensaje: '',
                            coords: null,
                            posicion: false
                        };
                        this.tempImages = [];
                        this.route.navigateByUrl('/main/tabs/tab1');
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.getGeo = function () {
        var _this = this;
        if (!this.post.posicion) {
            this.post.coords = null;
            return;
        }
        this.cargandoGeo = true;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.cargandoGeo = false;
            var coords = resp.coords.latitude + "," + resp.coords.longitude;
            console.log(coords);
            _this.post.coords = coords;
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.cargandoGeo = false;
        });
    };
    Tab2Page.prototype.camara = function () {
        var options = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.procesarImagen(options);
    };
    Tab2Page.prototype.libreria = function () {
        var options = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarImagen(options);
    };
    Tab2Page.prototype.procesarImagen = function (options) {
        var _this = this;
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var img = window.Ionic.WebView.convertFileSrc(imageData);
            _this.postsService.subirImagen(imageData);
            _this.tempImages.push(img);
        }, function (err) {
            // Handle error
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/pages/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ }),

/***/ "./src/app/pipes/dom-sanitizer.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/dom-sanitizer.pipe.ts ***!
  \*********************************************/
/*! exports provided: DomSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function() { return DomSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var DomSanitizerPipe = /** @class */ (function () {
    function DomSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomSanitizerPipe.prototype.transform = function (img) {
        var domImg = "background-image: url('" + img + "')";
        return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    };
    DomSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'domSanitizer'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DomSanitizerPipe);
    return DomSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/pipes/image-sanitizer.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/image-sanitizer.pipe.ts ***!
  \***********************************************/
/*! exports provided: ImageSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSanitizerPipe", function() { return ImageSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ImageSanitizerPipe = /** @class */ (function () {
    function ImageSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    ImageSanitizerPipe.prototype.transform = function (img) {
        return this.domSanitizer.bypassSecurityTrustUrl(img);
    };
    ImageSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imageSanitizer'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ImageSanitizerPipe);
    return ImageSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img, userId) {
        return URL + "/posts/imagen/" + userId + "/" + img;
    };
    ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-sanitizer.pipe */ "./src/app/pipes/dom-sanitizer.pipe.ts");
/* harmony import */ var _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-sanitizer.pipe */ "./src/app/pipes/image-sanitizer.pipe.ts");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
                _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
            ],
            exports: [
                _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
                _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map