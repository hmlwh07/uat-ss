

export interface EDURateDTO {
  id?: number,
  year?: number
  benefitPlan?: string,
  age?: number,
  policyTerm?: string,
  rate?: string
}
export interface EduPaymentDTO {
  age?: number,
  benefitPlan?: string,
  deathBenefit?: number,
  endOfPolicyYear?: number,
  id?: number,
  maturityBenefit?: number,
  premiumPaid?: number,
  resourceId?: string,
  surrenderValue?: number
}