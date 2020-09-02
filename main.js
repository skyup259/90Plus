(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_slidecard_slidecard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/slidecard/slidecard.component */ "./src/app/component/slidecard/slidecard.component.ts");
/* harmony import */ var _component_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/notice/notice.component */ "./src/app/component/notice/notice.component.ts");
/* harmony import */ var _component_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/teacher/teacher.component */ "./src/app/component/teacher/teacher.component.ts");
/* harmony import */ var _component_student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/student/student.component */ "./src/app/component/student/student.component.ts");
/* harmony import */ var _component_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/alumni/alumni.component */ "./src/app/component/alumni/alumni.component.ts");








class AppComponent {
    constructor() {
        this.title = 'ninetyplus';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "justify-content-md-center"], [1, "container", 2, "z-index", "1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-slidecard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _component_slidecard_slidecard_component__WEBPACK_IMPORTED_MODULE_2__["SlidecardComponent"], _component_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], _component_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"], _component_student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"], _component_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_6__["AlumniComponent"]], styles: ["body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: blue;    \r\n  border-radius: 20px;       \r\n  border: 3px solid orange;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsS0FBSyw4QkFBOEI7RUFDekQsbUJBQW1CLFFBQVEsa0NBQWtDO0VBQzdELHdCQUF3QixHQUFHLHdDQUF3QztBQUNyRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICAgIC8qIGNvbG9yIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTsgIC8qIGNyZWF0ZXMgcGFkZGluZyBhcm91bmQgc2Nyb2xsIHRodW1iICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/teacher/teacher.component */ "./src/app/component/teacher/teacher.component.ts");
/* harmony import */ var _component_student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/student/student.component */ "./src/app/component/student/student.component.ts");
/* harmony import */ var _component_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/alumni/alumni.component */ "./src/app/component/alumni/alumni.component.ts");
/* harmony import */ var _component_notice_notice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/notice/notice.component */ "./src/app/component/notice/notice.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_slidecard_slidecard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/slidecard/slidecard.component */ "./src/app/component/slidecard/slidecard.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"],
        _component_student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
        _component_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_6__["AlumniComponent"],
        _component_notice_notice_component__WEBPACK_IMPORTED_MODULE_7__["NoticeComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _component_slidecard_slidecard_component__WEBPACK_IMPORTED_MODULE_9__["SlidecardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"],
                    _component_student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
                    _component_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_6__["AlumniComponent"],
                    _component_notice_notice_component__WEBPACK_IMPORTED_MODULE_7__["NoticeComponent"],
                    _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _component_slidecard_slidecard_component__WEBPACK_IMPORTED_MODULE_9__["SlidecardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/alumni/alumni.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/alumni/alumni.component.ts ***!
  \******************************************************/
/*! exports provided: AlumniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumniComponent", function() { return AlumniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AlumniComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.title);
} }
function AlumniComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r4.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.title);
} }
function AlumniComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.title);
} }
class AlumniComponent {
    constructor() {
        this.class8 = [
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'Srini kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            }
        ];
    }
    ngOnInit() {
    }
}
AlumniComponent.ɵfac = function AlumniComponent_Factory(t) { return new (t || AlumniComponent)(); };
AlumniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlumniComponent, selectors: [["app-alumni"]], decls: 34, vars: 3, consts: [["id", "Alumni", 1, "rounded"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "row", "px-5", "mt-1", "align-center"], [1, "col-sm-12", "col-md", "pl-2", "p-bottom-40"], ["id", "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "data-target", "#batch9", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "btn", "btn-link"], ["id", "batch9", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse"], [1, "row", "max-height"], ["class", "card-body col-sm-12 col-md-4", 4, "ngFor", "ngForOf"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#batch10", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "collapsed"], ["id", "batch10", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#batch11", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "collapsed"], ["id", "batch11", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"], [1, "card-body", "col-sm-12", "col-md-4"], [1, "row", "rounded", "border", "ml-2", "mr-2", "p-1"], [1, "col-3"], ["alt", "Card image cap", 1, "rounded-circle", "profie-pic", "pr-2", 3, "src"], [1, "col-9", "student-data"], [1, "card-title"], [1, "card-text"]], template: function AlumniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Alumni's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Batch: 2009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AlumniComponent_div_17_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Batch: 2010 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AlumniComponent_div_25_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Batch: 2011 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AlumniComponent_div_33_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 68px;\r\n  height: 68px;\r\n}\r\n\r\n.max-height[_ngcontent-%COMP%] {\r\n    max-height: 350px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.student-data[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: .8rem;\r\n}\r\n\r\n@media (max-width: 350px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .p-1[_ngcontent-%COMP%] {\r\n    padding: 0rem;\r\n  }\r\n\r\n  .col-3[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .col-9[_ngcontent-%COMP%] {\r\n    padding-left: 8px;\r\n    padding-right: 0px;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin-bottom: 0rem;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 0.3rem 0.7rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 350px) and  (max-width: 450px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .p-1[_ngcontent-%COMP%] {\r\n    padding: 0rem;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin-bottom: 0rem;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: .35rem 1rem;\r\n  }\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FsdW1uaS9hbHVtbmkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FsdW1uaS9hbHVtbmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDY4cHg7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG59XHJcblxyXG4ubWF4LWhlaWdodCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zdHVkZW50LWRhdGEge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogLjhyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC5wLTEge1xyXG4gICAgcGFkZGluZzogMHJlbTtcclxuICB9XHJcblxyXG4gIC5jb2wtM3tcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC05IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAucC0xIHtcclxuICAgIHBhZGRpbmc6IDByZW07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAuMzVyZW0gMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5ydWxlciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlumniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alumni',
                templateUrl: './alumni.component.html',
                styleUrls: ['./alumni.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["src", "assets/logo.gif", 2, "height", "50px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#Notice", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "#Teacher", 1, "nav-link"], ["href", "#Student", 1, "nav-link"], ["href", "#Alumni", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teacher's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Student's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Alumni's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/notice/notice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/notice/notice.component.ts ***!
  \******************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NoticeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "link to connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meeting_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r6.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", meeting_r6.date, " ", meeting_r6.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Organiser: ", meeting_r6.organiser, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", meeting_r6.picPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r6.takenBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r6.profession);
} }
function NoticeComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticeComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showCompleteMeetinglist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meeting_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r9.topic);
} }
function NoticeComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticeComponent_li_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const class_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.routine(class_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class", class_r10, "");
} }
function NoticeComponent_div_18_p_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const routine_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](routine_r15.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", routine_r15.sub, "");
} }
function NoticeComponent_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoticeComponent_div_18_p_2_span_1_Template, 4, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r16 % 2 === 1);
} }
function NoticeComponent_div_18_p_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const routine_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](routine_r19.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", routine_r19.sub, "");
} }
function NoticeComponent_div_18_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoticeComponent_div_18_p_4_span_1_Template, 4, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 % 2 === 0);
} }
function NoticeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoticeComponent_div_18_p_2_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoticeComponent_div_18_p_4_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routineData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routineData);
} }
function NoticeComponent_div_19_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const routine_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](routine_r24.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", routine_r24.sub, "");
} }
function NoticeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoticeComponent_div_19_p_2_Template, 5, 2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.routineData);
} }
class NoticeComponent {
    constructor() {
        this.meetingDatas = [
            {
                topic: 'Today is something new',
                time: '10:00 am IST',
                date: '5 Sep 2020',
                description: 'HTMl, CSS',
                link: '',
                organiser: 'Chandan Singh',
                organiserNumber: '',
                takenBy: 'Saurabh Sunny',
                picPath: 'assets/profile.png',
                profession: 'Software Developer',
                number: '987654321'
            },
            {
                topic: 'Basic of web development',
                time: '10:00 am IST',
                date: '5 Sep 2020',
                description: 'HTMl, CSS',
                link: '',
                organiser: 'Chandan Singh',
                organiserNumber: '',
                takenBy: 'Saurabh Sunny',
                picPath: 'assets/profile.png',
                profession: 'Software Developer',
                number: '987654321'
            },
            {
                topic: 'Basic of web development',
                time: '10:00 am IST',
                date: '5 Sep 2020',
                description: 'HTMl, CSS',
                link: '',
                organiser: 'Chandan Singh',
                organiserNumber: '',
                takenBy: 'Saurabh Sunny',
                picPath: 'assets/profile.png',
                profession: 'Software Developer',
                number: '987654321'
            },
            {
                topic: 'Basic of web development',
                time: '10:00 am IST',
                date: '5 Sep 2020',
                description: 'HTMl, CSS',
                link: '',
                organiser: 'Chandan Singh',
                organiserNumber: '',
                takenBy: 'Saurabh Sunny',
                picPath: 'assets/profile.png',
                profession: 'Software Developer',
                number: '987654321'
            }
        ];
        this.routineClass10 = [
            {
                day: 'Mon',
                sub: 'Maths, Science'
            },
            {
                day: 'Tue',
                sub: 'Maths, Science'
            },
            {
                day: 'Wed',
                sub: 'Maths, Science'
            },
            {
                day: 'Thu',
                sub: 'Maths, Science'
            },
            {
                day: 'Fri',
                sub: 'Maths, Science'
            },
            {
                day: 'Sat',
                sub: 'Maths, 10'
            }
        ];
        this.routineClass9 = [
            {
                day: 'Mon',
                sub: 'Maths, Science'
            },
            {
                day: 'Tue',
                sub: 'Maths, Science'
            },
            {
                day: 'Wed',
                sub: 'Maths, Science'
            },
            {
                day: 'Thu',
                sub: 'Maths, Science'
            },
            {
                day: 'Fri',
                sub: 'Maths, Science'
            },
            {
                day: 'Sat',
                sub: 'Maths, 9'
            }
        ];
        this.routineClass8 = [
            {
                day: 'Mon',
                sub: 'Maths, Science'
            },
            {
                day: 'Tue',
                sub: 'Maths, Science'
            },
            {
                day: 'Wed',
                sub: 'Maths, Science'
            },
            {
                day: 'Thu',
                sub: 'Maths, Science'
            },
            {
                day: 'Fri',
                sub: 'Maths, Science'
            },
            {
                day: 'Sat',
                sub: 'Maths, 8'
            }
        ];
        this.routineClass7 = [
            {
                day: 'Mon',
                sub: 'Maths, Science'
            },
            {
                day: 'Tue',
                sub: 'Maths, Science'
            },
            {
                day: 'Wed',
                sub: 'Maths, Science'
            },
            {
                day: 'Thu',
                sub: 'Maths, Science'
            },
            {
                day: 'Fri',
                sub: 'Maths, Science'
            },
            {
                day: 'Sat',
                sub: 'Maths, 7'
            }
        ];
        this.classList = [10, 9, 8, 7];
        this.routineData = this.routineClass10;
        this.meetingData = [];
        this.onResize();
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
    }
    ngOnInit() {
        this.meetingData = this.meetingDatas.slice(0, 2);
        if (this.screenWidth < 450) {
            this.meetingData = this.meetingDatas.slice(0, 1);
        }
    }
    showCompleteMeetinglist() {
        this.meetingData = this.meetingDatas;
    }
    routine(cls) {
        if (cls === 10) {
            this.routineData = this.routineClass10;
        }
        else if (cls === 9) {
            this.routineData = this.routineClass9;
        }
        else if (cls === 8) {
            this.routineData = this.routineClass8;
        }
        else {
            this.routineData = this.routineClass7;
        }
    }
}
NoticeComponent.ɵfac = function NoticeComponent_Factory(t) { return new (t || NoticeComponent)(); };
NoticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticeComponent, selectors: [["app-notice"]], hostBindings: function NoticeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NoticeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 6, consts: [["id", "Notice", 1, "row", "mx-5", "mt-1", "align-center", "meeting-list", "rounded", "max-height"], [1, "card-header"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "show-more"], ["href", "#", 3, "click", 4, "ngIf"], [1, "notice-board", "mt-1", "max-height", "max-height-mobile"], [1, "border", "border-dark", "notice-max-height", "rounded"], [1, "border", "border-dark", "routine-max-height", "rounded", "mt-3"], [1, "mt-1", "rounded", "notice-max-height"], [1, "col-12", "px-0"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["class", "sub", 4, "ngIf"], [1, "col-12"], [1, "row", "border-bottom", "mx-3", "mt-2"], [1, "card", "col-md-8", "border-bottom", "border-0"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#!"], [1, "card", "col-md-4", "border-0"], [1, "profile-pic", 3, "src"], ["href", "#", 3, "click"], ["href", "#"], [1, "nav-item"], [1, "nav-link", "class-list", 3, "click"], [1, "sub"], [1, "routine"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function NoticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Recent Announcements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NoticeComponent_div_3_Template, 22, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NoticeComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " In Focus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NoticeComponent_div_10_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Routine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NoticeComponent_li_17_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NoticeComponent_div_18_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NoticeComponent_div_19_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meetingDatas.length > ctx.meetingData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetingDatas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenWidth > 750);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenWidth < 750);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".profile-pic[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  margin-bottom: .25rem;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: .25rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.max-height[_ngcontent-%COMP%] {\r\n  max-height: 361px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.notice-max-height[_ngcontent-%COMP%] {\r\n  max-height: 180px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.routine-max-height[_ngcontent-%COMP%] {\r\n  max-height: 175px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.meeting-list[_ngcontent-%COMP%] {\r\n  min-width: 60%;\r\n  border: solid 1px;\r\n  display: inline-block;\r\n}\r\n\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: gray;\r\n  border-radius: 20px;\r\n}\r\n\r\n.show-more[_ngcontent-%COMP%] {\r\n  margin-left: 3rem;\r\n}\r\n\r\n.notice-board[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n@media (max-width: 330px) {\r\n  .notice-board[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-left: 16%;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .class-list[_ngcontent-%COMP%] {\r\n    padding: 0.5rem .1rem !important;\r\n  }\r\n\r\n  .max-height-mobile[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n  }\r\n}\r\n\r\n@media (min-width: 330px) and (max-width: 380px) {\r\n  .notice-board[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    margin-left: 14%;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .meeting-list[_ngcontent-%COMP%] {\r\n    width: 82%;\r\n  }\r\n\r\n  .class-list[_ngcontent-%COMP%] {\r\n    padding: 0.5rem .25rem !important;\r\n  }\r\n\r\n  .max-height-mobile[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n  }\r\n\r\n  .routine-max-height[_ngcontent-%COMP%] {\r\n    max-height: 260px;\r\n  }\r\n\r\n  .notice-max-height[_ngcontent-%COMP%] {\r\n    max-height: 230px\r\n  }\r\n}\r\n\r\n@media (min-width: 380px) and (max-width: 450px) {\r\n  .notice-board[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    margin-left: 12%;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .class-list[_ngcontent-%COMP%] {\r\n    padding: 0.5rem !important;\r\n  }\r\n\r\n  .max-height-mobile[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n  }\r\n\r\n  .meeting-list[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n  }\r\n\r\n  .routine-max-height[_ngcontent-%COMP%] {\r\n    max-height: 260px;\r\n  }\r\n\r\n  .notice-max-height[_ngcontent-%COMP%] {\r\n    max-height: 230px\r\n  }\r\n}\r\n\r\n  .carousel-indicators li {\r\n  background-color: #5d4f4f;\r\n}\r\n\r\n  .carousel-control-prev-icon {\r\n  background-color: #5d4f4f;\r\n}\r\n\r\n  .carousel-control-next-icon {\r\n  background-color: #5d4f4f;\r\n}\r\n\r\n.routine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin-left: 12px;\r\n}\r\n\r\n@media (min-width: 780px)  and (max-width: 1050px ) {\r\n  .sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { width: 48%; }\r\n.sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) { float:left; }\r\n.sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) { float:right;}\r\n\r\n.meeting-list[_ngcontent-%COMP%] {\r\n  width: 56%;\r\n  }\r\n\r\n  .notice-board[_ngcontent-%COMP%] {\r\n    width: 29% !important;\r\n  }\r\n\r\n  .class-list[_ngcontent-%COMP%] {\r\n    padding: .5rem .3rem;\r\n  }\r\n\r\n  .routine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin-left: 8px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1050px) {\r\n  .sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { width: 48%; }\r\n.sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) { float:left; }\r\n.sub[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) { float:right;}\r\n  .routine[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin-left: 8px;\r\n  }\r\n\r\n  .meeting-list[_ngcontent-%COMP%] {\r\n    width: 56%;\r\n    }\r\n\r\n    .notice-board[_ngcontent-%COMP%] {\r\n      width: 29% !important;\r\n    }\r\n\r\n    .class-list[_ngcontent-%COMP%] {\r\n      padding: .5rem .7rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25vdGljZS9ub3RpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVcsVUFBVSxFQUFFO0FBQ3pCLHdCQUF3QixVQUFVLEVBQUU7QUFDcEMsd0JBQXdCLFdBQVcsQ0FBQzs7QUFFcEM7RUFDRSxVQUFVO0VBQ1Y7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXLFVBQVUsRUFBRTtBQUN6Qix3QkFBd0IsVUFBVSxFQUFFO0FBQ3BDLHdCQUF3QixXQUFXLENBQUM7RUFDbEM7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0Usb0JBQW9CO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbm90aWNlL25vdGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGljIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IC4yNXJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm1heC1oZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IDM2MXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5ub3RpY2UtbWF4LWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnJvdXRpbmUtbWF4LWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogMTc1cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1lZXRpbmctbGlzdCB7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uc2hvdy1tb3JlIHtcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuLm5vdGljZS1ib2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMzBweCkge1xyXG4gIC5ub3RpY2UtYm9hcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2xhc3MtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gLjFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXgtaGVpZ2h0LW1vYmlsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMzBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLm5vdGljZS1ib2FyZCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIC5tZWV0aW5nLWxpc3Qge1xyXG4gICAgd2lkdGg6IDgyJTtcclxuICB9XHJcblxyXG4gIC5jbGFzcy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAuMjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXgtaGVpZ2h0LW1vYmlsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5yb3V0aW5lLW1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgfVxyXG5cclxuICAubm90aWNlLW1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMjMwcHhcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5ub3RpY2UtYm9hcmQge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2xhc3MtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXgtaGVpZ2h0LW1vYmlsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tZWV0aW5nLWxpc3Qge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcblxyXG4gIC5yb3V0aW5lLW1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgfVxyXG5cclxuICAubm90aWNlLW1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMjMwcHhcclxuICB9XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDRmNGY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDRmNGY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDRmNGY7XHJcbn1cclxuXHJcbi5yb3V0aW5lIHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSAgYW5kIChtYXgtd2lkdGg6IDEwNTBweCApIHtcclxuICAuc3ViIGRpdiB7IHdpZHRoOiA0OCU7IH1cclxuLnN1YiBkaXY6bnRoLWNoaWxkKDEpIHsgZmxvYXQ6bGVmdDsgfVxyXG4uc3ViIGRpdjpudGgtY2hpbGQoMikgeyBmbG9hdDpyaWdodDt9XHJcblxyXG4ubWVldGluZy1saXN0IHtcclxuICB3aWR0aDogNTYlO1xyXG4gIH1cclxuXHJcbiAgLm5vdGljZS1ib2FyZCB7XHJcbiAgICB3aWR0aDogMjklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2xhc3MtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5yb3V0aW5lIHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcclxuICAuc3ViIGRpdiB7IHdpZHRoOiA0OCU7IH1cclxuLnN1YiBkaXY6bnRoLWNoaWxkKDEpIHsgZmxvYXQ6bGVmdDsgfVxyXG4uc3ViIGRpdjpudGgtY2hpbGQoMikgeyBmbG9hdDpyaWdodDt9XHJcbiAgLnJvdXRpbmUgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lZXRpbmctbGlzdCB7XHJcbiAgICB3aWR0aDogNTYlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpY2UtYm9hcmQge1xyXG4gICAgICB3aWR0aDogMjklICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsYXNzLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAuNXJlbSAuN3JlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notice',
                templateUrl: './notice.component.html',
                styleUrls: ['./notice.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/component/slidecard/slidecard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/slidecard/slidecard.component.ts ***!
  \************************************************************/
/*! exports provided: SlidecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidecardComponent", function() { return SlidecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



function SlidecardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlidecardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlidecardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SlidecardComponent {
    constructor() { }
    ngOnInit() {
    }
}
SlidecardComponent.ɵfac = function SlidecardComponent_Factory(t) { return new (t || SlidecardComponent)(); };
SlidecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlidecardComponent, selectors: [["app-slidecard"]], decls: 5, vars: 2, consts: [[1, "rounded", "slide-image", "mt-2", "mb-2"], ["interval", "4000", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["src", "assets/slide1.jpg", "alt", "Random first slide"], [1, "carousel-caption"], ["src", "assets/slide2.jfif", "alt", "Random first slide"], ["src", "assets/slide3.jfif", "alt", "Random first slide"]], template: function SlidecardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlidecardComponent_ng_template_2_Template, 7, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlidecardComponent_ng_template_3_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlidecardComponent_ng_template_4_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: ["img[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  width: 100%;\r\n}\r\n\r\n.slide-image[_ngcontent-%COMP%] {\r\n  padding-left: 3rem;\r\n  padding-right: 1rem;\r\n  border: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NsaWRlY2FyZC9zbGlkZWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zbGlkZWNhcmQvc2xpZGVjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidecardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slidecard',
                templateUrl: './slidecard.component.html',
                styleUrls: ['./slidecard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/student/student.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/student/student.component.ts ***!
  \********************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function StudentComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.title);
} }
function StudentComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r4.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.title);
} }
function StudentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.title);
} }
class StudentComponent {
    constructor() {
        this.class8 = [
            {
                name: 'Sunny kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'Srini kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            }
        ];
    }
    ngOnInit() {
    }
}
StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(); };
StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["app-student"]], decls: 34, vars: 3, consts: [["id", "Student", 1, "rounded"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "row", "px-5", "mt-1", "align-center"], [1, "col-sm-12", "col-md", "pl-2", "p-bottom-40"], ["id", "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "data-target", "#class8", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "btn", "btn-link"], ["id", "class8", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse"], [1, "row", "max-height"], ["class", "card-body col-sm-12 col-md-4", 4, "ngFor", "ngForOf"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#class9", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "collapsed"], ["id", "class9", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#class10", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "collapsed"], ["id", "class10", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"], [1, "card-body", "col-sm-12", "col-md-4"], [1, "row", "rounded", "border", "ml-2", "mr-2", "p-1"], [1, "col-3"], ["alt", "Card image cap", 1, "rounded-circle", "profie-pic", "pr-2", 3, "src"], [1, "col-9", "student-data"], [1, "card-title"], [1, "card-text"]], template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Class 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudentComponent_div_17_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Class 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StudentComponent_div_25_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Class 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StudentComponent_div_33_Template, 9, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.class8);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 68px;\r\n  height: 68px;\r\n}\r\n\r\n.max-height[_ngcontent-%COMP%] {\r\n    max-height: 350px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.student-data[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: .8rem;\r\n}\r\n\r\n@media (max-width: 350px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .p-1[_ngcontent-%COMP%] {\r\n    padding: 0rem;\r\n  }\r\n\r\n  .col-3[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .col-9[_ngcontent-%COMP%] {\r\n    padding-left: 8px;\r\n    padding-right: 0px;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin-bottom: 0rem;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 0.3rem 0.7rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 350px) and  (max-width: 450px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .p-1[_ngcontent-%COMP%] {\r\n    padding: 0rem;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin-bottom: 0rem;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: .35rem 1rem;\r\n  }\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiA2OHB4O1xyXG4gIGhlaWdodDogNjhweDtcclxufVxyXG5cclxuLm1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc3R1ZGVudC1kYXRhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IC44cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAucC0xIHtcclxuICAgIHBhZGRpbmc6IDByZW07XHJcbiAgfVxyXG5cclxuICAuY29sLTN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5jb2wtOSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnAtMSB7XHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogLjM1cmVtIDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucnVsZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student',
                templateUrl: './student.component.html',
                styleUrls: ['./student.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher/teacher.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/teacher/teacher.component.ts ***!
  \********************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TeacherComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
} }
class TeacherComponent {
    constructor() {
        this.data = [
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            },
            {
                name: 'saurabh kumar',
                path: 'assets/profile.png',
                title: 'maths, science',
                subtitle: 'other information',
                number: '987654321'
            }
        ];
    }
    ngOnInit() {
    }
}
TeacherComponent.ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(); };
TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["app-teacher"]], decls: 9, vars: 1, consts: [["id", "Teacher", 1, "rounded", "max-height"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "row", "px-5", "mt-1", "align-center"], ["class", "col-sm-12 col-md-3 pl-2  p-bottom-40", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-3", "pl-2", "p-bottom-40"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", "rounded-circle", "profie-pic", "pt-2", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Teacher's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeacherComponent_div_8_Template, 8, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".profie-pic[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.p-bottom-40[_ngcontent-%COMP%] {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n@media (max-width: 350px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    flex-direction: initial;\r\n    max-height: 80px;\r\n  }\r\n\r\n  .profie-pic[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .p-bottom-40[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  .max-height[_ngcontent-%COMP%] {\r\n    max-height: 400px;\r\n    background: gray;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 350px) and (max-width: 450px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    flex-direction: initial;\r\n    max-height: 95px;\r\n  }\r\n\r\n  .profie-pic[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n\r\n  .p-bottom-40[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  .max-height[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n    background: white;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpZS1waWMge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucC1ib3R0b20tNDAge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmllLXBpYyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnAtYm90dG9tLTQwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1heC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICBtYXgtaGVpZ2h0OiA5NXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpZS1waWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIC5wLWJvdHRvbS00MCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5tYXgtaGVpZ2h0IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnJ1bGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher',
                templateUrl: './teacher.component.html',
                styleUrls: ['./teacher.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\skumar\Documents\GMK\ninetyplus\ninetyplus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map