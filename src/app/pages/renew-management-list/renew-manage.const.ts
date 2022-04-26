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
    title: "Product Code",
    type: COLTYPE.FEILD,
    field: "productCode",
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
    title: "Agent Name",
    type: COLTYPE.FEILD,
    field: "agentName",
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
  "productCode",
  "agentName",
  "premium",
  "currency",
  "status",
  "actions",
]