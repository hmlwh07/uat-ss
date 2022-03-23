import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../../../../app/modules/loading-toast/alert-model/alert.service';
import { FANService } from '../../../../../../app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { INBOUND_LOGISTICS } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { InboundlogisticsService } from '../inbound-logistics.manage.service';
import { WAREHOUSE_DISPLAY_COL, WAREHOUSE_ELEMENT_COL } from './warehouse.const';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  @Input() id: any = null;
  @Input() menuType: any = null;
  @Input() warehouse = [];

  WAREHOUSE_ELEMENT_COL = WAREHOUSE_ELEMENT_COL;
  WAREHOUSE_DISPLAY_COL = WAREHOUSE_DISPLAY_COL;
  // warehouse = [];
  data = null;


  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private inputsService: InputsService, private fnaService: FANService,
    private inboundlogisticsService: InboundlogisticsService, private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.getAll();
    // this.warehouse = [{ assetDescription: 'Asset Description', noOfUnits: 10, estimatedValue: "100,000", riskPerception: 'Height', product: "Fire" },
    // { assetDescription: 'Asset Description', noOfUnits: 11, estimatedValue: "200,000", riskPerception: 'Low', product: "Motor" },
    // { assetDescription: 'Asset Description', noOfUnits: 12, estimatedValue: "300,000", riskPerception: 'Medium', product: "Motor" }];
    // this.cdf.detectChanges();
    // this.matTable.reChangeData();
  }

  ionViewWillEnter() {

  }

  async displayInputDialog(data?) {
    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
    await this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Warehouse').then(async result => {
      if (result) {
        await this.getAll();
      }
    })
  }

  async delete(id) {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.inboundlogisticsService.deleteInboundlogisticsById(id).toPromise().then(async (res: any) => {
          if (res) {
            this.warehouse = [];
            await this.getAll();
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
            });
          }
        })
      }
    });
  }

  async getAll() {
    await this.inboundlogisticsService.getAllInboundlogisticsByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      this.warehouse = this.inputsService.getAllInputByType(res, INBOUND_LOGISTICS.WAREHOUSE.toString());
      if (this.warehouse.length > 0) {
        for (var i = 0; i < this.warehouse.length; i++) {
          if (this.warehouse[i].unit == 0) {
            this.warehouse[i].unit = '';
          }
          this.warehouse[i].valueLaks = this.fnaService.mathRoundTo(this.warehouse[i].valueLaks, 2);
        }
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      } else {
        this.warehouse = [];
        this.cdf.detectChanges();
      }
    })
  }


  actionBtn(ev) {
    if (ev.cmd == 'edit') {
      this.displayInputDialog(ev.data);
    }
    if (ev.cmd == 'delete') {
      this.delete(ev.data.id);
    }
  }

}
