import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { ProductsService } from 'src/app/_metronic/core/services/products.service';
import { PolicyService } from '../policy/policy.service';
import { ProductDataService } from '../products/services/products-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-qr-source-link',
  templateUrl: './qr-source-link.component.html',
  styleUrls: ['./qr-source-link.component.scss'],
})
export class QrSourceLinkComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private prodctService: ProductDataService, private router: Router, private policyService: PolicyService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let resourceId = params['resourceId'];
      let productId = params['productId'];
      this.goViewDetail(productId, resourceId);
    });
  }

  goViewDetail(productId, resourceId) {
    forkJoin([this.prodctService.findOne(productId), this.policyService.findOne(resourceId).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res[0] && res[1]) {
        this.prodctService.createingProd = res[0]
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = res[1]
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }

}
