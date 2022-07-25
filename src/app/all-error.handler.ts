import { ErrorHandler, Injectable } from "@angular/core";
// import { KBZToastService } from "./toast/kbz-toast.service";
@Injectable()
export class AllErrorHandler implements ErrorHandler {
  constructor(){}
    handleError(error) {
      // do something with the exception
      // console.log("[App Log]",error)
      // this.toastService.activate('Sorry Something Was Wrong. Please Try Again Later, Thank!')
    }
  }