import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CurrencyCol: TableCol[] = [

  {
    title: "Currency Type",
    type: COLTYPE.FEILD,
    field: "type",
    isUpper: true
  },
  {
    title: "Amount",
    type: COLTYPE.FEILD,
    field: "amount",
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

export const CurrencyDisplayCol: string[] = [
  // "id",
  "type",
  "amount",
  "actions",
]