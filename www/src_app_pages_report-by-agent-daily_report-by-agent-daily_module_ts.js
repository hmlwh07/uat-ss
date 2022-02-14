"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-by-agent-daily_report-by-agent-daily_module_ts"],{

/***/ 60400:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report-by-agent-daily/report-by-agent-daily-export.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportAgentDailyExportService": () => (/* binding */ ReportAgentDailyExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 49456);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 68178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 18260);







const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/summaryReportByBranchForDaily`;
const API_HIREARCHY_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/agentByOffice`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportAgentDailyExportService = class ReportAgentDailyExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getOfficeHirearchy(parentId, typeCode) {
        let reqObj = {
            parentId: parentId,
            typeCode: typeCode,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({
            fromObject: reqObj
        });
        return this.httpClient.get(API_HIREARCHY_URL, { params: params });
    }
    getAgentOffice(officeId) {
        let reqObj = {
            officeId: officeId,
        };
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({
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
            { state: 'frozen', xSplit: 4, ySplit: 5, activeCell: 'A1' }
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
        console.log('searchValue', searchValue);
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
        worksheet.mergeCells('A4:D4');
        let startIndex = 4;
        for (var i = 0; i < products.length; i++) {
            let start = this.calculateStartPoint(startIndex);
            startIndex += 1;
            worksheet.mergeCells(start + ':' + start);
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
        // Adding Data with Conditional Formatting
        data.forEach(d => {
            let row = worksheet.addRow(d);
            let no = row.getCell(1);
            if (no) {
                no.alignment = { vertical: 'middle', horizontal: 'left' };
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
                if (index == 1 || index == 2 || index == 3) {
                    let center = row.getCell(index);
                    if (center) {
                        center.alignment = { vertical: 'middle', horizontal: 'left' };
                    }
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
        // worksheet.getColumn(1).width = 5;
        // worksheet.getColumn(2).width = 20;
        // worksheet.getColumn(3).width = 15;
        // worksheet.getColumn(4).width = 15;
        // worksheet.getColumn(5).width = 20;
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
};
ReportAgentDailyExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ReportAgentDailyExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ReportAgentDailyExportService);



/***/ }),

/***/ 11893:
/*!********************************************************************************!*\
  !*** ./src/app/pages/report-by-agent-daily/report-by-agent-daily.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportByAgentDailyComponent": () => (/* binding */ ReportByAgentDailyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_by_agent_daily_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-by-agent-daily.component.html */ 52267);
/* harmony import */ var _report_by_agent_daily_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-by-agent-daily.component.scss */ 13959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var _report_by_agent_daily_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-by-agent-daily-export.service */ 60400);







let ReportByAgentDailyComponent = class ReportByAgentDailyComponent {
    constructor(cdf, exportService) {
        this.cdf = cdf;
        this.exportService = exportService;
        this.fromMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
        this.fromMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
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
        this.isData = false;
        this.productsHeader = [];
        this.branchDataList = [];
        this.productsSubHeader = [];
        this.dataList = [];
        this.totalDataList = [];
        this.title = 'Daily Activity Report';
    }
    ngOnInit() {
        this.loadForm();
        this.getOfficeHirearchy();
    }
    getOfficeHirearchy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.exportService.getOfficeHirearchy('', '01').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    this.selectOptions.companies = res;
                }
            }));
        });
    }
    getAllReports() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.productList = [];
            this.dataList = [];
            if (this.createFormGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.createFormGroup);
            }
            else {
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('summaryReportByBranchForDaily', res);
                    if (res) {
                        if (res.headerColumnList.length > 0) {
                            for (var i = 0; i < res.headerColumnList.length; i++) {
                                this.productList.push(res.headerColumnList[i]);
                            }
                        }
                        if (res.dataList.length > 0) {
                            this.isData = true;
                            this.dataList = res.dataList;
                            for (var i = 0; i < this.dataList.length; i++) {
                                let list = [];
                                for (var j = 0; j < this.productList.length; j++) {
                                    list.push({
                                        headerWeekName: this.productList[j].headerWeekName,
                                        headerWeekRange: this.productList[j].headerWeekRange,
                                        headerMonthName: this.productList[j].headerMonthName,
                                        headerDate: this.productList[j].headerDate,
                                        headerDateName: this.productList[j].headerDateName,
                                    });
                                }
                                this.dataList[i].productDataList = list;
                                if (this.dataList[i].dynamicList) {
                                    for (var j = 0; j < this.dataList[i].dynamicList.length; j++) {
                                        let totalTargetValue = 0;
                                        for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
                                            if (this.dataList[i].productDataList[k].headerDateName == this.dataList[i].dynamicList[j].headerDateName) {
                                                this.dataList[i].productDataList[k].headerDateName = this.dataList[i].dynamicList[j].headerDateName;
                                                this.dataList[i].productDataList[k].headerDate = this.dataList[i].dynamicList[j].headerDate;
                                                this.dataList[i].productDataList[k].headerWeekName = this.dataList[i].dynamicList[j].headerWeekName;
                                                this.dataList[i].productDataList[k].headerWeekRange = this.dataList[i].dynamicList[j].headerWeekRange;
                                                this.dataList[i].productDataList[k].headerMonthName = this.dataList[i].dynamicList[j].headerMonthName;
                                                this.dataList[i].productDataList[k].targetValue = this.dataList[i].dynamicList[j].targetValue;
                                                this.dataList[i].productDataList[k].dailyValue = this.dataList[i].dynamicList[j].dailyValue;
                                                this.dataList[i].productDataList[k].weeklyValue = this.dataList[i].dynamicList[j].weeklyValue;
                                                this.dataList[i].productDataList[k].monthlyValue = this.dataList[i].dynamicList[j].monthlyValue;
                                                totalTargetValue += Number(this.dataList[i].dynamicList[j].targetValue);
                                            }
                                        }
                                        this.dataList[i].totalTargetValue = totalTargetValue;
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
        console.log('generateReportExcel ', this.reports);
        this.productValues = [];
        this.subHeader = [];
        this.dataExcel = [];
        for (var i = 0; i < this.productList.length; i++) {
            this.productValues.push(this.productList[i].headerDateName);
        }
        // Sub Header
        this.subHeader = ["Agent Name", "Branch Name", "Activities Name", "Target"];
        for (var i = 0; i < this.productList.length; i++) {
            this.subHeader.push(this.productList[i].headerDate);
        }
        // Data
        for (var i = 0; i < this.dataList.length; i++) {
            let list = [];
            list.push(this.dataList[i].agentName, this.dataList[i].branchName, this.dataList[i].activitiesName, this.dataList[i].totalTargetValue);
            for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
                list.push(this.dataList[i].productDataList[j].dailyValue);
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
        console.log('this.productValues =====> ', this.productValues);
        this.exportService.exportExcel(reportData);
    }
    cancelReport() {
        this.createFormGroup.reset();
        this.selectOptions.companies = [];
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.agentName = null;
        this.companyName = null;
        this.channelName = null;
        this.regionName = null;
        this.clusterName = null;
        this.branchName = null;
    }
    changeOptions(ev, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 'company') {
                if (ev) {
                    this.companyName = ev.name;
                    yield this.exportService.getOfficeHirearchy('', '01').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('officeHirearchy', res);
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '02').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.channels = res;
                        }
                    }));
                }
                else {
                    this.channelName = null;
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '03').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.regions = res;
                        }
                    }));
                }
                else {
                    this.regionName = null;
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '04').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.cluster = res;
                        }
                    }));
                }
                else {
                    this.clusterName = null;
                }
            }
            if (type == 'branch') {
                this.selectOptions.branches = [];
                this.selectOptions.agents = [];
                this.createFormGroup.controls['branchId'].setValue('');
                this.createFormGroup.controls['agentId'].setValue('');
                if (ev) {
                    this.clusterName = ev.name;
                    yield this.exportService.getOfficeHirearchy(ev.id, '05').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.branches = res;
                        }
                    }));
                }
                else {
                    this.branchName = null;
                }
            }
            if (type == 'agent') {
                if (ev) {
                    this.branchName = ev.name;
                    yield this.exportService.getAgentOffice(11).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.agents = res;
                        }
                    }));
                }
                else {
                    this.agentName = null;
                    this.selectOptions.agents = [];
                    this.createFormGroup.controls['agentId'].setValue('');
                }
            }
            console.log('type', type);
            console.log('ev', ev);
            if (type == 'office') {
                if (ev) {
                    this.agentName = ev.agentName;
                }
            }
            this.cdf.detectChanges();
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
        //this.getAllReports();
    }
    clearDate(type) {
        if (type == 'FromDate') {
            this.createFormGroup.controls['fromDate'].setValue('');
        }
        if (type == 'ToDate') {
            this.createFormGroup.controls['toDate'].setValue('');
        }
        this.isData = false;
        this.productList = [];
        this.dataList = [];
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
ReportByAgentDailyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _report_by_agent_daily_export_service__WEBPACK_IMPORTED_MODULE_3__.ReportAgentDailyExportService }
];
ReportByAgentDailyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report-by-agent-daily',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_by_agent_daily_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_by_agent_daily_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportByAgentDailyComponent);



/***/ }),

/***/ 88936:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report-by-agent-daily/report-by-agent-daily.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportByAgentDailyModule": () => (/* binding */ ReportByAgentDailyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _report_by_agent_daily_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-by-agent-daily.component */ 11893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 76393);















let ReportByAgentDailyModule = class ReportByAgentDailyModule {
};
ReportByAgentDailyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_report_by_agent_daily_component__WEBPACK_IMPORTED_MODULE_0__.ReportByAgentDailyComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                {
                    path: '',
                    component: _report_by_agent_daily_component__WEBPACK_IMPORTED_MODULE_0__.ReportByAgentDailyComponent,
                },
            ]),
        ]
    })
], ReportByAgentDailyModule);



/***/ }),

/***/ 52267:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/report-by-agent-daily/report-by-agent-daily.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">By Agent Daily</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\n                        (click)=\"getAllReports()\">\n                        <span class=\"flaticon2-magnifier-tool\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\n                        <span class=\"\">Generate</span>\n                    </button>\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\n                        style=\"min-width: 50px;\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"padding: 0;\">\n                                    <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\n                                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"padding: 0;\">\n                                    <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\n                                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\"\n                            *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\n                                        (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\"\n                                        bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\n                                        [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"channelId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\n                                        [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"regionId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"clusterId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\"\n                                        [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"branchId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.agents.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'office')\"\n                                        [items]=\"selectOptions.agents\" bindLabel=\"agentName\" bindValue=\"agentId\"\n                                        formControlName=\"agentId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isData\">\n    <div class=\"col-12\">\n        <div style=\"width: 100%;\n        overflow: hidden; position: relative;\">\n            <div style=\"width: 40%;float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.channelId\">\n                <br *ngIf=\"createFormGroup.value.regionId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <br *ngIf=\"createFormGroup.value.branchId\">\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\n            </div>\n            <div style=\"width: 30%; float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.channelId\">\n                <br *ngIf=\"createFormGroup.value.regionId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <br *ngIf=\"createFormGroup.value.branchId\">\n                <div>\n                    <span *ngIf=\"createFormGroup.value.fromDate\">From Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                    <span *ngIf=\"createFormGroup.value.toDate\">To Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\n                </div>\n            </div>\n            <div class=\"search-display\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <span *ngIf=\"createFormGroup.value.agentId\">Agent: {{ agentName }} </span>\n                <span *ngIf=\"createFormGroup.value.companyId\">Company: {{ companyName }} </span>\n                <span *ngIf=\"createFormGroup.value.channelId\">Channel: {{ channelName }} </span>\n                <span *ngIf=\"createFormGroup.value.regionId\">Region: {{ regionName }} </span>\n                <span *ngIf=\"createFormGroup.value.clusterId\">Cluster: {{ clusterName }} </span>\n                <span *ngIf=\"createFormGroup.value.branchId\">Branch: {{ branchName }}</span>\n            </div>\n        </div>\n        <div style=\"width: 100%;\n        overflow-y: hidden;\n        overflow-x: scroll;\">\n            <table border=\"1\">\n                <tr style=\"border-top: 1px solid #000;\" *ngIf=\"productList.length > 0\">\n                    <th colspan=\"4\"></th>\n                    <th *ngFor=\"let product of productList; let i = index\">{{ product.headerDateName }}</th>\n                </tr>\n                <tr>\n                    <th>Agent Name</th>\n                    <th>Branch Name</th>\n                    <th>Activities Name</th>\n                    <th>Target</th>\n                    <th *ngFor=\"let product of productList; let i = index\">{{ product.headerDate }}</th>\n                </tr>\n                <tr *ngFor=\"let data of dataList; let i = index\">\n                    <td>{{ data.agentName }}</td>\n                    <td>{{ data.branchName }}</td>\n                    <td>{{ data.activitiesName }}</td>\n                    <td>{{ data.totalTargetValue }}</td>\n                    <td *ngFor=\"let daily of dataList[i].productDataList; let j = index; \">{{ daily.dailyValue }}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>");

/***/ }),

/***/ 13959:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report-by-agent-daily/report-by-agent-daily.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border-collapse: unset;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  text-align: center;\n  position: relative;\n  border-collapse: unset;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 30%;\n  float: left;\n  margin: 0 0 5px 0;\n  padding-left: 24px;\n}\n\n.search-display span {\n  width: 100%;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1hZ2VudC1kYWlseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUVKOztBQURJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR1I7O0FBRlE7O0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSVo7O0FBSFk7O0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNaEI7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBR1I7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBRUoiLCJmaWxlIjoicmVwb3J0LWJ5LWFnZW50LWRhaWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZWY7XG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiB1bnNldDtcbiAgICB0ciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0aCxcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiB1bnNldDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaC1kaXNwbGF5IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnJpZ2h0LWJvcmRlci10cmFuc2Zvcm0ge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA0OSU7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-by-agent-daily_report-by-agent-daily_module_ts.js.map