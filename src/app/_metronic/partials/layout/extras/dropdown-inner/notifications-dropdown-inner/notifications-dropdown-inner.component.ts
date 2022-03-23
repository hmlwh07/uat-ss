import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, UserModel } from 'src/app/modules/auth';
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
  extrasNotificationsDropdownStyle: 'light' | 'dark' = 'dark';
  activeTabId:
    | 'topbar_notifications_notifications'
    | 'topbar_notifications_events'
    | 'topbar_notifications_logs' = 'topbar_notifications_notifications';
  user: any
  noti: any = []
  constructor(private layout: LayoutService, private notificationService: NotificationService, private auth: AuthService,private prodctService:ProductDataService,private router:Router) { }

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
  navDetail(item){
    this.prodctService.findOne(item.resourceId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = item
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }
}
