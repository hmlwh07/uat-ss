import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MenuDataService } from '../../../core/menu-data.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private menuData: MenuDataService, private location: Location) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true;
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      if (state.url.includes("/dashboard/")) {
        let access = this.menuData.menuData.getValue()
        let dashboard = access.find(x => x.page == "dashboard/senior-lp-dashboard")
        if (state.url == "/dashboard/senior-lp-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/senior-lp-dashboard", "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard")
        } else if (state.url == "/dashboard/lp-manager-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard")
        } else if (state.url == "/dashboard/lp-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/lp-dashboard",)
        }
      }

      return true;
    }

    // not logged in so redirect to login page with the return url
    this.authService.logout();
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      if (state.url.includes("/dashboard/")) {
        let access = this.menuData.menuData.getValue()
        let dashboard = access.find(x => x.page == "dashboard/senior-lp-dashboard")
        if (state.url == "/dashboard/senior-lp-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/senior-lp-dashboard", "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard")
        } else if (state.url == "/dashboard/lp-manager-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard")
        } else if (state.url == "/dashboard/lp-dashboard") {
          this.getAcessAndOther(dashboard, "dashboard/lp-dashboard",)
        }
      }

      return true;
    }

    this.authService.logout();
    return false;
  }


  getAcessAndOther(dashboard, urlData: string, redirect1?: string, redirect2?: string) {
    if (!dashboard.submenu) {
      this.router.navigateByUrl("/")
      return false
    }

    let currentAccess = dashboard.submenu.find(x => x.page == urlData)
    if (!currentAccess.dataAccess.view) {
      if (redirect1) {
        let access = dashboard.submenu.find(x => x.page == redirect1)
        if (access.dataAccess.view) {
          this.router.navigateByUrl(access.page)
          return false
        }
      }
      if (redirect2) {
        let access = dashboard.submenu.find(x => x.page == redirect2)
        if (access.dataAccess.view) {
          this.router.navigateByUrl(access.page)
          return false
        }
      }
      this.location.back()
      return false
    } else {
      return true
    }

  }
}
