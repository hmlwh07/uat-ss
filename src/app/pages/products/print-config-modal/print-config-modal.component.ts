import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigInput, FromGroupData } from '../../form-component/field.interface';
import { PrintCol, PrintFormat, PrintFormatType, PrintTable } from '../models/print-config.interface';
import { v4 } from 'uuid';
import { EditPrintUIModalComponent } from '../edit-print-ui-modal/edit-print-ui-modal.component';
import { PageUIType } from '../models/product.dto';
import { KBZToastService, ToastMessage } from '../../../modules/loading-toast/toast/kbz-toast.service';

@Component({
  selector: 'app-print-config-modal',
  templateUrl: './print-config-modal.component.html',
  styleUrls: ['./print-config-modal.component.scss']
})
export class PrintConfigModalComponent implements OnInit {
  configData: PrintFormat = {}
  defaultObj: FromGroupData = { id: "" }
  listData: ConfigInput[] = []
  printedFormatTable: PrintTable[] = []
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // if (this.getColCount(event.container.data) < 8) {
        if (event.previousContainer.id == "mainlist") {
          let moveData = event.previousContainer.data[event.previousIndex]
          if (moveData.static) {
            event.container.data.push({ ...moveData })
          } else {
            let col = {
              size: false,
              data: moveData,
              title: moveData.tableTitle || moveData.label || moveData.name,
              background: '#DDEBF7',
              color: '#1F4E78',
              rowspan: 0,
              colspan: 0,
            }
            event.container.data.push({ ...col })
          }

        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
      // } else {
      //   this.toastService.activate("Table maximun column counts is 8", "error")
      // }
    }
  }
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private modalService: NgbModal, private toastService: KBZToastService) {

  }

  getColCount(data: PrintCol[]) {
    let colSize = 0
    data.forEach(x => {
      if (x.data) {
        let defInc = this.defaultObj.pageType == "form" && x.data.type != "label" ? 1 : 0
        colSize += x.colspan > 0 ? x.colspan + defInc : 1 + defInc
      } else {
        colSize += x.colspan > 0 ? x.colspan : 1
      }
    })
    return colSize
  }

  getColSize(col: PrintCol) {
    let colSize = 0
    if (col.data) {
      let defInc = this.defaultObj.pageType == "form" && col.data.type != "label" ? 1 : 0
      colSize += col.colspan > 0 ? col.colspan + defInc : 1 + defInc
    } else {
      let defInc = this.defaultObj.pageType == "form" && col.static ? 1 : 0
      colSize += col.colspan > 0 ? col.colspan + defInc : 1 + defInc
    }
    return colSize
  }

  ngOnInit(): void {

    if (this.configData.tables) {
      this.printedFormatTable = this.configData.tables
    } else {
      let myId: string = v4();
      this.printedFormatTable = [{
        title: this.defaultObj.pageTitle, row: [{
          rowID: myId,
          height: "50px",
          column: []
        }]
      }]
    }
  }
  removeCol(tableIndex: number, rowIndex: number, colIndex: number) {
    (this.printedFormatTable[tableIndex].row[rowIndex].column).splice(colIndex, 1)
  }
  removeRow(tableIndex: number, rowIndex: number) {
    (this.printedFormatTable[tableIndex].row).splice(rowIndex, 1)
  }

  removeTable(tableIndex: number) {
    (this.printedFormatTable).splice(tableIndex, 1)
  }

  addNewRow(tableIndex: number) {
    let myId: string = v4();
    this.printedFormatTable[tableIndex].row.push({
      rowID: myId,
      height: "50px",
      column: []
    })
  }
  addNewCol(tableIndex: number, rowIndex: number) {
    this.printedFormatTable[tableIndex].row[rowIndex].column.push({
      size: true,
      data: null,
      title: "Colum Title",
      background: '#DDEBF7',
      color: '#1F4E78',
      rowspan: 0,
      colspan: 0,
    })
  }

  addNewTable() {
    let myId: string = v4();
    this.printedFormatTable.push({
      title: this.defaultObj.pageTitle, row: [{
        rowID: myId,
        height: "50px",
        column: []
      }]
    })
  }

  editTitle(index) {
    const modalRef = this.modalService.open(EditPrintUIModalComponent, { size: 'sm', backdrop: false });
    modalRef.componentInstance.title = this.printedFormatTable[index].title
    modalRef.componentInstance.isTable = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.printedFormatTable[index].title = res.data
        }
      }
    })
  }

  editCol(tableIndex: number, rowIndex: number, colIndex: number) {
    const modalRef = this.modalService.open(EditPrintUIModalComponent, { size: 'md', backdrop: false });
    modalRef.componentInstance.colConfig = this.printedFormatTable[tableIndex].row[rowIndex].column[colIndex]
    modalRef.componentInstance.isTable = false
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.printedFormatTable[tableIndex].row[rowIndex].column[colIndex] = res.data
        }
      }
    })
  }

  saveConfig() {
    this.configData = {
      id: this.defaultObj.id,
      tableName: this.defaultObj.tableName,
      pageType: this.defaultObj.pageType as PrintFormatType,
      title: this.defaultObj.pageTitle,
      type: PageUIType.DYN,
      tables: this.printedFormatTable,
    }
    this.modal.dismiss({ data: this.configData, type: "save" })
  }


}
