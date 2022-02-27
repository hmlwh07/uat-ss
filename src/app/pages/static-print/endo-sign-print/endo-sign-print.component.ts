import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductDataService } from '../../products/services/products-data.service';

@Component({
  selector: 'app-endo-sign-print',
  templateUrl: './endo-sign-print.component.html',
  styleUrls: ['./endo-sign-print.component.scss']
})
export class EndoSignPrintComponent implements OnInit {
  @Input() resourcesId?: string
  signId:any = ""
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private productService: ProductDataService,) { }

  ngOnInit(): void {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
  }

}
