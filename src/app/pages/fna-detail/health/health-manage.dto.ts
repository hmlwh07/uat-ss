export interface HealthManage {
  amountByEmployer?: string;
  amountByInsurance?: string;
  amountBySocialBenefit?: string;
  createdAt?: string;
  dateOfBirth?: string;
  fnaId?: string;
  healthType?: string;
  id?: string;
  name?: string;
  protection?: string;
  updatedAt?: string;
}


export enum HealthStatus {

}

export class HealthDto {
  amountByEmployer?: number = 0;
  amountByInsurance?: number = 0;
  amountBySocialBenefit?: number = 0;
  protectionSelf?: boolean = false;

  nameSpouse?: string = '';
  amountByEmployerSpouse?: number = 0;
  amountByInsuranceSpouse?: number = 0;
  amountBySocialBenefitSpouse?: number = 0;
  protectionSpouse?: boolean = false;

  protection?: boolean = false;
  amountByEmployerSelf?: number = 0;
  amountByInsuranceSelf?: number = 0;
  amountBySocialBenefitSelf?: number = 0;
  createdAt?: string = '';
  dateOfBirth?: string;
  fnaId?: string = '';
  healthType?: string = '';
  id?: number = 0
  name?: string = '';
  updatedAt?: string = '';
  dateOfBirthSpouse: any;
  selfId: any;
  spouseId: any;
}