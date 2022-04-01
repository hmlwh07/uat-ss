import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PageUI, Product } from '../../../products/models/product.dto';

@Component({
  selector: 'app-travel-risk-detail',
  templateUrl: './travel-risk-detail.component.html',
  styleUrls: ['./travel-risk-detail.component.scss']
})
export class TravelRiskDetailComponent implements OnInit {
  @Input() pageOrder: PageUI[] = []
  @Input() product: Product
  @Input() editData: any = {}
  @Input() resourcesId?: string
  @Input() premiumAmt: string
  tempData = {}
  constructor(){}
  ngOnInit(): void {
    
  }

}
