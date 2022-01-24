import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FANService } from 'src/app/pages/fna-detail/fna-manage.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { TECHNOLOGY } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { TechnologyService } from '../technology.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './hardware.const';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;

  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private technologyService: TechnologyService, private alertService: AlertService,
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
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Hardware').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }


  delete(id) {
    this.technologyService.deleteTechnologyById(id).toPromise().then(async (res: any) => {
      if (res) {
        this.getAll();
        this.alertService.activate('This record was deleted', 'Success Message');
      }
    })
  }

  async getAll() {
    await this.technologyService.getAllTechnologyByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      console.log('getAllTechnologyByfnaId', res);

      this.dataList = this.inputsService.getAllInputByType(res, TECHNOLOGY.HARDWARE.toString());
      if (this.dataList.length > 0) {
        for (var i = 0; i < this.dataList.length; i++) {
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
    console.log('actionBtn', ev);
    if (ev.cmd == 'edit') {
      this.displayInputDialog(ev.data);
    }
    if (ev.cmd == 'delete') {
      this.delete(ev.data.id);
    }
  }
}
