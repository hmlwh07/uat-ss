import { EventEmitter } from "@angular/core";
import { PolicyDTO } from "../policy/policy.dto";
import { Product } from "../products/models/product.dto";
import { QuotationDTO } from "../quotations/quotation.dto";

export interface ListField {
  itemData?: any
  btnEvent?: EventEmitter<ListItemAction>
}

export interface ListItemAction {
  cmd?: ListActionType,
  data?: any
}

export enum ListActionType {
  EDIT = 'edit',
  DELETE = 'delete',
  VIEW = 'view',
  RESEND='resend'
}