import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PolicyDTO } from "../../policy/policy.dto";
import { Product } from "../../products/models/product.dto";
import { QuotationDTO } from "../../quotations/quotation.dto";
import { StaticPageAction } from "../static-field.interface";

@Component({
  templateUrl: "./travel-page.component.html",
})
export class TravelComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId?: string
  @Input() premiumAmt: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  constructor() { }

  ngOnInit(): void {

  }

  

}