import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductDataService } from '../../products/services/products-data.service';

@Component({
  selector: 'app-health-print',
  templateUrl: './health-print.component.html',
  styleUrls: ['./health-print.component.scss']
})
export class HealthPrintComponent implements OnInit {
  @Input() resourcesId?: string
  signId: any = ""
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private productService: ProductDataService,) { }

  ngOnInit(): void {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
  }

  

}
