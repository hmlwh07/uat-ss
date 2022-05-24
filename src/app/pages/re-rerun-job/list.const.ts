import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CRM_COL: TableCol[] = [
  {
    title: "Job Type",
    type: COLTYPE.FEILD,
    field: "jobType"
  },
  {
    title: "Job Name",
    type: COLTYPE.FEILD,
    field: "jobNameValue"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "runDate",
    isDateTime: true
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "statusValue",
    isTitle: true
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
  "jobNameValue",
  "runDate",
  'statusValue',
  "actions",
]


export const SALE_COL: TableCol[] = [
  {
    title: "Job Type",
    type: COLTYPE.FEILD,
    field: "jobType"
  },
  {
    title: "Job Name",
    type: COLTYPE.FEILD,
    field: "jobName"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "runDate",
    isFromatDate: true
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isTitle: true
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

export const SALE_DISPLAY_COL: string[] = [
  "jobType",
  "jobName",
  "runDate",
  'status',
  "actions",
]
