import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CRM_COL: TableCol[] = [
  {
    title: "Job Type",
    type: COLTYPE.FEILD,
    field: "jobType"
  },
  {
    title: "Error Description",
    type: COLTYPE.FEILD,
    field: "errorDescription"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "date",
    isDate: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      view: true,
      rerun: true,
    }
  },
]

export const CRM_DISPLAYCOL: string[] = [
  "jobType",
  "errorDescription",
  "date",
  "actions",
]


export const SALE_COL: TableCol[] = [
  {
    title: "Job Type",
    type: COLTYPE.FEILD,
    field: "jobType"
  },
  {
    title: "Error Description",
    type: COLTYPE.FEILD,
    field: "errorDescription"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "date",
    isDate: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      view: true,
    }
  },
]

export const SALE_DISPLAY_COL: string[] = [
  "jobType",
  "errorDescription",
  "date",
  "actions",
]
