import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject, mergeMapTo } from 'rxjs';
import { tap } from 'rxjs/operators'
import * as localForage from "localforage";
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  token = null;
  notiCount = new BehaviorSubject<number>(0)
  constructor(private afMessaging: AngularFireMessaging) {
    // let count = parseInt(localStorage.getItem("NOTI_KBZ"))

    // this.notiCount.next(count)
    // localStorage.setItem("NOTI_KBZ", "0")
  }
  getNotiCount() {
    localForage.getItem("notiCount_E16237EJL2").then(async (res: any) => {
      let count = res ? parseInt(res) : 0
      this.notiCount.next(count)
      await localForage.setItem("notiCount_E16237EJL2", "0")
    })
  }
  useWorker(serviceWorker) {
    // return this.afMessaging.useServiceWorker(serviceWorker)
  }

  requestPermission() {
    return this.afMessaging.requestPermission.pipe(mergeMapTo(this.afMessaging.tokenChanges))
  }

  init() {
    // navigator.serviceWorker.ready.then((registration) => {
    //   if (!this.afMessaging.useServiceWorker()) {

    //     return;
    //   }

    // })
  }


  getMessages() {
    return this.afMessaging.messages
    // .subscribe((res)=>{
    //   res.data.
    // });
  }

  deleteToken() {
    if (this.token) {
      this.afMessaging.deleteToken(this.token);
      this.token = null;
    }
  }
}