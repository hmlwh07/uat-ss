import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FANService } from 'src/app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { INBOUND_LOGISTICS } from '../input-data-dialog/input.data.enum';
import { InputsService } from '../inputs.manage.service';
import { InboundlogisticsService } from './inbound-logistics.manage.service';

import { RAW_MATERIAL_DISPLAY_COL, RAW_MATERIAL_ELEMENT_COL } from './raw-material-storage/raw-material.const';
import { WAREHOUSE_DISPLAY_COL, WAREHOUSE_ELEMENT_COL } from './warehouse/warehouse.const';

@Component({
  selector: 'app-inbound-logistics',
  templateUrl: './inbound-logistics.component.html',
  styleUrls: ['./inbound-logistics.component.scss']
})
export class InboundLogisticsComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  menuType = "InboundLogistics";
  warehouse = [];

  constructor(private inboundlogisticsService: InboundlogisticsService, private inputsService: InputsService,
    private fnaService: FANService, private cdf: ChangeDetectorRef) { }

   ngOnInit(): void {
   // this.getAll()
  }



  async getAll() {
    await this.inboundlogisticsService.getAllInboundlogisticsByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      this.warehouse = this.inputsService.getAllInputByType(res, INBOUND_LOGISTICS.WAREHOUSE.toString());
      console.log('this.warehouse =====> ', this.warehouse);
      if (this.warehouse.length > 0) {
        for (var i = 0; i < this.warehouse.length; i++) {
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

}
