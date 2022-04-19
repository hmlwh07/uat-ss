import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-quotation-item',
  templateUrl: './quotation-item.component.html',
  styleUrls: ['./quotation-item.component.scss'],
})
export class QuotationItemComponent implements OnInit {
  @Input() itemData: any[] = [];
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  
  constructor() { }

  ngOnInit() { }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }


}
