import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommonListComponent implements OnInit, AfterViewInit {

  @Output('responseListings') responseListings = new EventEmitter()
  // @Output('edit') edit = new EventEmitter()
  // @Output('delete') delete = new EventEmitter()
  // @Output('view') view = new EventEmitter()

  @Input() data: any[] = [];
  @Input() type: any;  // form type
  @Input() colField: any; // col field
  @Input() order: string = 'asc' //ascending,descending
  @Output() btnEvent?: EventEmitter<ListItemAction>;
  selectedPageSize;
  selectedPageBtn;

  start;
  end;
  listingargs;
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listingargs = { direction: this.order, col: this.colField };
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }

  reponseFromPager(event) {
    this.selectedPageBtn = event.activePage;
    this.selectedPageSize = event.pageSize;
    this.start = (this.selectedPageBtn - 1) * this.selectedPageSize;
    this.end = ((this.selectedPageBtn * this.selectedPageSize) - 1) < this.data.length ?
      (this.selectedPageBtn * this.selectedPageSize) : this.data.length;
  }

  reponseFromAtom(obj) {

  }

  actionTrigger(event) {
    this.btnEvent.emit(event)
  }
}