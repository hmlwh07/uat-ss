export interface EducationManage {
  childName?: string;
  createdAt?: string;
  dateOfBirth?: string;
  educationExpense?: string;
  fnaId?: number;
  highEducation?: string;
  id?: number;
  sumAssured?: number;
  updatedAt?: string;


}


export enum IncomeStatus {

}

export class EducationDto {
  childName?: string;
  createdAt?: string;
  dateOfBirth?: string;
  educationExpense?: number;
  fnaId?: number;
  highEducation?: string;
  id?: number;
  sumAssured?: number;
  updatedAt?: string;
}

export const MONTHLY_PREMIUM_RATE = [
  { age: 18, nine: 16.0, eleven: 11.0, fourteen: 7.5 },
  { age: 19, nine: 16.0, eleven: 11.0, fourteen: 7.5 },
  { age: 20, nine: 16.1, eleven: 11.0, fourteen: 7.5 },
  { age: 21, nine: 16.1, eleven: 11.1, fourteen: 7.6 },
  { age: 22, nine: 16.1, eleven: 11.1, fourteen: 7.6 },
  { age: 23, nine: 16.2, eleven: 11.1, fourteen: 7.6 },
  { age: 24, nine: 16.3, eleven: 11.3, fourteen: 7.8 },
  { age: 25, nine: 16.4, eleven: 11.3, fourteen: 7.8 },
  { age: 26, nine: 16.4, eleven: 11.4, fourteen: 7.9 },
  { age: 27, nine: 16.5, eleven: 11.4, fourteen: 7.9 },
  { age: 28, nine: 16.5, eleven: 11.5, fourteen: 8.0 },
  { age: 29, nine: 16.7, eleven: 11.5, fourteen: 8.0 },
  { age: 30, nine: 16.8, eleven: 11.7, fourteen: 8.2 },
  { age: 31, nine: 16.8, eleven: 11.7, fourteen: 8.2 },
  { age: 32, nine: 16.9, eleven: 11.8, fourteen: 8.3 },
  { age: 33, nine: 16.9, eleven: 11.8, fourteen: 8.3 },
  { age: 34, nine: 17.1, eleven: 12.0, fourteen: 8.5 },
  { age: 35, nine: 17.2, eleven: 12.1, fourteen: 8.5 },
  { age: 36, nine: 17.2, eleven: 12.1, fourteen: 8.6 },
  { age: 37, nine: 17.3, eleven: 12.3, fourteen: 8.6 },
  { age: 38, nine: 17.4, eleven: 12.4, fourteen: 8.8 },
  { age: 39, nine: 17.5, eleven: 12.5, fourteen: 8.8 },
  { age: 40, nine: 17.6, eleven: 12.5, fourteen: 8.9 },
  { age: 41, nine: 17.6, eleven: 12.6, fourteen: 9.0 },
  { age: 42, nine: 17.8, eleven: 12.8, fourteen: 9.1 },
  { age: 43, nine: 17.9, eleven: 12.9, fourteen: 9.2 },
  { age: 44, nine: 18.0, eleven: 13.0, fourteen: 9.3 },
  { age: 45, nine: 18.2, eleven: 13.2, fourteen: 9.5 },
  { age: 46, nine: 18.3, eleven: 13.3, fourteen: 9.7 },
  { age: 47, nine: 18.6, eleven: 13.5, fourteen: 9.9 },
  { age: 48, nine: 18.7, eleven: 13.7, fourteen: 10.2 },
  { age: 49, nine: 19.0, eleven: 13.9, fourteen: 10.4 },
  { age: 50, nine: 19.2, eleven: 14.2, fourteen: 10.7 },
  { age: 51, nine: 19.5, eleven: 14.5, fourteen: 11.0 },
  { age: 52, nine: 19.8, eleven: 14.8, fourteen: 0 },
  { age: 53, nine: 20.2, eleven: 15.2, fourteen: 0 },
  { age: 54, nine: 20.6, eleven: 15.6, fourteen: 0 },
  { age: 55, nine: 21.1, eleven: 0, fourteen: 0 },
  { age: 56, nine: 21.6, eleven: 0, fourteen: 0 }

]
