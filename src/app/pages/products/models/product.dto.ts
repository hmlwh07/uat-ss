import { BtnConfig, ConfigInput } from "../../form-component/field.interface"

export interface Product {
  id?: number
  name?: string
  code?: string
  coverName?: string
  type?: string
  quotationDay?: number
  quotationRule?: RuleType
  paymentFrequencyType?: string
  application?: boolean
  quotation?: boolean
  isAllowBackDate?: string
  showInList?:string
  allowDays?: number
  stamDuty?: boolean
  coverages?: any[]
  addOns?: any[],
  config?: string,
  application_ui?: any[]
  quotation_ui?: any[]
  application_page?: PageUI[]
  quotation_page?: PageUI[],
  validityPeriod?: any[]
  application_view?: string
  quotation_view?: string
  productUIs?: any[],
  quotation_input?: any
  application_input?: any
  statusCd?: string
  isQuotation?: boolean
  isPolicy?: boolean
  isApplication?: boolean
  statusValue?: string
  pdfConfig?: string
  icon?: string
  smallIcon?: string
  coverIcon?: string
  policyRule?: RuleType
  policyDay?: number,
  // submittedCode: string
}
export enum RuleType {
  DAY = 'days',
  MONTH = 'months'
}

export interface Coverage {
  id?: string
  description?: string
  premium?: boolean
  premiumStr?: string
  productId?: string
  sumInsured?: boolean
  sumInsuredStr?: string
  unit?: boolean
  unitStr?: string
  code?: string
  validationFun?: string
}
export interface AddOn {
  id?: string
  description?: string
  premium?: boolean
  premiumStr?: string
  productId?: string
  sumInsured?: boolean
  sumInsuredStr?: string
  unit?: boolean
  unitStr?: string
  code?: string
  validationFun?: string
}
export interface QuoAddon {
  id?: string
  addonId?: string
  quotationNo?: string
  sumInsured?: string
  unit?: string
  premium?: string
}

export interface ProductUI {
  productId: number,
  type: string,
  dyProductID: number
}

export interface ProductPages {
  application: PageUI[],
  quotation: PageUI[],
  application_view?: string
  quotation_view?: string
  quotation_input: any
  application_input: any
}

export interface PageUI {
  id: string,
  pageTitle?: string,
  pageType?: string,
  pageIcon?: string,
  parent?: string
  type?: string
  tableName?: string,
  function?: string
  party?: boolean
  unitCode?: string,
  controls?: ConfigInput[]
  buttons?: BtnConfig[]
}

export enum PageUIType {
  DYN = 'dyn',
  STATIC = 'static'
}

export const PRODUCT_STATUS = {
  "01": "Draft",
  "02": "Active"
}