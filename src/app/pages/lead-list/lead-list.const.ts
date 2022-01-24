import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const LeadCol: TableCol[] = [
  {
    title: "Lead ID",
    type: COLTYPE.FEILD,
    field: "leadId"
  },
  {
    title: "Lead Name",
    type: COLTYPE.FEILD,
    field: "contactName"
  },
  {
    title: "Product",
    type: COLTYPE.FEILD,
    field: "productName"
  },
  {
    title: "Existing Customer",
    type: COLTYPE.FEILD,
    field: "existingCustomerName"
  },

  {
    title: "Source",
    type: COLTYPE.FEILD,
    field: "sourceValue"
  },
  {
    title: "Open Date",
    type: COLTYPE.FEILD,
    field: "openedDate",
    isFromatDate:true
  },
  {
    title: "Campaign Name",
    type: COLTYPE.FEILD,
    field: "campaignName",
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "statusCode",
    isLeadStatus: true
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

export const LeadDisplayCol: string[] = [
  "leadId",
  "contactName",
  "productName",
  "existingCustomerName",
  "sourceValue",
  "openedDate",
  "campaignName",
  "statusCode",
  "actions",
]

