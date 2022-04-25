export interface RenewManage {
  id?: string,
  policyNumber?: string,
  renewalPolicyNumber?: string,
  productCode?: string,
  agentName?: string,
  premium?: number,
  currency?: string,
  status?: RenewStatus,
  quoteNumber?: string,
  quotationNumber?: string,
  policyStatus?: string,
  policyHolderCode?: string,
  policyHolder?: string,
  policyInceptionDate?: string,
  policyExpiryDate?: string,
  grossPremium?: number,
  netPremium?: number,
  createdAt?: string,
  updatedAt?: string
}

export enum RenewStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  CONFIRM = "confrim"
}