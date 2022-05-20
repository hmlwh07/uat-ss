import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-details',
  templateUrl: './error-details.component.html',
  styleUrls: ['./error-details.component.scss'],
})
export class ErrorDetailsComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() { }

}
