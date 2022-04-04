import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() data: any = []
  @Input() day=new Date()
  constructor(private router: Router,private modalCrl:NgbModal) { }

  ngOnInit() { }

  
  navigateToDetail(data, id?: string) {
    this.modalCrl.dismissAll()
    this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: data, pageId: id } })
  }

}
