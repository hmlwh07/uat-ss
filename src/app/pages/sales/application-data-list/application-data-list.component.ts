import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-data-list',
  templateUrl: './application-data-list.component.html',
  styleUrls: ['./application-data-list.component.scss'],
})
export class ApplicationDataListComponent implements OnInit {
  @Input() applications: any[] = [];
  
  constructor() {
  
   }

  ngOnInit() {

  }

}
