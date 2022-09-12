import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagerService } from './pager.service';

@Component({
  selector: 'pagentation',
  templateUrl: './pagentation.component.html',
  styleUrls: ['./pagentation.component.scss']
})
export class PagentationComponent implements OnInit {
  pager: any = {};
  pageNum: number = 1
  @Input() currentStatus = 1;
  @Input() count: number = 0
  @Input() pageSize: number = 5
  @Input() totalpage: number = 0
  @Input() sourceData: any = []
  @Output() currentPage = new EventEmitter<number>()
  started: number = 0
  endPageIndex: number = 0
  constructor(
    private readonly pagerService: PagerService
  ) { }

  ngOnInit() {
    console.log(this.count);
    
    this.pager = this.pagerService.getPager(this.count, this.currentStatus, this.pageSize);
    this.pager.currentPage = this.currentStatus
    this.calcuStartEnd()
  }
  calcuStartEnd() {

    let count = this.pager.currentPage * this.pageSize
    this.started = count - this.pageSize + 1
    this.endPageIndex = count

  }

  setPage(page: number) {
    if (page == this.pageNum) return true

    this.pageNum = page
    this.pager = this.pagerService.getPager(this.count, page, this.pageSize);
    this.currentPage.emit(this.pageNum)
    this.calcuStartEnd()
  }
}
