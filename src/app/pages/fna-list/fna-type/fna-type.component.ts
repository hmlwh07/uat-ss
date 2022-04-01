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
  conductedBy: any = null;

  constructor(public modal: NgbActiveModal, private fnaService: FANService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }

  close() {
    this.modal.dismiss(null);
  }

  async chooseFNA(type) {
    let reqBody: any;
    if (this.customer) {
      reqBody = {
        leadId: this.leadId,
        customerId: this.customer.customerId,
        customerName: this.customer.customerName,
        fnaType: type,
        grandDiscount: 0,
        highDiscount: 0,
        id: 0,
        conductedBy: this.conductedBy,
        createdAt: this.formatDateDDMMYYY(new Date()),
        createdBy: this.user.id,
        createdByName: this.user.username,
        updatedAt: new Date(),
        fnaId: null,
        type: this.customer.customerType,
        pageStatus: 'create',
        products: [
          ""
        ]
      }
    }

    console.log('reqBody', reqBody);

    // else {
    //   reqBody = {
    //     leadId: this.leadId,
    //     customerId: '24',
    //     customerName: '',
    //     fnaType: type,
    //     grandDiscount: 0,
    //     highDiscount: 0,
    //     id: 0,
    //     conductedBy: this.user.username,
    //     createdAt: new Date(),
    //     createdBy: this.user.username,
    //     updatedAt: new Date(),
    //     fnaId: null,
    //     type: type,
    //     pageStatus: 'create',
    //     products: [
    //       ""
    //     ]
    //   }
    // }

    await this.fnaService.saveFNA(reqBody).toPromise().then(res => {
      if (res) {
        console.log('chooseFNA', res);

        reqBody.fnaId = res;
      }
    });
    this.modal.dismiss(reqBody)
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }


}
