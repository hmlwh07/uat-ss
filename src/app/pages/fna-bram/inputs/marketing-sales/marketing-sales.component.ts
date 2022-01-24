import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-sales',
  templateUrl: './marketing-sales.component.html',
  styleUrls: ['./marketing-sales.component.scss']
})
export class MarketingSalesComponent implements OnInit {
  @Input() menuType = "MarketingSales";
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
