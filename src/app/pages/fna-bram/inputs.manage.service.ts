import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";
import { InputDataDialogComponent } from "./inputs/input-data-dialog/input-data-dialog.component";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FNABRAMInputService extends BizOperationService<any, number>{

  // 
  constructor(protected httpClient: HttpClient, private modalService: NgbModal) {
    super(httpClient, API_ADDON_URL);
  }


  displayInput(fnaId, data, menuType, type): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const modalRef = this.modalService.open(InputDataDialogComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.fnaId = fnaId
      modalRef.componentInstance.menuType = menuType
      modalRef.componentInstance.type = type
      modalRef.componentInstance.data = data
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          resolve(res);
        }
      })
    });
  }

  // closeInputDialog() {
  //   this.modal.dismiss(null);
  // }

}