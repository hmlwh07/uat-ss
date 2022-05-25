"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mycalendar_mycalendar_module_ts"],{

/***/ 26522:
/*!*******************************************************!*\
  !*** ./src/app/pages/mycalendar/mycalendar.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCalendarModule": () => (/* binding */ MyCalendarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _mycalendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycalendar.component */ 44553);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar */ 29621);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-flatpickr */ 47173);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 29179);
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list/event-list.component */ 3836);














let MyCalendarModule = class MyCalendarModule {
};
MyCalendarModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
            // ActivityManagementListModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _mycalendar_component__WEBPACK_IMPORTED_MODULE_2__.MycalendarComponent,
                },
            ]),
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_11__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__.adapterFactory,
            }),
        ],
        declarations: [_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__.EventListComponent]
    })
], MyCalendarModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_mycalendar_mycalendar_module_ts.js.map