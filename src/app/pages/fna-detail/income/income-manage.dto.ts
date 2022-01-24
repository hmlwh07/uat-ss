export interface IncomeManage {
  createdAt?: string;
  estimatedMonthlyIncome?: string;
  familyMonthlySpending?: string;
  fnaId?: string;
  id?: string;
  sourceOfIncome?: string;
  updatedAt?: string;
}


export enum IncomeStatus {

}

export class IncomeDto {
  createdAt?: string;
  estimatedMonthlyIncome?: string;
  familyMonthlySpending?: string;
  fnaId?: string;
  id?: string;
  sourceOfIncome?: string;
  updatedAt?: string;
}