import { COLTYPE, TableCol } from "src/app/_metronic/shared/crud-table/components/material-table-view/table-dto"

export const ELEMENT_COL: TableCol[] = [
  {
    title: "Average Age",
    type: COLTYPE.FEILD,
    field: "averageAge"
  },
  {
    title: "No of People",
    type: COLTYPE.FEILD,
    field: "noOfPeople"
  },
  {
    title: "Package",
    type: COLTYPE.FEILD,
    field: "packages"
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

export const DISPLAY_COL: string[] = [
  "averageAge",
  "noOfPeople",
  "packages",
  "riskValue",
  "productName",
  "actions"
]