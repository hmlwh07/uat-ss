import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

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
  @Output()
  emitter = new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  onActionView(data,type,tbtype){
    this.emitter.emit({
      cmd: type,
      data: data,
      tbtype:tbtype
    });
  }
 

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

}
