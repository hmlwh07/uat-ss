import { COLTYPE, TableCol } from '../../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const PolicyCol: TableCol[] = [
  {
    title: "Application ID",
    type: COLTYPE.FEILD,
    field: "id",
  },
  {
    title: "Product Name",
    type: COLTYPE.FEILD,
    field: "productName",
  },
  {
    title: "Product Code",
    type: COLTYPE.FEILD,
    field: "productCode",
  },
  {
    title: "Quotation ID",
    type: COLTYPE.FEILD,
    field: "quotationId",
  },
  {
    title: "Agent Name",
    type: COLTYPE.FEILD,
    field: "agentFirstName",
  },
  {
    title: "Premium",
    type: COLTYPE.FEILD,
    field: "premium",
    amtFormat: true,
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isStatus: true
  },
  {
    title: "Submission Status",
    type: COLTYPE.FEILD,
    field: "apiStatus",
    isApiStatus: true
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "createdAt",
    isDate: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      view: true,
      edit: true,
      editOnState: true
    }
  },
]

export const PolicyDisplayCol: string[] = [
  "id",
  "productName",
  "productCode",
  "agentFirstName",
  "premium",
  "status",
  "apiStatus",
  "createdAt",
  "actions",
]