import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const FNAListCol: TableCol[] = [
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "createdAt",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "FNA Type",
    type: COLTYPE.FEILD,
    field: "fnaType",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Conducted By",
    type: COLTYPE.FEILD,
    field: "conductedBy",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true,
      delete: true
    }
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
]

export const FNAListDisplayCol: string[] = [
  "createdAt",
  "fnaType",
  "conductedBy",
  "actions",
]

