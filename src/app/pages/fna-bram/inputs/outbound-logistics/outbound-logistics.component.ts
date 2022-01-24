import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outbound-logistics',
  templateUrl: './outbound-logistics.component.html',
  styleUrls: ['./outbound-logistics.component.scss']
})
export class OutboundLogisticsComponent implements OnInit {
  @Input() menuType = 'OutboundLogistics';
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
