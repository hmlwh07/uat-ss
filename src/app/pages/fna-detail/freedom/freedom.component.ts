import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-freedom',
  templateUrl: './freedom.component.html',
  styleUrls: ['./freedom.component.scss']
})
export class FreedomComponent implements OnInit {
  @Input() customerId: any = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
