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

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'listing'
})

export class ListingPipe implements PipeTransform {
  transform(items: [], direction: string, col: string, order: string) {

    let sortedItems = [];
    sortedItems = direction === 'asc' ?
      this.sortAscending(items, col, order) :
      this.sortDescending(items, col, order)
    return sortedItems;
  }

  sortAscending(items, column, type) {
    return [...items.sort(function (a: any, b: any) {
      if (type === 'string') {
        if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
      }
      else {
        return a[column] - b[column];
      }
    })]
  }
  sortDescending(items, column, type) {
    return [...items.sort(function (a: any, b: any) {
      if (type === 'string') {
        if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
      }
      else {
        return b[column] - a[column];
      }
    })]
  }
}


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

  selectedPageSize;
  selectedPageBtn;

  start;
  end;
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('sourceData', this.data)
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  reponseFromPager(event) {
    console.log('listing...event..activePage', event)
    this.selectedPageBtn = event.activePage;
    this.selectedPageSize = event.pageSize;
    this.start = (this.selectedPageBtn - 1) * this.selectedPageSize;
    this.end = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.data.length ?
      (this.selectedPageBtn * this.selectedPageSize) : this.data.length;

      console.log('start',this.start,'end',this.end)
  }

  reponseFromAtom(obj){
    console.log('reponseFromAtom ...',obj)
  }
}