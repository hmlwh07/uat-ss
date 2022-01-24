import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input() menuType= 'Service';
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
