import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { BizOperationService } from '../../../app/core/biz.operation.service';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../../app/modules/auth';

const API_ADDON_URL = `${environment.apiUrl}/summaryReportByBranchForDaily`;
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
export class ReportAgentDailyExportService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient, private authService: AuthService) {
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

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet1');

    // Freeze
    worksheet.views = [
      { state: 'frozen', xSplit: 4, ySplit: 5, activeCell: 'A1' }
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
          }
          searchCell.alignment = { vertical: 'middle', horizontal: 'left' }
        }
      }
    }

    worksheet.addRow([]);

    //Adding Sub Header Row
    worksheet.mergeCells('A4:D4');
    let startIndex: number = 4;
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


    for (var i = 0; i < subHeader.length; i++) {
      let start = this.calculateDataPoint(i);
      worksheet.mergeCells(start + ':' + start);
      let dataCell = worksheet.getCell(start);
      dataCell.value = subHeader[i];
      dataCell.font = {
        name: 'Calibri',
        size: 12,
        bold: true
      }
      dataCell.alignment = { vertical: 'middle', horizontal: 'center' }
    }


    console.log('data =====> ', data);
    // Adding Data with Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(d);
      let no = row.getCell(1);
      if (no) { 
        no.alignment = { vertical: 'middle', horizontal: 'left' }
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
        if (index == 1 || index == 2 || index == 3) {
          let center = row.getCell(index);
          if (center) {
            center.alignment = { vertical: 'middle', horizontal: 'left' }
          }
        }

        if (index > 3) {
          let center = row.getCell(index);         
          center.numFmt = '#,##0.00_);(#,##0.00)';
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
}