import { COLTYPE, TableCol } from "src/app/_metronic/shared/crud-table/components/material-table-view/table-dto"

export const ELEMENT_COL: TableCol[] = [
  {
    title: "Vehicle No.",
    type: COLTYPE.FEILD,
    field: "description"
  },
  {
    title: "Engine Capacity",
    type: COLTYPE.FEILD,
    field: "engineCapacity"
  },
  {
    title: "Estimated Value (Laks)",
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
  "description",
  "engineCapacity",
  "valueLaks",
  "riskValue",
  "productName",
  "actions"
]