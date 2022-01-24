export interface Customer {
    customerId?: number
    individualId?: number
    title?: string
    firstName?: string
    middleName?: string
    lastName?: string
    nationalityCode?: string
    identityType?: string
    identityNumber?: string 
    statusCode?: string
    partyCode?: string
    fatherName?: string
    mobile?: string
    email?: string
    dateOfBirth?: string
    occupationCode?: string
    house?: string
    road?: string
    blockArea?: string
    township?: string
    district?: string
    state?: string
  
}

export class Nationality {
    code?:string
    value?:string
}

export class Occupation {
    code?:string
    value?:string
}

export class Status {
    code?:string
    value?:string
}

export class State {
    code?:string
    value?:string
}

export class District {
    code?:string
    value?:string
}

export class Township {
    code?:string
    value?:string
}