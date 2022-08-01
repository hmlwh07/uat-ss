"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_report-key-driver_report-key-driver_module_ts"],{

/***/ 13377:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report-key-driver/report-key-driver-export.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportKeyDriverExportService": () => (/* binding */ ReportKeyDriverExportService)
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










const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/report/keyDriver`;
const API_HIREARCHY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/agentByOffice`;
const API_PRODUCT_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/product`;
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
    "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
    "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
    "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
    "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];
let ReportKeyDriverExportService = class ReportKeyDriverExportService extends _app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_3__.BizOperationService {
    constructor(httpClient, authService, platform, attachmentDownloadService) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
        this.authService = authService;
        this.platform = platform;
        this.attachmentDownloadService = attachmentDownloadService;
    }
    getAllProducts() {
        return this.httpClient.get(API_PRODUCT_URL + "-view" + "?showInList=all");
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
    exportExcel(excelData) {
        //Title, Header & Data
        const title = excelData.title;
        const products = excelData.products;
        const subHeader = excelData.subHeader;
        const searchValue = excelData.searchValue;
        const data = excelData.data;
        const totalNewBusinessCase = excelData.totalNewBusinessCase;
        const totalPremium = excelData.totalPremium;
        const roundTotalProductDistribution = excelData.roundTotalProductDistribution;
        const roundTotalAverageCaseSize = excelData.roundTotalAverageCaseSize;
        const manPower = excelData.manPower;
        const activeManPower = excelData.activeManPower;
        const activeRatio = excelData.activeRatio;
        const productivity = excelData.productivity;
        const anpCaseSize = excelData.anpCaseSize;
        const monthlyCaseSize = excelData.monthlyCaseSize;
        const channelProductivity = excelData.channelProductivity;
        //Create a workbook with a worksheet
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_0__.Workbook();
        let worksheet = workbook.addWorksheet('Sheet1');
        // Freeze
        worksheet.views = [
            { state: 'frozen', xSplit: 0, ySplit: 4, activeCell: 'A1' }
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
                if (searchValue[i].productName) {
                    cellIndex = 'K1';
                    cellIndexValue = 'Product: ' + searchValue[i].productName;
                }
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
                    cellIndex = 'K2';
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
        //worksheet.mergeCells('A4:F4');
        let startIndex = 0;
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
        //Adding Data with Conditional Formatting
        data.forEach(d => {
            let row = worksheet.addRow(d);
            let index = 0;
            d.forEach(a => {
                index++;
                let center = row.getCell(index);
                if (index == 1) {
                    if (center) {
                        center.alignment = { vertical: 'middle', horizontal: 'left' };
                    }
                }
                else {
                    center.alignment = { vertical: 'middle', horizontal: 'right' };
                    if (index == 4) {
                        center.numFmt = '0"%"';
                    }
                    else {
                        center.numFmt = '#,##0.00_);(#,##0.00)';
                    }
                }
            });
        });
        if (totalNewBusinessCase != null) {
            let total = data.length + 5;
            let totalCell = worksheet.getCell('A' + total);
            totalCell.value = 'Total';
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: true
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let index = data.length + 5;
            let valueCell = worksheet.getCell('B' + index);
            valueCell.value = totalNewBusinessCase;
            valueCell.font = {
                name: 'Calibri',
                size: 10,
                bold: true
            };
            valueCell.alignment = { vertical: 'middle', horizontal: 'right' };
            valueCell.numFmt = '#,##0.00_);(#,##0.00)';
        }
        if (totalPremium != null) {
            let total = data.length + 5;
            let totalCell = worksheet.getCell('C' + total);
            totalCell.value = totalPremium;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: true
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
        }
        if (roundTotalProductDistribution != null) {
            let total = data.length + 5;
            let totalCell = worksheet.getCell('D' + total);
            totalCell.value = roundTotalProductDistribution;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: true
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            //totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            totalCell.numFmt = '0"%"';
        }
        if (roundTotalAverageCaseSize != null) {
            let total = data.length + 5;
            let totalCell = worksheet.getCell('E' + total);
            totalCell.value = roundTotalAverageCaseSize;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: true
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
        }
        if (manPower != null) {
            let manpowerIndex = data.length + 6;
            let manPowerCell = worksheet.getCell('A' + manpowerIndex);
            manPowerCell.value = 'Manpower';
            manPowerCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            manPowerCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 6;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = manPower;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + manpowerIndex, 'E' + manpowerIndex);
            let manPowerMerge = worksheet.getCell('B' + manpowerIndex);
            manPowerMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (activeManPower != null) {
            let activeManpowerIndex = data.length + 7;
            let activeManPowerCell = worksheet.getCell('A' + activeManpowerIndex);
            activeManPowerCell.value = 'Active Manpower';
            activeManPowerCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            activeManPowerCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 7;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = activeManPower;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + activeManpowerIndex, 'E' + activeManpowerIndex);
            let activeManpowerIndexMerge = worksheet.getCell('B' + activeManpowerIndex);
            activeManpowerIndexMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (activeRatio != null) {
            let activeRatioIndex = data.length + 8;
            let activeRatioIndexCell = worksheet.getCell('A' + activeRatioIndex);
            activeRatioIndexCell.value = 'Active ratio';
            activeRatioIndexCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            activeRatioIndexCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 8;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = activeRatio;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + activeRatioIndex, 'E' + activeRatioIndex);
            let activeRatioMerge = worksheet.getCell('B' + activeRatioIndex);
            activeRatioMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (productivity != null) {
            let productivityndex = data.length + 9;
            let productivityIndexCell = worksheet.getCell('A' + productivityndex);
            productivityIndexCell.value = 'Productivity';
            productivityIndexCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            productivityIndexCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 9;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = productivity;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + productivityndex, 'E' + productivityndex);
            let productivityMerge = worksheet.getCell('B' + productivityndex);
            productivityMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (channelProductivity != null) {
            let channelProductivityIndex = data.length + 10;
            let channelProductivityCell = worksheet.getCell('A' + channelProductivityIndex);
            channelProductivityCell.value = 'Channel Productivity';
            channelProductivityCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            channelProductivityCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 10;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = channelProductivity;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + channelProductivityIndex, 'E' + channelProductivityIndex);
            let channelProductivityMerge = worksheet.getCell('B' + channelProductivityIndex);
            channelProductivityMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (anpCaseSize != null) {
            let anpCaseSizeIndex = data.length + 11;
            let anpCaseSizeCell = worksheet.getCell('A' + anpCaseSizeIndex);
            anpCaseSizeCell.value = 'ANP Case Size';
            anpCaseSizeCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            anpCaseSizeCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 11;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = anpCaseSize;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + anpCaseSizeIndex, 'E' + anpCaseSizeIndex);
            let anpCaseSizeMerge = worksheet.getCell('B' + anpCaseSizeIndex);
            anpCaseSizeMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
        if (monthlyCaseSize != null) {
            let monthlyCaseSizeIndex = data.length + 12;
            let monthlyCaseSizeCell = worksheet.getCell('A' + monthlyCaseSizeIndex);
            monthlyCaseSizeCell.value = 'Monthly Case Size';
            monthlyCaseSizeCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            monthlyCaseSizeCell.alignment = { vertical: 'middle', horizontal: 'left' };
            let total = data.length + 12;
            let totalCell = worksheet.getCell('B' + total);
            totalCell.value = monthlyCaseSize;
            totalCell.font = {
                name: 'Calibri',
                size: 10,
                bold: false
            };
            totalCell.alignment = { vertical: 'middle', horizontal: 'right' };
            totalCell.numFmt = '#,##0.00_);(#,##0.00)';
            worksheet.mergeCells('B' + monthlyCaseSizeIndex, 'E' + monthlyCaseSizeIndex);
            let monthlyCaseSizeMerge = worksheet.getCell('B' + monthlyCaseSizeIndex);
            monthlyCaseSizeMerge.alignment = { vertical: 'middle', horizontal: 'right' };
        }
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
ReportKeyDriverExportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentDownloadService }
];
ReportKeyDriverExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], ReportKeyDriverExportService);



/***/ }),

/***/ 46355:
/*!************************************************************************!*\
  !*** ./src/app/pages/report-key-driver/report-key-driver.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportKeyDriverComponent": () => (/* binding */ ReportKeyDriverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_key_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-key-driver.component.html?ngResource */ 51845);
/* harmony import */ var _report_key_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-key-driver.component.scss?ngResource */ 51814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/core/valid-all-feild */ 41018);
/* harmony import */ var _report_key_driver_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-key-driver-export.service */ 13377);








let ReportKeyDriverComponent = class ReportKeyDriverComponent {
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
        this.displayDataList = [];
        this.totalAverageCaseSize = 0;
        this.totalProductDistribution = 0;
        this.roundTotalProductDistribution = 0;
        this.roundTotalAverageCaseSize = 0;
        this.totalNewBusinessCase = 0;
        this.totalPremium = 0;
        this.activeRatio = 0;
        this.title = 'Key Driver Report';
        this.productivity = 0;
        this.channelProductivity = 0;
        this.anpCaseSize = 0;
        this.monthlyCaseSize = 0;
        this.selectedPeople = [];
        this.productName = 'All';
    }
    ngOnInit() {
        this.loadForm();
        this.getOfficeHirearchy();
        this.getAllProducts();
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
    getAllProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.exportService.getAllProducts().toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    res.push({ statusCd: '02', statusValue: 'Active', name: 'All', code: 'All' });
                    this.productList = res;
                    this.productList = this.productList.filter(obj => obj.statusCd === "02" && obj.statusValue === "Active").reverse();
                }
            }));
        });
    }
    getAllReports() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.totalNewBusinessCase = 0;
            this.totalPremium = 0;
            this.totalProductDistribution = 0;
            this.totalAverageCaseSize = 0;
            this.keyDriver = {};
            this.displayDataList = [];
            this.roundTotalProductDistribution = 0;
            this.roundTotalAverageCaseSize = 0;
            this.activeRatio = 0;
            this.productivity = 0;
            this.channelProductivity = 0;
            this.anpCaseSize = 0;
            this.monthlyCaseSize = 0;
            if (this.createFormGroup.invalid) {
                (0,_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.createFormGroup);
            }
            else {
                if (!this.createFormGroup.value.productCodes) {
                    this.createFormGroup.value.productCodes = "All";
                }
                yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    if (res) {
                        this.keyDriver = res;
                        if (res.productsList.length > 0) {
                            this.isData = true;
                            for (var i = 0; i < res.productsList.length; i++) {
                                this.totalNewBusinessCase += res.productsList[i].pcount;
                                this.totalPremium += res.productsList[i].premium;
                            }
                            for (var i = 0; i < res.productsList.length; i++) {
                                let obj = {
                                    product: res.productsList[i].name,
                                    newBusinessCase: res.productsList[i].pcount,
                                    newBusinessPremium: res.productsList[i].premium,
                                    productDistribution: this.productDistribution(res.productsList[i].pcount, this.totalNewBusinessCase),
                                    averageCaseSize: this.averageCaseSize(res.productsList[i].premium, res.productsList[i].pcount)
                                };
                                this.displayDataList.push(obj);
                            }
                            this.roundTotalProductDistribution = this.totalProductDistribution;
                            //this.roundTotalProductDistribution = this.totalProductDistribution
                            this.roundTotalAverageCaseSize = this.totalAverageCaseSize;
                            if (this.keyDriver.manPower) {
                                this.activeRatio = this.keyDriver.activeManPower / this.keyDriver.manPower;
                            }
                            if (this.keyDriver.activeManPower) {
                                this.productivity = this.totalNewBusinessCase / this.keyDriver.activeManPower;
                            }
                            if (this.keyDriver.manPower) {
                                this.channelProductivity = this.totalNewBusinessCase / this.keyDriver.manPower;
                            }
                            if (this.totalNewBusinessCase != 0) {
                                this.anpCaseSize = this.totalPremium / this.totalNewBusinessCase;
                            }
                            if (this.totalNewBusinessCase != 0) {
                                this.monthlyCaseSize = (this.totalPremium / 12) / this.totalNewBusinessCase;
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
    productDistribution(newBusinessCase, totalNewBusinessCase) {
        let returnValue;
        if (totalNewBusinessCase != 0) {
            returnValue = newBusinessCase * 100 / totalNewBusinessCase;
        }
        else {
            returnValue = 0;
        }
        this.totalProductDistribution += Number(Math.round(returnValue));
        return returnValue;
    }
    averageCaseSize(premium, newBusinessCase) {
        let returnValue;
        if (newBusinessCase != 0) {
            returnValue = premium / newBusinessCase;
        }
        else {
            returnValue = 0;
        }
        this.totalAverageCaseSize += Number(returnValue);
        return returnValue;
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
        this.productValues = ['Product', 'New Business Case', 'New Business Premium	',
            'Product Distribution', 'Average Case Size'];
        // Data
        for (var i = 0; i < this.displayDataList.length; i++) {
            this.dataExcel.push([
                this.displayDataList[i].product,
                this.displayDataList[i].newBusinessCase || 0.00,
                this.displayDataList[i].newBusinessPremium || 0.00,
                Number(Math.round(this.displayDataList[i].productDistribution)) || 0.00,
                //this.displayDataList[i].productDistribution || 0.00,
                this.displayDataList[i].averageCaseSize || 0.00,
            ]);
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
                { branchName: this.branchName },
                { productName: this.productName },
            ],
            products: this.productValues,
            subHeader: this.subHeader,
            data: this.dataExcel,
            totalNewBusinessCase: this.totalNewBusinessCase || 0.00,
            totalPremium: this.totalPremium || 0.00,
            roundTotalProductDistribution: this.roundTotalProductDistribution || 0.00,
            roundTotalAverageCaseSize: this.roundTotalAverageCaseSize || 0.00,
            manPower: this.keyDriver.manPower || 0.00,
            activeManPower: this.keyDriver.activeManPower || 0.00,
            activeRatio: this.activeRatio || 0.00,
            productivity: this.productivity || 0,
            channelProductivity: this.channelProductivity || 0.00,
            anpCaseSize: this.anpCaseSize || 0.00,
            monthlyCaseSize: this.monthlyCaseSize || 0.00
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
        this.totalNewBusinessCase = 0;
        this.totalPremium = 0;
        this.totalProductDistribution = 0;
        this.totalAverageCaseSize = 0;
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
    changeProductOptions(ev) {
        if (ev.name) {
            this.productName = ev.name;
        }
        this.getAllReports();
        this.cdf.detectChanges();
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
            "branchId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            "productCodes": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('All')
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
        this.displayDataList = [];
        this.totalNewBusinessCase = 0;
        this.totalPremium = 0;
        this.totalProductDistribution = 0;
        this.totalAverageCaseSize = 0;
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
ReportKeyDriverComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _report_key_driver_export_service__WEBPACK_IMPORTED_MODULE_4__.ReportKeyDriverExportService }
];
ReportKeyDriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report-key-driver',
        template: _report_key_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_key_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportKeyDriverComponent);



/***/ }),

/***/ 68721:
/*!*********************************************************************!*\
  !*** ./src/app/pages/report-key-driver/report-key-driver.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportKeyDriverModule": () => (/* binding */ ReportKeyDriverModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _report_key_driver_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-key-driver.component */ 46355);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 8425);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/is-json */ 88757);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);


















let ReportKeyDriverModule = class ReportKeyDriverModule {
};
ReportKeyDriverModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_report_key_driver_component__WEBPACK_IMPORTED_MODULE_0__.ReportKeyDriverComponent],
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
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([
                {
                    path: '',
                    component: _report_key_driver_component__WEBPACK_IMPORTED_MODULE_0__.ReportKeyDriverComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS }]
    })
], ReportKeyDriverModule);



/***/ }),

/***/ 51814:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report-key-driver/report-key-driver.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n}\n\n.mat-datepicker-toggle {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n}\n\ntable {\n  overflow: hidden;\n  width: 100%;\n  border: 1px solid #e3e3e3;\n  border-collapse: collapse;\n}\n\ntable tr {\n  width: 100%;\n  overflow: hidden;\n}\n\ntable tr th,\ntable tr td {\n  min-width: 160px;\n  text-align: center;\n  position: relative;\n  border: 1px solid #e3e3e3;\n  border-collapse: collapse;\n}\n\ntable tr th span,\ntable tr td span {\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n.search-display {\n  width: 40%;\n  float: left;\n}\n\n.search-display div {\n  width: 100%;\n  overflow: hidden;\n}\n\n.search-display div span {\n  width: 33%;\n  display: inline-block;\n  float: left;\n}\n\n.date-display {\n  width: 100%;\n  overflow: hidden;\n}\n\n.date-display span {\n  width: 50%;\n  min-width: 135px;\n  float: left;\n  display: block;\n}\n\n.right-border-transform {\n  width: 1px;\n  height: 100%;\n  background-color: #e3e3e3;\n  transform: rotate(0deg);\n  position: absolute;\n  top: 0;\n  left: 49%;\n}\n\n.from-date button {\n  padding: 0;\n  position: absolute;\n  right: 0;\n  width: auto;\n  color: #ffffff;\n  background-color: #005f99;\n  border-color: #005f99;\n  height: 35px;\n  padding: 0 10px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 571px) {\n  .from-date {\n    position: relative;\n  }\n  .from-date .input-date {\n    width: 85%;\n  }\n  .from-date button {\n    top: 23px;\n  }\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: end;\n  padding: 0 5px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1rZXktZHJpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUZROztFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFJWjs7QUFIWTs7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1oQjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBRkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFIUTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFLWjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUZJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFJUjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUFHSjs7QUFDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtFQUNOO0VBQU07SUFDSSxVQUFBO0VBRVY7RUFBTTtJQUNJLFNBQUE7RUFFVjtBQUNGOztBQUVBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InJlcG9ydC1rZXktZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZWY7XG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHRyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaC1kaXNwbGF5IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGUtZGlzcGxheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMzVweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnJpZ2h0LWJvcmRlci10cmFuc2Zvcm0ge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA0OSU7XG59XG5cbi5mcm9tLWRhdGUge1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5OTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA1Zjk5O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTcxcHgpIHtcbiAgICAuZnJvbS1kYXRlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaW5wdXQtZGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB0b3A6IDIzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDA7XG59XG4iXX0= */";

/***/ }),

/***/ 51845:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report-key-driver/report-key-driver.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.key_driver\"|translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\n                        (click)=\"getAllReports()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!isData\" (click)=\"generateReportExcel()\"\n                        class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\">\n                        <span class=\"\">{{\"FORM.generate\"|translate}}</span>\n                    </button>\n                    <button type=\"button\" (click)=\"cancelReport()\" class=\"btn btn-primary ml-2\"\n                        style=\"min-width: 50px;\">\n                        <span class=\"\">{{\"FORM.btn_cancel\"|translate}}</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"createFormGroup\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.from_month\"|translate}}</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\n                                        formControlName=\"fromDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker1\" (dateChange)=\"doValid('FromDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('FromDate')\"\n                                    class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.clear\"|translate}}</button>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6 from-date\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.to_month\"|translate}}</label>\n                                <div class=\"col-sm-6 input-date\">\n                                    <input type=\"text\" readonly class=\"form-control form-control-sm\"\n                                        formControlName=\"toDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                        [matDatepicker]=\"picker\" (dateChange)=\"doValid('ToDate')\" autocomplete=\"off\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                </div>\n                                <button type=\"button\" style=\"margin: 0 !important;\" (click)=\"clearDate('ToDate')\"\n                                    class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.clear\"|translate}}</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\"\n                            *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.company\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\" placeholder=\"Please Select\"\n                                        (change)=\"changeOptions($event, 'channel')\" [items]=\"selectOptions.companies\"\n                                        bindLabel=\"name\" bindValue=\"id\" formControlName=\"companyId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.channel\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.channels.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'region')\"\n                                        [items]=\"selectOptions.channels\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"channelId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.region\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.regions.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'cluster')\"\n                                        [items]=\"selectOptions.regions\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"regionId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.cluster\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.cluster.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'branch')\"\n                                        [items]=\"selectOptions.cluster\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"clusterId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\"\n                        *ngIf=\"createFormGroup.value.fromDate != '' && createFormGroup.value.toDate != '' \">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.branch\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"selectOptions.branches.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeOptions($event, 'agent')\"\n                                        [items]=\"selectOptions.branches\" bindLabel=\"name\" bindValue=\"id\"\n                                        formControlName=\"branchId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.product\"|translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select [readonly]=\"productList.length == 0 \" class=\"ng-custom-select\"\n                                        placeholder=\"Please Select\" (change)=\"changeProductOptions($event)\"\n                                        [items]=\"productList\" bindLabel=\"name\" bindValue=\"code\"\n                                        formControlName=\"productCodes\">\n                                    </ng-select>\n                                    <!-- <ng-select [readonly]=\"productList.length == 0 \" [items]=\"productList\"\n                                        [multiple]=\"true\" bindLabel=\"name\" groupBy=\"gender\" [selectableGroup]=\"true\"\n                                        [selectableGroupAsModel]=\"true\" [closeOnSelect]=\"false\" bindValue=\"id\"\n                                        formControlName=\"products\" [(ngModel)]=\"selectedPeople\">\n                                        <ng-template ng-optgroup-tmp let-item=\"item\" let-item$=\"item$\"\n                                            let-index=\"index\">\n                                            <input id=\"item-{{index}}\" type=\"checkbox\" (click)=\"test(item.gender)\"\n                                                [checked]=\"item$.selected\" [ngModelOptions]=\"{ standalone : true }\" />\n                                            {{item.gender | uppercase}}\n                                        </ng-template>\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                            <input id=\"item-{{index}}\" type=\"checkbox\" [checked]=\"item$.selected\" />\n                                            {{item.name}}\n                                        </ng-template>\n                                    </ng-select> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isData\">\n    <div class=\"col-12\">\n        <div style=\"width: 100%;\n        overflow: hidden; position: relative;\">\n            <div style=\"width: 30%;float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <h3 class=\"card-label left-border-image\" style=\"font-size: 1.15rem;\">{{ title }}</h3>\n            </div>\n            <div style=\"width: 30%; float: left; position: relative;\">\n                <br *ngIf=\"createFormGroup.value.companyId\">\n                <br *ngIf=\"createFormGroup.value.clusterId\">\n                <div class=\"date-display\">\n                    <span *ngIf=\"createFormGroup.value.fromDate\">{{\"FORM.from_month\"|translate}} : {{\n                        formatDateDDMMYYY(createFormGroup.value.fromDate) }} </span>\n                    <span *ngIf=\"createFormGroup.value.toDate\">{{\"FORM.to_month\"|translate}}: {{\n                        formatDateDDMMYYY(createFormGroup.value.toDate) }}</span>\n                </div>\n            </div>\n            <div class=\"search-display\">\n                <div *ngIf=\"createFormGroup.value.companyId != '' || \n                createFormGroup.value.channelId !='' || productName != '' \">\n                    <span *ngIf=\"productName\">{{\"FORM.product\"|translate}}: {{ productName }} </span>\n                    <span *ngIf=\"createFormGroup.value.companyId\">{{\"FORM.company\"|translate}}: {{ companyName }} </span>\n                    <span *ngIf=\"createFormGroup.value.channelId\">{{\"FORM.channel\"|translate}}: {{ channelName }} </span>\n                </div>\n                <div *ngIf=\"createFormGroup.value.regionId != '' ||  createFormGroup.value.clusterId != '' || \n                createFormGroup.value.branchId !='' || createFormGroup.value.agentId !='' \">\n                    <span *ngIf=\"createFormGroup.value.regionId\">{{\"FORM.region\"|translate}}: {{ regionName }} </span>\n                    <span *ngIf=\"createFormGroup.value.clusterId\">{{\"FORM.cluster\"|translate}}: {{ clusterName }} </span>\n                    <span *ngIf=\"createFormGroup.value.branchId\">{{\"FORM.branch\"|translate}}: {{ branchName }}</span>\n                </div>\n                <div *ngIf=\"createFormGroup.value.agentId !='' \">\n                    <span *ngIf=\"createFormGroup.value.agentId\">{{\"FORM.agent_name\"|translate}}: {{ agentName }} </span>\n                </div>\n            </div>\n        </div>\n        <div style=\"width: 100%;\n        overflow-y: scroll;\n        overflow-x: scroll;\n        max-height: 500px;\">\n            <table border=\"1\">\n                <tr>\n                    <!-- <th>{{\"FORM.product\"|translate}}</th>\n                    <th>{{\"FORM.new_business\"|translate}}</th>\n                    <th>{{\"FORM.new_business_premium\"|translate}}</th>\n                    <th>{{\"FORM.product_distribution\"|translate}}</th>\n                    <th>{{\"FORM.average_case\"|translate}}</th> -->\n                    <th>Product</th>\n                    <th>New Business</th>\n                    <th>New Business Premium</th>\n                    <th>Product Distribution</th>\n                    <th>Average Case</th>\n                </tr>\n                <tr *ngFor=\"let data of displayDataList; let i = index\">\n                    <td class=\"text-left\">{{ data.product }}</td>\n                    <td class=\"text-right\">{{ data.newBusinessCase | number:'1.2-2' }}</td>\n                    <td class=\"text-right\">{{ data.newBusinessPremium | number:'1.2-2' }}</td>\n                    <td class=\"text-right\">{{ data.productDistribution | number:'1.0-0' }} % </td>\n                    <td class=\"text-right\">{{ data.averageCaseSize | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Total</td>\n                    <td class=\"text-right\">{{ totalNewBusinessCase | number:'1.2-2' }}</td>\n                    <td class=\"text-right\">{{ totalPremium | number:'1.2-2' }}</td>\n                    <td class=\"text-right\">{{ roundTotalProductDistribution | number:'1.0-0' }} %</td>\n                    <td class=\"text-right\">{{ roundTotalAverageCaseSize | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Manpower</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (keyDriver.manPower || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Active Manpower</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (keyDriver.activeManPower || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Active ratio</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (activeRatio || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Productivity</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (productivity || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Channel Productivity</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (channelProductivity || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">ANP Case Size</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (anpCaseSize || 0) | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-left\">Monthly Case Size</td>\n                    <td class=\"text-right\" colspan=\"4\">{{ (monthlyCaseSize || 0) | number:'1.2-2' }}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"!isData\" style=\"color: gray; text-align: center;\"> There is no data </div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report-key-driver_report-key-driver_module_ts.js.map