import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CurrencyCol: TableCol[] = [

  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "date",
    isDate: true
  },
  {
    title: "Currency",
    type: COLTYPE.FEILD,
    field: "type",
    isUpper: true
  },
  {
    title: "Rate",
    type: COLTYPE.FEILD,
    field: "amount",
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

export const CurrencyDisplayCol: string[] = [
  // "id",
  "date",
  "type",
  "amount",
  "actions",
]