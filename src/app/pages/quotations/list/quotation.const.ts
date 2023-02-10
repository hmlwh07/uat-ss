import { COLTYPE, TableCol } from '../../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const QuotationCol: TableCol[] = [
  {
    title: "Quotation ID",
    type: COLTYPE.FEILD,
    field: "id",
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
  {
    title: "Product Code",
    type: COLTYPE.FEILD,
    field: "productCode",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Agent Name",
    type: COLTYPE.FEILD,
    field: "agentFirstName",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Premium",
    type: COLTYPE.FEILD,
    field: "premium",
    amtFormat: true,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isStatus: true
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "createdAt",
    // amtFormat?: boolean,
    // isTitle?: boolean
    isDate: true
  },
  // {
  //   title: "Application",
  //   type: COLTYPE.TEXT,
  //   field: "create application",
  //   // amtFormat?: boolean,
  //   // isTitle?: boolean
  //   // isDate: true
  // },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn:{
      view: true,
      edit: true,
      editOnState: true
    }
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
]

export const QuoDisplayCol: string[] = [
  "id",
  "productName",
  "productCode",
  "agentFirstName",
  "premium",
  "status",
  "createdAt",
  // "create application",
  "actions",
]