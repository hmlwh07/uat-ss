import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { MANAGEMENT_INFRASTRUCTURE } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { ManagementInfrastructureService } from '../management-infrastructure.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './location-business.const';

@Component({
  selector: 'app-location-business',
  templateUrl: './location-business.component.html',
  styleUrls: ['./location-business.component.scss']
})
export class LocationBusinessComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;
  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private managementInfrastructureService: ManagementInfrastructureService, private alertService: AlertService,
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
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Location of Business').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }

  delete(id) {
    this.managementInfrastructureService.deleteManagementInfrastructureById(id).toPromise().then(async (res: any) => {
      if (res) {
        this.getAll();
        this.alertService.activate('This record was deleted', 'Success Message');
      }
    })
  }

  async getAll() {
    await this.managementInfrastructureService.getAllManagementInfrastructureByfnaId(this.fnaId).toPromise().then(async (res: any) => {
     console.log('getAllManagementInfrastructureByfnaId', res);
      this.dataList = this.inputsService.getAllInputByType(res, MANAGEMENT_INFRASTRUCTURE.LOCATION_BUSINESS.toString());
      if (this.dataList.length > 0) {
        this.cdf.detectChanges();
        this.matTable.reChangeData();
      } else {
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
