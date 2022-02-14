import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { BizOperationService } from 'src/app/core/biz.operation.service';
import { environment } from 'src/environments/environment';

const API_ADDON_URL = `${environment.apiUrl}/premiumProductSaleChannel`;
const API_HIREARCHY_URL = `${environment.apiUrl}/officeHirearchy`;
const API_AGENT_OFFICE_URL = `${environment.apiUrl}/agentByOffice`;

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ"];

@Injectable({
  providedIn: 'root'
})
export class ReportProductSalesChannelPremiumExportService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
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
    console.log('params =====> ', params);
    return this.httpClient.get(API_ADDON_URL, { params: params });
  }

  getAllAboutBRAM(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/asset');
  }


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

  exportExcel(excelData) {
    //Title, Header & Data
    const title = excelData.title;
    const searchValue = excelData.searchValue
    const productsHeader = excelData.productsHeader
    const branchDataForExcel = excelData.branchDataForExcel

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet1');

    // Freeze
    worksheet.views = [
      { state: 'frozen', xSplit: 2, ySplit: 4, activeCell: 'A1' }
    ];

    //Add Row and formatting
    worksheet.mergeCells('A1', 'B2');
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
        if (searchValue[i].agentName) {
          cellIndex = 'L1';
          cellIndexValue = 'Agent: ' + searchValue[i].agentName;
        }
        if (searchValue[i].companyName) {
          cellIndex = 'M1';
          cellIndexValue = 'Company: ' + searchValue[i].companyName;
        }
        if (searchValue[i].channelName) {
          cellIndex = 'N1';
          cellIndexValue = 'Channel: ' + searchValue[i].channelName;
        }
        if (searchValue[i].regionName) {
          cellIndex = 'L2';
          cellIndexValue = 'Region: ' + searchValue[i].regionName;
        }
        if (searchValue[i].clusterName) {
          cellIndex = 'M2';
          cellIndexValue = 'Cluster: ' + searchValue[i].clusterName;
        }
        if (searchValue[i].branchName) {
          cellIndex = 'N2';
          cellIndexValue = 'Branch: ' + searchValue[i].branchName;
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
    // Adding Data with Conditional Formatting
    let startIndex: number = 0;
    for (var i = 0; i < productsHeader.length; i++) {
      let start = this.calculateStartPoint(startIndex);
      startIndex += 1;
      let fireCell = worksheet.getCell(start);
      fireCell.value = productsHeader[i];
      fireCell.font = {
        name: 'Calibri',
        size: 12,
        bold: true
      }
      fireCell.alignment = { vertical: 'middle', horizontal: 'center' }
    }

    branchDataForExcel.forEach(d => {
      let row = worksheet.addRow(d);
      let no = row.getCell(1);
      if (no) {
        no.alignment = { vertical: 'middle', horizontal: 'center' }
      }
      let index = 0;
      d.forEach(a => {
        index++;
        if (index != 2 && index != 3 && index != 4 && index != 5) {
          let center = row.getCell(index);
          if (center) {
            center.alignment = { vertical: 'middle', horizontal: 'right' }
          }
        }
        if (index == 1) {
          let center = row.getCell(index);
          if (center) {
            center.alignment = { vertical: 'middle', horizontal: 'center' }
          }
        }
      });
    }
    );

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
      fs.saveAs(blob, title + '_' + this.formatDateDDMMYYY(new Date()) + '.xlsx');
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

  calculatePremiumDataPoint(index) {
    return alphabet[index] + '6'
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

}
