"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-detail-by-bank-branch_report-detail-by-bank-branch_module_ts"],{

/***/ 75026:
/*!******************************************************************************!*\
  !*** ./src/app/pages/report-common-search/report-common-search.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportCommonSearchComponent": () => (/* binding */ ReportCommonSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_common_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-common-search.component.html */ 15836);
/* harmony import */ var _report_common_search_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-common-search.component.scss */ 99209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);






let ReportCommonSearchComponent = class ReportCommonSearchComponent {
    constructor(cdf) {
        this.cdf = cdf;
        this.title = null;
        this.payment = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.fromMinDate = null;
        this.fromMaxDate = null;
        this.isData = false;
        this.selectOptions = {
            companies: [],
            channels: [],
            regions: [],
            cluster: [],
            branches: [],
            agents: [],
        };
    }
    ngOnInit() {
        this.loadForm();
    }
    changeOptions(ev, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ev =====> ', ev);
            console.log('type =====> ', type);
            if (type == 'agent') {
                if (ev) {
                    this.selectOptions.companies.push({ id: 1, companyName: 'companyName 1', agentId: 1 });
                }
                else {
                    this.selectOptions.companies = [];
                    this.selectOptions.channels = [];
                    this.selectOptions.regions = [];
                    this.selectOptions.cluster = [];
                    this.selectOptions.branches = [];
                    this.createFormGroup.controls['companyId'].setValue(null);
                    this.createFormGroup.controls['channelId'].setValue(null);
                    this.createFormGroup.controls['regionId'].setValue(null);
                    this.createFormGroup.controls['clusterId'].setValue(null);
                    this.createFormGroup.controls['branchId'].setValue(null);
                }
                this.selectOptions.companies = [...this.selectOptions.companies];
                this.selectOptions.channels = [...this.selectOptions.channels];
                this.selectOptions.regions = [...this.selectOptions.regions];
                this.selectOptions.cluster = [...this.selectOptions.cluster];
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            if (type == 'company') {
                if (ev) {
                    this.selectOptions.channels.push({ id: 1, channelName: 'channelName 1', companiesId: 1 });
                }
                else {
                    this.selectOptions.channels = [];
                    this.selectOptions.regions = [];
                    this.selectOptions.cluster = [];
                    this.selectOptions.branches = [];
                    this.createFormGroup.controls['channelId'].setValue(null);
                    this.createFormGroup.controls['regionId'].setValue(null);
                    this.createFormGroup.controls['clusterId'].setValue(null);
                    this.createFormGroup.controls['branchId'].setValue(null);
                }
                this.selectOptions.channels = [...this.selectOptions.channels];
                this.selectOptions.regions = [...this.selectOptions.regions];
                this.selectOptions.cluster = [...this.selectOptions.cluster];
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            if (type == 'channel') {
                if (ev) {
                    this.selectOptions.regions.push({ id: 1, regionsName: 'regions 1', channelId: 1 });
                }
                else {
                    this.selectOptions.regions = [];
                    this.selectOptions.cluster = [];
                    this.selectOptions.branches = [];
                    this.createFormGroup.controls['regionId'].setValue(null);
                    this.createFormGroup.controls['clusterId'].setValue(null);
                    this.createFormGroup.controls['branchId'].setValue(null);
                }
                this.selectOptions.regions = [...this.selectOptions.regions];
                this.selectOptions.cluster = [...this.selectOptions.cluster];
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            if (type == 'region') {
                if (ev) {
                    this.selectOptions.cluster.push({ id: 1, clusterName: 'clusterName 1', regionId: 1 });
                }
                else {
                    this.selectOptions.cluster = [];
                    this.selectOptions.branches = [];
                    this.createFormGroup.controls['clusterId'].setValue(null);
                    this.createFormGroup.controls['branchId'].setValue(null);
                }
                this.selectOptions.cluster = [...this.selectOptions.cluster];
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            if (type == 'cluster') {
                if (ev) {
                    this.selectOptions.branches.push({ id: 1, brancheName: 'brancheName 1', clusterId: 1 });
                }
                else {
                    this.selectOptions.branches = [];
                    this.createFormGroup.controls['branchId'].setValue(null);
                }
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            this.cdf.detectChanges();
            console.log('selectOptions', this.selectOptions);
        });
    }
    loadForm() {
        this.createFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            "fromDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator]),
            "toDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator]),
            "agentId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            "companyId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            "channelId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            "regionId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            "clusterId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            "branchId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
    }
    cancelReport() {
        this.createFormGroup.reset();
    }
    generateReportExcel() {
    }
    getAllReports() {
    }
    isControlValid(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    doValid(type) {
        if (type == 'FromDate') {
            let value = this.createFormGroup.controls['fromDate'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['fromDate'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.createFormGroup.controls['fromDate'].setValue(toDate.format('YYYY-MM-DD'));
            }
            var fromDate = new Date(this.createFormGroup.value.fromDate);
            fromDate.setFullYear(fromDate.getFullYear() + 1);
            fromDate.setDate(fromDate.getDate() - 1);
            this.fromMinDate = this.createFormGroup.value.fromDate;
            this.fromMaxDate = fromDate;
            let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
            if (diffYear != 0 && diffYear != 1) {
                this.createFormGroup.controls['toDate'].setValue('');
            }
        }
        if (type == 'ToDate') {
            let value = this.createFormGroup.controls['toDate'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['toDate'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.createFormGroup.controls['toDate'].setValue(toDate.format('YYYY-MM-DD'));
            }
            var toDate = new Date(this.createFormGroup.value.toDate);
            toDate.setFullYear(toDate.getFullYear() - 1);
            toDate.setDate(toDate.getDate() + 1);
            this.fromMinDate = toDate;
            if (!this.createFormGroup.value.toDate) {
                this.fromMaxDate = this.createFormGroup.value.toDate;
            }
            let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
            if (diffYear != 0 && diffYear != 1) {
                this.createFormGroup.controls['fromDate'].setValue('');
            }
            if (diffYear == 1) {
                if (new Date(this.createFormGroup.value.toDate).getMonth() > new Date(this.createFormGroup.value.fromDate).getMonth()) {
                    this.createFormGroup.controls['fromDate'].setValue('');
                }
                if (new Date(this.createFormGroup.value.toDate).getMonth() == new Date(this.createFormGroup.value.fromDate).getMonth() &&
                    new Date(this.createFormGroup.value.toDate).getDate() >= new Date(this.createFormGroup.value.fromDate).getDate()) {
                    this.createFormGroup.controls['fromDate'].setValue('');
                }
            }
        }
        this.cdf.detectChanges();
    }
    clearDate(type) {
        this.fromMinDate = null;
        this.fromMaxDate = null;
        if (type == 'FromDate') {
            this.createFormGroup.controls['fromDate'].setValue('');
        }
        if (type == 'ToDate') {
            this.createFormGroup.controls['toDate'].setValue('');
        }
    }
};
ReportCommonSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
ReportCommonSearchComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['title',] }],
    payment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ReportCommonSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-report-common-search',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_common_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_common_search_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportCommonSearchComponent);



/***/ }),

/***/ 72605:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/report-detail-by-bank-branch/report-detail-by-bank-branch-export.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDetailBankBranchExportService": () => (/* binding */ ReportDetailBankBranchExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 49456);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 68178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/modules/auth */ 67198);
/* harmony import */ var _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/biz.operation.service */ 91691);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 18260);








const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/reportByBankBranch`;
const API_HIREARCHY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/agentByOffice`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportDetailBankBranchExportService = class ReportDetailBankBranchExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__.BizOperationService {
    constructor(httpClient, authService) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
        this.authService = authService;
    }
    getOfficeHirearchy(parentId, typeCode) {
        let reqObj = {
            parentId: parentId,
            typeCode: typeCode,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams({
            fromObject: reqObj
        });
        return this.httpClient.get(API_HIREARCHY_URL, { params: params });
    }
    getAgentOffice(officeId) {
        let reqObj = {
            officeId: officeId,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams({
            fromObject: reqObj
        });
        return this.httpClient.get(API_AGENT_OFFICE_URL, { params: params });
    }
    getAllReportData(searchValue) {
        if (searchValue.fromDate) {
            searchValue.fromDate = this.formatDateYYYY_MM_DD(searchValue.fromDate);
        }
        if (searchValue.toDate) {
            searchValue.toDate = this.formatDateYYYY_MM_DD(searchValue.toDate);
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams({
            fromObject: searchValue
        });
        return this.httpClient.get(API_ADDON_URL, { params: params });
    }
    exportExcel(excelData) {
        //Title, Header & Data
        const title = excelData.title;
        const products = excelData.products;
        const subHeader = excelData.subHeader;
        const searchValue = excelData.searchValue;
        const data = excelData.data;
        //Create a workbook with a worksheet
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();
        let worksheet = workbook.addWorksheet('Sheet1');
        // Freeze
        worksheet.views = [
            { state: 'frozen', xSplit: 6, ySplit: 5, activeCell: 'A1' }
        ];
        //Add Row and formatting
        worksheet.mergeCells('A1', 'C2');
        let titleRow = worksheet.getCell('A1');
        titleRow.value = title;
        titleRow.font = {
            name: 'Calibri',
            size: 12,
            underline: 'single',
            bold: true,
            color: { argb: '0085A3' }
        };
        titleRow.alignment = { vertical: 'middle', horizontal: 'left' };
        //Reported Date:
        worksheet.mergeCells('G1', 'G1');
        let reportDate = worksheet.getCell('G1');
        reportDate.value = 'Reported Date: ' + this.formatReportedDate(new Date());
        reportDate.font = {
            name: 'Calibri',
            size: 10,
            bold: true
        };
        reportDate.alignment = { vertical: 'middle', horizontal: 'left' };
        //Reported By:
        worksheet.mergeCells('G2', 'G2');
        let reportBy = worksheet.getCell('G2');
        reportBy.value = 'Reported By: ' + this.authService.currentUserValue.username;
        reportBy.font = {
            name: 'Calibri',
            size: 10,
            bold: true
        };
        reportBy.alignment = { vertical: 'middle', horizontal: 'left' };
        // Display search name   
        if (searchValue.length > 0) {
            for (var i = 0; i < searchValue.length; i++) {
                let cellIndex = null;
                let cellIndexValue = null;
                if (searchValue[i].fromDate) {
                    cellIndex = 'F1';
                    cellIndexValue = 'From Date: ' + searchValue[i].fromDate;
                }
                if (searchValue[i].toDate) {
                    cellIndex = 'F2';
                    cellIndexValue = 'To Date: ' + searchValue[i].toDate;
                }
                if (searchValue[i].companyName) {
                    cellIndex = 'L1';
                    cellIndexValue = 'Company: ' + searchValue[i].companyName;
                }
                if (searchValue[i].channelName) {
                    cellIndex = 'M1';
                    cellIndexValue = 'Channel: ' + searchValue[i].channelName;
                }
                if (searchValue[i].regionName) {
                    cellIndex = 'N1';
                    cellIndexValue = 'Region: ' + searchValue[i].regionName;
                }
                if (searchValue[i].clusterName) {
                    cellIndex = 'L2';
                    cellIndexValue = 'Cluster: ' + searchValue[i].clusterName;
                }
                if (searchValue[i].branchName) {
                    cellIndex = 'M2';
                    cellIndexValue = 'Branch: ' + searchValue[i].branchName;
                }
                if (searchValue[i].agentName) {
                    cellIndex = 'N2';
                    cellIndexValue = 'Agent: ' + searchValue[i].agentName;
                }
                if (cellIndex != null && cellIndexValue != null) {
                    let searchCell = worksheet.getCell(cellIndex);
                    searchCell.value = cellIndexValue;
                    searchCell.font = {
                        name: 'Calibri',
                        size: 10,
                        bold: true
                    };
                    searchCell.alignment = { vertical: 'middle', horizontal: 'left' };
                }
            }
        }
        worksheet.addRow([]);
        //Adding Sub Header Row
        worksheet.mergeCells('A4:F4');
        let startIndex = 6;
        let endIndex = 7;
        for (var i = 0; i < products.length; i++) {
            let start = this.calculateStartPoint(startIndex);
            startIndex += 2;
            let end = this.calculateEndPoint(endIndex);
            endIndex += 2;
            worksheet.mergeCells(start + ':' + end);
            let fireCell = worksheet.getCell(start);
            fireCell.value = products[i];
            fireCell.font = {
                name: 'Calibri',
                size: 12,
                bold: true
            };
            fireCell.alignment = { vertical: 'middle', horizontal: 'center' };
        }
        for (var i = 0; i < subHeader.length; i++) {
            let start = this.calculateDataPoint(i);
            worksheet.mergeCells(start + ':' + start);
            let dataCell = worksheet.getCell(start);
            dataCell.value = subHeader[i];
            dataCell.font = {
                name: 'Calibri',
                size: 12,
                bold: true
            };
            dataCell.alignment = { vertical: 'middle', horizontal: 'center' };
        }
        //Adding Data with Conditional Formatting
        data.forEach(d => {
            let row = worksheet.addRow(d);
            let no = row.getCell(1);
            if (no) {
                no.alignment = { vertical: 'middle', horizontal: 'center' };
            }
            let index = 0;
            d.forEach(a => {
                index++;
                if (index != 2 && index != 3 && index != 4 && index != 5) {
                    let center = row.getCell(index);
                    if (center) {
                        center.alignment = { vertical: 'middle', horizontal: 'right' };
                    }
                }
                if (index == 1) {
                    let center = row.getCell(index);
                    if (center) {
                        center.alignment = { vertical: 'middle', horizontal: 'center' };
                    }
                }
                if (index > 6) {
                    let center = row.getCell(index);
                    center.numFmt = '#,##0.00_);(#,##0.00)';
                }
            });
        });
        worksheet.columns.forEach(function (column, i) {
            var maxLength = 0;
            column["eachCell"]({ includeEmpty: true }, function (cell) {
                var columnLength = cell.value ? cell.value.toString().length : 10;
                if (columnLength > maxLength) {
                    maxLength = columnLength;
                }
            });
            column.width = maxLength < 10 ? 10 : maxLength;
        });
        worksheet.getColumn(1).width = 5;
        worksheet.getColumn(2).width = 20;
        worksheet.getColumn(3).width = 15;
        worksheet.getColumn(4).width = 15;
        worksheet.getColumn(5).width = 20;
        const autoHeight = (worksheet) => {
            const lineHeight = 12; // height per line is roughly 12
            worksheet.eachRow((row) => {
                let maxLine = 1;
                row.eachCell((cell) => {
                    maxLine = Math.max(cell.value.split('\n').length - 1, maxLine);
                });
                row.height = lineHeight * maxLine;
            });
        };
        //Generate & Save Excel File
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx');
        });
    }
    calculateStartPoint(index) {
        return alphabet[index] + '4';
    }
    calculateEndPoint(index) {
        return alphabet[index] + '4';
    }
    calculateDataPoint(index) {
        return alphabet[index] + '5';
    }
    formatDateDDMMYYY(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('_');
    }
    mathRoundTo(num, places) {
        const factor = Math.pow(10, places);
        return (Math.round(num * factor) / factor).toLocaleString();
    }
    ;
    formatDateYYYY_MM_DD(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatReportedDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
};
ReportDetailBankBranchExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ReportDetailBankBranchExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ReportDetailBankBranchExportService);



/***/ }),

/***/ 34592:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/report-detail-by-bank-branch/report-detail-by-bank-branch.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDetailByBankBranchComponent": () => (/* binding */ ReportDetailByBankBranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_detail_by_bank_branch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-detail-by-bank-branch.component.html */ 84526);
/* harmony import */ var _report_detail_by_bank_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-detail-by-bank-branch.component.scss */ 33491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/valid-all-feild */ 53489);
/* harmony import */ var _report_detail_by_bank_branch_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-detail-by-bank-branch-export.service */ 72605);








let ReportDetailByBankBranchComponent = class ReportDetailByBankBranchComponent {
    constructor(cdf, exportService) {
        this.cdf = cdf;
        this.exportService = exportService;
        this.title = "Bank Branch Sale Report";
        this.fromMinDate = null;
        this.fromMaxDate = null;
        this.selectOptions = {
            companies: [],
            channels: [],
            regions: [],
            cluster: [],
            branches: [],
            agents: [],
        };
        this.reports = [];
        this.products = [];
        this.policies = [];
        this.productList = [];
        this.displayList = [{
                particular: [],
                policies: [],
                premium: []
            }];
        this.agentName = null;
        this.companyName = null;
        this.channelName = null;
        this.regionName = null;
        this.clusterName = null;
        this.branchName = null;
        this.particularForExcel = [];
        this.policiesForExcel = [];
        this.premiumForExcel = [];
        this.isData = false;
        this.productValues = [];
        this.subHeader = [];
        this.dataList = [];
        this.dataExcel = [];
    }
    ngOnInit() {
        this.loadForm();
        this.getOfficeHirearchy();
        this.fromMinDate = null;
        this.fromMaxDate = null;
    }
    getOfficeHirearchy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.exportService.getOfficeHirearchy('', '01').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    this.selectOptions.companies = res;
                }
            }));
        });
    }
    getAllReports() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.productList = [];
            this.dataList = [];
            if (this.createFormGroup.invalid) {
                (0,_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.createFormGroup);
            }
            else {
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    if (res) {
                        if (res.products.length > 0) {
                            for (var i = 0; i < res.products.length; i++) {
                                this.productList.push(res.products[i]);
                            }
                        }
                        if (res.dataList.length > 0) {
                            this.isData = true;
                            this.dataList = res.dataList;
                            let countNo = 0;
                            for (var i = 0; i < this.dataList.length; i++) {
                                this.dataList[i].productDataList = [];
                                countNo++;
                                this.dataList[i].no = countNo;
                                for (var j = 0; j < this.productList.length; j++) {
                                    this.dataList[i].productDataList.push({
                                        id: this.productList[j].id,
                                        noOfPolicy: 0, totalPreminum: 0
                                    });
                                }
                                if (this.dataList[i].products.length > 0) {
                                    for (var j = 0; j < this.dataList[i].products.length; j++) {
                                        for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
                                            if (this.dataList[i].productDataList[k].id == this.dataList[i].products[j].id) {
                                                this.dataList[i].productDataList[k].noOfPolicy = this.dataList[i].products[j].noOfPolicy;
                                                this.dataList[i].productDataList[k].totalPreminum = this.dataList[i].products[j].totalPreminum;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            this.isData = false;
                        }
                    }
                }));
            }
            this.cdf.detectChanges();
        });
    }
    generateReportExcel() {
        this.productValues = [];
        this.subHeader = [];
        this.dataExcel = [];
        for (var i = 0; i < this.productList.length; i++) {
            this.productValues.push(this.productList[i].name);
        }
        // Sub Header
        this.subHeader = ["No.", "Branch", "Channel", "Bank Branch", "Agent Name", "Agent No."];
        for (var i = 0; i < this.productList.length; i++) {
            this.subHeader.push("No of Policies");
            this.subHeader.push("Premium");
        }
        // Data
        for (var i = 0; i < this.dataList.length; i++) {
            let list = [];
            list.push(i + 1, this.dataList[i].cluster, this.dataList[i].channel, this.dataList[i].branch, this.dataList[i].agentName, this.dataList[i].agentNo);
            for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
                list.push(this.dataList[i].productDataList[j].noOfPolicy || 0.00, this.dataList[i].productDataList[j].totalPreminum || 0.00);
            }
            this.dataExcel.push(list);
        }
        let fromDate = null;
        let toDate = null;
        if (this.createFormGroup.value.fromDate) {
            fromDate = this.formatDateDDMMYYY(this.createFormGroup.value.fromDate);
        }
        if (this.createFormGroup.value.fromDate) {
            toDate = this.formatDateDDMMYYY(this.createFormGroup.value.toDate);
        }
        let reportData = {
            title: this.title,
            searchValue: [
                { fromDate: fromDate },
                { toDate: toDate },
                { agentName: this.agentName },
                { companyName: this.companyName },
                { channelName: this.channelName },
                { regionName: this.regionName },
                { clusterName: this.clusterName },
                { branchName: this.branchName }
            ],
            products: this.productValues,
            subHeader: this.subHeader,
            data: this.dataExcel
        };
        this.exportService.exportExcel(reportData);
    }
    cancelReport() {
        this.createFormGroup.reset();
        this.loadForm();
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.selectOptions.agents = [];
        this.productList = [];
        this.dataList = [];
        this.agentName = null;
        this.companyName = null;
        this.channelName = null;
        this.regionName = null;
        this.clusterName = null;
        this.branchName = null;
        this.agentName = null;
        this.isData = false;
        this.fromMinDate = null;
        this.fromMaxDate = null;
        this.cdf.detectChanges();
    }
    changeOptions(ev, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 'company') {
                if (ev) {
                    this.companyName = ev.name;
                    yield this.exportService.getOfficeHirearchy('', '01').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.channels = res;
                        }
                    }));
                }
                else {
                    this.companyName = null;
                    this.selectOptions.channels = [];
                    this.selectOptions.regions = [];
                    this.selectOptions.cluster = [];
                    this.selectOptions.branches = [];
                    this.selectOptions.agents = [];
                    this.createFormGroup.controls['channelId'].setValue('');
                    this.createFormGroup.controls['regionId'].setValue('');
                    this.createFormGroup.controls['clusterId'].setValue('');
                    this.createFormGroup.controls['branchId'].setValue('');
                    this.createFormGroup.controls['agentId'].setValue('');
                }
                this.selectOptions.channels = [...this.selectOptions.channels];
                this.selectOptions.regions = [...this.selectOptions.regions];
                this.selectOptions.cluster = [...this.selectOptions.cluster];
                this.selectOptions.branches = [...this.selectOptions.branches];
            }
            if (type == 'channel') {
                this.selectOptions.channels = [];
                this.selectOptions.regions = [];
                this.selectOptions.cluster = [];
                this.selectOptions.branches = [];
                this.selectOptions.agents = [];
                this.createFormGroup.controls['channelId'].setValue('');
                this.createFormGroup.controls['regionId'].setValue('');
                this.createFormGroup.controls['clusterId'].setValue('');
                this.createFormGroup.controls['branchId'].setValue('');
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.companyName = ev.name;
                    yield this.exportService.getOfficeHirearchy(ev.id, '02').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.channels = res;
                        }
                    }));
                }
                else {
                    this.companyName = null;
                    this.createFormGroup.value.companyId = '';
                    this.createFormGroup.value.channelId = '';
                    this.createFormGroup.value.regionId = '';
                    this.createFormGroup.value.clusterId = '';
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            if (type == 'region') {
                this.selectOptions.regions = [];
                this.selectOptions.cluster = [];
                this.selectOptions.branches = [];
                this.selectOptions.agents = [];
                this.createFormGroup.controls['regionId'].setValue('');
                this.createFormGroup.controls['clusterId'].setValue('');
                this.createFormGroup.controls['branchId'].setValue('');
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.channelName = ev.name;
                    yield this.exportService.getOfficeHirearchy(ev.id, '03').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.regions = res;
                        }
                    }));
                }
                else {
                    this.channelName = null;
                    this.createFormGroup.value.channelId = '';
                    this.createFormGroup.value.regionId = '';
                    this.createFormGroup.value.clusterId = '';
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            if (type == 'cluster') {
                this.selectOptions.cluster = [];
                this.selectOptions.branches = [];
                this.selectOptions.agents = [];
                this.createFormGroup.controls['clusterId'].setValue('');
                this.createFormGroup.controls['branchId'].setValue('');
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.regionName = ev.name;
                    yield this.exportService.getOfficeHirearchy(ev.id, '04').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.cluster = res;
                        }
                    }));
                }
                else {
                    this.regionName = null;
                    this.createFormGroup.value.regionId = '';
                    this.createFormGroup.value.clusterId = '';
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            if (type == 'branch') {
                this.selectOptions.branches = [];
                this.selectOptions.agents = [];
                this.createFormGroup.controls['branchId'].setValue('');
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.clusterName = ev.name;
                    yield this.exportService.getOfficeHirearchy(ev.id, '05').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.branches = res;
                        }
                    }));
                }
                else {
                    this.clusterName = null;
                    this.createFormGroup.value.clusterId = '';
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            if (type == 'agent') {
                this.selectOptions.agents = [];
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.branchName = ev.name;
                    yield this.exportService.getAgentOffice(ev.id).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.agents = res;
                        }
                    }));
                }
                else {
                    this.branchName = null;
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            if (type == 'office') {
                if (ev) {
                    this.agentName = ev.agentName;
                }
                else {
                    this.agentName = null;
                    this.createFormGroup.value.agentId = '';
                }
            }
            this.cdf.detectChanges();
        });
    }
    loadForm() {
        this.createFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            "fromDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator]),
            "toDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator]),
            "agentId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "companyId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "channelId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "regionId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "clusterId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "branchId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
        });
    }
    isControlValid(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.createFormGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    doValid(type) {
        if (type == 'FromDate') {
            let value = this.createFormGroup.controls['fromDate'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['fromDate'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.createFormGroup.controls['fromDate'].setValue(toDate.format('YYYY-MM-DD'));
            }
            var fromDate = new Date(this.createFormGroup.value.fromDate);
            fromDate.setFullYear(fromDate.getFullYear() + 1);
            fromDate.setDate(fromDate.getDate() - 1);
            this.fromMinDate = this.createFormGroup.value.fromDate;
            this.fromMaxDate = fromDate;
            let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
            if (diffYear != 0 && diffYear != 1) {
                this.createFormGroup.controls['toDate'].setValue('');
            }
        }
        if (type == 'ToDate') {
            let value = this.createFormGroup.controls['toDate'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['toDate'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.createFormGroup.controls['toDate'].setValue(toDate.format('YYYY-MM-DD'));
            }
            var toDate = new Date(this.createFormGroup.value.toDate);
            toDate.setFullYear(toDate.getFullYear() - 1);
            toDate.setDate(toDate.getDate() + 1);
            this.fromMinDate = toDate;
            if (!this.createFormGroup.value.toDate) {
                this.fromMaxDate = this.createFormGroup.value.toDate;
            }
            let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
            if (diffYear != 0 && diffYear != 1) {
                this.createFormGroup.controls['fromDate'].setValue('');
            }
            if (diffYear == 1) {
                if (new Date(this.createFormGroup.value.toDate).getMonth() > new Date(this.createFormGroup.value.fromDate).getMonth()) {
                    this.createFormGroup.controls['fromDate'].setValue('');
                }
                if (new Date(this.createFormGroup.value.toDate).getMonth() == new Date(this.createFormGroup.value.fromDate).getMonth() &&
                    new Date(this.createFormGroup.value.toDate).getDate() >= new Date(this.createFormGroup.value.fromDate).getDate()) {
                    this.createFormGroup.controls['fromDate'].setValue('');
                }
            }
        }
        this.cdf.detectChanges();
    }
    clearDate(type) {
        this.fromMinDate = null;
        this.fromMaxDate = null;
        if (type == 'FromDate') {
            this.createFormGroup.controls['fromDate'].setValue('');
        }
        if (type == 'ToDate') {
            this.createFormGroup.controls['toDate'].setValue('');
        }
        this.isData = false;
        this.dataList = [];
        this.productList = [];
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.selectOptions.agents = [];
        this.createFormGroup.controls['companyId'].setValue('');
        this.createFormGroup.controls['channelId'].setValue('');
        this.createFormGroup.controls['regionId'].setValue('');
        this.createFormGroup.controls['clusterId'].setValue('');
        this.createFormGroup.controls['branchId'].setValue('');
        this.createFormGroup.controls['agentId'].setValue('');
    }
    formatDateDDMMYYY(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
    mathRoundTo(num, places) {
        const factor = Math.pow(10, places);
        return (Math.round(num * factor) / factor).toLocaleString();
    }
    ;
};
ReportDetailByBankBranchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _report_detail_by_bank_branch_export_service__WEBPACK_IMPORTED_MODULE_4__.ReportDetailBankBranchExportService }
];
ReportDetailByBankBranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report-detail-by-bank-branch',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_detail_by_bank_branch_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_detail_by_bank_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportDetailByBankBranchComponent);



/***/ }),

/***/ 97480:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report-detail-by-bank-branch/report-detail-by-bank-branch.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDetailByBankBranchModule": () => (/* binding */ ReportDetailByBankBranchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _report_detail_by_bank_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-detail-by-bank-branch.component */ 34592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _report_common_search_report_common_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report-common-search/report-common-search.component */ 75026);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 76393);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/is-json */ 47975);


















let ReportDetailByBankBranchModule = class ReportDetailByBankBranchModule {
};
ReportDetailByBankBranchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_report_detail_by_bank_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportDetailByBankBranchComponent, _report_common_search_report_common_search_component__WEBPACK_IMPORTED_MODULE_3__.ReportCommonSearchComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([
                {
                    path: '',
                    component: _report_detail_by_bank_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportDetailByBankBranchComponent,
                },
            ]),
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA,
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.NO_ERRORS_SCHEMA
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_4__.MY_FORMATS }]
    })
], ReportDetailByBankBranchModule);



/***/ }),

/***/ 15836:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/report-common-search/report-common-search.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">Title</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\r\n                        (click)=\"getAllReports()\">\r\n                        <span class=\"flaticon2-magnifier-tool\"></span>\r\n                    </button>\r\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\r\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\r\n                        <span class=\"\">Generate</span>\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\r\n                        style=\"min-width: 50px;\">\r\n                        <span class=\"\">Cancel</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <div class=\"col-sm-1\" style=\"padding: 0;\">\r\n                                    <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\r\n                                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <div class=\"col-sm-1\" style=\"padding: 0;\">\r\n                                    <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\r\n                                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\r\n                                        (change)=\"changeOptions($event, 'agent')\" [items]=\"selectOptions.agents\"\r\n                                        bindLabel=\"agentName\" bindValue=\"id\" formControlName=\"agentId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.companies.length == 0 \"\r\n                                        class=\"ng-custom-select\" placeholder=\"Please Select\"\r\n                                        (change)=\"changeOptions($event, 'company')\" [items]=\"selectOptions.companies\"\r\n                                        bindLabel=\"companyName\" bindValue=\"id\" formControlName=\"companyId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'channel')\"\r\n                                        [items]=\"selectOptions.channels\" bindLabel=\"channelName\" bindValue=\"id\"\r\n                                        formControlName=\"channelId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\r\n                                        [items]=\"selectOptions.regions\" bindLabel=\"regionsName\" bindValue=\"id\"\r\n                                        formControlName=\"regionId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\r\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"clusterName\" bindValue=\"id\"\r\n                                        formControlName=\"clusterId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\r\n                                        [items]=\"selectOptions.branches\" bindLabel=\"brancheName\" bindValue=\"id\"\r\n                                        formControlName=\"branchId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 84526:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/report-detail-by-bank-branch/report-detail-by-bank-branch.component.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">#Detail Report by bank branch​</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\r\n                        (click)=\"getAllReports()\">\r\n                        <span class=\"flaticon2-magnifier-tool\"></span>\r\n                    </button>\r\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\r\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\r\n                        <span class=\"\">Generate</span>\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\r\n                        style=\"min-width: 50px;\">\r\n                        <span class=\"\">Cancel</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6 from-date\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\r\n                                <div class=\"col-sm-6 input-date\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\r\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\r\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 from-date\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\r\n                                <div class=\"col-sm-6 input-date\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\r\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\r\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\"\r\n                            *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\r\n                                        (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\"\r\n                                        bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\r\n                                        [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"channelId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\r\n                                        [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"regionId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\r\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"clusterId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\"\r\n                                        [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"branchId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.agents.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'office')\"\r\n                                        [items]=\"selectOptions.agents\" bindLabel=\"agentName\" bindValue=\"agentId\"\r\n                                        formControlName=\"agentId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"isData\">\r\n    <div class=\"col-12\">\r\n        <div style=\"width: 100%;\r\n        overflow: hidden; position: relative;\">\r\n            <div style=\"width: 30%;float: left; position: relative;\">\r\n                <br *ngIf=\"createFormGroup.value.companyId\">\r\n                <br *ngIf=\"createFormGroup.value.clusterId\">\r\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\r\n            </div>\r\n            <div style=\"width: 30%; float: left; position: relative;\">\r\n                <br *ngIf=\"createFormGroup.value.companyId\">\r\n                <br *ngIf=\"createFormGroup.value.clusterId\">\r\n                <div class=\"date-display\">\r\n                    <span *ngIf=\"createFormGroup.value.fromDate\">From Date: {{\r\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.toDate\">To Date: {{\r\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"search-display\">\r\n                <div *ngIf=\"createFormGroup.value.companyId != '' || \r\n                createFormGroup.value.channelId !='' || createFormGroup.value.regionId != '' \">\r\n                    <span *ngIf=\"createFormGroup.value.companyId\">Company: {{ companyName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.channelId\">Channel: {{ channelName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.regionId\">Region: {{ regionName }} </span>\r\n                </div>\r\n                <div *ngIf=\"createFormGroup.value.clusterId != '' || \r\n                createFormGroup.value.branchId !='' || createFormGroup.value.agentId !='' \">\r\n                    <span *ngIf=\"createFormGroup.value.clusterId\">Cluster: {{ clusterName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.branchId\">Branch: {{ branchName }}</span>\r\n                    <span *ngIf=\"createFormGroup.value.agentId\">Agent: {{ agentName }} </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 100%;\r\n        overflow-y: scroll;\r\n        overflow-x: scroll;\r\n        max-height: 500px;\">\r\n            <table border=\"1\">\r\n                <tr style=\"border-top: 1px solid #000;\" *ngIf=\"productList.length > 0\">\r\n                    <th colspan=\"6\"></th>\r\n                    <th *ngFor=\"let product of productList; let i = index\">{{ product.name }}</th>\r\n                </tr>\r\n                <tr>\r\n                    <th style=\"min-width: 50px;\">No</th>\r\n                    <th>Branch</th>\r\n                    <th>Channel</th>\r\n                    <th>Bank Branch</th>\r\n                    <th>Agent Name</th>\r\n                    <th>Agent No.</th>\r\n                    <th style=\"min-width: 160px;\" *ngFor=\"let product of productList; let i = index\">\r\n                        <span>No of Policies\r\n                            <div class=\"right-border-transform\"></div>\r\n                        </span>\r\n                        <span>Premium</span>\r\n                    </th>\r\n                </tr>\r\n                <tr *ngFor=\"let data of dataList; let i = index\">\r\n                    <td>{{ data.no }}</td>\r\n                    <td class=\"text-left\">{{ data.cluster }}</td>\r\n                    <td class=\"text-left\">{{ data.channel }}</td>\r\n                    <td class=\"text-left\">{{ data.branch }}</td>\r\n                    <td class=\"text-left\">{{ data.agentName }}</td>\r\n                    <td class=\"text-left\">{{ data.agentNo }}</td>\r\n                    <td class=\"text-right\" *ngFor=\"let policy of dataList[i].productDataList; let j = index; \">\r\n                        <span style=\"text-align: end;  padding: 0 5px 0 0;\" *ngIf=\"policy.noOfPolicy\">{{\r\n                            policy.noOfPolicy | number:'1.2-2'\r\n                            }}\r\n                            <div class=\"right-border-transform\"></div>\r\n                        </span>\r\n                        <span style=\"text-align: end;\" *ngIf=\"policy.totalPreminum\">{{ policy.totalPreminum |\r\n                            number:'1.2-2' }}</span>\r\n                        <span style=\"text-align: end; padding: 0 5px 0 0;\" *ngIf=\"!policy.noOfPolicy\"> 0.00\r\n                            <div class=\"right-border-transform\"></div>\r\n                        </span>\r\n                        <span style=\"text-align: end;\" *ngIf=\"!policy.totalPreminum\">0.00</span>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>");

/***/ }),

/***/ 99209:
/*!********************************************************************************!*\
  !*** ./src/app/pages/report-common-search/report-common-search.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border-collapse: unset;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  text-align: center;\n  position: relative;\n  border-collapse: unset;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 40%;\n  float: left;\n}\n\n.search-display div {\n  width: 100%;\n  overflow: hidden;\n}\n\n.search-display div span {\n  width: 33%;\n  display: inline-block;\n  float: left;\n}\n\n.date-display {\n  width: 100%;\n  overflow: hidden;\n}\n\n.date-display span {\n  width: 50%;\n  min-width: 135px;\n  float: left;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1jb21tb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTs7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFJWjs7QUFIWTs7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1oQjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFJWjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFHUjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFFSiIsImZpbGUiOiJyZXBvcnQtY29tbW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmVmO1xyXG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XHJcbn1cclxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XHJcbiAgICB0ciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHVuc2V0O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWRpc3BsYXkge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUtZGlzcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMzVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLnJpZ2h0LWJvcmRlci10cmFuc2Zvcm0ge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDQ5JTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 33491:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/report-detail-by-bank-branch/report-detail-by-bank-branch.component.scss ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border-collapse: unset;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  text-align: center;\n  position: relative;\n  border-collapse: unset;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 40%;\n  float: left;\n}\n\n.search-display div {\n  width: 100%;\n  overflow: hidden;\n}\n\n.search-display div span {\n  width: 33%;\n  display: inline-block;\n  float: left;\n}\n\n.date-display {\n  width: 100%;\n  overflow: hidden;\n}\n\n.date-display span {\n  width: 50%;\n  min-width: 135px;\n  float: left;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n\n.from-date button {\n  padding: 0;\n  position: absolute;\n  right: 0;\n  width: auto;\n  color: #FFFFFF;\n  background-color: #005f99;\n  border-color: #005f99;\n  height: 35px;\n  padding: 0 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 571px) {\n  .from-date {\n    position: relative;\n  }\n  .from-date .input-date {\n    width: 85%;\n  }\n  .from-date button {\n    top: 23px;\n  }\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: end;\n  padding: 0 5px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1kZXRhaWwtYnktYmFuay1icmFuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUZROztFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUlaOztBQUhZOztFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTWhCOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUZRO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBREk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUVJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBR0E7RUFDSTtJQUNJLGtCQUFBO0VBQU47RUFDTTtJQUNJLFVBQUE7RUFDVjtFQUNNO0lBQ0ksU0FBQTtFQUNWO0FBQ0Y7O0FBR0E7RUFDSSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoicmVwb3J0LWRldGFpbC1ieS1iYW5rLWJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmVmO1xyXG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XHJcbn1cclxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XHJcbiAgICB0ciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHVuc2V0O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWRpc3BsYXkge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUtZGlzcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMzVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLnJpZ2h0LWJvcmRlci10cmFuc2Zvcm0ge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDQ5JTtcclxufVxyXG5cclxuLmZyb20tZGF0ZSB7ICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogYXV0bzsgICAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Zjk5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNWY5OTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU3MXB4KSB7XHJcbiAgICAuZnJvbS1kYXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmlucHV0LWRhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDIzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMCA1cHggMCAwO1xyXG59XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-detail-by-bank-branch_report-detail-by-bank-branch_module_ts.js.map