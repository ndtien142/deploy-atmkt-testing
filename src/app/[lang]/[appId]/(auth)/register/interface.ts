export interface IFormRegister {
    phoneNumber: string;
}

export interface IFormCreateInfo {
    fullName: string;
    password: string;
    confirmPassword: string;
    referralCode: string;
    agreedTerms: boolean;
    phoneNumber: string;
}

export interface IPhoneExisted {
    phoneNumber: string;
}
export interface IResPhoneExisted {
    isExisted: boolean;
}