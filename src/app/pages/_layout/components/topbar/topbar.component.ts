import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LayoutService } from '../../../../_metronic/core';
import { AuthService } from '../../../../modules/auth/_services/auth.service';
import { UserModel } from '../../../../modules/auth/_models/user.model';
import KTLayoutQuickSearch from '../../../../../assets/js/layout/extended/quick-search';
import KTLayoutQuickNotifications from '../../../../../assets/js/layout/extended/quick-notifications';
import KTLayoutQuickActions from '../../../../../assets/js/layout/extended/quick-actions';
import KTLayoutQuickCartPanel from '../../../../../assets/js/layout/extended/quick-cart';
import KTLayoutQuickPanel from '../../../../../assets/js/layout/extended/quick-panel';
import KTLayoutQuickUser from '../../../../../assets/js/layout/extended/quick-user';
import KTLayoutHeaderTopbar from '../../../../../assets/js/layout/base/header-topbar';
import { KTUtil } from '../../../../../assets/js/components/util';
import { NotificationService } from 'src/app/_metronic/partials/layout/extras/dropdown-inner/notifications-dropdown-inner/notification.service';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { LanguagesService } from 'src/app/modules/languages/languages.service';
import moment from 'moment';
import { MenuDataService } from 'src/app/core/menu-data.service';
import { MessagingService } from 'src/app/messaging.service';



interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})



export class TopbarComponent implements OnInit, AfterViewInit {
  user$: Observable<UserModel>;
  noti: any = []
  // tobbar extras
  extraSearchDisplay: boolean;
  extrasSearchLayout: 'offcanvas' | 'dropdown';
  extrasNotificationsDisplay: boolean;
  extrasNotificationsLayout: 'offcanvas' | 'dropdown';
  extrasQuickActionsDisplay: boolean;
  extrasQuickActionsLayout: 'offcanvas' | 'dropdown';
  extrasCartDisplay: boolean;
  extrasCartLayout: 'offcanvas' | 'dropdown';
  extrasQuickPanelDisplay: boolean;
  extrasLanguagesDisplay: boolean;
  extrasUserDisplay: boolean;
  extrasUserLayout: 'offcanvas' | 'dropdown';
  currentUser: UserModel = new UserModel()
  languageData: string = 'EN'
  language: LanguageFlag;
  notiCount: number = 0
  unsub: Subscription
  languages: LanguageFlag[] = [
    {
      lang: 'EN',
      name: 'English',
      flag: './assets/media/svg/flags/012-uk.svg',
    },

    {
      lang: 'MM',
      name: 'Myanmar',
      flag: './assets/media/svg/flags/058-myanmar.svg',
    },
  ];
  constructor(private layout: LayoutService, private messageService: MessagingService, private auth: AuthService, private notificationService: NotificationService, private lang: LanguagesService, private cdf: ChangeDetectorRef,) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
  @ViewChild(NgbDropdown) myDrop: NgbDropdown
  @ViewChild(NgbDropdown) myLanguageDrop: NgbDropdown
  ngOnInit(): void {
    let lang = this.lang.getSelectedLanguage()
    if (lang == 'MM') {
      this.language = this.languages[1]
    } else {
      this.language = this.languages[0]
    }
    // topbar extras
    this.extraSearchDisplay = this.layout.getProp('extras.search.display');
    this.extrasSearchLayout = this.layout.getProp('extras.search.layout');
    this.extrasNotificationsDisplay = this.layout.getProp(
      'extras.notifications.display'
    );
    this.extrasNotificationsLayout = this.layout.getProp(
      'extras.notifications.layout'
    );
    this.extrasQuickActionsDisplay = this.layout.getProp(
      'extras.quickActions.display'
    );
    this.extrasQuickActionsLayout = this.layout.getProp(
      'extras.quickActions.layout'
    );
    this.extrasCartDisplay = this.layout.getProp('extras.cart.display');
    this.extrasCartLayout = this.layout.getProp('extras.cart.layout');
    this.extrasLanguagesDisplay = this.layout.getProp(
      'extras.languages.display'
    );
    this.extrasUserDisplay = this.layout.getProp('extras.user.display');
    this.extrasUserLayout = this.layout.getProp('extras.user.layout');
    this.extrasQuickPanelDisplay = this.layout.getProp(
      'extras.quickPanel.display'
    );

    this.user$.subscribe(res => {
      this.currentUser = res
      this.unsub = this.messageService.notiCount.subscribe(notiCount => {
        // console.log("notiCount", notiCount);

        this.notiCount = notiCount
        this.cdf.detectChanges()
      })
      this.getNotiList()
    })
  }

  ngAfterViewInit(): void {
    KTUtil.ready(() => {
      // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      // Add 'implements AfterViewInit' to the class.
      if (this.extraSearchDisplay && this.extrasSearchLayout === 'offcanvas') {
        KTLayoutQuickSearch.init('kt_quick_search');
      }

      if (
        this.extrasNotificationsDisplay &&
        this.extrasNotificationsLayout === 'offcanvas'
      ) {
        // Init Quick Notifications Offcanvas Panel
        KTLayoutQuickNotifications.init('kt_quick_notifications');
      }

      if (
        this.extrasQuickActionsDisplay &&
        this.extrasQuickActionsLayout === 'offcanvas'
      ) {
        // Init Quick Actions Offcanvas Panel
        KTLayoutQuickActions.init('kt_quick_actions');
      }

      if (this.extrasCartDisplay && this.extrasCartLayout === 'offcanvas') {
        // Init Quick Cart Panel
        KTLayoutQuickCartPanel.init('kt_quick_cart');
      }

      if (this.extrasQuickPanelDisplay) {
        // Init Quick Offcanvas Panel
        KTLayoutQuickPanel.init('kt_quick_panel');
      }

      if (this.extrasUserDisplay && this.extrasUserLayout === 'offcanvas') {
        // Init Quick User Panel
        KTLayoutQuickUser.init('kt_quick_user');
      }

      // Init Header Topbar For Mobile Mode
      KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');
    });
  }

  getNotiList(index?) {
    if (index > 0) {

      index++
      this.notificationService.getById(this.currentUser.username).toPromise()
        .then(async (res: any) => {
          if (res) {
            for (let data of res) {
              data.policyStatus = data.policyStatus.toUpperCase();
              data.emailStatus = data.emailStatus ? data.emailStatus.toUpperCase() : null;
              if (data.title.includes('Failed') || data.title.includes('failed') || data.title.includes('fail')) {
                data.policyStatus = 'FAIL'
              }
              data.createdAt = moment(data.createdAt).format("yyyy-MM-DD HH:mm:ss")
              if (data.title.includes('Failed') || data.title.includes('failed') || data.title.includes('fail')) {
                data.policyStatus = 'FAIL'
              }
              if (this.notiCount > 0) {
                localStorage.setItem("KBZ_NOTI", 0 + "")
                this.messageService.notiCount.next(0)
              }
            }
            this.noti = res
            this.cdf.detectChanges()
          }
        });
    } else {

      this.notificationService.getById(this.currentUser.username).toPromise()
        .then(async (res: any) => {
          if (res) {
            for (let data of res) {
              data.policyStatus = data.policyStatus.toUpperCase();
              data.createdAt = moment(data.createdAt).format("yyyy-MM-DD HH:mm:ss")

            }
            this.noti = res
            this.cdf.detectChanges()
          }
        });

    }
  }

  getLanguage(event) {
    if (event == 'MM') {
      this.language = this.languages[1]
      this.myLanguageDrop.close()
    } else {
      this.language = this.languages[0]
      this.myLanguageDrop.close()
    }
  }

  closeDropDown(event) {
    // console.log(event);
    if (event) {
      this.myDrop.close()
    }
  }
}

