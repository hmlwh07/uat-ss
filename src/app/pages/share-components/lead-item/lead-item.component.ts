import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-lead-item',
  templateUrl: './lead-item.component.html',
  styleUrls: ['./lead-item.component.scss'],
})
export class LeadItemComponent implements OnInit {
  @Input() itemData: any[] = [];
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  constructor() { }

  ngOnInit() { }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }


}
