import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../../../../app/modules/loading-toast/alert-model/alert.service';
import { FANService } from '../../../../../../app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { MARKETING_SALES } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { MarketingSalesService } from '../marketing-sales.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './marketing.assets.const';

@Component({
  selector: 'app-marketing-assets',
  templateUrl: './marketing-assets.component.html',
  styleUrls: ['./marketing-assets.component.scss']
})
export class MarketingAssetsComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;

  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private marketingSalesService: MarketingSalesService, private alertService: AlertService,
    private inputsService: InputsService, private fnaService: FANService) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayInputDialog(data?) {
    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'marketing_assets').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }

  delete(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.marketingSalesService.deleteMarketingSalesById(id).toPromise().then(async (res: any) => {
          if (res) {
            this.getAll();
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
            });
          }
        })
      }
    });
  }

  async getAll() {
    await this.marketingSalesService.getAllMarketingSalesByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      this.dataList = this.inputsService.getAllInputByType(res, MARKETING_SALES.MARKETING_ASSETS.toString());
      if (this.dataList.length > 0) {
        for (var i = 0; i < this.dataList.length; i++) {
          if (this.dataList[i].unit == 0) {
            this.dataList[i].unit = '';
          }
          this.dataList[i].valueLaks = this.fnaService.mathRoundTo(this.dataList[i].valueLaks, 2);
        }
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      } else {
        this.dataList = [];
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
