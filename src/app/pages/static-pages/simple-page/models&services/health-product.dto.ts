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
  cutomerId?: number
  policyNumber?: string
  premium?: string
  productId?: number
  quotationId?: string
  status?: string
  type?: string
}