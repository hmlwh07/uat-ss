import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const ActivityCol: TableCol[] = [
  {
    title: "Activity No.",
    type: COLTYPE.FEILD,
    field: "activityNo",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Activity Type",
    type: COLTYPE.FEILD,
    field: "activityType",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Activity Title",
    type: COLTYPE.FEILD,
    field: "activityTitle",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  // {
  //   title: "Related Type",
  //   type: COLTYPE.FEILD,
  //   field: "relatedType",
  //   // amtFormat?: boolean,
  //   isTitle: true
  //   // isDate?: boolen
  // },

  {
    title: "Related To",
    type: COLTYPE.FEILD,
    field: "relatedTo",
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Assigned To",
    type: COLTYPE.FEILD,
    field: "assignName",
    // isTitle?: boolean
    // isDate?: boolen
  },
  {
    title: "Due Date",
    type: COLTYPE.FEILD,
    field: "dueDate",
    isFromatDate: true
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isActivityStatus: true,
    // amtFormat?: boolean,
    // isTitle?: boolean
  },
  {
    title: "Customer",
    type: COLTYPE.FEILD,
    field: "customerName",
    // amtFormat?: boolean,
    // isTitle?: boolean
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true
    }
    // amtFormat?: boolean,
    // isTitle?: boolean
    // isDate?: boolen
  },
]

export const ActivityDisplayCol: string[] = [
  "activityNo",
  "activityType",
  "activityTitle",
  // "relatedType",
  "relatedTo",
  "assignName",
  "dueDate",
  "status",
  "customerName",
  "actions",
]