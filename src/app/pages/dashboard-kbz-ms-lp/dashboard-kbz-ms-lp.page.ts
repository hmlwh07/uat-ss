import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexGrid,
} from 'ng-apexcharts';
import { environment } from '../../../environments/environment';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { DashboardAttachmentService, DashboardService } from '../dashboard-kbz-ms-senior/dashboard.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AttachmentUploadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { MenuDataRoleService } from 'src/app/core/menu-data-role.service';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

interface ViewObjData {
  quotations?: any[]
  policies?: any[]
}

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

@Component({
  selector: 'app-dashboard-kbz-ms-lp',
  templateUrl: './dashboard-kbz-ms-lp.page.html',
  styleUrls: ['./dashboard-kbz-ms-lp.page.scss'],
})
export class DashboardKbzMsLpPage implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  data: any;
  actForm: FormGroup;

  recentObj: ViewObjData = {
    quotations: [],
    policies: []
  };
  campaign: any = [];
  campaignArray = [];
  followup: any = [];
  followUpArray = [];
  assignlead: any = [];
  assignLeadArray = [];
  backlog: any = [];
  backlogArray = [];
  totalPremium: number = 0
  renewalPremium: any = []
  productPremium: any = []
  premiumWithRenewal: any = []
  unsub: any = {};
  id: any;
  roleId: any;
  months = [
    'JAN',
    'FEB',
    'Mar',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;
  currentMonthIndex: number = new Date().getUTCMonth();

  icons = [
    {
      activityType: 'Face to Face',
      image: "./assets/images/group_chat_color-01.svg"
    },
    {
      activityType: 'Online',
      image: "./assets/images/world_color-01.svg"
    },
    {
      activityType: 'Phone Call',
      image: "./assets/images/phone_color-01.svg"
    },
  ];
  radioW: any;
  radioH: any;
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
  salesH: number;
  productImageWidth: string;
  tempPolicy: any;

  constructor(
    private platform: Platform,
    private cdf: ChangeDetectorRef,
    private ngzone: NgZone,
    private route: ActivatedRoute,
    public auth: AuthService,
    private dashboardService: DashboardService,
    private router: Router,
    private AttachmentUploadService: AttachmentUploadService,
    private alertCtrl: ActionSheetController,
    private DashboardAttachmentService: DashboardAttachmentService,
    private encryption: EncryptService) {
    this.route.queryParams.subscribe(async params => {
      if (params.empId) {
        this.id = JSON.parse(params.empId);
        this.roleId = JSON.parse(params.roleId);
        this.loadForm();
      } else {
        this.id = this.auth.currentUserValue.id;
        this.loadForm();
      }
    });
  }

  ngOnInit() {
    this.getList();
    this.getRecentList();
    this.getCampaignList();
    this.getFollowupList();
    this.getBacklogList();
    this.getLeadAssignList();
    this.radioW = this.platform.width();;
    this.radioH = this.platform.height();;

    this.calculateMainContentHeight(this.radioW, this.radioH)

  }
  encryptData(attid) {
    let id = this.encryption.encryptData(attid)
    return id || null
  }
  getImageURL(type) {
    let index = this.icons.findIndex(i => i.activityType == type);
    return this.icons[index].image;
  }
  loadForm() {
    this.actForm = new FormGroup({
      "empId": new FormControl(this.id)
    });
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

          this.setChartOptions();
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

  getRecentList() {
    this.ngzone.run(_ => {
      this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.recentObj = res;
          // console.log('recentObj', this.recentObj)
          this.cdf.detectChanges();
        }
      })
    });
  }

  getCampaignList() {
    this.ngzone.run(_ => {
      this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.campaign = res
          this.campaign.map(c => {
            this.campaignArray.push(c);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }

  getBacklogList() {
    this.ngzone.run(_ => {
      this.dashboardService.getBacklogList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.backlog = res;
          this.backlog.map(log => {
            this.backlogArray.push(log);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }

  getLeadAssignList() {
    this.ngzone.run(_ => {
      this.dashboardService.getLeadAssignList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.assignlead = res;
          this.assignlead.map(log => {
            this.assignLeadArray.push(log);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }

  getFollowupList() {
    this.ngzone.run(_ => {
      this.dashboardService.getFollowupList(this.actForm.value).toPromise().then((res) => {
        if (res) {
          this.followup = res;
          this.followup.map(log => {
            this.followUpArray.push(log);
          })
          this.cdf.detectChanges();
        }
      })
    });
  }


  ngOnDestroy() {
  }

  goToSaleQuotation() {
    this.router.navigate(['/sales/quotation/list'])
  }

  goToSalePolicies() {
    this.router.navigate(['/sales/application/list'])
  }

  goToCalendar() {
    this.router.navigate(['/mycalendar'])
  }

  goToLeadList() {
    this.router.navigate(['/lead/lead-list'])
  }

  setChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [this.data.converted, this.data.assigned],
        },
      ],
      chart: {
        toolbar: {
          show: false
        },
        height: 150,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
          },
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '20%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['Converted', this.data.converted],
          ['Assigned', this.data.assigned],
        ],
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
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
      this.salesHpx = mainContentHeight - 80 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
    } else if (width <= 1000 || width < 1200) {
      mainContentHeight = height - 130;
      this.profileHpx = (mainContentHeight / 2) - 50 + 'px';
      this.salesHpx = mainContentHeight - 80 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.thingsHpx = this.chartH - 40 + 'px';
      this.chartHpx = this.chartH + 20 + 'px';
      this.profileImgW = '120px'
      this.profilePadding = '5px';
      this.productPadding = '5px 0';
    } else {
      mainContentHeight = height - (65 + 58.8 + 65 + 15);
      this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
      this.salesH = mainContentHeight / 3;
      this.salesHpx = this.salesH - 30 + 'px';
      this.chartH = (mainContentHeight / 3);
      this.chartHpx = this.chartH - 55 + 'px';
      this.profileImgW = '120px';
      this.productImageWidth = '35px';
      this.profilePadding = '7px';
      this.productPadding = '7px 0';
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
    this.AttachmentUploadService.save(data).toPromise().then((res) => {
      if (res) {
        let postData = {
          attId: res,
          empId: this.data.agentInfo.empId
        }
        // this.data.agentInfo.attId=851
        // this.cdf.detectChanges()
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

