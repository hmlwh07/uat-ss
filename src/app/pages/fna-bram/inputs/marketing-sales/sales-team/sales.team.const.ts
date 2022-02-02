import { COLTYPE, TableCol } from "../../../../../../app/_metronic/shared/crud-table/components/material-table-view/table-dto"

export const ELEMENT_COL: TableCol[] = [
  {
    title: "Question",
    type: COLTYPE.FEILD,
    field: "description"
  },
  {
    title: "Answer",
    type: COLTYPE.FEILD,
    field: "answer"
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
  "description",
  "answer",
  "riskValue",
  "productName",
  "actions"
]