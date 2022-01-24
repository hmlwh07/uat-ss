

export interface HealthRateDTO {
  id?: number,
  cover?: string,
  fromAge?: 6,
  toAge?: number,
  semiAnnual?: number,
  lumpSum?: number
}
export interface HealthPaymentDTO {
  levy?: number,
  premium?: number,
  resourceId?: string,
  total?: number,
}