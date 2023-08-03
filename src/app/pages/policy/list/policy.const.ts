import { COLTYPE, TableCol } from '../../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const PolicyCol: TableCol[] = [
  {
    title: "Application ID",
    type: COLTYPE.FEILD,
    field: "id",
  },
  {
    title: "Product Name",
    type: COLTYPE.FEILD,
    field: "productName",
  },
  // {
  //   title: "Product Code",
  //   type: COLTYPE.FEILD,
  //   field: "productCode",
  // },
  {
    title: "Quotation ID",
    type: COLTYPE.FEILD,
    field: "quotationId",
  },
  {
    title: "Agent Name",
    type: COLTYPE.FEILD,
    field: "agentFirstName",
  },
  {
    title: "Premium",
    type: COLTYPE.FEILD,
    field: "premiumView",
    // amtFormat: true,
  },
  {
    title: "Sum Insured",
    type: COLTYPE.FEILD,
    field: "sumInsureView",
    // amtFormat: true,
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "status",
    isStatus: true
  },
  {
    title: "Submission Status",
    type: COLTYPE.FEILD,
    field: "apiStatus",
    isApiStatus: true
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "applicationDate",
    isDate: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      view: true,
      edit: true,
      editOnState: true
    }
  },
]

export const PolicyDisplayCol: string[] = [
  "id",
  "productName",
  // "productCode",
  "agentFirstName",
  "premiumView",
  "sumInsureView",
  "status",
  "apiStatus",
  "applicationDate",
  "actions",
]

export const ApplicationStatus: any[] = [
  {
    code: "D",
    value: "DRAFT APPLICATION"
  },
  {
    code: "A",
    value: "APPROVED APPLICATION"
  },
  {
    code: "R",
    value: "REJECT APPLICATION"
  },
  {
    code: "05",
    value: "ACTIVE POLICY"
  },
  {
    code: "04",
    value: "APPROVE RENEWAL"
  },
  {
    code: "25",
    value: "CANCELLATION IN PROGRESS"
  },
  {
    code: "09",
    value: "CANCELLED"
  },
  {
    code: "06",
    value: "ENDORSEMENT/ALTERTION STARTED"
  },
  {
    code: "13",
    value: "EXPIRED/MATURED"
  },
  {
    code: "17",
    value: "FORFEITED"
  },
  {
    code: "15",
    value: "LAPSED"
  },
  {
    code: "19",
    value: "PAID UP"
  },
  {
    code: "10",
    value: "QUICK QUOTE"
  },
  {
    code: "07",
    value: "REFERRED TO UNDERWRITE"
  },
  {
    code: "12",
    value: "RENEWAL IN PROGRESS"
  },
  {
    code: "16",
    value: "REVIVAL IN PROGRESS"
  },
  {
    code: "18",
    value: "REVIVED POLICY"
  },
  {
    code: "14",
    value: "SPECIAL REVIVAL IN PROGRESS"
  },
  {
    code: "08",
    value: "SUSPENDED"
  },
  {
    code: "11",
    value: "WITHDRAW/SURRENDERED"
  },
  {
    code: "F",
    value: "FAIL"
  },
  {
    code: "S",
    value: "SENDING"
  }
]