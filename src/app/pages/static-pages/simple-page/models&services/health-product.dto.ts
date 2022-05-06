export interface HealthProductDetailDTO {
  basicCoverId?: string
  id?: number
  insuranceEndDate?: string
  insuranceStartDate?: string
  medicalCardNo?: string
  paymentFrequency?: string
  resourceData?: ResourceDataDTO
  resourceId?: string
  dateOfBirth?: string
  sumInsuredMainCover?: number
  startDate?: string
  endDate?: string
  policyDuration?: string
  policyType?: string
}

export interface ResourceDataDTO {
  agentId?: number
  customerId?: number
  policyNumber?: string
  premium?: string
  premiumView?: string
  productId?: number
  quotationId?: string
  leadId: string
  status?: string
  type?: string
  currency?: string
}