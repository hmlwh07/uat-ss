import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-data-list',
  templateUrl: './activity-data-list.component.html',
  styleUrls: ['./activity-data-list.component.scss'],
})
export class ActivityDataListComponent implements OnInit {
  @Input() activityList: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() { 
    
  }

  navigateToDetail(data) {
    this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: data, pageId: data.activityNo } })
  }

}
