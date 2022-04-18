import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-quotation-data-list',
  templateUrl: './quotation-data-list.component.html',
  styleUrls: ['./quotation-data-list.component.scss'],
})
export class QuotationDataListComponent implements OnInit {
  @Input() itemData: any[] = [];
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  
  constructor() { }

  ngOnInit() { }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }


}
