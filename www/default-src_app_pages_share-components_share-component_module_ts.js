"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_share-components_share-component_module_ts"],{

/***/ 93895:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/share-components/activity-item/activity-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityItemComponent": () => (/* binding */ ActivityItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-item.component.html?ngResource */ 69587);
/* harmony import */ var _activity_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-item.component.scss?ngResource */ 13251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-field.interface */ 60540);





let ActivityItemComponent = class ActivityItemComponent {
    constructor() {
        this.itemData = {};
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.eventType = _list_field_interface__WEBPACK_IMPORTED_MODULE_2__.ListActionType;
    }
    ngOnInit() { }
    actionBtn(event, type) {
        this.btnEvent.emit({ cmd: type, data: event });
    }
};
ActivityItemComponent.ctorParameters = () => [];
ActivityItemComponent.propDecorators = {
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ActivityItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-activity-item',
        template: _activity_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_activity_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityItemComponent);



/***/ }),

/***/ 9267:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/share-components/application-item/application-item.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationItemComponent": () => (/* binding */ ApplicationItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _application_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-item.component.html?ngResource */ 48539);
/* harmony import */ var _application_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-item.component.scss?ngResource */ 92081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-field.interface */ 60540);





let ApplicationItemComponent = class ApplicationItemComponent {
    constructor() {
        this.itemData = {};
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.eventType = _list_field_interface__WEBPACK_IMPORTED_MODULE_2__.ListActionType;
    }
    ngOnInit() {
    }
    actionBtn(event, type) {
        this.btnEvent.emit({ cmd: type, data: event });
    }
};
ApplicationItemComponent.ctorParameters = () => [];
ApplicationItemComponent.propDecorators = {
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ApplicationItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-application-item',
        template: _application_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_application_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApplicationItemComponent);



/***/ }),

/***/ 99140:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/share-components/common-list/common-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonList2Component": () => (/* binding */ CommonList2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _common_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-list.component.html?ngResource */ 6773);
/* harmony import */ var _common_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-list.component.scss?ngResource */ 22855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _static_pages_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/pager/pager.component */ 97966);





let CommonList2Component = class CommonList2Component {
    constructor(cdf) {
        this.cdf = cdf;
        this.responseListings = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // @Output('edit') edit = new EventEmitter()
        // @Output('delete') delete = new EventEmitter()
        // @Output('view') view = new EventEmitter()
        this.dataList = [];
        this.order = 'asc'; //ascending,descending
        // @Output() btnEvent?: EventEmitter<ListItemAction>;
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.selectedPageSize = 5;
        this.selectedPageBtn = 1;
        this.start = 0;
        this.end = 5;
    }
    ngOnInit() {
        this.listingargs = { direction: this.order, col: this.colField };
    }
    ngAfterViewInit() {
        this.cdf.detectChanges();
    }
    detchChange() {
        if (this.listpager) {
            this.listpager.prepareBtnArray();
        }
        this.cdf.detectChanges();
    }
    reponseFromPager(event) {
        this.selectedPageBtn = event.activePage;
        this.selectedPageSize = event.pageSize;
        this.start = (this.selectedPageBtn - 1) * this.selectedPageSize;
        this.end = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.dataList.length ?
            (this.selectedPageBtn * this.selectedPageSize) : this.dataList.length;
    }
    reponseFromAtom(obj) {
    }
    actionTrigger(event) {
        this.btnEvent.emit(event);
    }
};
CommonList2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
CommonList2Component.propDecorators = {
    responseListings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output, args: ['responseListings',] }],
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['data',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    colField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    listpager: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_static_pages_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.ListingsPagerComponent,] }]
};
CommonList2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-common-list-2',
        template: _common_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_common_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommonList2Component);



/***/ }),

/***/ 19393:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/share-components/customer-item/customer-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerItemComponent": () => (/* binding */ CustomerItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-item.component.html?ngResource */ 4240);
/* harmony import */ var _customer_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-item.component.scss?ngResource */ 71566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-field.interface */ 60540);





let CustomerItemComponent = class CustomerItemComponent {
    constructor() {
        this.itemData = {};
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.eventType = _list_field_interface__WEBPACK_IMPORTED_MODULE_2__.ListActionType;
    }
    ngOnInit() { }
    actionBtn(event, type) {
        this.btnEvent.emit({ cmd: type, data: event });
    }
};
CustomerItemComponent.ctorParameters = () => [];
CustomerItemComponent.propDecorators = {
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CustomerItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-customer-item',
        template: _customer_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customer_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerItemComponent);



/***/ }),

/***/ 24915:
/*!*************************************************************************!*\
  !*** ./src/app/pages/share-components/lead-item/lead-item.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadItemComponent": () => (/* binding */ LeadItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lead_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-item.component.html?ngResource */ 87399);
/* harmony import */ var _lead_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead-item.component.scss?ngResource */ 92431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-field.interface */ 60540);





let LeadItemComponent = class LeadItemComponent {
    constructor() {
        this.itemData = {};
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.eventType = _list_field_interface__WEBPACK_IMPORTED_MODULE_2__.ListActionType;
    }
    ngOnInit() { }
    actionBtn(event, type) {
        this.btnEvent.emit({ cmd: type, data: event });
    }
};
LeadItemComponent.ctorParameters = () => [];
LeadItemComponent.propDecorators = {
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
LeadItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lead-item',
        template: _lead_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lead_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeadItemComponent);



/***/ }),

/***/ 60540:
/*!****************************************************************!*\
  !*** ./src/app/pages/share-components/list-field.interface.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListActionType": () => (/* binding */ ListActionType)
/* harmony export */ });
var ListActionType;
(function (ListActionType) {
    ListActionType["EDIT"] = "edit";
    ListActionType["DELETE"] = "delete";
    ListActionType["VIEW"] = "view";
})(ListActionType || (ListActionType = {}));


/***/ }),

/***/ 10185:
/*!*************************************************************!*\
  !*** ./src/app/pages/share-components/listing-directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingDirective": () => (/* binding */ ListingDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-item/activity-item.component */ 93895);
/* harmony import */ var _application_item_application_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-item/application-item.component */ 9267);
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-item/customer-item.component */ 19393);
/* harmony import */ var _lead_item_lead_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-item/lead-item.component */ 24915);
/* harmony import */ var _quotation_item_quotation_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotation-item/quotation-item.component */ 13073);







const LIST_ITEM_COMPONENT = {
    lead: _lead_item_lead_item_component__WEBPACK_IMPORTED_MODULE_3__.LeadItemComponent,
    policy: _application_item_application_item_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationItemComponent,
    quotat: _quotation_item_quotation_item_component__WEBPACK_IMPORTED_MODULE_4__.QuotationItemComponent,
    customer: _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_2__.CustomerItemComponent,
    activity: _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_0__.ActivityItemComponent,
};
let ListingDirective = class ListingDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
        this.itemData = {};
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.unsub = [];
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        const component = this.resolver.resolveComponentFactory(LIST_ITEM_COMPONENT[this.viewType]);
        this.component = this.container.createComponent(component);
        this.component.instance.itemData = this.itemData;
        this.unsub[0] = this.component.instance.btnEvent.subscribe((eventData) => {
            this.clickedEvent(eventData);
        });
    }
    clickedEvent(event) {
        this.btnEvent.emit(event);
    }
};
ListingDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef }
];
ListingDirective.propDecorators = {
    viewType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
ListingDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Directive)({
        selector: '[listDirective]'
    })
], ListingDirective);



/***/ }),

/***/ 12310:
/*!*************************************************************!*\
  !*** ./src/app/pages/share-components/listing-sort.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingSortPipe": () => (/* binding */ ListingSortPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ListingSortPipe = class ListingSortPipe {
    transform(items, direction, field) {
        if (!items || !direction || field) {
            return items;
        }
        else {
            let sortedItems = items;
            sortedItems = sortedItems.sort((n1, n2) => {
                if (n1[field] > n2[field]) {
                    return 1;
                }
                if (n1[field] < n2[field]) {
                    return -1;
                }
                return 0;
            });
            return sortedItems;
        }
    }
};
ListingSortPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dataSort'
    })
], ListingSortPipe);



/***/ }),

/***/ 13073:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/share-components/quotation-item/quotation-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationItemComponent": () => (/* binding */ QuotationItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quotation_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotation-item.component.html?ngResource */ 91403);
/* harmony import */ var _quotation_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation-item.component.scss?ngResource */ 68835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-field.interface */ 60540);





let QuotationItemComponent = class QuotationItemComponent {
    constructor() {
        this.btnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.eventType = _list_field_interface__WEBPACK_IMPORTED_MODULE_2__.ListActionType;
    }
    ngOnInit() {
        console.log('itemData', this.itemData);
    }
    actionBtn(event, type) {
        this.btnEvent.emit({ cmd: type, data: event });
    }
};
QuotationItemComponent.ctorParameters = () => [];
QuotationItemComponent.propDecorators = {
    itemData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
QuotationItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-quotation-item',
        template: _quotation_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quotation_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuotationItemComponent);



/***/ }),

/***/ 94142:
/*!******************************************************************!*\
  !*** ./src/app/pages/share-components/share-component.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareComponentModule": () => (/* binding */ ShareComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/nrc-popup/nrc-popup.page */ 42675);
/* harmony import */ var _static_pages_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-pages/pager/pager.component */ 97966);
/* harmony import */ var _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-item/activity-item.component */ 93895);
/* harmony import */ var _application_item_application_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-item/application-item.component */ 9267);
/* harmony import */ var _common_list_common_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-list/common-list.component */ 99140);
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-item/customer-item.component */ 19393);
/* harmony import */ var _lead_item_lead_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lead-item/lead-item.component */ 24915);
/* harmony import */ var _listing_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listing-directive */ 10185);
/* harmony import */ var _listing_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing-sort.pipe */ 12310);
/* harmony import */ var _quotation_item_quotation_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quotation-item/quotation-item.component */ 13073);


















let ShareComponentModule = class ShareComponentModule {
    // @Optional() @SkipSelf() parentModule: CustomerListShareModule
    constructor() {
        // throwIfAlreadyLoaded(parentModule, 'CustomerListShareModule')
    }
};
ShareComponentModule.ctorParameters = () => [];
ShareComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _listing_sort_pipe__WEBPACK_IMPORTED_MODULE_9__.ListingSortPipe,
            _listing_directive__WEBPACK_IMPORTED_MODULE_8__.ListingDirective,
            _lead_item_lead_item_component__WEBPACK_IMPORTED_MODULE_7__.LeadItemComponent,
            _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_3__.ActivityItemComponent,
            _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_6__.CustomerItemComponent,
            _application_item_application_item_component__WEBPACK_IMPORTED_MODULE_4__.ApplicationItemComponent,
            _quotation_item_quotation_item_component__WEBPACK_IMPORTED_MODULE_10__.QuotationItemComponent,
            _common_list_common_list_component__WEBPACK_IMPORTED_MODULE_5__.CommonList2Component,
            _static_pages_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.ListingsPagerComponent,
            _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_1__.NrcPopupPage,
        ],
        exports: [
            _listing_sort_pipe__WEBPACK_IMPORTED_MODULE_9__.ListingSortPipe,
            _listing_directive__WEBPACK_IMPORTED_MODULE_8__.ListingDirective,
            _lead_item_lead_item_component__WEBPACK_IMPORTED_MODULE_7__.LeadItemComponent,
            _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_3__.ActivityItemComponent,
            _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_6__.CustomerItemComponent,
            _application_item_application_item_component__WEBPACK_IMPORTED_MODULE_4__.ApplicationItemComponent,
            _quotation_item_quotation_item_component__WEBPACK_IMPORTED_MODULE_10__.QuotationItemComponent,
            _common_list_common_list_component__WEBPACK_IMPORTED_MODULE_5__.CommonList2Component,
            _static_pages_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.ListingsPagerComponent,
            _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_1__.NrcPopupPage
        ],
        entryComponents: [
            _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_1__.NrcPopupPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModalModule,
            // FormComponentModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_0__.LanguageModule
        ],
        providers: []
    })
], ShareComponentModule);



/***/ }),

/***/ 97966:
/*!*************************************************************!*\
  !*** ./src/app/pages/static-pages/pager/pager.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingsPagerComponent": () => (/* binding */ ListingsPagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.component.html?ngResource */ 92263);
/* harmony import */ var _pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pager.component.scss?ngResource */ 20734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ListingsPagerComponent = class ListingsPagerComponent {
    constructor(cdf) {
        this.cdf = cdf;
        this.activePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.sourceData = [];
        this.displayBtnCount = 3;
        this.pageSizeArray = [5, 10, 15];
        this.selectedPageSize = 5;
        this.viewPageButtonArray = [];
        this.responseData = [];
    }
    ngOnInit() {
        if (this.sourceData.length > 0)
            this.prepareBtnArray();
    }
    prepareBtnArray() {
        this.no_of_pages = this.sourceData.length % this.selectedPageSize == 0 ?
            Math.floor(this.sourceData.length / this.selectedPageSize) :
            Math.floor(this.sourceData.length / this.selectedPageSize) + 1;
        this.selectedPageBtn = this.startPageIndex = 1;
        this.showingListCnt();
        this.setPageBtnArray();
    }
    showingListCnt() {
        let count = this.selectedPageBtn * this.selectedPageSize;
        this.started = count - this.selectedPageSize + 1;
        this.endPageIndex = count > this.sourceData.length ? this.sourceData.length : count;
    }
    ngAfterViewInit() {
        this.cdf.detectChanges();
    }
    ngOnDestroy() {
        this.activePage.unsubscribe();
    }
    clickMenuItem(pageSize) {
        this.selectedPageSize = pageSize;
        this.prepareBtnArray();
    }
    pageBtnClicked(btn) {
        this.selectedPageBtn = btn;
        this.calPageBtn();
        //this.prepareCalDataRows(this.selectedPageBtn);
    }
    pageIncreased() {
        this.selectedPageBtn = this.selectedPageBtn == this.no_of_pages ? this.no_of_pages : this.selectedPageBtn + 1;
        //this.prepareCalDataRows(this.selectedPageBtn);
        this.calPageBtn();
    }
    pageDecresed() {
        this.selectedPageBtn = this.selectedPageBtn == 1 ? 1 : this.selectedPageBtn - 1;
        //this.prepareCalDataRows(this.selectedPageBtn);
        this.calPageBtn();
    }
    pageFirst() {
        this.selectedPageBtn = 1;
        // this.prepareCalDataRows(this.selectedPageBtn);
        this.calPageBtn();
    }
    pageLast() {
        this.selectedPageBtn = this.no_of_pages;
        //this.prepareCalDataRows(this.selectedPageBtn);
        this.calPageBtn();
    }
    setPageBtnArray() {
        this.viewPageButtonArray = [];
        for (let i = 0; i < this.displayBtnCount; i++) {
            if (this.startPageIndex + i <= this.no_of_pages)
                this.viewPageButtonArray.push(this.startPageIndex + i);
        }
        this.cdf.detectChanges();
        this.activePage.emit({ activePage: this.selectedPageBtn, pageSize: this.selectedPageSize });
    }
    calPageBtn() {
        this.startPageIndex = this.selectedPageBtn == 1 ? this.selectedPageBtn : this.selectedPageBtn - 1;
        // this.endPageIndex = this.selectedPageBtn == this.no_of_pages ? this.selectedPageBtn : this.selectedPageBtn + 1;
        this.showingListCnt();
        this.setPageBtnArray();
        // let remainder = this.selectedPageBtn % this.displayBtnCount;
        // if(remainder == 0){
        //   this.startPageIndex = (this.selectedPageBtn - this.displayBtnCount) + 1;
        //   this.endPageIndex = ((this.startPageIndex + this.displayBtnCount) - 1) < this.no_of_pages?
        //   (this.startPageIndex + this.displayBtnCount) - 1 : this.no_of_pages;
        // }else if(remainder > 0){
        //   this.startPageIndex = (this.selectedPageBtn - remainder) + 1;
        //   this.endPageIndex = ((this.startPageIndex + this.displayBtnCount) - 1) < this.no_of_pages?
        //   (this.startPageIndex + this.displayBtnCount) - 1 : this.no_of_pages;
        // }
    }
    calDataRows(start, end) {
        this.responseData = [];
        let count = end < ((start + this.selectedPageSize) - 1) ? (end - start + 1) : this.selectedPageSize;
        for (let i = 0; i < count; i++) {
            if (start + i <= end)
                this.responseData.push(this.sourceData[start + i]);
        }
    }
};
ListingsPagerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
ListingsPagerComponent.propDecorators = {
    activePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ['activePage',] }],
    sourceData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    formType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ListingsPagerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-pager',
        template: _pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        styles: [_pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListingsPagerComponent);



/***/ }),

/***/ 59421:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_MENU_CONTENT": () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   "MAT_MENU_DEFAULT_OPTIONS": () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   "MAT_MENU_PANEL": () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   "MAT_MENU_SCROLL_STRATEGY": () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   "MatMenu": () => (/* binding */ MatMenu),
/* harmony export */   "MatMenuContent": () => (/* binding */ MatMenuContent),
/* harmony export */   "MatMenuItem": () => (/* binding */ MatMenuItem),
/* harmony export */   "MatMenuModule": () => (/* binding */ MatMenuModule),
/* harmony export */   "MatMenuTrigger": () => (/* binding */ MatMenuTrigger),
/* harmony export */   "_MatMenuBase": () => (/* binding */ _MatMenuBase),
/* harmony export */   "_MatMenuDirectivesModule": () => (/* binding */ _MatMenuDirectivesModule),
/* harmony export */   "fadeInItems": () => (/* binding */ fadeInItems),
/* harmony export */   "matMenuAnimations": () => (/* binding */ matMenuAnimations),
/* harmony export */   "transformMenu": () => (/* binding */ transformMenu),
/* harmony export */   "ɵangular_material_src_material_menu_menu_a": () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "ɵangular_material_src_material_menu_menu_b": () => (/* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "ɵangular_material_src_material_menu_menu_c": () => (/* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ 75939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 69672);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 */







const _c0 = ["mat-menu-item", ""];
const _c1 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._handleKeydown($event); })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closed.emit("click"); })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4._onAnimationStart($event); })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5._onAnimationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
} }
const matMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformMenu', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 1,
            transform: 'scale(1)'
        }))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 1 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const transformMenu = matMenuAnimations.transformMenu;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
class MatMenuContent {
    constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the menu content has been attached. */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
        // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
        // by Angular. This causes the `@ContentChildren` for menu items within the menu to
        // not be updated by Angular. By explicitly marking for check here, we tell Angular that
        // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
        // @breaking-change 9.0.0 Make change detector ref required
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
        this._portal.attach(this._outlet, context);
        this._attached.next();
    }
    /**
     * Detaches the content.
     * @docs-private
     */
    detach() {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    }
    ngOnDestroy() {
        if (this._outlet) {
            this._outlet.dispose();
        }
    }
}
MatMenuContent.ɵfac = function MatMenuContent_Factory(t) { return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatMenuContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatMenuContent, selectors: [["ng-template", "matMenuContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }])] });
MatMenuContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matMenuContent]',
                providers: [{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * @docs-private
 */
function throwMatMenuMissingError() {
    throw Error(`matMenuTriggerFor: must pass in an mat-menu instance.

    Example:
      <mat-menu #menu="matMenu"></mat-menu>
      <button [matMenuTriggerFor]="menu"></button>`);
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
function throwMatMenuInvalidPositionX() {
    throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
function throwMatMenuInvalidPositionY() {
    throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
function throwMatMenuRecursiveError() {
    throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` +
        `not a parent of the trigger or move the trigger outside of the menu.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
const MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatMenuItem.
/** @docs-private */
class MatMenuItemBase {
}
const _MatMenuItemMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)(MatMenuItemBase));
/**
 * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
class MatMenuItem extends _MatMenuItemMixinBase {
    constructor(_elementRef, 
    /**
     * @deprecated `_document` parameter is no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _focusMonitor, _parentMenu) {
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        super();
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._parentMenu = _parentMenu;
        /** ARIA role for the menu item. */
        this.role = 'menuitem';
        /** Stream that emits when the menu item is hovered. */
        this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Stream that emits when the menu item is focused. */
        this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Whether the menu item is highlighted. */
        this._highlighted = false;
        /** Whether the menu item acts as a trigger for a sub-menu. */
        this._triggersSubmenu = false;
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(this);
        }
    }
    /** Focuses the menu item. */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    }
    ngAfterViewInit() {
        if (this._focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            this._focusMonitor.monitor(this._elementRef, false);
        }
    }
    ngOnDestroy() {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /** Returns the host DOM element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        var _a, _b;
        const clone = this._elementRef.nativeElement.cloneNode(true);
        const icons = clone.querySelectorAll('mat-icon, .material-icons');
        // Strip away icons so they don't show up in the text.
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
        }
        return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
    }
}
MatMenuItem.ɵfac = function MatMenuItem_Factory(t) { return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8)); };
MatMenuItem.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMenuItem, selectors: [["", "mat-menu-item", ""]], hostAttrs: [1, "mat-focus-indicator"], hostVars: 10, hostBindings: function MatMenuItem_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) { return ctx._checkDisabled($event); })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() { return ctx._handleMouseEnter(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, exportAs: ["matMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]], template: function MatMenuItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple], encapsulation: 2, changeDetection: 0 });
MatMenuItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMenuItem.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _checkDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }],
    _handleMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[mat-menu-item]',
                exportAs: 'matMenuItem',
                inputs: ['disabled', 'disableRipple'],
                host: {
                    '[attr.role]': 'role',
                    '[class.mat-menu-item]': 'true',
                    '[class.mat-menu-item-highlighted]': '_highlighted',
                    '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.disabled]': 'disabled || null',
                    'class': 'mat-focus-indicator'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], 
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * @docs-private
 */
const MAT_MENU_BASE_ELEVATION = 4;
let menuPanelUid = 0;
/** Base class with all of the `MatMenu` functionality. */
class _MatMenuBase {
    constructor(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /** Only the direct descendant menu items. */
        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        /** Subscription to tab events on the menu panel */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        /** Current state of the panel animation. */
        this._panelAnimationState = 'void';
        /** Emits whenever an animation on the menu completes. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Class or list of classes to be added to the overlay panel. */
        this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
        /** Class to be added to the backdrop element. */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /** Event emitted when the menu is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * @breaking-change 8.0.0
         */
        this.close = this.closed;
        this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    }
    /** Position of the menu in the X axis. */
    get xPosition() { return this._xPosition; }
    set xPosition(value) {
        if (value !== 'before' && value !== 'after' &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() { return this._yPosition; }
    set yPosition(value) {
        if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    /** Whether the menu should overlap its trigger. */
    get overlapTrigger() { return this._overlapTrigger; }
    set overlapTrigger(value) {
        this._overlapTrigger = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
    }
    /** Whether the menu has a backdrop. */
    get hasBackdrop() { return this._hasBackdrop; }
    set hasBackdrop(value) {
        this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach((className) => {
                this._classList[className] = false;
            });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(' ').forEach((className) => {
                this._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
        }
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList() { return this.panelClass; }
    set classList(classes) { this.panelClass = classes; }
    ngOnInit() {
        this.setPositionClasses();
    }
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusKeyManager(this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd();
        this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
        // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
        // change back to the key manager. Note that we don't need to unsubscribe here because _focused
        // is internal and we know that it gets completed on destroy.
        this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map((item) => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
    }
    ngOnDestroy() {
        this._directDescendantItems.destroy();
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    }
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered() {
        // Coerce the `changes` property because Angular types it as `Observable<any>`
        const itemChanges = this._directDescendantItems.changes;
        return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map((item) => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) { }
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) { }
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ESCAPE:
                if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.hasModifierKey)(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.DOWN_ARROW) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
        }
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1))
                .subscribe(() => this._focusFirstItem(origin));
        }
        else {
            this._focusFirstItem(origin);
        }
    }
    /**
     * Actual implementation that focuses the first item. Needs to be separated
     * out so we don't repeat the same logic in the public `focusFirstItem` method.
     */
    _focusFirstItem(origin) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menu panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.
        if (!manager.activeItem && this._directDescendantItems.length) {
            let element = this._directDescendantItems.first._getHostElement().parentElement;
            // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.
            while (element) {
                if (element.getAttribute('role') === 'menu') {
                    element.focus();
                    break;
                }
                else {
                    element = element.parentElement;
                }
            }
        }
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem() {
        this._keyManager.setActiveItem(-1);
    }
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    setElevation(depth) {
        // The elevation starts at the base and increases by one for each level.
        // Capped at 24 because that's the maximum elevation defined in the Material design spec.
        const elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
        const newElevation = `mat-elevation-z${elevation}`;
        const customElevation = Object.keys(this._classList).find(c => c.startsWith('mat-elevation-z'));
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    }
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        const classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    }
    /** Starts the enter animation. */
    _startAnimation() {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    }
    /** Resets the panel animation to its initial state. */
    _resetAnimation() {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    }
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(event) {
        this._animationDone.next(event);
        this._isAnimating = false;
    }
    _onAnimationStart(event) {
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    _updateDirectDescendants() {
        this._allItems.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._allItems))
            .subscribe((items) => {
            this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
            this._directDescendantItems.notifyOnChanges();
        });
    }
}
_MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) { return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
_MatMenuBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatMenuBase, contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function _MatMenuBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { backdropClass: "backdropClass", xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: ["class", "panelClass"], classList: "classList", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { closed: "closed", close: "close" } });
_MatMenuBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
_MatMenuBase.propDecorators = {
    _allItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatMenuItem, { descendants: true },] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-describedby',] }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatMenuItem, { descendants: false },] }],
    lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_MENU_CONTENT,] }],
    overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class',] }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatMenuItem, { descendants: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatMenuItem, { descendants: false }]
        }], lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_MENU_CONTENT]
        }] }); })();
/** @docs-public MatMenu */
class MatMenu extends _MatMenuBase {
    constructor(elementRef, ngZone, defaultOptions) {
        super(elementRef, ngZone, defaultOptions);
    }
}
MatMenu.ɵfac = function MatMenu_Factory(t) { return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
MatMenu.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMenu, selectors: [["mat-menu"]], hostVars: 3, hostBindings: function MatMenu_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    } }, exportAs: ["matMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: MAT_MENU_PANEL, useExisting: MatMenu },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]], template: function MatMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, data: { animation: [
            matMenuAnimations.transformMenu,
            matMenuAnimations.fadeInItems
        ] }, changeDetection: 0 });
MatMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-menu',
                template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matMenu',
                host: {
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null'
                },
                animations: [
                    matMenuAnimations.transformMenu,
                    matMenuAnimations.fadeInItems
                ],
                providers: [
                    { provide: MAT_MENU_PANEL, useExisting: MatMenu },
                ],
                styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy');
/** @docs-private */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/** Default top padding of the menu panel. */
const MENU_PANEL_TOP_PADDING = 8;
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__.normalizePassiveListenerOptions)({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/** Directive applied to an element that should trigger a `mat-menu`. */
class MatMenuTrigger {
    constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, 
    // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
    // tslint:disable-next-line: lightweight-tokens
    _menuItemInstance, _dir, 
    // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
    // @breaking-change 8.0.0
    _focusMonitor) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = (event) => {
            if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeTouchstartFromScreenReader)(event)) {
                this._openedBy = 'touch';
            }
        };
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = undefined;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /** Event emitted when the associated menu is opened. */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * @breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /** Event emitted when the associated menu is closed. */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * @breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuClose = this.menuClosed;
        this._scrollStrategy = scrollStrategy;
        this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : undefined;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
    }
    /**
     * @deprecated
     * @breaking-change 8.0.0
     */
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
    }
    /** References the menu instance that the trigger is associated with. */
    get menu() { return this._menu; }
    set menu(menu) {
        if (menu === this._menu) {
            return;
        }
        this._menu = menu;
        this._menuCloseSubscription.unsubscribe();
        if (menu) {
            if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuRecursiveError();
            }
            this._menuCloseSubscription = menu.close.subscribe((reason) => {
                this._destroyMenu(reason);
                // If a click closed the menu, we should close the entire chain of nested menus.
                if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
                    this._parentMaterialMenu.closed.emit(reason);
                }
            });
        }
    }
    ngAfterContentInit() {
        this._checkMenu();
        this._handleHover();
    }
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    }
    /** Whether the menu is open. */
    get menuOpen() {
        return this._menuOpen;
    }
    /** The text direction of the containing app. */
    get dir() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the menu triggers a sub-menu or a top-level one. */
    triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMaterialMenu);
    }
    /** Toggles the menu between the open and closed states. */
    toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /** Opens the menu. */
    openMenu() {
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        const overlayRef = this._createOverlay();
        const overlayConfig = overlayRef.getConfig();
        this._setPosition(overlayConfig.positionStrategy);
        overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
            this.menu.hasBackdrop;
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
        this._initMenu();
        if (this.menu instanceof _MatMenuBase) {
            this.menu._startAnimation();
        }
    }
    /** Closes the menu. */
    closeMenu() {
        this.menu.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    /** Closes the menu and does the necessary cleanup. */
    _destroyMenu(reason) {
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        const menu = this.menu;
        this._closingActionsSubscription.unsubscribe();
        this._overlayRef.detach();
        // Always restore focus if the user is navigating using the keyboard or the menu was opened
        // programmatically. We don't restore for non-root triggers, because it can prevent focus
        // from making it back to the root trigger when closing a long chain of menus by clicking
        // on the backdrop.
        if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
            this.focus(this._openedBy);
        }
        this._openedBy = undefined;
        if (menu instanceof _MatMenuBase) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(event => event.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), 
                // Interrupt if the content got re-attached.
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(menu.lazyContent._attached))
                    .subscribe({
                    next: () => menu.lazyContent.detach(),
                    // No matter whether the content got re-attached, reset the menu.
                    complete: () => this._setIsMenuOpen(false)
                });
            }
            else {
                this._setIsMenuOpen(false);
            }
        }
        else {
            this._setIsMenuOpen(false);
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    _initMenu() {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this.menu.focusFirstItem(this._openedBy || 'program');
        this._setIsMenuOpen(true);
    }
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    _setMenuElevation() {
        if (this.menu.setElevation) {
            let depth = 0;
            let parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    }
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     */
    _checkMenu() {
        if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuMissingError();
        }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay() {
        if (!this._overlayRef) {
            const config = this._getOverlayConfig();
            this._subscribeToPositions(config.positionStrategy);
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    _getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withGrowAfterOpen()
                .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            panelClass: this.menu.overlayPanelClass,
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(position) {
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(change => {
                const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                this.menu.setPositionClasses(posX, posY);
            });
        }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    _setPosition(positionStrategy) {
        let [originX, originFallbackX] = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        let [overlayY, overlayFallbackY] = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        let offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX, originY, overlayX, overlayY, offsetY },
            { originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY },
            {
                originX,
                originY: originFallbackY,
                overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    }
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    _menuClosingActions() {
        const backdrop = this._overlayRef.backdropClick();
        const detachments = this._overlayRef.detachments();
        const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
        const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(active => active !== this._menuItemInstance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this._menuOpen)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(backdrop, parentClose, hover, detachments);
    }
    /** Handles mouse presses on the trigger. */
    _handleMousedown(event) {
        if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeMousedownFromScreenReader)(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : undefined;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    }
    /** Handles key presses on the trigger. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Pressing enter on the trigger will trigger the click handler later.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.SPACE) {
            this._openedBy = 'keyboard';
        }
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW && this.dir === 'rtl'))) {
            this._openedBy = 'keyboard';
            this.openMenu();
        }
    }
    /** Handles click events on the trigger. */
    _handleClick(event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    }
    /** Handles the cases where the user hovers over the trigger. */
    _handleHover() {
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
            return;
        }
        this._hoverSubscription = this._parentMaterialMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(active => active === this._menuItemInstance && !active.disabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asapScheduler))
            .subscribe(() => {
            this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (this.menu instanceof _MatMenuBase && this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                this.menu._animationDone
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._parentMaterialMenu._hovered()))
                    .subscribe(() => this.openMenu());
            }
            else {
                this.openMenu();
            }
        });
    }
    /** Gets the portal that should be attached to the overlay. */
    _getPortal() {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    }
}
MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) { return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor)); };
MatMenuTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatMenuTrigger, selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]], hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"], hostVars: 2, hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) { return ctx._handleMousedown($event); })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("click", function MatMenuTrigger_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    } }, inputs: { restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"], _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: ["matMenuTriggerFor", "menu"], menuData: ["matMenuTriggerData", "menuData"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, exportAs: ["matMenuTrigger"] });
MatMenuTrigger.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }
];
MatMenuTrigger.propDecorators = {
    _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['mat-menu-trigger-for',] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerFor',] }],
    menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerData',] }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matMenuTriggerRestoreFocus',] }],
    menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
                host: {
                    'class': 'mat-menu-trigger',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'menuOpen || null',
                    '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
                    '(mousedown)': '_handleMousedown($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'matMenuTrigger'
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_SCROLL_STRATEGY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: MatMenuItem, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor }]; }, { restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerRestoreFocus']
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mat-menu-trigger-for']
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerFor']
        }], menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matMenuTriggerData']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
class _MatMenuDirectivesModule {
}
_MatMenuDirectivesModule.ɵfac = function _MatMenuDirectivesModule_Factory(t) { return new (t || _MatMenuDirectivesModule)(); };
_MatMenuDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: _MatMenuDirectivesModule });
_MatMenuDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule],
                declarations: [
                    MatMenuTrigger,
                    MatMenuContent,
                ],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, { declarations: function () { return [MatMenuTrigger, MatMenuContent]; }, exports: function () { return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]; } }); })();
class MatMenuModule {
}
MatMenuModule.ɵfac = function MatMenuModule_Factory(t) { return new (t || MatMenuModule)(); };
MatMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatMenuModule });
MatMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule,
            _MatMenuDirectivesModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _MatMenuDirectivesModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule,
                    _MatMenuDirectivesModule,
                ],
                exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                declarations: [MatMenu, MatMenuItem],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatMenuModule, { declarations: function () { return [MatMenu, MatMenuItem]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _MatMenuDirectivesModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatMenu, MatMenuItem, _MatMenuDirectivesModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 13251:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/share-components/activity-item/activity-item.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 92081:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/share-components/application-item/application-item.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 22855:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/share-components/common-list/common-list.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".pager {\n  width: 100%;\n  padding-top: 15px;\n}\n\n.pager_atom {\n  margin-right: 15px;\n  margin-top: 10px;\n  float: left;\n}\n\n.pager_atom_btn {\n  margin-right: 15px;\n}\n\n.right {\n  float: right;\n  margin-bottom: 15px;\n}\n\n.pager_btn_wrapper {\n  display: flex;\n}\n\n.mr_15 {\n  margin-right: 15px;\n}\n\n.mt_10 {\n  margin-top: 10px;\n}\n\n.common_btn, .pager_primary_btn_selected, .pager_primary_btn {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0px 0px 15px;\n  cursor: pointer;\n}\n\n.pager_primary_btn {\n  background-color: #005f99;\n  color: #FFF;\n}\n\n.pager_primary_btn_selected {\n  background-color: #ff8100;\n  color: #FFF;\n}\n\n.pager_icon {\n  width: 24px;\n}\n\n.ml-30 {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY29tbW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXJ7XG4gICAgd2lkdGggOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ucGFnZXJfYXRvbXtcbiAgICBtYXJnaW4tcmlnaHQgOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZmxvYXQgOiBsZWZ0O1xufVxuXG4ucGFnZXJfYXRvbV9idG57XG4gICAgbWFyZ2luLXJpZ2h0IDogMTVweDtcbn1cblxuLnJpZ2h0e1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucGFnZXJfYnRuX3dyYXBwZXJ7XG4gICAgZGlzcGxheSA6IGZsZXg7XG59XG5cbi5tcl8xNXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tdF8xMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNvbW1vbl9idG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2VyX3ByaW1hcnlfYnRue1xuICAgIEBleHRlbmQgLmNvbW1vbl9idG47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5OTtcbiAgICBjb2xvciA6ICNGRkY7XG59XG5cbi5wYWdlcl9wcmltYXJ5X2J0bl9zZWxlY3RlZHtcbiAgICBAZXh0ZW5kIC5jb21tb25fYnRuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMDA7XG4gICAgY29sb3IgOiAjRkZGO1xufVxuXG4ucGFnZXJfaWNvbntcbiAgICB3aWR0aCA6IDI0cHg7XG59XG5cbi5tbC0zMHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 71566:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/share-components/customer-item/customer-item.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 92431:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/share-components/lead-item/lead-item.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 68835:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/share-components/quotation-item/quotation-item.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90YXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 20734:
/*!**************************************************************************!*\
  !*** ./src/app/pages/static-pages/pager/pager.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".pager {\n  width: 100%;\n  padding-top: 15px;\n}\n\n.pager_atom {\n  margin: 6px 15px 0px 0px;\n}\n\n.pager_atom_btn {\n  margin-right: 15px;\n}\n\n.right {\n  float: right;\n}\n\n.pager_btn_wrapper {\n  display: flex;\n}\n\n.mr_15 {\n  margin-right: 15px;\n}\n\n.mt_5 {\n  margin-top: 5px;\n}\n\n.common_btn, .pager_primary_btn_selected, .pager_primary_btn {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  vertical-align: middle;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.pager_primary_btn {\n  background-color: #005f99;\n  color: #FFF;\n}\n\n.pager_primary_btn_selected {\n  background-color: #00acea;\n  color: #FFF;\n}\n\n.pager_icon {\n  width: 32px !important;\n  cursor: pointer;\n  margin-top: 4px;\n}\n\n.ml_15 {\n  margin-left: 15px;\n}\n\n.ml_30 {\n  margin-left: 30px;\n}\n\n.menu_bg {\n  background-color: inherit;\n}\n\n.mb_10 {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSx3QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREoiLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnBhZ2Vye1xuICAgIHdpZHRoIDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnBhZ2VyX2F0b217XG4gICAgbWFyZ2luOiA2cHggMTVweCAwcHggMHB4O1xufVxuXG4ucGFnZXJfYXRvbV9idG57XG4gICAgbWFyZ2luLXJpZ2h0IDogMTVweDtcbn1cblxuLnJpZ2h0e1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLnBhZ2VyX2J0bl93cmFwcGVye1xuICAgIGRpc3BsYXkgOiBmbGV4O1xufVxuXG4ubXJfMTV7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubXRfNXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29tbW9uX2J0bntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdlcl9wcmltYXJ5X2J0bntcbiAgICBAZXh0ZW5kIC5jb21tb25fYnRuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVmOTk7XG4gICAgY29sb3IgOiAjRkZGO1xufVxuXG4ucGFnZXJfcHJpbWFyeV9idG5fc2VsZWN0ZWR7XG4gICAgQGV4dGVuZCAuY29tbW9uX2J0bjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VhO1xuICAgIGNvbG9yIDogI0ZGRjtcbn1cblxuLnBhZ2VyX2ljb257XG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ubWxfMTV7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5tbF8zMHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm1lbnVfYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLm1iXzEwe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 69587:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/share-components/activity-item/activity-item.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n  <div class=\"data-header\" *ngIf=\"itemData\">\n    <div class=\"col-8\">\n      <img src=\"./assets/images/activity/activity-list-01.svg\" alt=\"activity\" />\n      <label> {{ itemData.activityNo }} </label>\n    </div>\n    <div class=\"col-4\">\n      <section class=\"icon-group\">\n        <div class=\"actions\">\n          <img src=\"../../../assets/images/edit-01.svg\" (click)=\"actionBtn(itemData, eventType.EDIT )\" alt=\"edit\" />\n          \n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"data-content row\">\n    <div class=\"col-4\">\n      <label *ngIf=\"itemData.activityTitle\"> {{ itemData.activityTitle }}</label>\n      <label *ngIf=\"itemData.assignName\"> Assign to: {{ itemData.assignName }} </label>\n    </div>\n    <div class=\"col-4\">\n      <label *ngIf=\"itemData.dueDate\"> {{ itemData.dueDate | date:'dd/MM/YYYY' }} </label>\n      <label *ngIf=\"itemData.status == '01' \" style=\"color: #FF8100 !important; \"> Open </label>\n      <label *ngIf=\"itemData.status == '02' \" style=\"color: #005EAA !important; \"> Complete </label>\n      <label *ngIf=\"itemData.status == '03' \" style=\"color: #00ACEA !important;\"> Cancel </label>\n    </div>\n    <div class=\"col-4\">\n      <label> Activity Type: <span>{{ itemData.activityType }}</span> </label>\n    </div>\n  </div>\n";

/***/ }),

/***/ 48539:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/share-components/application-item/application-item.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"data-header\" *ngIf=\"itemData\">\n  <div class=\"col-8\">\n    <!-- <img src=\"../../../assets/images/customer/custoner_list.svg\" alt=\"quo\" /> -->\n    <img [src]=\"itemData.productImage\" alt=\"\" />\n    <label> {{ itemData.id }} </label>\n  </div>\n  <div class=\"col-4\">\n    <section class=\"icon-group\">\n      <div class=\"actions\">\n        <img src=\"../../../assets/images/view-01.svg\" (click)=\"actionBtn(itemData,eventType.VIEW)\" alt=\"view\" />\n      </div>\n      <div class=\"actions\"\n        *ngIf=\"(itemData.status == 'in_progress' || itemData.status == 'In_progress' ) || ((itemData.status == 'submitted' || itemData.status == 'Submitted') && itemData.apiStatus == 'fail')\">\n        <img src=\"../../../assets/images/edit-01.svg\" (click)=\"actionBtn(itemData,eventType.EDIT)\" alt=\"edit\" />\n      </div>\n    </section>\n  </div>\n</div>\n\n<div class=\"data-content row\">\n  <div class=\"col-4\">\n    <label *ngIf=\"itemData.agentFirstName\"> {{ itemData.agentFirstName }} {{ itemData.agentMiddleName }} {{ itemData.agentLastName }}</label>\n    <label *ngIf=\"itemData.productName\"> {{ itemData.productName }} </label>\n    <label *ngIf=\"itemData.submittedCode\"> {{ itemData.submittedCode }} </label>\n  </div>\n\n  <div class=\"col-4 text-left\" >\n    <label *ngIf=\"itemData.policyInceptionDate\">Inception Date :  {{ itemData.policyInceptionDate | date:'dd/MM/YYYY' }} </label>\n    <label *ngIf=\"itemData.policyExpireDate\">Expiry Date :  {{ itemData.policyExpireDate | date:'dd/MM/YYYY' }} </label>\n    <label *ngIf=\"itemData.status == 'in_progress' || itemData.status == 'In_progress' \"\n      style=\"color: #FF8100 !important;\"> In Progress </label>\n    <label *ngIf=\"itemData.status == 'cancel' || itemData.status == 'Cancel' \" style=\"color: #00ACEA !important;\">\n      Cancel </label>\n    <label *ngIf=\"itemData.status == 'submitted' || itemData.status == 'Submitted' \" style=\"color: #005EAA !important;\">\n      Submitted </label>\n    <label *ngIf=\"itemData.status == 'approved' || itemData.status == 'Approved' \" style=\"color: #005EAA !important;\">\n      Approved </label>\n    <label *ngIf=\"itemData.status == 'fail' || itemData.status == 'Fail' \" style=\"color: #DD5E5E !important;\"> Fail\n    </label>\n    <label *ngIf=\"itemData.status == 'success' || itemData.status == 'Success' \" style=\"color: #FFD300 !important;\">\n      Success </label>\n  </div>\n\n  <div class=\"col-4 text-left\" style=\"padding: 10px 0\">\n    <label> Premium : <span>{{ itemData.premiumView }}</span> </label>\n    <label *ngIf=\"itemData.productCode=='PLMO01' || itemData.productCode=='PLMO02' || itemData.productCode=='CLFR01'|| itemData.productCode=='PLPA01'\">SI : <span>{{ itemData.sumInsureView || 0 }}</span> </label>\n    <label *ngIf=\"itemData.apiStatus\">{{ itemData.apiStatus  | titlecase }}</label>\n\n  </div>\n</div>";

/***/ }),

/***/ 6773:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/share-components/common-list/common-list.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngFor=\"let atom of dataList | dataSort: order : colField | slice: start: end\">\n    <ng-container listDirective [viewType]=\"type\" [itemData]=\"atom\" (btnEvent)=\"actionTrigger($event)\"></ng-container>\n</ng-container>\n<!-- | dataSort: order : colField -->\n<div class=\"example-preview\" *ngIf=\"dataList.length > 0\">\n    <app-pager *ngIf=\"dataList.length > 0\" [sourceData]=\"dataList\" [formType]=\"type\" (activePage)=\"reponseFromPager($event)\">\n    </app-pager>\n</div>";

/***/ }),

/***/ 4240:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/share-components/customer-item/customer-item.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"data-header\" *ngIf=\"itemData\">\n  <div class=\"col-8\">\n    <img src=\"../../../assets/images/customer/custoner_list.svg\" alt=\"customer\" />\n    <label> {{ itemData.partyCode }} </label>\n  </div>\n  <div class=\"col-4\">\n    <section class=\"icon-group\">\n      <div class=\"actions\">\n        <img src=\"../../../assets/images/edit-01.svg\" (click)=\"actionBtn(itemData, eventType.EDIT )\" alt=\"edit\" />\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"data-content row\">\n  <div class=\"col-4\">\n    <label *ngIf=\"itemData.name\"> {{ itemData.name }}</label>\n    <label *ngIf=\"itemData.fatherName\"> {{ itemData.fatherName }} </label>\n    <label *ngIf=\"itemData.identityNumber\"> {{ itemData.identityNumber }} </label>\n  </div>\n  <div class=\"col-4\">\n    <label *ngIf=\"itemData.dateOfBirth\"> {{ itemData.dateOfBirth | date:'dd/MM/YYYY' }} </label>\n    <label *ngIf=\"itemData.statusCode == 'A' \" style=\"color: #FF8100 !important;\"> Active </label>\n    <label *ngIf=\"itemData.statusCode != 'A' \" style=\"color: #005EAA !important;\"> InActive </label>\n  </div>\n  <div class=\"col-4\">\n    <label> ID Type: <span>{{ itemData.identityType }}</span> </label>\n  </div>\n</div>";

/***/ }),

/***/ 87399:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/share-components/lead-item/lead-item.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"data-header\" *ngIf=\"itemData\">\n    <div class=\"col-8\">\n        <img src=\"../../../assets/images/activity/activity-list-01.svg\" alt=\"activity\" />\n        <label> {{ itemData.leadId }} </label>\n    </div>\n    <div class=\"col-4\">\n        <section class=\"icon-group\">\n            <div class=\"actions\">\n                <img src=\"../../../assets/images/view-01.svg\" (click)=\"actionBtn(itemData, eventType.VIEW )\"\n                    alt=\"View\" />\n            </div>\n            <div class=\"actions\">\n                <img src=\"../../../assets/images/edit-01.svg\" (click)=\"actionBtn(itemData, eventType.EDIT )\"\n                    alt=\"edit\" />\n            </div>\n        </section>\n    </div>\n</div>\n<div class=\"data-content row\">\n    <div class=\"col-4\">\n        <label *ngIf=\"itemData.contactName\"> {{ itemData.contactName }}</label>\n        <label *ngIf=\"itemData.productName\">{{ itemData.productName }} </label>\n        <label *ngIf=\"itemData.email\">{{ itemData.email }}, {{ itemData.phoneNo }}</label>\n    </div>\n    <div class=\"col-4\">\n        <label *ngIf=\"itemData.openedDate\"> {{ itemData.openedDate | date:'dd/MM/YYYY' }} </label>\n        <label *ngIf=\"itemData.statusCode == '01' \" style=\"color: #FF8100 !important;\"> Open </label>\n        <label *ngIf=\"itemData.statusCode == '02' \" style=\"color: #005EAA !important;\"> Assigned </label>\n        <label *ngIf=\"itemData.statusCode == '03' \" style=\"color: #FF8100 !important;\"> Follow Up </label>\n        <label *ngIf=\"itemData.statusCode == '04' \" style=\"color: #DD5E5E !important;\"> Reject </label>\n        <label *ngIf=\"itemData.statusCode == '05' \" style=\"color: #00ACEA !important;\"> Win </label>\n        <label *ngIf=\"itemData.statusCode == '06' \" style=\"color: #DD5E5E !important;\"> Lost </label>\n    </div>\n    <div class=\"col-4\">\n        <label> {{\"FORM.score\" | translate }} : <span>{{ itemData.score }}</span> </label>\n        <label  *ngIf=\"itemData.expirationDate\"> {{\"FORM.expiredDate\" | translate }} : <span>{{ itemData.expirationDate | date:\"dd/MM/YYYY\" }}</span> </label>\n    </div>\n</div>";

/***/ }),

/***/ 91403:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/share-components/quotation-item/quotation-item.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div *ngFor=\"let quo of quoList; let i = index\" class=\"data-list\"> -->\n<div class=\"data-header\" *ngIf=\"itemData\">\n  <div class=\"col-8\">\n    <!-- <img src=\"../../../assets/images/customer/custoner_list.svg\" alt=\"quo\" /> -->\n    <img [src]=\"itemData.productImage\" alt=\"\" />\n    <label> {{ itemData.id }} </label>\n  </div>\n  <div class=\"col-4\">\n    <section class=\"icon-group\">\n      <div class=\"actions\">\n        <img src=\"./assets/images/view-01.svg\" (click)=\"actionBtn(itemData,eventType.VIEW)\" alt=\"view\" />\n      </div>\n      <div class=\"actions\"\n        *ngIf=\"itemData.status == 'in_progress' || itemData.status == 'In_progress' \">\n        <img src=\"./assets/images/edit-01.svg\" (click)=\"actionBtn(itemData,eventType.EDIT)\" alt=\"edit\" />\n      </div>\n    </section>\n  </div>\n</div>\n\n<div class=\"data-content row\">\n  <div class=\"col-4\">\n    <label *ngIf=\"itemData.agentFirstName\"> {{ itemData.agentFirstName }} {{ itemData.agentLastName }}</label>\n    <label *ngIf=\"itemData.productName\"> {{ itemData.productName }} </label>\n  </div>\n  <div class=\"col-4 text-left\">\n    <label *ngIf=\"itemData.createdAt\">Inception Date : {{ itemData.createdAt | date:'dd/MM/YYYY' }} </label>\n    <label *ngIf=\"itemData.expiryAt\">Expiry Date : {{ itemData.expiryAt | date:'dd/MM/YYYY' }} </label>\n    <label *ngIf=\"itemData.status == 'in_progress' || itemData.status == 'In_progress' \"\n      style=\"color: #FF8100 !important;\"> In Progress </label>\n    <label *ngIf=\"itemData.status == 'cancel' || itemData.status == 'Cancel' \" style=\"color: #00ACEA !important;\">\n      Cancel </label>\n    <label *ngIf=\"itemData.status == 'submitted' || itemData.status == 'Submitted' \" style=\"color: #005EAA !important;\">\n      Submitted </label>\n    <label *ngIf=\"itemData.status == 'approved' || itemData.status == 'Approved' \" style=\"color: #005EAA !important;\">\n      Approved </label>\n    <label *ngIf=\"itemData.status == 'fail' || itemData.status == 'Fail' \" style=\"color: #DD5E5E !important;\"> Fail\n    </label>\n    <label *ngIf=\"itemData.status == 'success' || itemData.status == 'Success' \" style=\"color: #FFD300 !important;\">\n      Success </label>\n  </div>\n  <div class=\"col-4 text-left\">\n    <label> Premium : <span>{{ itemData.premiumView }}</span> </label>\n    <label>SI : <span>{{ itemData.siView || 0 |number:'1.2-2'}}</span> </label>\n    <label *ngIf=\"itemData.apiStatus\">{{ itemData.apiStatus  | titlecase }}</label>\n  </div>\n</div>\n<!-- </div> -->";

/***/ }),

/***/ 92263:
/*!**************************************************************************!*\
  !*** ./src/app/pages/static-pages/pager/pager.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"pager\" *ngIf=\"sourceData.length > 0\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"pager_btn_wrapper mt_5 mb_10 right\">\n                <div class=\"pager_atom\">\n                    <span>Items per page:</span>\n                    <button mat-button [matMenuTriggerFor]=\"menu\"\n                    class=\"menu_bg\">\n                        <div class=\"pager_btn_wrapper ml_15\">{{ selectedPageSize }}<img\n                                src=\"./assets/images/down_arrow-01.svg\" class=\"ml_30\" alt=\"\" /></div>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let pagesize of pageSizeArray\" (click)=\"clickMenuItem(pagesize)\">\n                            <span> {{ pagesize }}</span></button>\n                    </mat-menu>\n                </div>\n\n                <div class=\"pager_atom ml_15\">\n                    <span>{{ started }} – {{ endPageIndex }} of {{ sourceData.length }}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"pager_btn_wrapper right\">\n                <div class=\"mr_15\" (click)=\"pageFirst()\">\n                    <img class=\"pager_icon\" src=\"./../../../../assets/images/chevron-double-left.svg\" alt=\"\" />\n                </div>\n\n                <div class=\"mr_15\" (click)=\"pageDecresed()\">\n                    <img class=\"pager_icon\" src=\"./assets/images/arrow-left.svg\" alt=\"\" />\n                </div>\n\n                <div *ngFor=\"let btn of viewPageButtonArray\">\n                    <div [ngClass]=\"selectedPageBtn == btn? 'pager_primary_btn_selected mr_15' : 'pager_primary_btn mr_15'\"\n                        (click)=\"pageBtnClicked(btn)\">\n                        <span class=\"pager_display\">{{ btn }}</span>\n                    </div>\n                </div>\n\n                <div class=\"mr_15\" (click)=\"pageIncreased()\">\n                    <img class=\"pager_icon\" src=\"./assets/images/arrow-right.svg\" alt=\"\" />\n                </div>\n                <div (click)=\"pageLast()\">\n                    <img class=\"pager_icon\" src=\"./assets/images/chevron-double-right.svg\" alt=\"\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_share-components_share-component_module_ts.js.map