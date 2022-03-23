import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../../../../app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { MARKETING_SALES } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { MarketingSalesService } from '../marketing-sales.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './sales.team.const';

@Component({
  selector: 'app-sales-team',
  templateUrl: './sales-team.component.html',
  styleUrls: ['./sales-team.component.scss']
})
export class SalesTeamComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;

  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private marketingSalesService: MarketingSalesService, private alertService: AlertService,
    private inputsService: InputsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayInputDialog(data?) {
    if (data) {
      this.data = data;
    } else {
      this.data = null;
    }
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Sales Team').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }

  delete(id) {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
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
      this.dataList = this.inputsService.getAllInputByType(res, MARKETING_SALES.SALES_TEAM.toString());
      if (this.dataList.length > 0) {
        for (var i = 0; i < this.dataList.length; i++) {
          if (this.dataList[i].unit == 0) {
            this.dataList[i].unit = '';
          }
          if (this.dataList[i].answer == true) {
            this.dataList[i].answer = 'Yes';
          } else if (this.dataList[i].answer == false) {
            this.dataList[i].answer = 'No';
          } else {
            this.dataList[i].answer = '';
          }
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
