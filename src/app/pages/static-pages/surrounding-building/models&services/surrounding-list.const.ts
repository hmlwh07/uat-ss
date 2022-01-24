import { COLTYPE, TableCol } from '../../../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const SURROUNDING_COL: TableCol[] = [
  {
    title: "Building Description",
    type: COLTYPE.FEILD,
    field: "description",
    isDate:true
  },
  {
    title: "Type of building",
    type: COLTYPE.FEILD,
    field: "typeOfBuilding"
  },
  {
    title: "Occupation",
    type: COLTYPE.FEILD,
    field: "occupation"
  },
  {
    title: "Class",
    type: COLTYPE.FEILD,
    field: "class"
  },
  {
    title: "Premiun Rate",
    type: COLTYPE.FEILD,
    field: "premiumRate"
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true,
      view:true
    }
  },
  
]

export const SurroundingDisplayCol: string[] = [
  "description",
  "typeOfBuilding",
  "occupation",
  "class",
  "premiumRate"
]
  