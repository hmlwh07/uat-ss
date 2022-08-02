"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-by-product-sales-channel-premium_report-by-product-sales-channel-premium-2a507c"],{

/***/ 64722:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/report-by-product-sales-channel-premium/report-by-product-sales-channel-premium-export.service.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportProductSalesChannelPremiumExportService": () => (/* binding */ ReportProductSalesChannelPremiumExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 34498);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/modules/auth */ 90089);
/* harmony import */ var _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/biz.operation.service */ 38313);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);










const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/premiumProductSaleChannel`;
const API_HIREARCHY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/agentByOffice`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportProductSalesChannelPremiumExportService = class ReportProductSalesChannelPremiumExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__.BizOperationService {
    constructor(httpClient, authService, platform, attachmentDownloadService) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
        this.authService = authService;
        this.platform = platform;
        this.attachmentDownloadService = attachmentDownloadService;
    }
    getOfficeHirearchy(parentId, typeCode) {
        let reqObj = {
            parentId: parentId,
            typeCode: typeCode,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams({
            fromObject: reqObj
        });
        return this.httpClient.get(API_HIREARCHY_URL, { params: params });
    }
    getAgentOffice(officeId) {
        let reqObj = {
            officeId: officeId,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams({
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams({
            fromObject: searchValue
        });
        return this.httpClient.get(API_ADDON_URL, { params: params });
    }
    getAllAboutBRAM(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/asset');
    }
    formatDateYYYY_MM_DD(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    exportExcel(excelData) {
        //Title, Header & Data
        const title = excelData.title;
        const searchValue = excelData.searchValue;
        const productsHeader = excelData.productsHeader;
        const branchDataForExcel = excelData.branchDataForExcel;
        //Create a workbook with a worksheet
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();
        let worksheet = workbook.addWorksheet('Sheet1');
        // Freeze
        worksheet.views = [
            { state: 'frozen', xSplit: 2, ySplit: 4, activeCell: 'A1' }
        ];
        //Add Row and formatting
        worksheet.mergeCells('A1', 'B2');
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
        reportBy.value = 'Reported By: ' + this.authService.currentUserValue.firstName + this.authService.currentUserValue.lastName;
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
        // Adding Data with Conditional Formatting
        let startIndex = 0;
        for (var i = 0; i < productsHeader.length; i++) {
            let start = this.calculateStartPoint(startIndex);
            startIndex += 1;
            let fireCell = worksheet.getCell(start);
            fireCell.value = productsHeader[i];
            fireCell.font = {
                name: 'Calibri',
                size: 12,
                bold: true
            };
            fireCell.alignment = { vertical: 'middle', horizontal: 'center' };
        }
        branchDataForExcel.forEach(d => {
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
                if (index > 2) {
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
        worksheet.getColumn(1).width = 25;
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
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.attachmentDownloadService.mobileDownload(title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx', blob);
            }
            else {
                file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx');
            }
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
    calculatePremiumDataPoint(index) {
        return alphabet[index] + '6';
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
    formatReportedDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
};
ReportProductSalesChannelPremiumExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentDownloadService }
];
ReportProductSalesChannelPremiumExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], ReportProductSalesChannelPremiumExportService);



/***/ }),

/***/ 81291:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/report-by-product-sales-channel-premium/report-by-product-sales-channel-premium.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportByProductSalesChannelPremiumComponent": () => (/* binding */ ReportByProductSalesChannelPremiumComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_by_product_sales_channel_premium_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-by-product-sales-channel-premium.component.html?ngResource */ 5320);
/* harmony import */ var _report_by_product_sales_channel_premium_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-by-product-sales-channel-premium.component.scss?ngResource */ 11179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/valid-all-feild */ 41018);
/* harmony import */ var _report_by_product_sales_channel_premium_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-by-product-sales-channel-premium-export.service */ 64722);








let ReportByProductSalesChannelPremiumComponent = class ReportByProductSalesChannelPremiumComponent {
    constructor(cdf, exportService) {
        this.cdf = cdf;
        this.exportService = exportService;
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
        this.agentName = null;
        this.companyName = null;
        this.channelName = null;
        this.regionName = null;
        this.clusterName = null;
        this.branchName = null;
        this.productValues = [];
        this.subHeader = [];
        this.dataExcel = [];
        this.branchDataForExcel = [];
        this.productsHeader = [];
        this.branchDataList = [];
        this.title = "Product Sales Channel Premium";
        this.isData = false;
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
            if (this.createFormGroup.invalid) {
                (0,_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.createFormGroup);
            }
            else {
                this.productsHeader = [];
                this.branchDataList = [];
                this.dataList = [];
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    if (res) {
                        if (res.products.length > 0) {
                            for (var i = 0; i < res.products.length; i++) {
                                this.productsHeader.push({ id: res.products[i].id, name: res.products[i].name });
                            }
                            if (res.dataList.length > 0) {
                                this.isData = true;
                                this.dataList = res.dataList;
                                let countNo = 0;
                                for (var i = 0; i < this.dataList.length; i++) {
                                    this.dataList[i].productDataList = [];
                                    countNo++;
                                    this.dataList[i].no = countNo;
                                    for (var j = 0; j < this.productsHeader.length; j++) {
                                        this.dataList[i].productDataList.push({ id: this.productsHeader[j].id, totalPreminum: 0 });
                                    }
                                    if (this.dataList[i].products) {
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
                    }
                }));
            }
            this.cdf.detectChanges();
        });
    }
    generateReportExcel() {
        this.productValues = [];
        this.branchDataForExcel = [];
        this.productValues.push('No.');
        this.productValues.push('Month');
        for (var i = 0; i < this.productsHeader.length; i++) {
            this.productValues.push(this.productsHeader[i].name);
        }
        // Data For Excel
        for (var i = 0; i < this.dataList.length; i++) {
            let list = [];
            list.push(i + 1, this.dataList[i].month);
            for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
                list.push(this.dataList[i].productDataList[j].totalPreminum || 0.00);
            }
            this.branchDataForExcel.push(list);
        }
        let fromDate = null;
        let toDate = null;
        if (this.createFormGroup.value.fromDate) {
            fromDate = this.formatDateDDMMYYY(this.createFormGroup.value.fromDate);
        }
        if (this.createFormGroup.value.toDate) {
            toDate = this.formatDateDDMMYYY(this.createFormGroup.value.toDate);
        }
        let reportData = {
            title: this.title + ' ' + 'Report',
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
            productsHeader: this.productValues,
            branchDataForExcel: this.branchDataForExcel,
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
        this.productsHeader = [];
        this.branchDataList = [];
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
            this.getAllReports();
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
            let fromDateValue = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['fromDate'].value).format('YYYY-MM-DD');
            let toDateValue = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['toDate'].value).format('YYYY-MM-DD');
            if (toDateValue) {
                let formDateSplit = fromDateValue.split("-");
                let toDateSplit = toDateValue.split("-");
                let diffYear = Number(toDateSplit[0]) - Number(formDateSplit[0]);
                if (diffYear != 0 && diffYear != 1) {
                    this.createFormGroup.controls['toDate'].setValue('');
                }
                if (diffYear == 0) {
                    if (formDateSplit[1] > toDateSplit[1]) {
                        this.createFormGroup.controls['toDate'].setValue('');
                    }
                    if (formDateSplit[1] == toDateSplit[1]) {
                        if (formDateSplit[2] > toDateSplit[2]) {
                            this.createFormGroup.controls['toDate'].setValue('');
                        }
                    }
                }
            }
            if (fromDateValue) {
                var toDate = new Date(fromDateValue);
                toDate.setFullYear(toDate.getFullYear() + 1);
                toDate.setDate(toDate.getDate() - 1);
                this.fromMinDate = new Date(fromDateValue);
                this.fromMaxDate = toDate;
            }
        }
        if (type == 'ToDate') {
            let fromDateValue = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['fromDate'].value).format('YYYY-MM-DD');
            let toDateValue = moment__WEBPACK_IMPORTED_MODULE_2__(this.createFormGroup.controls['toDate'].value).format('YYYY-MM-DD');
            if (fromDateValue) {
                let formDateSplit = fromDateValue.split("-");
                let toDateSplit = toDateValue.split("-");
                let diffYear = Number(toDateSplit[0]) - Number(formDateSplit[0]);
                if (diffYear != 0 && diffYear != 1) {
                    this.createFormGroup.controls['fromDate'].setValue('');
                }
                if (diffYear == 0) {
                    if (formDateSplit[1] > toDateSplit[1]) {
                        this.createFormGroup.controls['toDate'].setValue('');
                    }
                    if (formDateSplit[1] == toDateSplit[1]) {
                        if (formDateSplit[2] > toDateSplit[2]) {
                            this.createFormGroup.controls['toDate'].setValue('');
                        }
                    }
                }
            }
            if (toDateValue) {
                var fromDate = new Date(toDateValue);
                fromDate.setFullYear(fromDate.getFullYear() - 1);
                fromDate.setDate(fromDate.getDate() + 1);
                this.fromMinDate = fromDate;
                this.fromMaxDate = new Date(toDateValue);
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
        this.productsHeader = [];
        this.dataList = [];
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
ReportByProductSalesChannelPremiumComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _report_by_product_sales_channel_premium_export_service__WEBPACK_IMPORTED_MODULE_4__.ReportProductSalesChannelPremiumExportService }
];
ReportByProductSalesChannelPremiumComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report-by-product-sales-channel-premium',
        template: _report_by_product_sales_channel_premium_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_by_product_sales_channel_premium_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportByProductSalesChannelPremiumComponent);



/***/ }),

/***/ 32845:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/report-by-product-sales-channel-premium/report-by-product-sales-channel-premium.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportByProductSalesChannelPremiumModule": () => (/* binding */ ReportByProductSalesChannelPremiumModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _report_by_product_sales_channel_premium_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-by-product-sales-channel-premium.component */ 81291);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 8425);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/is-json */ 88757);

















let ReportByProductSalesChannelPremiumModule = class ReportByProductSalesChannelPremiumModule {
};
ReportByProductSalesChannelPremiumModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_report_by_product_sales_channel_premium_component__WEBPACK_IMPORTED_MODULE_0__.ReportByProductSalesChannelPremiumComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild([
                {
                    path: '',
                    component: _report_by_product_sales_channel_premium_component__WEBPACK_IMPORTED_MODULE_0__.ReportByProductSalesChannelPremiumComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS }]
    })
], ReportByProductSalesChannelPremiumModule);



/***/ }),

/***/ 11179:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/report-by-product-sales-channel-premium/report-by-product-sales-channel-premium.component.scss?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border: 1px solid #e3e3e3;\n  border-collapse: collapse;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  min-width: 160px;\n  text-align: center;\n  position: relative;\n  border: 1px solid #e3e3e3;\n  border-collapse: collapse;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\ntable tr th:nth-child(1),\ntable tr td:nth-child(1) {\n  min-width: 50px;\n}\n\n.search-display {\n  width: 40%;\n  float: left;\n}\n\n.search-display div {\n  width: 100%;\n  overflow: hidden;\n}\n\n.search-display div span {\n  width: 33%;\n  display: inline-block;\n  float: left;\n}\n\n.date-display {\n  width: 100%;\n  overflow: hidden;\n}\n\n.date-display span {\n  width: 50%;\n  min-width: 135px;\n  float: left;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #e3e3e3;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n\n.from-date button {\n  padding: 0;\n  position: absolute;\n  right: 0;\n  width: auto;\n  color: #ffffff;\n  background-color: #005f99;\n  border-color: #005f99;\n  height: 35px;\n  padding: 0 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 571px) {\n  .from-date {\n    position: relative;\n  }\n  .from-date .input-date {\n    width: 85%;\n  }\n  .from-date button {\n    top: 23px;\n  }\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: end;\n  padding: 0 5px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1wcm9kdWN0LXNhbGVzLWNoYW5uZWwtcHJlbWl1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTs7RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBSVo7O0FBSFk7O0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNaEI7O0FBSFE7O0VBRUksZUFBQTtBQUtaOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFGSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUlSOztBQUhRO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUtaOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBRkk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQUdKOztBQUNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRVI7O0FBRUE7RUFDSTtJQUNJLGtCQUFBO0VBQ047RUFBTTtJQUNJLFVBQUE7RUFFVjtFQUFNO0lBQ0ksU0FBQTtFQUVWO0FBQ0Y7O0FBRUE7RUFDSSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoicmVwb3J0LWJ5LXByb2R1Y3Qtc2FsZXMtY2hhbm5lbC1wcmVtaXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZWY7XG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHRyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aDpudGgtY2hpbGQoMSksXG4gICAgICAgIHRkOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtZGlzcGxheSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXRlLWRpc3BsYXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgc3BhbiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1pbi13aWR0aDogMTM1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5yaWdodC1ib3JkZXItdHJhbnNmb3JtIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNDklO1xufVxuXG4uZnJvbS1kYXRlIHtcbiAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVmOTk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNWY5OTtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU3MXB4KSB7XG4gICAgLmZyb20tZGF0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmlucHV0LWRhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgdG9wOiAyM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogMCA1cHggMCAwO1xufVxuIl19 */";

/***/ }),

/***/ 5320:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/report-by-product-sales-channel-premium/report-by-product-sales-channel-premium.component.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">By Product Sales Channel Premium</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getAllReports()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\n                        <span class=\"\">Generate</span>\n                    </button>\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\" formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\" [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\" class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\" formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\" class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\" *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\" *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\" (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\" placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\" [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"channelId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\" *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\" placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\" [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"regionId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\" placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\" [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"clusterId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\" *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\" placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\" [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\" formControlName=\"branchId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.agents.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'office')\"\n                                        [items]=\"selectOptions.agents\" bindLabel=\"agentName\" bindValue=\"agentId\"\n                                        formControlName=\"agentId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isData\">\n    <div class=\"col-12\">\n        <div style=\"width: 100%;\n        overflow: hidden; position: relative;\">\n            <div style=\"width: 30%;float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\n            </div>\n            <div style=\"width: 30%; float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <div class=\"date-display\">\n                    <span *ngIf=\"createFormGroup.value.fromDate\">From Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\n                    <span *ngIf=\"createFormGroup.value.toDate\">To Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\n                </div>\n            </div>\n            <div class=\"search-display\">\n                <div *ngIf=\"createFormGroup.value.companyId != '' || \n                createFormGroup.value.channelId !='' || createFormGroup.value.regionId != '' \">\n                    <span *ngIf=\"createFormGroup.value.companyId\">Company: {{ companyName }} </span>\n                    <span *ngIf=\"createFormGroup.value.channelId\">Channel: {{ channelName }} </span>\n                    <span *ngIf=\"createFormGroup.value.regionId\">Region: {{ regionName }} </span>\n                </div>\n                <div *ngIf=\"createFormGroup.value.clusterId != '' || \n                createFormGroup.value.branchId !='' || createFormGroup.value.agentId !='' \">\n                    <span *ngIf=\"createFormGroup.value.clusterId\">Cluster: {{ clusterName }} </span>\n                    <span *ngIf=\"createFormGroup.value.branchId\">Branch: {{ branchName }}</span>\n                    <span *ngIf=\"createFormGroup.value.agentId\">Agent: {{ agentName }} </span>\n                </div>\n            </div>\n        </div>\n        <div style=\"width: 100%;\n        overflow-y: scroll;\n        overflow-x: scroll;\n        max-height: 500px;\">\n            <table border=\"1\">\n                <tr style=\"border-top: 1px solid #000;\">\n                    <th style=\"min-width: 50px; max-width: 50px;\">No.</th>\n                    <th>Month</th>\n                    <th *ngFor=\"let product of productsHeader; let i = index\">{{ product.name }}</th>\n                </tr>\n                <tr style=\"border-top: 1px solid #000;\" *ngFor=\"let data of dataList; let i = index\">\n                    <td  style=\"min-width: 50px; max-width: 50px;\">{{ data.no }}</td>\n                    <td class=\"text-left\">{{ data.month }}</td>\n                    <td class=\"text-right\" *ngFor=\"let product of dataList[i].productDataList; let j = index\">\n                        {{ (product.totalPreminum || 0) | number:'1.2-2'}}\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-by-product-sales-channel-premium_report-by-product-sales-channel-premium-2a507c.js.map