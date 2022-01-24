import { EventEmitter } from "@angular/core";
import { PolicyDTO } from "../policy/policy.dto";
import { Product } from "../products/models/product.dto";
import { QuotationDTO } from "../quotations/quotation.dto";

export interface StaticField {
  product?: Product
  editData?: PolicyDTO | QuotationDTO,
  resourcesId?: string
  premiumAmt?: string
  actionEvent?: EventEmitter<StaticPageAction>
}

export interface StaticPageAction {
  type: StaticActionType,
  data?: any
}

export enum StaticActionType {
  NEXT = 'next',
  PREV = 'prev'
}