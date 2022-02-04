import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto'
export const CustomerCol: TableCol[] = [
  {
    title: "First Name",
    type: COLTYPE.FEILD,
    field: "firstName"
  },
  {
    title: "Middle Name",
    type: COLTYPE.FEILD,
    field: "middleName"
  },
  {
    title: "Last Name",
    type: COLTYPE.FEILD,
    field: "lastName"
  },

  {
    title: "Party Code",
    type: COLTYPE.FEILD,
    field: "partyCode"
  },
  {
    title: "ID Type",
    type: COLTYPE.FEILD,
    field: "identityType",
  },
  {
    title: "ID No.",
    type: COLTYPE.FEILD,
    field: "identityNumber",
  },
  {
    title: "Date of Birth",
    type: COLTYPE.FEILD,
    field: "dateOfBirth",
    isFromatDate: true
  },
  {
    title: "Father Name",
    type: COLTYPE.FEILD,
    field: "fatherName"
  },
  {
    title: "Status",
    type: COLTYPE.FEILD,
    field: "statusCode",
    isCustomerStatus: true
  },
  {
    title: "Actions",
    type: COLTYPE.ACTION,
    field: "actions",
    btn: {
      edit: true
    }
  },
]

export const CustomerDisplayCol: string[] = [
  "firstName",
  "middleName",
  "lastName",
  "partyCode",
  "identityType",
  "identityNumber",
  "dateOfBirth",
  "fatherName",
  "statusCode",
  "actions",
]

export const Status: any[] = [
  {
    code : "A",
    value : "Active"
  },{
    code : "I",
    value : "Inactive"
  }
]

export const IdentityType: any[] = [
  {
    code : "NRC",
    value : "NRC"
  },{
    code : "FRC",
    value : "FRC"
  },{
    code : "PASSPORT",
    value : "Passport"
  },{
    code : "OTHER",
    value : "Other"
  }
]