import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const ProductCol: TableCol[] = [
  // {
  //   title: "Logo",
  //   type: COLTYPE.FEILD,
  //   field: "icon",
  //   isImg: true,
  // },
  {
    title: "Small Icon",
    type: COLTYPE.FEILD,
    field: "smallIcon",
    isImg: true,
  },
  {
    title: "Product Name",
    type: COLTYPE.FEILD,
    field: "name",
  },
  {
    title: "Product Code",
    type: COLTYPE.FEILD,
    field: "code",
  },
  {
    title: "Type",
    type: COLTYPE.FEILD,
    field: "type",
    isTitle: true,
  },
  // {
  //   title: "Stamp Duty",
  //   type: COLTYPE.FEILD,
  //   field: "stamDuty",
  //   isTitle: true,
  // },
  {
    title: "Allow Back Date",
    type: COLTYPE.FEILD,
    field: "isAllowBackDate",
    isAllowBackDate: true
  },
  {
    title: "Quotation Auto Lapse Rule",
    type: COLTYPE.FEILD,
    field: "quotationDay",
    isQuotationDay: true
  },
  {
    title: "Application Auto Lapse Rule",
    type: COLTYPE.FEILD,
    field: "policyDay",
    isPolicyDay: true
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "statusCd",
    isProdStatus: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      view: true,
      edit: true
    }
  },

]

export const ProductDisplayCol: string[] = [
  // "id",
  // "icon",
  "smallIcon",
  "name",
  "code",
  "type",
  // "stamDuty",
  "isAllowBackDate",
  "quotationDay",
  'policyDay',
  "statusCd",
  "actions",
]