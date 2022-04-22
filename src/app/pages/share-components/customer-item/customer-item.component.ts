import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
})
export class CustomerItemComponent implements OnInit {
  @Input() itemData: any = {};
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  constructor() { }

  ngOnInit() { }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }


}
