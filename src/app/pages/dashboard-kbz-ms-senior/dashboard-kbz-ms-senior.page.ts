import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexGrid,
  ApexTitleSubtitle,
  ApexMarkers,
} from 'ng-apexcharts';


import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { DashboardAttachmentService, DashboardService } from './dashboard.service';
import { AttachmentUploadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { MenuDataRoleService } from 'src/app/core/menu-data-role.service';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { map } from 'rxjs/operators';
type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptionsLine = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  dataLabels: ApexDataLabels,
  markers: ApexMarkers
};

@Component({
  selector: 'app-dashboard-kbz-ms-senior',
  templateUrl: './dashboard-kbz-ms-senior.page.html',
  styleUrls: ['./dashboard-kbz-ms-senior.page.scss'],
})
export class DashboardKbzMsSeniorPage implements OnInit {
  @ViewChild("chartAgent") chartAgent: ChartComponent;
  @ViewChild("chartLead") chartLead: ChartComponent;

  public chartOptionsAgent: Partial<ChartOptionsLine>;
  public chartOptions: Partial<ChartOptions>;
  data: any;
  authObj: any;
  actForm: FormGroup;
  leadObj: any = {};
  todayActiveAgent = 0
  agentLineChart: any;
  agentLineChartCategories: string[] = [];
  agentLineChartDatas: number[] = [];
  renewalPremium: any = []
  productPremium: any = []
  premiumWithRenewal: any = []
  totalPremium: number = 0
  currentMonthIndex: number = new Date().getUTCMonth();
  currentYear: number = new Date().getUTCFullYear();
  months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  unsub: any;
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;
  radioW: number;
  radioH: number;
  chartH: number;
  profileHpx: string;
  salesHpx: string;
  thingsHpx: string;
  chartHpx: string;
  profileImgW: string;
  profilePadding: string;
  productPadding: string;
  mainContentHeight: number;
  mainContentHeightPx: string;
  activeRoute: any;
  id: any;
  roleId: any;
  tempPolicy: any;
  constructor(
    private platform: Platform,
    private cdf: ChangeDetectorRef,
    private auth: AuthService,
    private dashboardService: DashboardService,
    private router: Router,
    private ngzone: NgZone,
    private alertCtrl: ActionSheetController,
    private AttachmentUploadService: AttachmentUploadService,
    private DashboardAttachmentService: DashboardAttachmentService,
    private menuDataRoleService: MenuDataRoleService,
    private route: ActivatedRoute,
    private encryption: EncryptService
  ) {
    // this.unsub = this.auth.currentUserSubject.subscribe((res) => {
    //   if (res) {
    //     this.authObj = res;
    //     this.id = res.id
    //   }
    // })
    this.route.queryParams.subscribe(async (params) => {
      if (params.empId) {
        this.id = JSON.parse(params.empId);
        this.roleId = JSON.parse(params.roleId);
        this.loadForm();
      } else {
        this.id = this.auth.currentUserValue.id
        this.loadForm();
      }
    });
    // this.loadForm();
  }
  encryptData(attid) {
    let id = this.encryption.encryptData(attid)
    return id || null
  }


  async ngOnInit() {
    let route = (this.router.url).split("?")
    this.activeRoute = route[0]
    // console.log(this.activeRoute);
    this.getList();
    this.getLeadList();
    this.getAgentList();
    this.radioW = this.platform.width();
    this.radioH = this.platform.height();
    this.calculateMainContentHeight(this.radioW, this.radioH);
  }
  ngAfterViewInit() {
    let route = this.router.url.split("?")
    this.activeRoute = route[0]
    // console.log("this.activeRoute",this.activeRoute);
  }

  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.id)
    })
  }

  getList(id?) {
    let post = {
      empId: id
    }
    this.dashboardService
      .getList(id ? post : this.actForm.value)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.data = res;
          console.log("this.", this.data);
          if (this.data.agentInfo.attId) {
            this.data.agentInfo.attId = this.encryptData(this.data.agentInfo.attId)
          }
          if (this.data.yearlyProductPremium) {
            this.data.yearlyProductPremium.forEach(element => {
              element.productSmallIcon = this.encryptData(element.productSmallIcon)
            });
          }
          if (this.data.subAgentMonthlySale) {
            this.data.subAgentMonthlySale.forEach(element => {
              element.attId = this.encryptData(element.attId)
            });
          }
          this.productPremium = res.yearlyProductPremium
          console.log("this.actForm.controls.empId.value", this.actForm.controls.empId.value);

          this.getRenewalPremium(id ? id : this.actForm.controls.empId.value)

          this.setChartOptions('agent');
          this.cdf.detectChanges();
        }
      });
  }

  getRenewalPremium(id?) {
    this.tempPolicy = []
    this.renewalPremium = []
    this.totalPremium =0
    let post = {
      "agentId": id
    }

    this.dashboardService.getRenewalPremium(post).toPromise().then((res: any) => {
      if (res) {
        this.renewalPremium = res.productPremiums

        this.productPremium.map((item) => {
          let renewalAmt = this.renewalPremium.find(ele => ele.productCode == item.productCode)

          if (renewalAmt) {

            this.tempPolicy.push(renewalAmt.productCode)
          } else {

            this.tempPolicy = this.tempPolicy
          }
          console.log(this.tempPolicy);

          item.premium = renewalAmt ? Number(item.premium) + Number(renewalAmt.totalPremium) : Number(item.premium)
          this.cdf.detectChanges()
        })
        console.log("tempPolicy", this.tempPolicy);

        for (var i = 0; i < this.renewalPremium.length; i++) {
          for (var j = 0; j < this.tempPolicy.length; j++) {
            console.log("this.renewalPremium[i]", this.renewalPremium[i]);
            if (this.renewalPremium[i].productCode === this.tempPolicy[j]) {
              this.renewalPremium.splice(i, 1);
            }
          }
        }
        this.renewalPremium.map((data) => {
          data.productName = data.productName
          data.premium = data.totalPremium
          data.productSmallIcon = this.encryptData(data.productSmallIcon)
        })
        this.productPremium.push(...this.renewalPremium)

        this.productPremium.forEach(element => {
          this.totalPremium += Number(element.premium)
          this.cdf.detectChanges()
        });
      }
    })
  }


  getLeadList(id?) {
    let post = {
      "empId": id
    }
    this.dashboardService.getLeadList(id ? post : this.actForm.value).toPromise().then((res: any) => {
      if (res) {
        this.leadObj = res;
        // this.todayActiveAgent = res.todayActiveAgent
        this.setChartOptions('lead');
        this.cdf.detectChanges();
      }
    })
  }

  getAgentList(id?) {
    let post = {
      "empId": id
    }
    this.ngzone.run(_ => {
      // this.agentLineChartCategories = this.agentLineChartDatas = [];
      this.dashboardService.getAgentList(id ? post : this.actForm.value).pipe(map((res: any) => {
        let weeks = []
        let data = []
        res.weeklyActiveAgents.map((x) => {
          weeks.push(x.weekNo)
          data.push(parseInt(x.noOfActiveAgent))
        })
        return { ...res, data, weeks }
      })).toPromise().then((res: any) => {
        // console.log(res,"res");

        if (res) {
          this.agentLineChart = res;
          this.todayActiveAgent = res.todayNoOfActiveAgent
          this.agentLineChartCategories = res.weeks
          this.agentLineChartDatas = res.data
          // res.weeklyActiveAgents.map(a => {
          //   this.agentLineChartCategories.push(a.weekNo);
          //   this.agentLineChartDatas.push(parseInt(a.noOfActiveAgent));
          // })
          this.setChartOptions('agent');
        }
      })
    })
  }

  ngOnDestroy() {
    // this.unsub.unsubscribe();
  }

  async goToLPManager(agent: any) {
    this.getSaleRoleData(agent)
    //  this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } })
  }

  getSaleRoleData(agent: any) {
    this.menuDataRoleService.getMenusRoleData(agent.roleId).toPromise().then((res:any) => {
      console.log(res);
      let page = ''
      if (res) {
        res.forEach(data => {
          if (data.title == "Dashboard") {
            if (data.submenu) {
              data.submenu.forEach(res => {
                if (res.dataAccess.view) {
                  page = res.page
                }
              })
            }
          }
        })

      }
      if (page) {
        let pg = "/" + page
        if (pg == this.activeRoute) {
          this.getList(agent.empId)
          this.getLeadList(agent.empId);
          this.getAgentList(agent.empId);
          this.radioW = this.platform.width();
          this.radioH = this.platform.height();
          this.calculateMainContentHeight(this.radioW, this.radioH);
        }
        else {
          this.router.navigate([page], { queryParams: { empId: agent.empId, roleId: agent.roleId }, })
        }
      }
    })
  }

  goToSalePolicies() {
    this.router.navigate(['/sales/application/list']);
  }

  goToActivities() {
    this.router.navigate(['activity/activity-management-list']);
  }

  setChartOptions(type: string) {
    let key = type == 'lead' ? 'chartOptions' : 'chartOptionsAgent';
    let maxAg = Math.max(...this.agentLineChartDatas)
    this[key] = (type == 'lead' ?
      {
        series: [
          {
            name: "",
            data: [type == 'lead' ? this.leadObj.leadWinCount : this.data.converted, type == 'lead' ? this.leadObj.leadAssignCount
              : this.data.assigned]
          }
        ],
        chart: {
          toolbar: {
            show: false
          },
          height: this.chartH - 10,
          type: "bar",
          events: {
            click: function (w, e) {
            }
          }
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8"
        ],
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: type == 'lead' ? this.leadObj.leadAssignCount || 10 : this.data.assigned || 10,
          labels: {
            style: {
              fontSize: "0.7rem",
              fontFamily: "Roboto"
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: true
        },
        xaxis: {
          categories: [
            ["Converted", type == 'lead' ? this.leadObj.leadWinCount : this.data.converted],
            ["Assigned", type == 'lead' ? this.leadObj.leadAssignCount : this.data.assigned],
          ],
          labels: {
            style: {
              colors: [
                "#008FFB",
                "#00E396",
                "#FEB019",
                "#FF4560",
                "#775DD0",
                "#546E7A",
                "#26a69a",
                "#D10CE8"
              ],
              fontSize: "12px"
            }
          }
        },
      } :
      {
        series: [
          {
            name: "",
            data: this.agentLineChartDatas,
            color: "#005f99"
          }
        ],
        chart: {
          height: this.chartH - 8,
          // width: 280,
          type: "line",
          toolbar: {
            show: false
          }
        },
        title: {
          text: "",
          offsetX: 0,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: "0.7rem",
            fontFamily: "Roboto"
          }

        },
        xaxis: {
          type: 'category',
          categories: this.agentLineChartCategories,
          labels: {
            style: {
              fontSize: "0.7rem",
              fontFamily: "Roboto"
            }
          },
        },
        yaxis: {
          min: 0,
          max: maxAg > 10 ? maxAg : 10,
          tickAmount: 5,
          labels: {
            show: false,
            style: {
              fontSize: "0.7rem",
              fontFamily: "Roboto"
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        dataLabels: {
          enabled: false,
          textAnchor: 'middle',
          offsetX: -10,
          offsetY: -5,
          enabledOnSeries: [0]
        },

        markers: {
          size: [5, 0, 0],
        }
      });
  }

  onResize(event) {
    this.radioW = event.target.innerWidth
    this.radioH = event.target.innerHeight;
    this.calculateMainContentHeight(this.radioW, this.radioH);
  }

  calculateMainContentHeight(width, height) {
    let mainContentHeight: number = 0;
    this.chartH = 0;
    if (width < 1000) {
      mainContentHeight = height - 130;
      this.profileHpx = (mainContentHeight / 2) - 50 + 'px';
      this.salesHpx = mainContentHeight - 50 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    } else if (width <= 1000 || width < 1200) {
      mainContentHeight = height - 130;
      this.profileHpx = (mainContentHeight / 2) - 50 + 'px';
      this.salesHpx = mainContentHeight - 50 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '5px';
      this.productPadding = '5px 0';
    } else {
      mainContentHeight = height - (65 + 58.8 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesHpx = mainContentHeight - 50 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 30 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '5px';
      this.productPadding = '5px 0';
    }
    this.mainContentHeight = mainContentHeight;
    this.mainContentHeightPx = mainContentHeight + 'px';

  }

  changeSource(event) {
    event.target.src = "./assets/images/user_profile-01.svg"
  }

  async presentActionSheet() {
    const actionSheet = await this.alertCtrl.create({
      cssClass: 'custom-modal',
      buttons: [
        //   {
        //   icon: 'camera',
        //   text: 'Take a picture',
        //   handler: () => {
        //     this.getPictures(CameraSource.Camera);
        //     console.log('Open Camera');;
        //   }
        // },
        {
          icon: 'images',
          text: 'Choose picture from gallery',
          handler: () => {
            this.getPictures(CameraSource.Photos);
            console.log('Open Gallery');
          }
        }, {
          icon: 'close',
          text: 'Close',
          role: 'cancel',
          handler: () => { console.log('Cancel clicked'); }
        }]
    });
    await actionSheet.present();
  }

  async getPictures(type) {
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: type,
      height: 400,
    }).catch((e) => {

    });
    if (image) {
      this.uploadImage(image)
    }

  }
  async uploadImage(image) {
    image.size = ((image.base64String).length - 814) / 1.37
    image.fileName = Date.now() + this.data.agentInfo.empId
    let data = {
      fileStr: image.base64String,
      fileName: image.fileName,
      fileType: "image/" + image.format,
      fileSize: image.size,
      contentType: "image/" + image.format,
      fileExtension: image.format,
    }
    console.log("data", data);
    this.AttachmentUploadService.save(data).toPromise().then((res) => {
      if (res) {
        let postData = {
          attId: res,
          empId: this.data.agentInfo.empId
        }
        this.DashboardAttachmentService.save(postData).toPromise().then((res) => {
          if (res) {
            this.data.agentInfo.attId = this.encryptData(postData.attId)
            this.cdf.detectChanges()
          }
        })

      }
    })


  }

}

