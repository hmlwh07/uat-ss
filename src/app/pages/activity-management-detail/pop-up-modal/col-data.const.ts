import { COLTYPE } from "../../../_metronic/shared/crud-table/components/material-table-view/table-dto"

export const TableColData = {
  quotation: {
    ELEMENT_COL: [
      {
        title: "Quotation ID",
        type: COLTYPE.FEILD,
        field: "id",
      },
      {
        title: "Product Name",
        type: COLTYPE.FEILD,
        field: "productName",
      },
      {
        title: "Product Code",
        type: COLTYPE.FEILD,
        field: "productCode",
      },
      {
        title: "Agent Name",
        type: COLTYPE.FEILD,
        field: "agentFirstName",
      },
      {
        title: "Premium",
        type: COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
      },
      {
        title: "Status",
        type: COLTYPE.FEILD,
        field: "status",
        isTitle: true
      },
    ],
    displayedColumns: [
      "id",
      "productName",
      "productCode",
      "agentFirstName",
      "premium",
      "status",
    ]
  },
  policy: {
    ELEMENT_COL: [
      {
        title: "Quotation ID",
        type: COLTYPE.FEILD,
        field: "id",
      },
      {
        title: "Product Name",
        type: COLTYPE.FEILD,
        field: "productName",
      },
      {
        title: "Product Code",
        type: COLTYPE.FEILD,
        field: "productCode",
      },
      {
        title: "Agent Name",
        type: COLTYPE.FEILD,
        field: "agentFirstName",
      },
      {
        title: "Premium",
        type: COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
      },
      {
        title: "Status",
        type: COLTYPE.FEILD,
        field: "status",
        isTitle: true
      },
    ],
    displayedColumns: [
      "id",
      "productName",
      "productCode",
      "agentFirstName",
      "premium",
      "status",
    ]
  },
  customer: {
    ELEMENT_COL:[
      {
        title: "ID",
        type: COLTYPE.FEILD,
        field: "id",
        // prefix: "CUS_"
      },
      {
        title: "Title",
        type: COLTYPE.FEILD,
        field: "title",
      },
      {
        title: "First Name",
        type: COLTYPE.FEILD,
        field: "firstName",
      },
      {
        title: "Last Name",
        type: COLTYPE.FEILD,
        field: "lastName",
      },
      {
        title: "Identity Type",
        type: COLTYPE.FEILD,
        field: "identityType",
      },
      {
        title: "Identity Number",
        type: COLTYPE.FEILD,
        field: "identityNumber",
      },
      {
        title: "Gender",
        type: COLTYPE.FEILD,
        field: "gender",
      },
    ],
    displayedColumns:[
      "id",
      "title",
      "firstName",
      "lastName",
      "identityType",
      "identityNumber",
      "gender",
    ]
  },
  agent: {
    ELEMENT_COL:[
      {
        title: "Emp No",
        type: COLTYPE.FEILD,
        field: "empNo",
      },
      {
        title: "Email",
        type: COLTYPE.FEILD,
        field: "email",
      },
      {
        title: "First Name",
        type: COLTYPE.FEILD,
        field: "firstName",
      },
      {
        title: "Last Name",
        type: COLTYPE.FEILD,
        field: "lastName",
      },
      {
        title: "Mobile No",
        type: COLTYPE.FEILD,
        field: "mobileNo",
      },
    ],
    displayedColumns:[
      "empNo",
      "email",
      "firstName",
      "lastName",
      "mobileNo",
    ]
  },
}

export const OldTableColData = {
 
  agent: [
    {
      col: "Emp No",
      key: "empNo",
    },
    {
      col: "Email",
      key: "email"
    },
    {
      col: "Name",
      key: "firstName"
    },
    {
      col: "Mobile No",
      key: "mobileNo"
    },
  ],
}