import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ListingsPagerComponent } from '../../static-pages/pager/pager.component';
import { ListItemAction } from '../list-field.interface';
import { PagentationComponent } from '../pagentation/pagentation.component';

@Component({
  selector: 'app-common-list-2',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommonList2Component implements OnInit, AfterViewInit {

  @Output('responseListings') responseListings = new EventEmitter()
  // @Output('edit') edit = new EventEmitter()
  // @Output('delete') delete = new EventEmitter()
  // @Output('view') view = new EventEmitter()
  @Input('data') dataList: any = [];
  // @Input('data') dataList: any[];
  @Input() type: any;  // form type
  @Input() colField: any; // col field
  @Input() order: string = 'asc' //ascending,descending
  // @Output() btnEvent?: EventEmitter<ListItemAction>;
  @Input() total: number = 0;
  @Input() totalpage: number = 0
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter();
  @Output() pageEvent?: EventEmitter<ListItemAction> = new EventEmitter();
  @ViewChild(ListingsPagerComponent) listpager: ListingsPagerComponent;
  @ViewChild(PagentationComponent) listpagination: PagentationComponent
  selectedPageSize = 5;
  selectedPageBtn = 1;
  isPager: boolean = false
  start = 0;
  end = 5;
  listingargs;
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.listingargs = { direction: this.order, col: this.colField };
    // || this.type == 'activity'
    if (this.type == 'lead' || this.type == 'policy' || this.type == 'activity'|| this.type == 'customer') {
      this.isPager = true
    }
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  detchChange() {
    if (this.listpager) {
      this.listpager.prepareBtnArray()
    }
    this.cdf.detectChanges()
  }
  detchChangePagination() {
    if (this.listpagination) {
      this.listpagination.ngOnInit()
    }
    this.cdf.detectChanges()
  }
  detechStartEnd() {
    if (this.listpagination) {
      this.listpagination.calcuStartEnd()
    }
    this.cdf.detectChanges()
  }

  reponseFromPager(event) {
    this.selectedPageBtn = event.activePage;
    this.selectedPageSize = event.pageSize;
    this.start = (this.selectedPageBtn - 1) * this.selectedPageSize;
    this.end = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.dataList.length ?
      (this.selectedPageBtn * this.selectedPageSize) : this.dataList.length;
  }

  reponseFromAtom(obj) {

  }
  getDatabyPage(event) {
    this.pageEvent.emit(event)
  }

  actionTrigger(event) {
    this.btnEvent.emit(event)
  }
}