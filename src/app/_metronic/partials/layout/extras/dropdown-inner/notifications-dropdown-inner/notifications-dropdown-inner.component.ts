import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, forkJoin, Observable, of } from 'rxjs';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { CustomerService } from 'src/app/pages/customer-detail/customer.service';
import { PolicyService } from 'src/app/pages/policy/policy.service';
import { ProductDataService } from 'src/app/pages/products/services/products-data.service';
import { ProductsService } from 'src/app/_metronic/core/services/products.service';
import { LayoutService } from '../../../../../core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications-dropdown-inner',
  templateUrl: './notifications-dropdown-inner.component.html',
  styleUrls: ['./notifications-dropdown-inner.component.scss'],
})
export class NotificationsDropdownInnerComponent implements OnInit {
  @Input() data
  @Output() emitter = new EventEmitter();
  extrasNotificationsDropdownStyle: 'light' | 'dark' = 'dark';
  activeTabId:
    | 'topbar_notifications_notifications'
    | 'topbar_notifications_events'
    | 'topbar_notifications_logs' = 'topbar_notifications_notifications';
  user: any
  noti: any = []
  constructor(private layout: LayoutService, private notificationService: NotificationService, private auth: AuthService,private prodctService:ProductDataService,private router:Router,private policyService:PolicyService) { }

  async ngOnInit() {
    
    this.extrasNotificationsDropdownStyle = this.layout.getProp(
      'extras.notifications.dropdown.style'
    );
   
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  getActiveCSSClasses(tabId) {
    // if (tabId !== this.activeTabId) {
    //   return '';
    // }
    // return 'active show';
    return 'topbar_notifications_events'
  }
  navDetail(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.policyService.findOne(item.resourceId).pipe(catchError(e => { return of(undefined)}))]).toPromise().then((res) => {
      if (res[0] && res[1]) {
        this.prodctService.createingProd = res[0]
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = res[1]
        this.router.navigateByUrl("/resourse-detail")
        this.emitter.emit(true)
      }
    })
  }

}
