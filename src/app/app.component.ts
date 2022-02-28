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
import { AlertController, ModalController } from '@ionic/angular';
import { AlertService } from './modules/loading-toast/alert-model/alert.service';
import { MenuDataService } from './core/menu-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private splashScreenService: SplashScreenService,
    private router: Router,
    private tableService: TableExtendedService,
    private itemService: ProductsService,
    private kbzToast: LoadingService,
    private master: MasterDataService,
    private authService: AuthService,
    private zone: NgZone,
    private applicationRef: ApplicationRef,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private menuService: MenuDataService,
    private modalCtrl: ModalController

  ) {

  }
  @HostListener('window:unload', ['$event'])
  beforeUnloadHandler(event) {
    // const data = this.itemService.prodSubject.getValue()
    //console.log(`I'm leaving the app!`, data);
    // localStorage.setItem("itemsData", JSON.stringify(data));
  }

  ngOnInit() {
    const productData = {
      forms: [],
      products: [],
      formObjs: [],
      configPage: []
    };
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
    let unsub = this.authService.currentUserSubject.subscribe((res) => {
      if (res) {
        this.menuService.getMenusData()
        // this.master.getType()
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
      }
    })
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

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
