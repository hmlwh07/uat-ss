import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-print',
  templateUrl: './farmer-print.component.html',
  styleUrls: ['./farmer-print.component.scss']
})
export class FarmerPrintComponent implements OnInit {
  @Input() resourcesId?: string

  constructor() { }

  ngOnInit(): void {
  }

}
