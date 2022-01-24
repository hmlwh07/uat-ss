import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  @Input() menuType = 'Technology';
  @Input() fnaId: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
