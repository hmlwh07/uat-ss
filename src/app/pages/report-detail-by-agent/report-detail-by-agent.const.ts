export const ReportStatus: any[] = [
  {
    code: "A",
    value: "Active"
  }, {
    code: "I",
    value: "Inactive"
  }
]

export const ReportIdentityType: any[] = [
  {
    code: "NRC",
    value: "NRC"
  }, {
    code: "FRC",
    value: "FRC"
  }, {
    code: "PASSPORT",
    value: "Passport"
  }, {
    code: "OTHER",
    value: "Others"
  }
]

export const CONSTANT_AGENT_REPORT_DATA: any[] = [
  {
    branchName: 'HO (Yangon)1111111',
    channelName: 'IA',
    agentName: 'U AA',
    agentNo: 'IA(O)-008',
    products: [
      { productName: 'Fire', productCode: 'CHOO1' },
      { productName: 'Motor', productCode: 'CHOO2' },
      { productName: 'Health', productCode: 'CHOO3' },
    ],
    policies: [
      { productCode: 'CHOO1', noOfPolicies: 1000, premium: 25000 },
      { productCode: 'CHOO2', noOfPolicies: 5, premium: 3000 },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null }
    ]
  },
  {
    branchName: 'HO (Yangon)',
    channelName: 'IA',
    agentName: 'U AA',
    agentNo: 'IA(O)-008',
    products: [
      { productName: 'Cash', productCode: 'CHOO4' },
      { productName: 'Motor', productCode: 'CHOO2' },
      { productName: 'Personal', productCode: 'CHOO5' },
    ],
    policies: [
      { productCode: 'CHOO4', noOfPolicies: 1, premium: 2 },
      { productCode: 'CHOO5', noOfPolicies: 3, premium: 4 },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null }
    ]
  },
  {
    branchName: 'HO (Yangon)1233',
    channelName: 'IA',
    agentName: 'U AA',
    agentNo: 'IA(O)-008',
    products: [
      { productName: 'Cash in transit', productCode: 'CHOO6' },
      { productName: 'Motor', productCode: 'CHOO2' },
      { productName: 'Personal', productCode: 'CHOO5' },
    ],
    policies: [
      { productCode: 'CHOO6', noOfPolicies: 10, premium: 20 },
      { productCode: 'CHOO5', noOfPolicies: 3, premium: 4 },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null }
    ]
  },
  {
    branchName: 'HO (Yangon)1233',
    channelName: 'IA',
    agentName: 'U AA',
    agentNo: 'IA(O)-008',
    products: [
      { productName: 'Cash in transit123', productCode: 'CHOO7' },
      { productName: 'Cash in transit', productCode: 'CHOO6' },
      { productName: 'Personal', productCode: 'CHOO5' },
    ],
    policies: [
      { productCode: 'CHOO7', noOfPolicies: 100, premium: 200 },
      { productCode: 'CHOO6', noOfPolicies: 3, premium: 4 },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null },
      // { productCode: null, noOfPolicies: null, premium: null }
    ]
  }
]
