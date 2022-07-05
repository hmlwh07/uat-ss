import { ResourceDataDTO } from "../../simple-page/models&services/health-product.dto"

export interface TravelRiskDTO {
  id?: number
  createdAt?: string,
  createdBy?: string,
  insuredUnit?: string,
  noOfTraveller?: string,
  premium?: number,
  resourceData?: ResourceDataDTO,
  resourceId?: string,
  totalUnit?: number,
  travelDuration?: string,
  travelPlan?: string,
  travellerName?: string,
  riskId?: string,
  sumInsured: string,
  sumInsuredView:string,
  updatedAt?: string,
  updatedBy?: string
}
