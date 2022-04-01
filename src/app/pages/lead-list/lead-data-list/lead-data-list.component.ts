import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-data-list',
  templateUrl: './lead-data-list.component.html',
  styleUrls: ['./lead-data-list.component.scss'],
})
export class LeadDataListComponent implements OnInit {
  @Input() leadList: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {}

  actionBtn(event, type?: string) {
    if (type == "edit") {
      this.navigateToDetail("edit", event.leadId, event.individualId);
    }
    if (type == "view") {
      this.navigateToDetail("view", event.leadId, event.individualId);
    }
  }

  navigateToDetail(data, id?: string, secondaryId?: string) {
    this.router.navigate(["/lead/lead-detail"], {
      queryParams: {
        pageStatus: data,
        pageId: id,
        pageSecondaryId: secondaryId,
        leadId: id,
      },
      // skipLocationChange: true, replaceUrl: true
    });
  }

}
