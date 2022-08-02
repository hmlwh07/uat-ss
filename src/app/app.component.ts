import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  HostListener,
  NgZone,
  ApplicationRef,
} from '@angular/core';

import { SplashScreenService } from './_metronic/partials/layout/splash-screen/splash-screen.service';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableExtendedService } from './_metronic/shared/crud-table';
import { ProductsService } from './_metronic/core/services/products.service';
import { LoadingService } from './modules/loading-toast/loading/loading.service';
import { MasterDataService } from './modules/master-data/master-data.service';
import { AuthService } from './modules/auth';
import { Device } from "@capacitor/device"
import { App as CapacitorApp } from '@capacitor/app';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { AlertService } from './modules/loading-toast/alert-model/alert.service';
import { MenuDataService } from './core/menu-data.service';
import { MessagingService } from './messaging.service';
import { UserTokenService } from './user-token.service';
import { KBZToastService } from './modules/loading-toast/toast/kbz-toast.service';
import { AlertComponet } from './modules/loading-toast/alert-model/alert.component';
import { locale as enLang } from './modules/languages/vocabs/en';
import { locale as mmLang } from './modules/languages/vocabs/mm';
import { LanguagesService } from './modules/languages/languages.service';
import { Capacitor } from '@capacitor/core';
// import {
//   ActionPerformed,
//   PushNotificationSchema,
//   PushNotifications,
//   Token,
// } from '@capacitor/push-notifications';
import { FireTopicService } from './fire-top.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private userToken = ""
  private user = null
  private pushToken = ""
  constructor(
    private splashScreenService: SplashScreenService,
    private router: Router,
    private tableService: TableExtendedService,
    private itemService: ProductsService,
    private kbzToast: KBZToastService,
    private master: MasterDataService,
    private authService: AuthService,
    private zone: NgZone,
    private applicationRef: ApplicationRef,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private menuService: MenuDataService,
    private modalCtrl: ModalController,
    private loadingService: LoadingService,
    private messagingService: MessagingService,
    private userTokenService: UserTokenService,
    private langageService: LanguagesService,
    private auth: AuthService,
    private plat: Platform,
    private topicService: FireTopicService,
  ) {
    this.langageService.loadTranslations(
      enLang,
      mmLang
    )


  }
  @HostListener('window:unload', ['$event'])
  beforeUnloadHandler(event) {
    if (this.auth.isLoggedIn)
      console.log("LOGIN");

    this.setTimeout()
    // const data = this.itemService.prodSubject.getValue()
    //console.log(`I'm leaving the app!`, data);
    // localStorage.setItem("itemsData", JSON.stringify(data));
  }
  async setTimeout() {
    let now = new Date().getTime()
    // console.log("entered", now);
    await this.auth.setSection(now);
  }

  ngOnInit() {
    const productData = {
      forms: [],
      products: [],
      formObjs: [],
      configPage: []
    };
    this.requestPermission()
    const itemsData = localStorage.getItem("itemsData")
    this.itemService.loadItems(JSON.parse(itemsData) || productData);
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // clear filtration paginations and others
        this.tableService.setDefaults();
        // hide splash screen
        this.splashScreenService.hide();

        // scroll to top on every route change
        window.scrollTo(0, 0);

        // to display back the body content
        setTimeout(() => {
          document.body.classList.add('page-loaded');
        }, 500);
        this.zone.run(() =>
          setTimeout(() => {
            this.applicationRef.tick();
          }, 0)
        );
      }
    });
    this.unsubscribe.push(routerSubscription);
    console.log(this.menuService.dataAccess.value)


    let unsub = this.authService.currentUserSubject.subscribe((res) => {
      if (res) {
        this.user = res
        this.menuService.getMenusData()
        if (this.userToken)
          this.updateCutomerToken(this.userToken)
        // this.master.getType()
        let count = localStorage.getItem("KBZ_NOTI")
        console.log("COUNT",count);
        this.messagingService.notiCount.next(Number(count))
      }
    })

    this.unsubscribe.push(unsub);

    Device.getInfo().then((res) => {
      if (res.platform != "web") {
        CapacitorApp.addListener('backButton', ({ canGoBack }) => {
          if (!canGoBack) {
            this.confirmExist();
          } else {
            // this.modalCtrl.getTop().then((res)=>{
            //   console.log(res);

            // })
            window.history.back();
          }
        });
        const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

        if (isPushNotificationsAvailable) {
          // this.initNoti();
        }
      } else {
        this.requestPermission()

      }
    })
    console.log("PLat", this.plat);

    let unsublogin = this.plat.pause.subscribe((res) => {
      if (this.auth.isLoggedIn)
        this.setTimeout()
    })
    this.unsubscribe.push(unsublogin)

    let unsubtime = this.plat.resume.subscribe((res) => {
      if (this.auth.isLoggedIn)
        console.log("test", this.auth.isLoggedIn);

      this.checkTimeOut()
    })
    this.plat.ready().then(async (res) => {
      let token = await this.auth.checkToken()
      if (token)
        console.log("testtoken", token);

      this.checkTimeOut()
    })
    this.unsubscribe.push(unsubtime);
  }

  // initNoti() {
  //   console.log("LOGIN");
    
  //   PushNotifications.requestPermissions().then(result => {
  //     if (result.receive === 'granted') {
  //       // Register with Apple / Google to receive push via APNS/FCM
  //       PushNotifications.register();
  //     } else {
  //       // Show some error
  //     }
  //   });

  //   // On success, we should be able to receive notifications
  //   PushNotifications.addListener('registration',
  //     (token: Token) => {
  //       // console.log('Push registration success, token: ' + token.value);
  //       this.pushToken = token.value
  //       this.subscribeTokenToTopic(token.value)
  //       if (this.user.userId) {
  //         // this.updateCutomerToken(this.pushToken)
  //       }
  //     }
  //   );

  //   // Some issue with our setup and push will not work
  //   PushNotifications.addListener('registrationError',
  //     (error: any) => {
  //       // alert('Error on registration: ' + JSON.stringify(error));
  //     }
  //   );

  //   // Show us the notification payload if the app is open on our device
  //   PushNotifications.addListener('pushNotificationReceived',
  //     (notification: PushNotificationSchema) => {
  //       // alert('Push received: ' + JSON.stringify(notification));
  //       // console.log('Push received: ' + JSON.stringify(notification));
  //       let value = this.messagingService.notiCount.value + 1
  //       this.messagingService.notiCount.next(value)
  //       // let count = parseInt(localStorage.getItem("NOTI_KBZ")) || 0
  //       // count += 1
  //       // localStorage.setItem("NOTI_KBZ", count + "")
  //     }
  //   );
  //   // Method called when tapping on a notification
  //   PushNotifications.addListener('pushNotificationActionPerformed',
  //     (notification: ActionPerformed) => {
  //       // alert('Push action performed: ' + JSON.stringify(notification));
  //       // console.log('Push received: ' + JSON.stringify(notification));
  //       // this.navClt.navigateForward(['/app/notifications'])
  //       this.messagingService.notiCount.next(0)
  //     }
  //   );
  // }


  subscribeTokenToTopic(token) {
    // console.log(`"all" is subscribed`, token);
    if (!token)
      return false
    let postData = {
      firebaseToken: token
    }
    this.topicService.doRegister(postData).toPromise().then(res => {
      if (res) {
        console.log(`"all" is subscribed`);
      }
    })
    // fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/all`, {
    //   method: 'POST',
    //   headers: new Headers({
    //     Authorization: `key=${environment.firebaseConfig.serverKey}`
    //   })
    // })
    //   .then((response) => {
    //     if (response.status < 200 || response.status >= 400) {
    //       console.log(response.status, response);
    //     }
    //     console.log(`"all" is subscribed`);
    //   })
    //   .catch((error) => {
    //     console.error(error.result);
    //   });
    return true;
  }


  async checkTimeOut() {
    // return false
    let now = new Date().getTime();
    let oldTime = await this.auth.getSection()
    let fiveMin = parseInt(oldTime) > 0 ? parseInt(oldTime) + (15 * 60 * 1000) : 0;
    console.log(now, fiveMin);

    if (now > fiveMin) {
      this.auth.logout();
      document.location.reload();
    }
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  async confirmExist() {
    // this.alertService.activate("Do you want to exit the app?", "App").then((res: any) => {
    //   if (res) {
    //     if (res.type == "ok") {
    //       CapacitorApp.exitApp();
    //     }
    //   }
    // })
    let alert = await this.alertCtrl.create({
      message: 'Do you want to exit the app?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('canceled :)');
        }
      }, {
        text: 'Yes',
        handler: () => {
          CapacitorApp.exitApp();
        }
      }],
      backdropDismiss: false,
      cssClass: "my-customer-alert",
    })
    await alert.present();
    alert.onDidDismiss().then(res => {
    })
  }

  // requestPermission() {
  //   console.log("request Noti Token");

  //   this.messagingService.requestPermission().subscribe({
  //     next: (token) => {
  //       console.log('Permission granted! Save to the server!', token);
  //       if (this.user) {
  //         this.updateCutomerToken(token)
  //       }
  //       this.listenForMessages()
  //     },
  //     error: (error) => { console.error(error); },
  //   });
  // }

  requestPermission() {
    // console.log("premission request");
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
      .then(async (registration) => {
        console.log(registration);

        // messaging.useServiceWorker(registration);
        await this.messagingService.useWorker(registration)
        await this.messagingService.requestPermission().subscribe({
          next: (token) => {
            console.log('Permission granted! Save to the server!', token);
            if (this.user) {
              this.updateCutomerToken(token)
            }
            this.listenForMessages()
          },
          error: (error) => { console.error(error); },
        }
        );
        // Request permission and get token.....
      });
  }


  listenForMessages() {
    this.messagingService.getMessages().subscribe(async (msg: any) => {
      if (msg) {
        console.log(msg);
        // this.alertService.activate(msg.notification.body, msg.notification.title)
        // this.kbzToast.activate(msg.notification.title, 'success')
        let value = this.messagingService.notiCount.value + 1
        this.messagingService.notiCount.next(value)
        localStorage.setItem("KBZ_NOTI", value + "")
      }
    });
  }
  updateCutomerToken(token) {
    this.userTokenService.updateToken(token).toPromise().then(res => {
      console.log("Token Update", res)
      if (res) {
        // console.log(res);
      }
    })
  }
}
