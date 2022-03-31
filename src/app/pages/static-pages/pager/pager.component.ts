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

  @Output('responsePager') response = new EventEmitter()
  @Input() sourceData: any[] = [];
  @Input() formType: any[] = [];
  
  pageSizeArray = [5,10,15];
  selectedPageSize = 5;
  sourceDataLength = 0;
  no_of_pages = 0;
  viewData = [];
  viewPageButtonArray = [];
  responseData = [];
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sourceDataLength = this.sourceData.length;
    this.no_of_pages = this.sourceData.length / this.selectedPageSize;
    this.setPageBtnArray(0);
  }

  setPageBtnArray(start : number){
    for(let i=0;i<this.selectedPageSize;i++){
      this.viewPageButtonArray.push(start+i);
    }
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  ngOnDestroy() {
    this.response.unsubscribe();
  }

  pageIncreased(){

  }

  pageDecresed(){
    
  }

  pageFirst(){

  }
  pageLast(){
    
  }

}
