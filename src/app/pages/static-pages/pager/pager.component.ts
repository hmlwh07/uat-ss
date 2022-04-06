import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivityStatus, TableCol } from '../../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';
import { SelectionModel } from '@angular/cdk/collections';
import { StylePaginatorDirective } from '../../../_metronic/shared/crud-table/components/material-table-view/custom-paginator.directive';
import { PRODUCT_STATUS } from './../../products/models/product.dto';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListingsPagerComponent implements OnInit, AfterViewInit {

  @Output('activePage') activePage = new EventEmitter()
  @Input() sourceData: any[] = [];
  @Input() formType;

  displayBtnCount = 3;
  pageSizeArray = [5, 10, 15];
  selectedPageSize = 5;
  no_of_pages;
  viewPageButtonArray = [];
  responseData = [];
  selectedPageBtn;

  startPageIndex;
  endPageIndex;

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.sourceData.length > 0)
      this.prepareBtnArray();
  }

  prepareBtnArray() {
    this.no_of_pages = this.sourceData.length % this.selectedPageSize == 0 ?
      Math.floor(this.sourceData.length / this.selectedPageSize) :
      Math.floor(this.sourceData.length / this.selectedPageSize) + 1;
    this.selectedPageBtn = this.startPageIndex = 1;
    this.endPageIndex = (this.startPageIndex + this.displayBtnCount) - 1;
    this.setPageBtnArray();
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  ngOnDestroy() {
    this.activePage.unsubscribe();
  }

  clickMenuItem(pageSize: number) {
    this.selectedPageSize = pageSize;
    this.prepareBtnArray();
  }

  pageBtnClicked(btn: number) {
    this.selectedPageBtn = btn;
    this.calPageBtn();
    this.prepareCalDataRows(this.selectedPageBtn);
  }

  pageIncreased() {
    this.selectedPageBtn = this.selectedPageBtn == this.no_of_pages ? this.no_of_pages : this.selectedPageBtn + 1;
    this.prepareCalDataRows(this.selectedPageBtn);
    this.calPageBtn();
  }

  pageDecresed() {
    this.selectedPageBtn = this.selectedPageBtn == 1 ? 1 : this.selectedPageBtn - 1;
    this.prepareCalDataRows(this.selectedPageBtn);
    this.calPageBtn();
  }

  pageFirst() {
    this.selectedPageBtn = 1;
    this.prepareCalDataRows(this.selectedPageBtn);
    this.calPageBtn();
  }

  pageLast() {
    this.selectedPageBtn = this.no_of_pages;
    this.prepareCalDataRows(this.selectedPageBtn);
    this.calPageBtn();
  }

  setPageBtnArray() {
    this.viewPageButtonArray = [];
    for (let i = 0; i < this.displayBtnCount; i++) {
      if (this.startPageIndex + i <= this.no_of_pages) this.viewPageButtonArray.push(this.startPageIndex + i);
    }
    this.cdf.detectChanges();
    this.prepareCalDataRows(this.selectedPageBtn);
  }

  calPageBtn() {
    this.startPageIndex = this.selectedPageBtn == 1 ? this.selectedPageBtn : this.selectedPageBtn - 1;
    this.endPageIndex = this.selectedPageBtn == this.no_of_pages ? this.selectedPageBtn : this.selectedPageBtn + 1;
    this.setPageBtnArray();

    // let remainder = this.selectedPageBtn % this.displayBtnCount;
    // if(remainder == 0){
    //   this.startPageIndex = (this.selectedPageBtn - this.displayBtnCount) + 1;
    //   this.endPageIndex = ((this.startPageIndex + this.displayBtnCount) - 1) < this.no_of_pages?
    //   (this.startPageIndex + this.displayBtnCount) - 1 : this.no_of_pages;
    // }else if(remainder > 0){
    //   this.startPageIndex = (this.selectedPageBtn - remainder) + 1;
    //   this.endPageIndex = ((this.startPageIndex + this.displayBtnCount) - 1) < this.no_of_pages?
    //   (this.startPageIndex + this.displayBtnCount) - 1 : this.no_of_pages;
    // }
  }


  prepareCalDataRows(pageBtn: number) {
    this.selectedPageBtn = pageBtn;
    let tempStart = (this.selectedPageBtn - 1) * this.selectedPageSize;
    let tempEnd = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.sourceData.length ?
      (this.selectedPageBtn * this.selectedPageSize) - 1 : this.sourceData.length - 1;
    this.calDataRows(tempStart, tempEnd);
  }

  calDataRows(start: number, end: number) {
    this.responseData = [];
    let count = end < ((start + this.selectedPageSize) - 1) ? (end - start + 1) : this.selectedPageSize;
    for (let i = 0; i < count; i++) {
      if (start + i <= end) this.responseData.push(this.sourceData[start + i]);
    }
    this.activePage.emit(this.selectedPageBtn);
  }
}
