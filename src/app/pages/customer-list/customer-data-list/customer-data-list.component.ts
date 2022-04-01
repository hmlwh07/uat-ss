import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-data-list',
  templateUrl: './customer-data-list.component.html',
  styleUrls: ['./customer-data-list.component.scss'],
})
export class CustomerDataListComponent implements OnInit {
  @Input() customerList: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  navigateToDetail(data) {
    this.router.navigate(["/customer/customer-detail"], { queryParams: { pageStatus: data, pageId: data.customerId, pageSecondaryId: data.individualId } })
  }

}
