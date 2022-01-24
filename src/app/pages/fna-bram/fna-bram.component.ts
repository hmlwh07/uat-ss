import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      let data = JSON.parse(params.passValue);
      console.log('BRAM =====> ', data);
      if (data.res) {
        this.passValueData = data.res;
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

}
