import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LanguagesService } from 'src/app/modules/languages/languages.service';
import { MenuDataService } from '../../../../core/menu-data.service';
import { AuthService } from '../../../../modules/auth';
import { LayoutService, DynamicAsideMenuService } from '../../../../_metronic/core';

@Component({
  selector: 'app-aside-dynamic',
  templateUrl: './aside-dynamic.component.html',
  styleUrls: ['./aside-dynamic.component.scss']
})
export class AsideDynamicComponent implements OnInit, OnDestroy {
  menuConfig: any;
  subscriptions: Subscription[] = [];

  disableAsideSelfDisplay: boolean;
  headerLogo: string;
  brandSkin: string;
  dashBorard:string;
  ulCSSClasses: string;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle = false;
  lang:string="EN"
  currentUrl: string;
 exchangeRate:string;
  constructor(
    private layout: LayoutService,
    private router: Router,
    private menu: DynamicAsideMenuService,
    private menuService: MenuDataService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private _languageService:LanguagesService) { }

  ngOnInit(): void {
    // load view settings
    this.lang = this._languageService.getSelectedLanguage();
    this.disableAsideSelfDisplay =
      this.layout.getProp('aside.self.display') === false;
    this.brandSkin = this.layout.getProp('brand.self.theme');
    this.headerLogo = this.getLogo();
    this.exchangeRate=this.getExchangeRate()
    this.dashBorard=this.getDashboradlogo()
    this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
    this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
    this.brandClasses = this.layout.getProp('brand');
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
    // this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;

    // router subscription
    this.currentUrl = this.router.url.split(/[?#]/)[0];
    const routerSubscr = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
      this.cdr.detectChanges();
    });
    this.subscriptions.push(routerSubscr);

    // menu load
    const menuSubscr = this.menuService.menuData.subscribe(res => {
      this.menuConfig = { items: res };
      // console.log("MENU",this.menuConfig);
      
      let data = this.menuService.getAccessPremission("Customer")
      this.cdr.detectChanges();
    });
    this.subscriptions.push(menuSubscr);
  }

  private getLogo() {
    return './assets/images/kbzms.png'
    if (this.brandSkin === 'light') {
      return './assets/media/logo_text_blue.png';
    } else {
      return './assets/media/bss_logo_white.png';
    }
  }
  private getDashboradlogo(){
    return './assets/media/svg/icons/Design/dashboard.svg'
  }
  private getExchangeRate(){
    return './assets/media/svg/icons/Design/exchange_rate-01.svg'
  }

  isMenuItemActive(path) {
    if (!this.currentUrl || !path) {
      return false;
    }

    if (this.currentUrl === path) {
      return true;
    }

    if (this.currentUrl.indexOf(path) > -1) {
      return true;
    }

    return false;
  }
  logout() {
    this.auth.logout();
    document.location.reload();
  }
  reRun(){
    this.router.navigateByUrl('/re-rerun-job')
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
