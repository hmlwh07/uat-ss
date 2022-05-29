export interface TableCol {
  title: string,
  type: COLTYPE,
  field?: string,
  amtFormat?: boolean,
  isTitle?: boolean,
  isDate?: boolean,
  isFromatDate?: boolean,
  isDateTime?:boolean,
  isActivityStatus?: boolean
  isLeadStatus?: boolean
  isAttachment?: boolean
  isProdStatus?: boolean
  isCustomerStatus?: boolean
  isQuotationDay?: boolean,
  isPolicyDay?: boolean,
  isAllowBackDate?: boolean,
  isPaymentFrequencyType?: boolean,
  isUpper?: boolean
  btn?: ViewButton,
  isRenewStatus?: boolean,
  isStatus?: boolean,
  isApiStatus?:boolean,
  isImg?: boolean,
  prefix?: string 
}

export enum COLTYPE {
  FEILD = 'field',
  TEXT = 'text',
  RENEW = 'renew',
  ACTION = 'action'
}
export interface ViewButton {
  view?: boolean,
  edit?: boolean,
  download?:boolean,
  editOnState?: boolean
  delete?: boolean,
  confirm?: boolean,
  rerun?:boolean,
}

export const ActivityStatus = {
  "01": "Open",
  "02": "Complete",
  "03": "Cancel",
}

