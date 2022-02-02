export interface CalculatedBuildingDTO {
  createdAt?:string 
  createdBy?:string 
  firePolicyRiskId?:number 
  id?:string 
  itemDescription?:string 
  itemName?:string
  quantity?:number 
  totalValue?:number 
  updatedAt?:string 
  updatedBy?:string 
  valuePerQuantity?:string 
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