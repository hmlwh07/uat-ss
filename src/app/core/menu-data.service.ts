import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { environment } from "../../environments/environment";
import { BizOperationService } from "./biz.operation.service";
const API_MENU_URL = `${environment.apiUrl}/menu`
const ModuleList = ["leads", "fna", "application", "quotation", "activity", "product_definition", "page_group", "exchange_rate", "customer"]
export const defaultAccessObj = {
  view: true,
  create: true,
  edit: true,
  delete: true
}
@Injectable({
  providedIn: "root"
})
export class MenuDataService extends BizOperationService<any, number>{

  menuData = new BehaviorSubject<any[]>([])
  dataAccess = new BehaviorSubject<any>(null)
  defaultObj = {
    view: false,
    create: false,
    edit: false,
    delete: false
  }
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_MENU_URL);
  }

  getMenusData() {
    this.findAllWithQuery("lan=EN").pipe(map((menus) => {
      return menus.map(menu => {

        if (menu.submenu) {
          let checked = menu.submenu.find(x => x.show == true)
          menu.submenu_show = checked ? true : false
        }
        if (menu.page == "dashboard/senior-lp-dashboard") {
          menu.submenu_show = false
        }
        if (menu.page == "product/products-config") {
          let index = menu.submenu.findIndex(x => x.page == "product/products-config")
          menu.submenu[index].page = "product/products-config/list"
        }
        return menu
      })
    })).toPromise().then((res) => {
      if (res) {
        this.menuData.next(res)
        this.accessPremission()
      }
    })
  }

  accessPremission() {
    let data = {}
    ModuleList.forEach(element => {
      let access = this.getAccessPremission(element)
      let accessData = access ? access : {}
      data[element] = {
        ...this.defaultObj,
        ...accessData
      }
    });
    this.dataAccess.next(data)
  }

  getAccessPremission(moduleType: string) {
    // this.menuData.value.forEach((menu: any) => {
    for (let menu of this.menuData.value) {
      if (menu.module == moduleType) {
        return menu.dataAccess
      } else {
        if (menu.submenu) {
          let access = menu.submenu.find((x) => x.module == moduleType)
          if (access)
            return access.dataAccess
        }
      }
    }
    // })
    return null
  }

}