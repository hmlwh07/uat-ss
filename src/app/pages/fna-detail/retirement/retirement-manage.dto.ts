export interface RetirementManage { 
  createdAt?: string;
  dateOfBirth?: string;
  fnaId?: number;
  id?: number;
  retirementAge?: number;
  retirementIncome?: number;
  retirementSaving?: number;
  retirementSavingSpouse?: number;
  updatedAt?: string;

}


export enum IncomeStatus {

}

export class RetirementDto {
  createdAt?: string;
  dateOfBirth?: string;
  fnaId?: number;
  id?: number;
  retirementAge?: number = 60;
  retirementIncome?: number;
  retirementSaving?: number;
  retirementSavingSpouse?: number;
  updatedAt?: string;
  retirementIncomeText: string;
  retirementSavingText: string;
  retirementSavingSpouseText: string;
}