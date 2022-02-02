import { COLTYPE, TableCol } from "src/app/_metronic/shared/crud-table/components/material-table-view/table-dto"

export const WAREHOUSE_ELEMENT_COL: TableCol[] = [
  {
    title: "Asset Description",
    type: COLTYPE.FEILD,
    field: "description"
  },
  {
    title: "No. of Units",
    type: COLTYPE.FEILD,
    field: "unit"
  },
  {
    title: "Estimated Value (Lakhs)",
    type: COLTYPE.FEILD,
    field: "valueLaks"
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
    title: "Action",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true,
      delete: true
    }
  },
]

export const WAREHOUSE_DISPLAY_COL: string[] = [
  "description",
  "unit",
  "valueLaks",
  "riskValue",
  "productName",
  "actions",
]