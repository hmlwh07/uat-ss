import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { AuthService } from '../../../app/modules/auth';
import { BizOperationService } from '../../../app/core/biz.operation.service';
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';

const API_ADDON_URL = `${environment.apiUrl}/report/keyDriver`;
const API_HIREARCHY_URL = `${environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${environment.apiUrl}/agentByOffice`;


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
  "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
  "CA", "CB", "CC", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "CZ",
  "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DV", "DW", "DX", "DY", "DZ",
  "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EV", "EW", "EX", "EY", "Z"];

@Injectable({
  providedIn: 'root'
})
export class ReportKeyDriverExportService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient, private authService: AuthService,
    public platform: Platform, private attachmentDownloadService: AttachmentDownloadService) {
    super(httpClient, API_ADDON_URL);
  }

  getOfficeHirearchy(parentId, typeCode) {
    let reqObj = {
      parentId: parentId,
      typeCode: typeCode,
    }
    const params = new HttpParams({
      fromObject: reqObj
    });
    return this.httpClient.get<any>(API_HIREARCHY_URL, { params: params });
  }

  getAgentOffice(officeId) {
    let reqObj = {
      officeId: officeId,
    }
    const params = new HttpParams({
      fromObject: reqObj
    });
    return this.httpClient.get<any>(API_AGENT_OFFICE_URL, { params: params });
  }


  getAllReportData(searchValue) {
    if (searchValue.fromDate) {
      searchValue.fromDate = this.formatDateYYYY_MM_DD(searchValue.fromDate);
    }
    if (searchValue.toDate) {
      searchValue.toDate = this.formatDateYYYY_MM_DD(searchValue.toDate);
    }
    const params = new HttpParams({
      fromObject: searchValue
    });
    return this.httpClient.get<any>(API_ADDON_URL, { params: params });
  }

  exportExcel(excelData) {
    //Title, Header & Data
    const title = excelData.title;
    const products = excelData.products
    const subHeader = excelData.subHeader
    const searchValue = excelData.searchValue
    const data = excelData.data;
    const totalNewBusinessCase = excelData.totalNewBusinessCase
    const totalPremium = excelData.totalPremium
    const roundTotalProductDistribution = excelData.roundTotalProductDistribution
    const roundTotalAverageCaseSize = excelData.roundTotalAverageCaseSize
    const manPower = excelData.manPower
    const activeManPower = excelData.activeManPower
    const activeRatio = excelData.activeRatio
    const productivity = excelData.productivity
    const anpCaseSize = excelData.anpCaseSize
    const monthlyCaseSize = excelData.monthlyCaseSize
    const channelProductivity = excelData.channelProductivity

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet1');

    // Freeze
    worksheet.views = [
      { state: 'frozen', xSplit: 0, ySplit: 4, activeCell: 'A1' }
    ];

    //Add Row and formatting
    worksheet.mergeCells('A1', 'C2');
    let titleRow = worksheet.getCell('A1');
    titleRow.value = title
    titleRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'single',
      bold: true,
      color: { argb: '0085A3' }
    }
    titleRow.alignment = { vertical: 'middle', horizontal: 'left' }

    //Reported Date:
    worksheet.mergeCells('G1', 'G1');
    let reportDate = worksheet.getCell('G1');
    reportDate.value = 'Reported Date: ' + this.formatReportedDate(new Date());
    reportDate.font = {
      name: 'Calibri',
      size: 10,
      bold: true
    }
    reportDate.alignment = { vertical: 'middle', horizontal: 'left' }

    //Reported By:
    worksheet.mergeCells('G2', 'G2');
    let reportBy = worksheet.getCell('G2');
    reportBy.value = 'Reported By: ' + this.authService.currentUserValue.username
    reportBy.font = {
      name: 'Calibri',
      size: 10,
      bold: true
    }
    reportBy.alignment = { vertical: 'middle', horizontal: 'left' }

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
          }
          searchCell.alignment = { vertical: 'middle', horizontal: 'left' }
        }
      }
    }

    worksheet.addRow([]);

    //Adding Sub Header Row
    //worksheet.mergeCells('A4:F4');
    let startIndex: number = 0;
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
      }
      fireCell.alignment = { vertical: 'middle', horizontal: 'center' }
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
            center.alignment = { vertical: 'middle', horizontal: 'left' }
          }
        } else {
          center.alignment = { vertical: 'middle', horizontal: 'right' }
          center.numFmt = '#,##0.00_);(#,##0.00)';
        }
      });
    }
    );


    if (totalNewBusinessCase != null) {
      let total = data.length + 5
      let totalCell = worksheet.getCell('A' + total);
      totalCell.value = 'Total';
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: true
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let index = data.length + 5
      let valueCell = worksheet.getCell('B' + index);
      valueCell.value = totalNewBusinessCase;
      valueCell.font = {
        name: 'Calibri',
        size: 10,
        bold: true
      }
      valueCell.alignment = { vertical: 'middle', horizontal: 'right' }
      valueCell.numFmt = '#,##0.00_);(#,##0.00)';
    }

    if (totalPremium != null) {
      let total = data.length + 5
      let totalCell = worksheet.getCell('C' + total);
      totalCell.value = totalPremium;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: true
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';
    }

    if (roundTotalProductDistribution != null) {
      let total = data.length + 5
      let totalCell = worksheet.getCell('D' + total);
      totalCell.value = roundTotalProductDistribution;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: true
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';
    }

    if (roundTotalAverageCaseSize != null) {
      let total = data.length + 5
      let totalCell = worksheet.getCell('E' + total);
      totalCell.value = roundTotalAverageCaseSize;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: true
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';
    }

    if (manPower != null) {
      let manpowerIndex = data.length + 6
      let manPowerCell = worksheet.getCell('A' + manpowerIndex);
      manPowerCell.value = 'Manpower';
      manPowerCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      manPowerCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 6
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = manPower;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + manpowerIndex, 'E' + manpowerIndex);
      let manPowerMerge = worksheet.getCell('B' + manpowerIndex);
      manPowerMerge.alignment = { vertical: 'middle', horizontal: 'right' }

    }

    if (activeManPower != null) {
      let activeManpowerIndex = data.length + 7
      let activeManPowerCell = worksheet.getCell('A' + activeManpowerIndex);
      activeManPowerCell.value = 'Active Manpower';
      activeManPowerCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      activeManPowerCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 7
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = activeManPower;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + activeManpowerIndex, 'E' + activeManpowerIndex);
      let activeManpowerIndexMerge = worksheet.getCell('B' + activeManpowerIndex);
      activeManpowerIndexMerge.alignment = { vertical: 'middle', horizontal: 'right' }
    }

    if (activeRatio != null) {
      let activeRatioIndex = data.length + 8
      let activeRatioIndexCell = worksheet.getCell('A' + activeRatioIndex);
      activeRatioIndexCell.value = 'Active ratio';
      activeRatioIndexCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      activeRatioIndexCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 8
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = activeRatio;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + activeRatioIndex, 'E' + activeRatioIndex);
      let activeRatioMerge = worksheet.getCell('B' + activeRatioIndex);
      activeRatioMerge.alignment = { vertical: 'middle', horizontal: 'right' }

    }

    if (productivity != null) {
      let productivityndex = data.length + 9
      let productivityIndexCell = worksheet.getCell('A' + productivityndex);
      productivityIndexCell.value = 'Productivity';
      productivityIndexCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      productivityIndexCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 9
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = productivity;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + productivityndex, 'E' + productivityndex);
      let productivityMerge = worksheet.getCell('B' + productivityndex);
      productivityMerge.alignment = { vertical: 'middle', horizontal: 'right' }
    }

    if (channelProductivity != null) {
      let channelProductivityIndex = data.length + 10
      let channelProductivityCell = worksheet.getCell('A' + channelProductivityIndex);
      channelProductivityCell.value = 'Channel Productivity';
      channelProductivityCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      channelProductivityCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 10
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = channelProductivity;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + channelProductivityIndex, 'E' + channelProductivityIndex);
      let channelProductivityMerge = worksheet.getCell('B' + channelProductivityIndex);
      channelProductivityMerge.alignment = { vertical: 'middle', horizontal: 'right' }
    }

    if (anpCaseSize != null) {
      let anpCaseSizeIndex = data.length + 11
      let anpCaseSizeCell = worksheet.getCell('A' + anpCaseSizeIndex);
      anpCaseSizeCell.value = 'ANP Case Size';
      anpCaseSizeCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      anpCaseSizeCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 11
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = anpCaseSize;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + anpCaseSizeIndex, 'E' + anpCaseSizeIndex);
      let anpCaseSizeMerge = worksheet.getCell('B' + anpCaseSizeIndex);
      anpCaseSizeMerge.alignment = { vertical: 'middle', horizontal: 'right' }
    }


    if (monthlyCaseSize != null) {
      let monthlyCaseSizeIndex = data.length + 12
      let monthlyCaseSizeCell = worksheet.getCell('A' + monthlyCaseSizeIndex);
      monthlyCaseSizeCell.value = 'Monthly Case Size';
      monthlyCaseSizeCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      monthlyCaseSizeCell.alignment = { vertical: 'middle', horizontal: 'left' }

      let total = data.length + 12
      let totalCell = worksheet.getCell('B' + total);
      totalCell.value = monthlyCaseSize;
      totalCell.font = {
        name: 'Calibri',
        size: 10,
        bold: false
      }
      totalCell.alignment = { vertical: 'middle', horizontal: 'right' }
      totalCell.numFmt = '#,##0.00_);(#,##0.00)';

      worksheet.mergeCells('B' + monthlyCaseSizeIndex, 'E' + monthlyCaseSizeIndex);
      let monthlyCaseSizeMerge = worksheet.getCell('B' + monthlyCaseSizeIndex);
      monthlyCaseSizeMerge.alignment = { vertical: 'middle', horizontal: 'right' }
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
      const lineHeight = 12 // height per line is roughly 12
      worksheet.eachRow((row) => {
        let maxLine = 1
        row.eachCell((cell) => {
          maxLine = Math.max(cell.value.split('\n').length - 1, maxLine)
        })
        row.height = lineHeight * maxLine
      })
    }

    //Generate & Save Excel File
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8' });
      if (this.platform.is('android') || this.platform.is('ios')) {
        this.attachmentDownloadService.mobileDownload(title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx', blob);
      } else {
        fs.saveAs(blob, title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx');
      }
    });

  }



  calculateStartPoint(index) {
    return alphabet[index] + '4'
  }

  calculateEndPoint(index) {
    return alphabet[index] + '4'
  }

  calculateDataPoint(index) {
    return alphabet[index] + '5'
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('_');
  }

  mathRoundTo(num: number, places: number) {
    const factor = 10 ** places;
    return (Math.round(num * factor) / factor).toLocaleString();
  };

  formatDateYYYY_MM_DD(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  formatReportedDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }
}