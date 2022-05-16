import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const FNACol: TableCol[] = [
  {
    title: "FNA ID",
    type: COLTYPE.FEILD,
    field: "id"
  },
  {
    title: "Date",
    type: COLTYPE.FEILD,
    field: "createdAt",
    isFromatDate:true
  },
  {
    title: "Type",
    type: COLTYPE.FEILD,
    field: "fnaType"
  },
  {
    title: "Conducted By",
    type: COLTYPE.FEILD,
    field: "createdByName"  
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


export const FNADisplayCol: string[] = [
  "id",
  "createdAt",
  "fnaType",
  "createdByName",
  "actions"
]

export const AttachmentCol: TableCol[] = [

  {
    title: "Description",
    type: COLTYPE.FEILD,
    field: "description",
  },
  {
    title: "Document",
    type: COLTYPE.FEILD,
    field: "fileName"
  },
  {
    title: "Action",
    type: COLTYPE.ACTION,
    field: "action",
    btn: {
      download: true,
      delete: true,

    }
  },

]

export const AttachmentDisplayCol: string[] = [
  "description",
  "fileName",
  "action"
]

export const CampaignCol: TableCol[] = [

  {
    title: "Campaign Number",
    type: COLTYPE.FEILD,
    field: "cpmNumber",
  },
  {
    title: "Campaign Name",
    type: COLTYPE.FEILD,
    field: "cpmName"
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "cpmStatus",
  },
  {
    title: "Owner",
    type: COLTYPE.FEILD,
    field: "cpmOwnerName",
  },

]

export const CampaignDisplayCol: string[] = [
  "cpmNumber",
  "cpmName",
  "cpmStatus",
  "cpmOwnerName",
]

export class FNAConstant {
  public static LEAD_ID: string = '';
}





