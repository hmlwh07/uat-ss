"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-daily-sales-analysis-by-branch_report-daily-sales-analysis-by-branch_module_ts"],{

/***/ 19149:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/report-daily-sales-analysis-by-branch/report-daily-sales-analysis-by-branch-export.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDailyDalesAnalysisBranchExportService": () => (/* binding */ ReportDailyDalesAnalysisBranchExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exceljs */ 49456);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 68178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/core/biz.operation.service */ 91691);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 18260);







const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/report/dailySalesAnalysis`;
const API_HIREARCHY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/agentByOffice`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportDailyDalesAnalysisBranchExportService = class ReportDailyDalesAnalysisBranchExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__.BizOperationService {
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
};
ReportDailyDalesAnalysisBranchExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ReportDailyDalesAnalysisBranchExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ReportDailyDalesAnalysisBranchExportService);



/***/ }),

/***/ 56694:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report-daily-sales-analysis-by-branch/report-daily-sales-analysis-by-branch.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDailySalesAnalysisByBranchComponent": () => (/* binding */ ReportDailySalesAnalysisByBranchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_daily_sales_analysis_by_branch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-daily-sales-analysis-by-branch.component.html */ 14944);
/* harmony import */ var _report_daily_sales_analysis_by_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-daily-sales-analysis-by-branch.component.scss */ 48356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/core/valid-all-feild */ 53489);
/* harmony import */ var _report_daily_sales_analysis_by_branch_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-daily-sales-analysis-by-branch-export.service */ 19149);







let ReportDailySalesAnalysisByBranchComponent = class ReportDailySalesAnalysisByBranchComponent {
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
        this.displayList = [];
        this.title = 'Daily Sales Analysis Report';
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
                (0,_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.createFormGroup);
            }
            else {
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('dailySalesAnalysis', res);
                    if (res.dailydataList.length > 0) {
                        this.isData = true;
                        for (var i = 0; i < res.dailydataList.length; i++) {
                            for (var j = 0; j < activities.length; j++) {
                                let obj = {
                                    agentName: res.dailydataList[i].agentName,
                                    branchName: res.dailydataList[i].branchName,
                                    activityName: activities[j].activityName,
                                    dailyActualAgainstTarge: this.dailyActualAgainstTarge(activities[j].activityName, res.dailydataList[i]),
                                    dailyConversionToProspect: this.dailyConversionToProspect(activities[j].activityName, res.dailydataList[i]),
                                    dailyConversionToPreviousStage: this.dailyConversionToPreviousStage(activities[j].activityName, res.dailydataList[i]),
                                    dailyExpectedTargetConversion: this.dailyExpectedTargetConversion(activities[j].activityName, res.dailydataList[i]),
                                    dailyExpectedTargetConversionToProspects: this.dailyExpectedTargetConversionToProspects(activities[j].activityName, res.dailydataList[i])
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
    dailyActualAgainstTarge(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalLead, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalAppointmentPhone != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyTargetTotalAppointmentPhone);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalAppointmentFaceToFace != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyTargetTotalAppointmentFaceToFace);
        }
        if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalAppointmentOnline != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyTargetTotalAppointmentOnline);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyTargetTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyTargetTotalNeeds);
        }
        if (activityName == 'Solutions' && obj.dailyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyTargetSolutions);
        }
        if (activityName == 'Sales' && obj.dailyTargetSales != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyTargetSales);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    dailyConversionToProspect(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyActualTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyActualTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyActualTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyActualTotalLead);
        }
        if (activityName == 'Solutions' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyActualTotalLead);
        }
        if (activityName == 'Sales' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyActualTotalLead);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    dailyConversionToPreviousStage(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyActualTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyActualTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.dailyActualTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyActualTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalAppointmentOnline != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyActualTotalAppointmentOnline);
        }
        if (activityName == 'Solutions' && obj.dailyActualTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyActualTotalNeeds);
        }
        if (activityName == 'Sales' && obj.dailyActualTotalSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyActualTotalSolutions);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    dailyExpectedTargetConversion(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalAppointment != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointmentPhone, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointmentFaceToFace, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointmentOnline, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalNeeds, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Solutions' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetSolutions, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Sales' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetSales, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    dailyExpectedTargetConversionToProspects(activityName, obj) {
        let calculatedValue = 0;
        if (activityName == 'Daily Lead') {
            calculatedValue = 0;
        }
        if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointmentPhone, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointmentFaceToFace, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalLead != 0) {
            calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyTargetTotalLead);
        }
        if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalAppointmentOnline != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetTotalNeeds, obj.dailyActualTotalAppointmentOnline);
        }
        if (activityName == 'Solutions' && obj.dailyTargetTotalNeeds != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetSolutions, obj.dailyTargetTotalNeeds);
        }
        if (activityName == 'Sales' && obj.dailyTargetSolutions != 0) {
            calculatedValue = this.calculateDivision(obj.dailyTargetSales, obj.dailyTargetSolutions);
        }
        if (activityName == 'Referrals') {
            calculatedValue = 0;
        }
        return calculatedValue;
    }
    calculateDivision(value, divided) {
        let returnValue;
        if (divided != 0) {
            returnValue = this.mathRoundTo(value / divided, 2);
        }
        else {
            returnValue = 0;
        }
        return returnValue;
    }
    generateReportExcel() {
        this.dataExcel = [];
        console.log('generateReportExcel ', this.reports);
        this.productValues = ['Agent Name', 'Branch Name',
            'Activities', 'Daily Actual against Target',
            'Daily Conversion to Prospect', 'Daily Conversion to Previous Stage',
            'Daily Expected Target Conversion', 'Daily Expected Target Conversion to Prospects'];
        // Data
        for (var i = 0; i < this.displayList.length; i++) {
            this.dataExcel.push([this.displayList[i].agentName,
                this.displayList[i].branchName, this.displayList[i].activityName,
                this.displayList[i].dailyActualAgainstTarge, this.displayList[i].dailyConversionToProspect,
                this.displayList[i].dailyConversionToPreviousStage, this.displayList[i].dailyExpectedTargetConversion,
                this.displayList[i].dailyExpectedTargetConversionToProspects]);
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
        this.cdf.detectChanges();
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '03').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '04').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                    yield this.exportService.getOfficeHirearchy(ev.id, '05').toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                if (ev) {
                    this.branchName = ev.name;
                    yield this.exportService.getAgentOffice(11).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            this.selectOptions.agents = res;
                        }
                    }));
                }
                else {
                    this.branchName = null;
                    this.selectOptions.agents = [];
                    this.createFormGroup.controls['agentId'].setValue('');
                    this.createFormGroup.value.branchId = '';
                    this.createFormGroup.value.agentId = '';
                }
            }
            console.log('type', type);
            console.log('ev', ev);
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
        this.reports = [];
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
ReportDailySalesAnalysisByBranchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _report_daily_sales_analysis_by_branch_export_service__WEBPACK_IMPORTED_MODULE_3__.ReportDailyDalesAnalysisBranchExportService }
];
ReportDailySalesAnalysisByBranchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report-daily-sales-analysis-by-branch',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_daily_sales_analysis_by_branch_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_daily_sales_analysis_by_branch_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportDailySalesAnalysisByBranchComponent);



/***/ }),

/***/ 51317:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/report-daily-sales-analysis-by-branch/report-daily-sales-analysis-by-branch.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDailySalesAnalysisByBranchModule": () => (/* binding */ ReportDailySalesAnalysisByBranchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _report_daily_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-daily-sales-analysis-by-branch.component */ 56694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 76393);















let ReportDailySalesAnalysisByBranchModule = class ReportDailySalesAnalysisByBranchModule {
};
ReportDailySalesAnalysisByBranchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_report_daily_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportDailySalesAnalysisByBranchComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                {
                    path: '',
                    component: _report_daily_sales_analysis_by_branch_component__WEBPACK_IMPORTED_MODULE_0__.ReportDailySalesAnalysisByBranchComponent,
                },
            ]),
        ]
    })
], ReportDailySalesAnalysisByBranchModule);



/***/ }),

/***/ 14944:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/report-daily-sales-analysis-by-branch/report-daily-sales-analysis-by-branch.component.html ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Daily Sales Analysis by Branch</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\n                        (click)=\"getAllReports()\">\n                        <span class=\"flaticon2-magnifier-tool\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\n                        <span class=\"\">Generate</span>\n                    </button>\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\n                        style=\"min-width: 50px;\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">From Date</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">To Date</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\n                                    class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\"\n                            *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Company</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\n                                        (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\"\n                                        bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Channel</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\n                                        [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"channelId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Region</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\n                                        [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"regionId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Cluster</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"clusterId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Branch</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\"\n                                        [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"branchId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Agent Name</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.agents.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'office')\"\n                                        [items]=\"selectOptions.agents\" bindLabel=\"agentName\" bindValue=\"agentId\"\n                                        formControlName=\"agentId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isData\">\n    <div class=\"col-12\">\n        <div style=\"width: 100%;\n        overflow: hidden; position: relative;\">\n            <div style=\"width: 40%;float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.channelId\">\n                <br *ngIf=\"createFormGroup.value.regionId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <br *ngIf=\"createFormGroup.value.branchId\">\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\n            </div>\n            <div style=\"width: 30%; float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.channelId\">\n                <br *ngIf=\"createFormGroup.value.regionId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <br *ngIf=\"createFormGroup.value.branchId\">\n                <div>\n                    <span *ngIf=\"createFormGroup.value.fromDate\">From Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n                    <span *ngIf=\"createFormGroup.value.toDate\">To Date: {{\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\n                </div>\n            </div>\n            <div class=\"search-display\">\n                <br *ngIf=\"createFormGroup.value.agentId\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <span *ngIf=\"createFormGroup.value.agentId\">Agent: {{ agentName }} </span>\n                <span *ngIf=\"createFormGroup.value.companyId\">Company: {{ companyName }} </span>\n                <span *ngIf=\"createFormGroup.value.channelId\">Channel: {{ channelName }} </span>\n                <span *ngIf=\"createFormGroup.value.regionId\">Region: {{ regionName }} </span>\n                <span *ngIf=\"createFormGroup.value.clusterId\">Cluster: {{ clusterName }} </span>\n                <span *ngIf=\"createFormGroup.value.branchId\">Branch: {{ branchName }}</span>\n            </div>\n        </div>\n        <div style=\"width: 100%;\n        overflow-y: hidden;\n        overflow-x: scroll;\">\n            <table border=\"1\">\n                <tr>\n                    <th>Agent Name</th>\n                    <th>Branch Name</th>\n                    <th>Activities</th>\n                    <th>Daily Actual against Target</th>\n                    <th>Daily Conversion to Prospect</th>\n                    <th>Daily Conversion to Previous Stage</th>\n                    <th>Daily Expected Target Conversion</th>\n                    <th>Daily Expected Target Conversion to Prospects</th>\n                </tr>\n                <tr *ngFor=\"let data of displayList; let i = index\">\n                    <td>{{ data.agentName }}</td>\n                    <td>{{ data.branchName }}</td>\n                    <td>{{ data.activityName }}</td>\n                    <td>{{ data.dailyActualAgainstTarge }}</td>\n                    <td>{{ data.dailyConversionToProspect }}</td>\n                    <td>{{ data.dailyConversionToPreviousStage }}</td>\n                    <td>{{ data.dailyExpectedTargetConversion }}</td>\n                    <td>{{ data.dailyExpectedTargetConversionToProspects }}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>");

/***/ }),

/***/ 48356:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/report-daily-sales-analysis-by-branch/report-daily-sales-analysis-by-branch.component.scss ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border-collapse: unset;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  text-align: center;\n  position: relative;\n  border-collapse: unset;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 30%;\n  float: left;\n  margin: 0 0 5px 0;\n  padding-left: 24px;\n}\n\n.search-display span {\n  width: 100%;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n\n.from-date button {\n  padding: 0;\n  position: absolute;\n  right: 0;\n  width: auto;\n  color: #FFFFFF;\n  background-color: #005f99;\n  border-color: #005f99;\n  height: 35px;\n  padding: 0 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 571px) {\n  .from-date {\n    position: relative;\n  }\n  .from-date .input-date {\n    width: 85%;\n  }\n  .from-date button {\n    top: 38px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1kYWlseS1zYWxlcy1hbmFseXNpcy1ieS1icmFuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUZROztFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUlaOztBQUhZOztFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTWhCOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRVI7O0FBRUE7RUFDSTtJQUNJLGtCQUFBO0VBQ047RUFBTTtJQUNJLFVBQUE7RUFFVjtFQUFNO0lBQ0ksU0FBQTtFQUVWO0FBQ0YiLCJmaWxlIjoicmVwb3J0LWRhaWx5LXNhbGVzLWFuYWx5c2lzLWJ5LWJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wtc20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmVmO1xuICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xufVxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiA4cHg7XG59XG5cbnRhYmxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XG4gICAgdHIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGgsXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtZGlzcGxheSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5yaWdodC1ib3JkZXItdHJhbnNmb3JtIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNDklO1xufVxuLmZyb20tZGF0ZSB7ICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvOyAgICAgIFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5OTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA1Zjk5O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTcxcHgpIHtcbiAgICAuZnJvbS1kYXRlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaW5wdXQtZGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB0b3A6IDM4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-daily-sales-analysis-by-branch_report-daily-sales-analysis-by-branch_module_ts.js.map