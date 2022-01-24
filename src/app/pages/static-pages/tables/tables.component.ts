import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
@Input() contents:boolean=false
@Input() plant:boolean=false
@Input() stock:boolean=false
@Input() tableData=[]
  constructor() { }

  ngOnInit(): void {
  }
  onActionView(data,type){

  }
}
