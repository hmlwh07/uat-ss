import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MaterialTableViewComponent } from '../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { TechnologyComponent } from '../inputs/technology/technology.component';
import { OutputsService } from '../outputs/outputs.manage.service';
import { Tabel2 } from './about.bram.dto';



export class AboutBramDTO {
  inbound?: string;
  inboundAmount: number;
  operation?: string;
  outbound?: string;
  marketing?: string;
  service?: string;
  technology?: string;
  humanResource?: string;
  mgmtInfra?: string;
}

const ELEMENT_DATA: AboutBramDTO[] = [
  // { inboundLogistics: "1", operations: 'operations', outboundLogistics: "outboundLogistics", marketingSales: 'H', service: 'service1' },
  // { inboundLogistics: "2", operations: 'operations', outboundLogistics: "outboundLogistics", marketingSales: 'He', service: 'service2' },
  // { inboundLogistics: "3", operations: 'operations', outboundLogistics: "outboundLogistics", marketingSales: 'Li', service: 'service3' }

];


const originalData = [
  {
    name: 'Technology', dataList: []
  },
  {
    name: 'Human Resources', dataList: []
  },
  {
    name: 'Management Infrastructure', dataList: []
  }
]


@Component({
  selector: 'app-about-bram',
  templateUrl: './about-bram.component.html',
  styleUrls: ['./about-bram.component.scss']
})
export class AboutBramComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: number = null;
  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();
  inputSwitch: string = 'inputs';
  service = [];
  marketing = [];
  technology = [];
  inbound = [];
  humanResource = [];
  outbound = [];
  operation = [];
  management = [];
  mgmtInfra = [];
  isData: boolean = false;


  fnaSwitchEvent(type) {
    this.inputSwitch = type;
    this.changeSwitch.emit(type);

  }



  displayedColumns: string[] = ['inbound', 'operation', 'outbound', 'marketing', 'service'];
  dataSource = ELEMENT_DATA;

  dataSource1 = originalData;
  displayedColumns1 = ['name', 'dataList'];
  spans = [];

  constructor(private cdf: ChangeDetectorRef, private outputsService: OutputsService,
    private navController: NavController) {

  }

  async ngOnInit() {
    // originalData[1].dataList.push({ productName: 'Mobile12', amount: 100 },
    //   { productName: 'Computer1212', amount: 200 });
    // this.dataSource1 = originalData.reduce((current, next) => {
    //   next.dataList.forEach(b => {
    //     current.push({ name: next.name, productName: b.productName, amount: b.amount })
    //   });
    //   return current;
    // }, []);

    await this.getAllOutputsByfnaId();
    await this.cacheSpan('Name', d => d.name);
  }



  cacheSpan(key, accessor) {
    for (let i = 0; i < this.dataSource1.length;) {
      let currentValue = accessor(this.dataSource1[i]);
      let count = 1;
      for (let j = i + 1; j < this.dataSource1.length; j++) {
        if (currentValue != accessor(this.dataSource1[j])) {
          break;
        }
        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }


  async getAllOutputsByfnaId() {
    let removeCount: number = 0;
    //472
    await this.outputsService.getAllOutputsByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      if (res) {
        if (res.length) {
          this.isData = true;
        }

        for (var i = 0; i < res.length; i++) {
          if (res[i].operation) {
            this.operation.push({ productName: res[i].operation, risk: res[i].operationRisk });
          }
          if (res[i].outbound) {
            this.outbound.push({ productName: res[i].outbound, risk: res[i].outboundRisk });
          }
          if (res[i].humanResource) {
            removeCount++;
            this.humanResource.push({ productName: res[i].humanResource, risk: res[i].hrRisk });
          }
          if (res[i].inbound) {
            this.inbound.push({ productName: res[i].inbound, risk: res[i].inboundRisk });
          }
          if (res[i].technology) {
            removeCount++;
            this.technology.push({ productName: res[i].technology, risk: res[i].technologyRisk });
          }
          if (res[i].marketing) {
            this.marketing.push({ productName: res[i].marketing, risk: res[i].marketingRisk });
          }
          if (res[i].service) {
            this.service.push({ productName: res[i].service, risk: res[i].serviceRisk });
          }
          if (res[i].mgmtInfra) {
            removeCount++;
            this.mgmtInfra.push({ productName: res[i].mgmtInfra, risk: res[i].mgmtInfraRisk });
          }
        }

      }
      this.dataSource = res;

     
      // remove Technoloty, Human Resources and Management Infrastructure from dataSource
      if (removeCount > 0) {
        let index = res.length - removeCount;
        if (index > 0) {
          for (var i = 0; i < this.dataSource.length; i++) {
            if (index > i) {
              this.dataSource.pop();
            }
          }
        }
      }

      // const result1 = [...this.operation, ...this.outbound, ...this.inbound, ...this.marketing, ...this.service];
      //this.dataSource = this.dataSource.filter(item => !item.technology && !item.humanResource && !item.mgmtInfra)


      originalData[0].dataList = this.technology;
      originalData[1].dataList = this.humanResource;
      originalData[2].dataList = this.mgmtInfra;



      this.dataSource1 = originalData.reduce((current, next) => {
        next.dataList.forEach(b => {
          current.push({ name: next.name, productName: b.productName, risk: b.risk })
        });
        return current;
      }, []);
    });

    this.cdf.detectChanges();

  }

  backToDetail() {
    this.navController.back();
  }

}
