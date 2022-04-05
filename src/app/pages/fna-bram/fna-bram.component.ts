import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fna-bram',
  templateUrl: './fna-bram.component.html',
  styleUrls: ['./fna-bram.component.scss']
})
export class FnaBramComponent implements OnInit {
  fnaSwitch: string = "aboutBRAM";
  fnaId: number = null;
  customerId: any = null;
  customerName: any = null;
  passValueData: any;

  constructor(private route: ActivatedRoute, private cdf: ChangeDetectorRef, private modalService: NgbModal,  public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      let data = JSON.parse(params.passValue);
      if (data.res) {
        this.passValueData = data.res;      
        //this.passValueData.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValueData.createdAt)), 'dd/MM/yyyy');
        this.fnaId = data.res.fnaId;
        this.customerId = data.res.customerId;
        this.customerName = data.res.customerName;
      } else {
        this.passValueData = data;
        this.fnaId = data.fnaId;
        this.customerId = data.customerId;
        this.customerName = data.customerName;
      }

      if (data.pageStatus != 'create') {

      }
    }
    );
  }

  fnaBramEvent(ev) {
    this.fnaSwitch = ev;
  }

  ngOnDestroy() { 
    this.modalService.dismissAll();
  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  convertDateFormatDDMMYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

}
