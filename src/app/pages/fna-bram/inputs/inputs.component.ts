import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { OutputsService } from '../outputs/outputs.manage.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() fnaId: number = null;
  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();
  inputSwitch: string = 'aboutBRAM';
  menuSwitch: string = 'inbound-logistics';
  service = [];
  marketing = [];
  technology = [];
  inbound = [];
  humanResource = [];
  outbound = [];
  operation = [];
  management = [];
  mgmtInfra = [];

  constructor(
    private outputsService: OutputsService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  fnaSwitchEvent(type) {
    if (type == 'outputs') {
      this.checkInputsByfnaId(type)
    } else {
      this.inputSwitch = type;
      this.changeSwitch.emit(type);
    }
  }

  inputSwitchEvent(type) {
    this.menuSwitch = type;
  }

  fnaBramEvent(type) {

  }

  async checkInputsByfnaId(type) {

    await this.outputsService.getAllOutputsByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      if (res) {
        for (var i = 0; i < res.length; i++) {
          if (res[i].inbound) {
            this.inbound.push({ productName: res[i].inbound, risk: res[i].inboundRisk });
          }
          if (res[i].operation) {
            this.operation.push({ productName: res[i].operation, risk: res[i].operationRisk });
          }
          if (res[i].outbound) {
            this.outbound.push({ productName: res[i].outbound, risk: res[i].outboundRisk });
          }
          if (res[i].marketing) {
            this.marketing.push({ productName: res[i].marketing, risk: res[i].marketingRisk });
          }
          if (res[i].service) {
            this.service.push({ productName: res[i].service, risk: res[i].serviceRisk });
          }
          if (res[i].technology) {
            this.technology.push({ productName: res[i].technology, risk: res[i].technologyRisk });
          }
          if (res[i].humanResource) {
            this.humanResource.push({ productName: res[i].humanResource, risk: res[i].hrRisk });
          }
          if (res[i].mgmtInfra) {
            this.mgmtInfra.push({ productName: res[i].mgmtInfra, risk: res[i].mgmtInfraRisk });
          }
        }
        if (this.inbound.length == 0 && this.operation.length == 0 &&
          this.outbound.length == 0 && this.marketing.length == 0 &&
          this.service.length == 0 && this.technology.length == 0 &&
          this.humanResource.length == 0 && this.mgmtInfra.length == 0) {
          this.alertService.activate('Please add at least one product.', 'Warning Message').then(result => {
          });
        } else {
          this.inputSwitch = type;
          this.changeSwitch.emit(type);
        }
      }
    })
  }


}
