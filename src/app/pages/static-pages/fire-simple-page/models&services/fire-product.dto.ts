import { ResourceDataDTO } from "../../simple-page/models&services/health-product.dto";

export interface FireProductDTO {
  id?: number
  startDate?: string
  endDate?: string
  policyType?: string
  policyDuration?: string
  currency?: string
  resourceData?: ResourceDataDTO
  resourceId?: string
}
