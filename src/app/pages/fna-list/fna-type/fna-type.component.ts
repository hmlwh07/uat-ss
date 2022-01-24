import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth';
import { FANService } from '../../fna-detail/fna-manage.service';
import { UserModel } from '../../../modules/auth/_models/user.model'
@Component({
  selector: 'app-fna-type',
  templateUrl: './fna-type.component.html',
  styleUrls: ['./fna-type.component.scss']
})
export class FnaTypeComponent implements OnInit {
  user: UserModel = new UserModel();
  leadId: string = '';
  customer: any = null;

  constructor(public modal: NgbActiveModal, private fnaService: FANService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    console.log('leadId =====> ', this.leadId);
    console.log('customer =====> ', this.customer);
  }

  close() {
    this.modal.dismiss(null);
  }

  async chooseFNA(type) {
    let reqBody = {
      customerId: this.customer.customerId,
      customerName: this.customer.customerName,
      fnaType: type,
      grandDiscount: 0,
      highDiscount: 0,
      id: 0,
      conductedBy: this.user.username,
      createdAt: new Date(),
      createdBy: this.user.username,
      updatedAt: new Date(),
      fnaId: null,
      type: this.customer.customerType,
      pageStatus: 'create',
      products: [
        ""
      ]
    }
    console.log('saveFNA reqBody ', reqBody);

    await this.fnaService.saveFNA(reqBody).toPromise().then(res => {
      if (res) {
        reqBody.fnaId = res;
      }
    });
    this.modal.dismiss(reqBody)
  }


}
