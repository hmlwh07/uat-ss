"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-weekly-sales-analysis-by-branch_report-weekly-sales-analysis-by-branch_m-4f939a"],{

/***/ 86657:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/report-weekly-sales-analysis-by-branch/report-weekly-sales-analysis-by-branch-export.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportWeeklySalesAnalysisBranchExportService": () => (/* binding */ ReportWeeklySalesAnalysisBranchExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 49456);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 68178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/modules/auth */ 67198);
/* harmony import */ var _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/biz.operation.service */ 91691);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 63002);










const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/report/weeklySalesAnalysis`;
const API_HIREARCHY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/agentByOffice`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportWeeklySalesAnalysisBranchExportService = class ReportWeeklySalesAnalysisBranchExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__.BizOperationService {
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
        const branchDataForExcel = excelData.data;
        //Create a workbook with a worksheet
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();
        let worksheet = workbook.addWorksheet('Sheet1');
        // Freeze
        worksheet.views = [
            { state: 'frozen', xSplit: 0, ySplit: 4, activeCell: 'A1' }
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
            let index = 0;
            d.forEach(a => {
                index++;
                let center = row.getCell(index);
                if (index == 1 || index == 2 || index == 3) {
                    if (center) {
                        center.alignment = { vertical: 'middle', horizontal: 'left' };
                    }
                }
                else {
                    center.alignment = { vertical: 'middle', horizontal: 'right' };
                }
                if (index > 3) {
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
ReportWeeklySalesAnalysisBranchExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentDownloadService }
];
ReportWeeklySalesAnalysisBranchExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], ReportWeeklySalesAnalysisBranchExportService);



/***/ }),

/***/ 62165:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/report-weekly-sales-analysis-by-branch/report-weekly-sales-analysis-by-branch.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportWeeklySalesAnalysisByBranchComponent": () => (/* binding */ ReportWeeklySalesAnalysisByBranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_weekly_sales_analysis_by_branch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-weekly-sales-analysis-by-branch.component.html */ 92449);
/* harmony import */ var _report_weekly_sales_analysis_by_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-weekly-sales-analysis-by-branch.component.scss */ 41758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/valid-all-feild */ 53489);
/* harmony import */ var _report_weekly_sales_analysis_by_branch_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-weekly-sales-analysis-by-branch-export.service */ 86657);








let ReportWeeklySalesAnalysisByBranchComponent = class ReportWeeklySalesAnalysisByBranchComponent {
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
        this.isData = false;
        this.displayList = [];
        this.title = 'Weekly Sales Analysis Report';
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
            this.displayList = [];
            let activities = [
                { activityName: 'Daily Lead' },
                { activityName: 'Appointments (Phone)' },
                { activityName: 'Appointments (Face to Face)' },
                { activityName: 'Appointments (Online)' },
                { activityName: 'Needs (LPP & BRAM complete)' },
                { activityName: 'Solutions' },
                { activityName: 'Sales' },
                { activityName: 'Referrals' }
            ];
            if (this.createFormGroup.invalid) {
                (0,_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.createFormGroup);
            }
            else {
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    if (res.weeklydataList.length > 0) {
                        this.isData = true;
                        for (var i = 0; i < res.weeklydataList.length; i++) {
                            for (var j = 0; j < activities.length; j++) {
                                let obj = {
                                    agentName: res.weeklydataList[i].agentName,
                                    branchName: res.weeklydataList[i].branchName,
                                    activityName: activities[j].activityName,
                                    weekActualAgainstTarge: this.weekActualAgainstTarge(activities[j].activityName, res.weeklydataList[i]),
                                    weekConversionToProspect: this.weekConversionToProspect(activities[j].activityName, res.weeklydataList[i]),
                                    weekConversionToPreviousStage: this.weekConversionToPreviousStage(activities[j].activityName, res.weeklydataList[i]),
                                    weekExpectedTargetConversion: this.weekExpectedTargetConversion(activities[j].activityName, res.weeklydataList[i]),
                                    weekExpectedTargetConversionToProspects: this.weekExpectedTargetConversionToProspects(activities[j].activityName, res.weeklydataList[i])
                                };
                                this.displayList.push(obj);
                            }
                        }
                    }
                    else {
                        this.isData = false;
                    }
                }));
            }
            this.cdf.detectChanges();
        });
    }
    weekActualAgainstTarge(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalLead, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalAppointmentPhone != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyTargetTotalAppointmentPhone);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalAppointmentFaceToFace != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyTargetTotalAppointmentFaceToFace);
        }
        if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalAppointmentOnline != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalAppointmentOnline);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyTargetTotalNeeds);
        }
        if (activityName == 'Solutions' && obj.weeklyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyTargetSolutions);
        }
        if (activityName == 'Sales' && obj.weeklyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyTargetSolutions);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    weekConversionToProspect(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Solutions' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Sales' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    weekConversionToPreviousStage(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.weeklyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyActualTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyActualTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyActualTotalNeeds);
        }
        if (activityName == 'Solutions' && obj.weeklyActualTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyActualTotalNeeds);
        }
        if (activityName == 'Sales' && obj.weeklyActualTotalSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyActualTotalSolutions);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    weekExpectedTargetConversion(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentPhone, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentFaceToFace, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentOnline, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    weekExpectedTargetConversionToProspects(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentOnline, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentFaceToFace, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds, obj.weeklyTargetSolutions);
        }
        if (activityName == 'Solutions' && obj.weeklyTargetTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalNeeds);
        }
        if (activityName == 'Sales' && obj.weeklyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetSolutions);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    calculateDivision(value, divided) {
        let returnValue;
        if (divided != 0) {
            returnValue = value / divided;
        }
        else {
            returnValue = 0;
        }
        return returnValue;
    }
    generateReportExcel() {
        this.dataExcel = [];
        this.productValues = ['Agent Name', 'Branch Name',
            'Activities', 'Week Actual against Target',
            'Week Conversion to Prospect', 'Week Conversion to Previous Stage',
            'Week Expected Target Conversion', 'Week Expected Target Conversion to Prospects'];
        // Data
        for (var i = 0; i < this.displayList.length; i++) {
            this.dataExcel.push([this.displayList[i].agentName,
                this.displayList[i].branchName, this.displayList[i].activityName,
                this.displayList[i].weekActualAgainstTarge || 0.00, this.displayList[i].weekConversionToProspect || 0.00,
                this.displayList[i].weekConversionToPreviousStage || 0.00, this.displayList[i].weekExpectedTargetConversion || 0.00,
                this.displayList[i].monthExpectedTargetConversionToProspects || 0.00]);
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
            productsHeader: this.productValues,
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
        this.displayList = [];
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
        this.displayList = [];
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
ReportWeeklySalesAnalysisByBranchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _report_weekly_sales_analysis_by_branch_export_service__WEBPACK_IMPORTED_MODULE_4__.ReportWeeklySalesAnalysisBranchExportService }
];
ReportWeeklySalesAnalysisByBranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report-weekly-sales-analysis-by-branch',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_weekly_sales_analysis_by_branch_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_weekly_sales_analysis_by_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportWeeklySalesAnalysisByBranchComponent);



/***/ }),

/***/ 56506:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report-weekly-sales-analysis-by-branch/report-weekly-sales-analysis-by-branch.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportWeeklySalesAnalysisByBranchModule": () => (/* binding */ ReportWeeklySalesAnalysisByBranchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _report_weekly_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-weekly-sales-analysis-by-branch.component */ 62165);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 76393);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/is-json */ 47975);

















let ReportWeeklySalesAnalysisByBranchModule = class ReportWeeklySalesAnalysisByBranchModule {
};
ReportWeeklySalesAnalysisByBranchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_report_weekly_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportWeeklySalesAnalysisByBranchComponent],
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
                    component: _report_weekly_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportWeeklySalesAnalysisByBranchComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS }]
    })
], ReportWeeklySalesAnalysisByBranchModule);



/***/ }),

/***/ 92449:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/report-weekly-sales-analysis-by-branch/report-weekly-sales-analysis-by-branch.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">Weekly Sales Analysis by Branch</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\r\n                        (click)=\"getAllReports()\">\r\n                        <span class=\"flaticon2-magnifier-tool\"></span>\r\n                    </button>\r\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\r\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\r\n                        <span class=\"\">Generate</span>\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\r\n                        style=\"min-width: 50px;\">\r\n                        <span class=\"\">Cancel</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6 from-date\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\r\n                                <div class=\"col-sm-6 input-date\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\r\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\r\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 from-date\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\r\n                                <div class=\"col-sm-6 input-date\">\r\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\r\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\r\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\"\r\n                            *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\r\n                                        (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\"\r\n                                        bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\r\n                                        [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"channelId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\r\n                                        [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"regionId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\r\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"clusterId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\"\r\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\"\r\n                                        [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\"\r\n                                        formControlName=\"branchId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select [readonly]=\"selectOptions.agents.length == 0 \" class=\"ng-custom-select\"\r\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'office')\"\r\n                                        [items]=\"selectOptions.agents\" bindLabel=\"agentName\" bindValue=\"agentId\"\r\n                                        formControlName=\"agentId\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"isData\">\r\n    <div class=\"col-12\">\r\n        <div style=\"width: 100%;\r\n        overflow: hidden; position: relative;\">\r\n            <div style=\"width: 30%;float: left; position: relative;\">\r\n                <br *ngIf=\"createFormGroup.value.companyId\">\r\n                <br *ngIf=\"createFormGroup.value.clusterId\">\r\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\r\n            </div>\r\n            <div style=\"width: 30%; float: left; position: relative;\">\r\n                <br *ngIf=\"createFormGroup.value.companyId\">\r\n                <br *ngIf=\"createFormGroup.value.clusterId\">\r\n                <div class=\"date-display\">\r\n                    <span *ngIf=\"createFormGroup.value.fromDate\">From Date: {{\r\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.toDate\">To Date: {{\r\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"search-display\">\r\n                <div *ngIf=\"createFormGroup.value.companyId != '' || \r\n                createFormGroup.value.channelId !='' || createFormGroup.value.regionId != '' \">\r\n                    <span *ngIf=\"createFormGroup.value.companyId\">Company: {{ companyName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.channelId\">Channel: {{ channelName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.regionId\">Region: {{ regionName }} </span>\r\n                </div>\r\n                <div *ngIf=\"createFormGroup.value.clusterId != '' || \r\n                createFormGroup.value.branchId !='' || createFormGroup.value.agentId !='' \">\r\n                    <span *ngIf=\"createFormGroup.value.clusterId\">Cluster: {{ clusterName }} </span>\r\n                    <span *ngIf=\"createFormGroup.value.branchId\">Branch: {{ branchName }}</span>\r\n                    <span *ngIf=\"createFormGroup.value.agentId\">Agent: {{ agentName }} </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 100%;\r\n        overflow-y: scroll;\r\n        overflow-x: scroll;\r\n        max-height: 500px;\">\r\n            <table border=\"1\">\r\n                <tr>\r\n                    <th>Agent Name</th>\r\n                    <th>Branch Name</th>\r\n                    <th>Activities</th>\r\n                    <th>Week Actual against Target</th>\r\n                    <th>Week Conversion to Prospect</th>\r\n                    <th>Week Conversion to Previous Stage</th>\r\n                    <th>Week Expected Target Conversion</th>\r\n                    <th>Week Expected Target Conversion to Prospects</th>\r\n                </tr>\r\n                <tr *ngFor=\"let data of displayList; let i = index\">\r\n                    <td class=\"text-left\">{{ data.agentName }}</td>\r\n                    <td class=\"text-left\">{{ data.branchName }}</td>\r\n                    <td class=\"text-left\">{{ data.activityName }}</td>\r\n                    <td class=\"text-right\">{{ (data.weekActualAgainstTarge || 0) | number:'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ (data.weekConversionToProspect || 0) | number:'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ (data.weekConversionToPreviousStage || 0) | number:'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ (data.weekExpectedTargetConversion || 0) | number:'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ (data.weekExpectedTargetConversionToProspects || 0) | number:'1.2-2' }}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>");

/***/ }),

/***/ 41758:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/report-weekly-sales-analysis-by-branch/report-weekly-sales-analysis-by-branch.component.scss ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border-collapse: unset;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  text-align: center;\n  position: relative;\n  border-collapse: unset;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 40%;\n  float: left;\n}\n\n.search-display div {\n  width: 100%;\n  overflow: hidden;\n}\n\n.search-display div span {\n  width: 33%;\n  display: inline-block;\n  float: left;\n}\n\n.date-display {\n  width: 100%;\n  overflow: hidden;\n}\n\n.date-display span {\n  width: 50%;\n  min-width: 135px;\n  float: left;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n\n.from-date button {\n  padding: 0;\n  position: absolute;\n  right: 0;\n  width: auto;\n  color: #FFFFFF;\n  background-color: #005f99;\n  border-color: #005f99;\n  height: 35px;\n  padding: 0 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 571px) {\n  .from-date {\n    position: relative;\n  }\n  .from-date .input-date {\n    width: 85%;\n  }\n  .from-date button {\n    top: 23px;\n  }\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: end;\n  padding: 0 5px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC13ZWVrbHktc2FsZXMtYW5hbHlzaXMtYnktYnJhbmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTs7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFJWjs7QUFIWTs7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1oQjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFJWjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFHUjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUdBO0VBQ0k7SUFDSSxrQkFBQTtFQUFOO0VBQ007SUFDSSxVQUFBO0VBQ1Y7RUFDTTtJQUNJLFNBQUE7RUFDVjtBQUNGOztBQUdBO0VBQ0ksMkJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InJlcG9ydC13ZWVrbHktc2FsZXMtYW5hbHlzaXMtYnktYnJhbmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZWY7XHJcbiAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcclxufVxyXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDhweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiB1bnNldDtcclxuICAgIHRyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZGlzcGxheSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1kaXNwbGF5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEzNXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtYm9yZGVyLXRyYW5zZm9ybSB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNDklO1xyXG59XHJcblxyXG4uZnJvbS1kYXRlIHsgICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvOyAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVmOTk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA1Zjk5O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTcxcHgpIHtcclxuICAgIC5mcm9tLWRhdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuaW5wdXQtZGF0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRvcDogMjNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiAwIDVweCAwIDA7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-weekly-sales-analysis-by-branch_report-weekly-sales-analysis-by-branch_m-4f939a.js.map