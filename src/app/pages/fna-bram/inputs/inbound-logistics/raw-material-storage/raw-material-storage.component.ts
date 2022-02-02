import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../../../../app/modules/loading-toast/alert-model/alert.service';
import { FANService } from '../../../../../../app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { INBOUND_LOGISTICS } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { InboundlogisticsService } from '../inbound-logistics.manage.service';
import { RAW_MATERIAL_DISPLAY_COL, RAW_MATERIAL_ELEMENT_COL } from './raw-material.const';

@Component({
  selector: 'app-raw-material-storage',
  templateUrl: './raw-material-storage.component.html',
  styleUrls: ['./raw-material-storage.component.scss']
})
export class RawMaterialStorageComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  @Input() menuType: any = null;

  RAW_MATERIAL_ELEMENT_COL = RAW_MATERIAL_ELEMENT_COL;
  RAW_MATERIAL_DISPLAY_COL = RAW_MATERIAL_DISPLAY_COL;

  rawMaterialStorage = [];
  data: any;
  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private inboundlogisticsService: InboundlogisticsService, private fnaService: FANService,
    private alertService: AlertService, private inputsService: InputsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayInputDialog(data?) {
    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Raw Material Storage').then(result => {
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
      this.rawMaterialStorage = this.inputsService.getAllInputByType(res, INBOUND_LOGISTICS.RAW_MATERIAL.toString());
      if (this.rawMaterialStorage.length > 0) {
        for (var i = 0; i < this.rawMaterialStorage.length; i++) {
          if (this.rawMaterialStorage[i].unit == 0) {
            this.rawMaterialStorage[i].unit = '';
          }
          this.rawMaterialStorage[i].valueLaks = this.fnaService.mathRoundTo(this.rawMaterialStorage[i].valueLaks, 2);
        }
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      } else {
        this.rawMaterialStorage = [];
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
