import { ResourceDataDTO } from "../../simple-page/models&services/health-product.dto"

export interface TravelRiskDTO {
  id?: number
  createdAt: string,
  createdBy?: string,
  insuredUnit?: string,
  noOfTraveller?: string,
  premium?: string,
  resourceData?: ResourceDataDTO,
  resourceId?: string,
  totalUnit?: 0,
  travelDuration?: string,
  travelPlan?: string,
  travellerName?: string,
  riskId: string,
  sumInsured: string,
  updatedAt?: string,
  updatedBy?: string
}
