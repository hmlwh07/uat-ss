export interface Lead {
    activationDate?:string,
    assets?: string,
    assignTo?: 0,
    campaignName?: string,
    campaignNo?: string,
    channelCode?: string,
    closedDate?:string,
    contact?: string,
    contactName?: string,
    customerPlan?: string,
    description?: string,
    districtCode?: string,
    dueDate?: string,
    email?: string,
    estimatedMonthlyIncome?: 0,
    existingCustomer?: 0,
    existingInsuranceCoverage?: string,
    existingInsurancePlan?: string,
    expirationDate?: string,
    facebookAcc?: string,
    financialPlan?: string,
    frc?: string,
    identityNumber?: string,
    identityType?: string,
    leadId?: string,
    lostReason?: string,
    maritalStaus?: string,
    name?: string,
    noOfChildren?: string,
    nrcRegionCode?: string,
    nrcTownshipCode?: string,
    nrcTypeCode?: string,
    occupationCode?: string,
    openedDate?:string,
    operationDate?: string,
    others?: string,
    ownerId?: 0,
    passport?: string,
    phoneNo?: string,
    productCode?: string,
    productName?: string,
    reason?: string,
    referralCustomerId?: 0,
    remark?: string,
    score?: 0,
    sourceCode?: string,
    startDate?:string,
    stateCode?: string,
    statusCode?: string,
    subTypeCode?: string,
    subject?: string,
    townshipCode?: string,
    typeCode?: string,
    validityPeriod?: 0,
    existingCustomerId?: any,
    existingCustomerName?: any,
    existingCustomerDateOfBirth?: any,
    prospectCustomerId?: any,
    prospectCustomerName?: any,
    prospectCustomerDateOfBirth?: any,
    fnas: any[]
}

export class stateOption {
    code?:string
    value?:string
}

export class statusOption {
    code?:string
    value?:string
}

export class distinctOption {
    code?:string
    value?:string
}

export class townshipOption {
    code?:string
    value?:string
}

export class assignToOption {
    code?:string
    value?:string
}

export class productOption {
    code?:string
    value?:string
}
export class campaignNameOption {
    code?:string
    value?:string
}
export class sourceOption {
    code?:string
    value?:string
}
export class existingOption{
    code?:string
    value?:string
}
export class martialOption {
    code?:string
    value?:string
}