export interface AssectManage {
  assetType?: string;
  cost?: number;
  createdAt?: string;
  fnaId?: number;
  id?: number;
  protect?: boolean;
  remark?: string;
  updatedAt?: string;

}


export enum IncomeStatus {

}

export class AssectDto {
  assetType?: string;
  cost?: number;
  createdAt?: string;
  fnaId?: number;
  id?: number;
  protect?: boolean = false;
  remark?: string;
  updatedAt?: string;
  costText: any;

}