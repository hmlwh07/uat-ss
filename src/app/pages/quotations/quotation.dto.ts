export interface QuotationDTO {
  id?: string,
  policyNumber?: string,
  agentId?: number,
  productId?: number,
  quotationId?: string,
  preminum?: string,
  createdAt?: string,
}

export enum StatusType {
  IN_PROGRESS = "In progress",
  DONE = "Done",
  COMPLETED = "Completed",
}