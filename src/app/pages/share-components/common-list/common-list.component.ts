import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ListingsPagerComponent } from '../../static-pages/pager/pager.component';
import { ListItemAction } from '../list-field.interface';

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
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter();
  @ViewChild(ListingsPagerComponent) listpager: ListingsPagerComponent;
  selectedPageSize = 5;
  selectedPageBtn = 1;

  start = 0;
  end = 5;
  listingargs;
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listingargs = { direction: this.order, col: this.colField };
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

  reponseFromPager(event) {
    this.selectedPageBtn = event.activePage;
    this.selectedPageSize = event.pageSize;
    this.start = (this.selectedPageBtn - 1) * this.selectedPageSize;
    this.end = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.dataList.length ?
      (this.selectedPageBtn * this.selectedPageSize) : this.dataList.length;
  }

  reponseFromAtom(obj) {

  }

  actionTrigger(event) {
    this.btnEvent.emit(event)
  }
}