import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Input() menuType = 'Operation';
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
