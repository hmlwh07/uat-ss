export interface PolicyDTO {
  productImage?: string;
  icon?: any;
  id?: string,
  policyNumber?: string,
  agentId?: number,
  productId?: number,
  quotationId?: string,
  preminum?: string,
  createdAt?: string,
  tcsStatus?:any,
  submittedCode?:any;
}

export enum StatusType {
  IN_PROGRESS = "In progress",
  DONE = "Done",
  COMPLETED = "Completed",
}