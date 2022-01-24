import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moter-print',
  templateUrl: './moter-print.component.html',
  styleUrls: ['./moter-print.component.scss']
})
export class MoterPrintComponent implements OnInit {
  @Input() resourcesId?: string

  constructor() { }

  ngOnInit(): void {
  }

}
