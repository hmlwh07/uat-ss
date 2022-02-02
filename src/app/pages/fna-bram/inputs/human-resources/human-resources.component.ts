import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.scss']
})
export class HumanResourcesComponent implements OnInit {
  @Input() menuType = 'HumanResources';
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
   
  }

  

}
