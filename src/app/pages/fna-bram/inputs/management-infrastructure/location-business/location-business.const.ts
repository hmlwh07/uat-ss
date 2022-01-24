import { COLTYPE, TableCol } from "src/app/_metronic/shared/crud-table/components/material-table-view/table-dto"

export const ELEMENT_COL: TableCol[] = [
  {
    title: "No. of Locations",
    type: COLTYPE.FEILD,
    field: "noOfLocation"
  },
  {
    title: "Risk Perception",
    type: COLTYPE.FEILD,
    field: "riskValue"
  },
  {
    title: "Product",
    type: COLTYPE.FEILD,
    field: "productName"
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true,
      delete: true
    }
  },
]

export const DISPLAY_COL: string[] = [
  "noOfLocation",
  "riskValue",
  "productName",
  "actions"
]