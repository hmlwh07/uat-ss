import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../../../../../app/modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { FNABRAMInputService } from '../../../inputs.manage.service';
import { HUMAN_RESOURCES } from '../../input-data-dialog/input.data.enum';
import { InputsService } from '../../inputs.manage.service';
import { HumanResourcesService } from '../human-resources.manage.service';
import { DISPLAY_COL, ELEMENT_COL } from './recruitment-training.const';

@Component({
  selector: 'app-recruitment-training',
  templateUrl: './recruitment-training.component.html',
  styleUrls: ['./recruitment-training.component.scss']
})
export class RecruitmentTrainingComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;
  ELEMENT_COL = ELEMENT_COL;
  DISPLAY_COL = DISPLAY_COL;
  dataList = [];
  data: any;

  constructor(private cdf: ChangeDetectorRef, private fnaBRAMInputService: FNABRAMInputService,
    private humanResourcesService: HumanResourcesService, private alertService: AlertService,
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
    this.fnaBRAMInputService.displayInput(this.fnaId, this.data, this.menuType, 'Recruitment and Training').then(result => {
      if (result) {
        this.getAll();
      }
    })
  }

  delete(id) {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.humanResourcesService.deleteHumanResourcesById(id).toPromise().then(async (res: any) => {
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
    await this.humanResourcesService.getAllHumanResourcesByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      this.dataList = this.inputsService.getAllInputByType(res, HUMAN_RESOURCES.RECRUITMENT_AND_TRAINING.toString());
      if (this.dataList.length > 0) {
        for (var i = 0; i < this.dataList.length; i++) {
          this.dataList[i].riskCode = this.dataList[i].risk;          
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
