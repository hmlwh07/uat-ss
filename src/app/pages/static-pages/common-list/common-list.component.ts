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
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommonListingComponent implements OnInit, AfterViewInit {

  @Output('responseListings') responseListings = new EventEmitter()
  @Output('edit') edit = new EventEmitter()
  @Output('delete') delete = new EventEmitter()
  @Output('view') view = new EventEmitter()

  @Input() data: any[] = [];
  @Input() type: any;  // form type
  @Input() colField: any; // col field
  @Input() order: any; //ascending,descending

  displayBtnCount = 3;
  pageSizeArray = [5,10,15];
  selectedPageSize = 5;
  no_of_pages;
  viewPageButtonArray = [];
  responseData = [];
  selectedPageBtn;

  startPageIndex;
  endPageIndex;

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('sourceData',this.data)
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  reponseFromPager(event){
    console.log('listing...event..activePage',event)
  }
}
