import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, of } from "rxjs";
import { environment } from "../../environments/environment";
import { LanguagesService } from "../modules/languages/languages.service";
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
  constructor(protected httpClient: HttpClient,private lang:LanguagesService) {
    super(httpClient, API_MENU_URL);
  }
  

  getMenusData() {
    let language=this.lang.getSelectedLanguage().toUpperCase()
    return this.findAllWithQuery("lan="+language).pipe(map((menus) => {
      return menus.map(menu => {
        if(language=='MM'){
          // menu.titleMM="အစ"
          menu.titleMM=menu.title
        }
        if (menu.submenu) {
          let checked = menu.submenu.find(x => x.show == true)
          menu.submenu_show = checked ? true : false
          menu.show = menu.dataAccess.view
          menu.submenu = menu.submenu.map((x) => {
            x.show = x.dataAccess.view
            if (x.submenu) {
              let checked = x.submenu.find(z => z.show == true)
              x.submenu_show = checked ? true : false
              x.submenu = x.submenu.map((i) => {
                i.show = i.dataAccess.view
                return i
              })
            }
            return x
          })
        }

        if (menu.page == "dashboard/senior-lp-dashboard") {
          menu.submenu_show = false
        }
        if (menu.page == "product/products-config") {
          let index = menu.submenu.findIndex(x => x.page == "product/products-config")
          menu.submenu[index].page = "product/products-config/list"
        }
        // console.log('MENU==>',menu);

        return menu
      })
    }), map((res) => {
      if (res) {
        this.menuData.next(res)
        this.accessPremission()
      }
      if (!res) {
        localStorage.removeItem(`${environment.appVersion}-${environment.USERDATA_KEY}`);
      }
      return res
    }))

  }

  accessPremission() {
    let data = {}
    ModuleList.forEach(element => {
      let access = this.getAccessPremission(element)
      let accessData = access ? access : {}
      accessData.view = accessData.read || accessData.view || false
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
          if (access) {
            return access.dataAccess
          }
        }
      }

    }
    // })
    return null
  }

}