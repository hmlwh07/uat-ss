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
    field: "jobName"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "runDate",
    isFromatDate: true
  },
  {
    title: "status",
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

export const CRM_DISPLAYCOL: string[] = [
  "jobType",
  "jobName",
  "runDate",
  'status',
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
    title: "status",
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
