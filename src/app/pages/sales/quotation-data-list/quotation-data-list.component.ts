import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-data-list',
  templateUrl: './quotation-data-list.component.html',
  styleUrls: ['./quotation-data-list.component.scss'],
})
export class QuotationDataListComponent implements OnInit {
  @Input() quoList: any[] = [];
  constructor() { }

  ngOnInit() {}

}
