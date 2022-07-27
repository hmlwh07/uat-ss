import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const RenewCol: TableCol[] = [
  {
    title: "Policy Number",
    type: COLTYPE.FEILD,
    field: "policyNumber",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
 
  {
    title: "Product Name",
    type: COLTYPE.FEILD,
    field: "productName",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  // {
  //   title: "Related Type",
  //   type: COLTYPE.FEILD,
  //   field: "relatedType",
  //   // amtFormat?: boolean,
  //   isTitle: true
  //   // isDate?: boolen
  // },

  {
    title: "Policy Holder",
    type: COLTYPE.FEILD,
    field: "agentName",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Policy Holder",
    type: COLTYPE.FEILD,
    field: "policyHolder",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Premium",
    type: COLTYPE.FEILD,
    field: "premium",
    // isTitle?: boolean
    amtFormat: true
    // isDate?: boolen
  },
  {
    title: "Currency",
    type: COLTYPE.FEILD,
    field: "currency",
  },
  {
    title: "Policy Inception Date",
    type: COLTYPE.FEILD,
    field: "policyInceptionDate",
  },
  {
    title: "Policy Expiry Date",
    type: COLTYPE.FEILD,
    field: "policyExpiryDate",
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isRenewStatus: true,
    // amtFormat?: boolean,
    // isTitle?: boolean
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      // edit: true,
      confirm: true,
      view: true,
      download: true
    }
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
]

export const ActivityDisplayCol: string[] = [
  "policyNumber",
  // "renewalPolicyNumber",
  "productName",
  "agentName",
  "policyHolder",
  "premium",
  "currency",
  "policyInceptionDate",
  "policyExpiryDate",
  "status",
  "actions",
]