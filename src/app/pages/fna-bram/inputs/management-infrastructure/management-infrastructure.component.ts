import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-infrastructure',
  templateUrl: './management-infrastructure.component.html',
  styleUrls: ['./management-infrastructure.component.scss']
})
export class ManagementInfrastructureComponent implements OnInit {
  @Input() menuType= "ManagementInfrastructure";
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
