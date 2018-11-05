(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<main class=\"main\">\n\n    <h1>{{ title }}</h1>\n    <app-carousel></app-carousel>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Carousel Test';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_carousel_photo_carousel_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carousel-photo/carousel-photo.component */ "./src/app/components/carousel-photo/carousel-photo.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
                _components_carousel_photo_carousel_photo_component__WEBPACK_IMPORTED_MODULE_4__["CarouselPhotoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/carousel-photo/carousel-photo.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/carousel-photo/carousel-photo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-photo\">\n\n  <div class=\"wrapper\">\n    <img class=\"photo-img\" src=\"{{ data.webformatURL }}\">\n  </div>\n\n  <span class=\"photo-title\">{{ data.user }}</span>\n</div>"

/***/ }),

/***/ "./src/app/components/carousel-photo/carousel-photo.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/carousel-photo/carousel-photo.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Ropa+Sans\");\n/* COLORS */\n/* VARIABLES */\n.carousel-photo {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  padding: 0 10px; }\n.carousel-photo .photo-title {\n    color: #276696;\n    font-family: 'Ropa Sans';\n    font-size: 20px; }\n.carousel-photo .wrapper {\n    height: 320px;\n    width: 360px;\n    padding: 10px 0;\n    overflow: hidden; }\n.carousel-photo .wrapper .photo-img {\n      height: 320px;\n      width: auto;\n      margin-left: -72px; }\n"

/***/ }),

/***/ "./src/app/components/carousel-photo/carousel-photo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/carousel-photo/carousel-photo.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarouselPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPhotoComponent", function() { return CarouselPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselPhotoComponent = /** @class */ (function () {
    function CarouselPhotoComponent() {
    }
    CarouselPhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselPhotoComponent.prototype, "data", void 0);
    CarouselPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-photo',
            template: __webpack_require__(/*! ./carousel-photo.component.html */ "./src/app/components/carousel-photo/carousel-photo.component.html"),
            styles: [__webpack_require__(/*! ./carousel-photo.component.sass */ "./src/app/components/carousel-photo/carousel-photo.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselPhotoComponent);
    return CarouselPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cmp-carousel\">\n  <div class=\"wrapper\" *ngIf=\"service.photos\">\n\n      <div class=\"carousel-mask\">\n        <div class=\"carousel-row\" [ngStyle]=\"{'left': carouselPosition}\">\n          <div *ngFor=\"let photo of service.photos\" class=\"photo-wrapper\">\n            <app-carousel-photo [data]=\"photo\"></app-carousel-photo>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"carousel-buttons\">\n        <button class=\"btn-prev\" (click)=\"prevPhoto()\">\n            <img class=\"btn-arrow\" src=\"./assets/images/arrow.svg\">\n            <span class=\"btn-text\">Prev</span>\n        </button>\n        <button class=\"btn-next\" (click)=\"nextPhoto()\">\n            <img class=\"btn-arrow\" src=\"./assets/images/arrow.svg\">\n            <span class=\"btn-text\">Next</span>\n        </button>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Ropa+Sans\");\n/* COLORS */\n/* VARIABLES */\n.cmp-carousel {\n  width: 100%; }\n.cmp-carousel .wrapper {\n    background-color: #FFFFFF;\n    padding: 40px 30px 40px 30px;\n    height: 360px; }\n.cmp-carousel .wrapper .carousel-buttons {\n      margin: -180px auto 0 auto;\n      position: relative;\n      width: 360px; }\n.cmp-carousel .wrapper .carousel-buttons .carousel-btn-mobile, .cmp-carousel .wrapper .carousel-buttons .btn-prev, .cmp-carousel .wrapper .carousel-buttons .btn-next {\n        cursor: pointer;\n        background-color: rgba(255, 255, 255, 0.5);\n        border-bottom-left-radius: 148px;\n        border-top-left-radius: 148px;\n        border-width: 0;\n        display: inline-block;\n        height: 148px;\n        margin: -88px 0 0 0;\n        top: 50%;\n        width: 74px;\n        z-index: 1;\n        outline: 0; }\n.cmp-carousel .wrapper .carousel-buttons .carousel-btn-mobile img, .cmp-carousel .wrapper .carousel-buttons .btn-prev img, .cmp-carousel .wrapper .carousel-buttons .btn-next img {\n          display: block;\n          fill: #276696;\n          margin-left: 25px;\n          pointer-events: none; }\n.cmp-carousel .wrapper .carousel-buttons .carousel-btn-mobile span, .cmp-carousel .wrapper .carousel-buttons .btn-prev span, .cmp-carousel .wrapper .carousel-buttons .btn-next span {\n          display: none; }\n.cmp-carousel .wrapper .carousel-buttons .btn-prev {\n        webkit-transform: rotate(180deg);\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n        position: absolute;\n        left: 0; }\n.cmp-carousel .wrapper .carousel-buttons .btn-next {\n        position: absolute;\n        right: 0; }\n.cmp-carousel .wrapper .carousel-mask {\n      height: 370px;\n      width: 360px;\n      margin: 0 auto;\n      overflow: hidden; }\n.cmp-carousel .wrapper .carousel-mask .carousel-row {\n        display: inline-flex;\n        position: relative;\n        transition: all .25s ease-in-out;\n        -moz-transition: all .25s ease-in-out;\n        -webkit-transition: all .25s ease-in-out; }\n@media screen and (min-width: 768px) {\n    .cmp-carousel .wrapper .carousel-mask {\n      overflow: visible; }\n    .cmp-carousel .wrapper .carousel-buttons {\n      text-align: center;\n      margin: 0 auto 80px auto; }\n      .cmp-carousel .wrapper .carousel-buttons .carousel-btn, .cmp-carousel .wrapper .carousel-buttons .btn-prev, .cmp-carousel .wrapper .carousel-buttons .btn-next {\n        background-color: #276696;\n        color: #FFFFFF;\n        font-family: 'Ropa Sans';\n        font-size: 20px;\n        height: auto;\n        margin: 88px 10px 0 10px;\n        padding: 10px;\n        width: 80px;\n        position: initial; }\n        .cmp-carousel .wrapper .carousel-buttons .carousel-btn img, .cmp-carousel .wrapper .carousel-buttons .btn-prev img, .cmp-carousel .wrapper .carousel-buttons .btn-next img {\n          display: none; }\n        .cmp-carousel .wrapper .carousel-buttons .carousel-btn span, .cmp-carousel .wrapper .carousel-buttons .btn-prev span, .cmp-carousel .wrapper .carousel-buttons .btn-next span {\n          display: block; }\n      .cmp-carousel .wrapper .carousel-buttons .btn-prev {\n        border-bottom-left-radius: 10px;\n        border-top-left-radius: 10px;\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n        text-align: right;\n        webkit-transform: rotate(0deg);\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      .cmp-carousel .wrapper .carousel-buttons .btn-next {\n        text-align: left;\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0;\n        border-bottom-right-radius: 10px;\n        border-top-right-radius: 10px; } }\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.service */ "./src/app/components/carousel/carousel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(service) {
        this.service = service;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.photo = {
            width: 380,
            padding: 10
        };
        this.index = 0;
        this.carouselPosition = this.getCarouselPositionFrom(this.index);
    };
    CarouselComponent.prototype.prevPhoto = function () {
        this.index = (this.index - 1) < 0 ? this.service.photos.length - 1 : this.index - 1;
        this.carouselPosition = this.getCarouselPositionFrom(this.index);
    };
    CarouselComponent.prototype.nextPhoto = function () {
        this.index = (this.index + 1) >= this.service.limit ? 0 : (this.index + 1);
        this.carouselPosition = this.getCarouselPositionFrom(this.index);
    };
    CarouselComponent.prototype.getCarouselPositionFrom = function (index) {
        // return this.carouselPosition = `${((index * -this.photo.width) - this.photo.padding)}px`;
        return this.carouselPosition = (index * -this.photo.width - this.photo.padding) + "px";
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.sass */ "./src/app/components/carousel/carousel.component.sass")]
        }),
        __metadata("design:paramtypes", [_carousel_service__WEBPACK_IMPORTED_MODULE_1__["CarouselService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/carousel/carousel.service.ts ***!
  \*********************************************************/
/*! exports provided: CarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselService", function() { return CarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselService = /** @class */ (function () {
    function CarouselService(http) {
        var _this = this;
        this.http = http;
        this.limit = 12;
        this.photos = [];
        this.getData().subscribe(function (data) {
            _this.photos = data.hits.slice(0, _this.limit);
        });
    }
    CarouselService.prototype.getData = function () {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://pixabay.com/api/?key=10414638-770fbbcb333ae8555f5bd47b6&q=yellow+flowers&image_type=photo&pretty=true");
    };
    CarouselService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarouselService);
    return CarouselService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pabrick/Workspace/generic-carousel-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map