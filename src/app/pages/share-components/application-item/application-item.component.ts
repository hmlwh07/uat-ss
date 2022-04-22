import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListActionType, ListItemAction } from '../list-field.interface';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.scss'],
})
export class ApplicationItemComponent implements OnInit {
  @Input() itemData: any = {};
  @Output() btnEvent?: EventEmitter<ListItemAction> = new EventEmitter<ListItemAction>()
  eventType = ListActionType
  constructor() { }

  ngOnInit() { }

  actionBtn(event, type?: ListActionType) {
    this.btnEvent.emit({ cmd: type, data: event })
  }

}
