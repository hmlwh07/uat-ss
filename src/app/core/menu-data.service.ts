import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { environment } from "../../environments/environment";
import { BizOperationService } from "./biz.operation.service";
const API_MENU_URL = `${environment.apiUrl}/menu`
@Injectable({
  providedIn: "root"
})
export class MenuDataService extends BizOperationService<any, number>{

  menuData = new BehaviorSubject<any[]>([])

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_MENU_URL);
  }

  getMenusData(){
     this.findAllWithQuery("lan=EN").pipe(map((menus)=>{
       return menus.map(menu=>{
         if(menu.submenu){
           let checked = menu.submenu.find(x=> x.show == true)
           menu.submenu_show = checked ? true : false
         }
         return menu
       })
     })).toPromise().then((res)=>{
       console.log(res);
       
       if(res){
         this.menuData.next(res)
       }
     })
  }

}