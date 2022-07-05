import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CurrencyColWithAction: TableCol[] = [

  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "date",
    isFromatDate: true
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
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true,
      delete: true
    }
  },

]
export const CurrencyColWithoutAction: TableCol[] = [

  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "date",
    isFromatDate: true
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
]

export const CurrencyDisplayColWithAction: string[] = [
  // "id",
  "date",
  "type",
  "amount",
  "actions",
]

export const CurrencyDisplayColWithoutAction: string[] = [
  // "id",
  "date",
  "type",
  "amount",
]