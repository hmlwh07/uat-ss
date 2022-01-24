import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FANService } from 'src/app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { INBOUND_LOGISTICS } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { InboundlogisticsService } from '../inbound-logistics.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './transportation.const';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  @Input() menuType: any = null;

  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private inboundlogisticsService: InboundlogisticsService, private inputsService: InputsService,
    private alertService: AlertService, private fnaService: FANService) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayInputDialog(data?) {
    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Transportation').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }

  delete(id) {
    this.inboundlogisticsService.deleteInboundlogisticsById(id).toPromise().then(async (res: any) => {
      if (res) {
        this.getAll();
        this.alertService.activate('This record was deleted', 'Success Message');
      }
    })
  }

  async getAll() {
    await this.inboundlogisticsService.getAllInboundlogisticsByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      this.dataList = this.inputsService.getAllInputByType(res, INBOUND_LOGISTICS.TRANSPORTATION.toString());
      if (this.dataList.length > 0) {
        for (var i = 0; i < this.dataList.length; i++) {
          this.dataList[i].valueLaks = this.fnaService.mathRoundTo(this.dataList[i].valueLaks, 2);
        }
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      }else {
        this.dataList = [];
        this.cdf.detectChanges();
      }
    })
  }

  actionBtn(ev) {
    console.log('actionBtn', ev);
    if (ev.cmd == 'edit') {
      this.displayInputDialog(ev.data);
    }
    if (ev.cmd == 'delete') {
      this.delete(ev.data.id);
    }
  }

}
