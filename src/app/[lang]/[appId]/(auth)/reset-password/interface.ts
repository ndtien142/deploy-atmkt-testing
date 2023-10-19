

export interface IResetPasswordRequest {
    phoneNumber: string;
    otp: string;
    newPassword: string;
}

export interface IFormResetPassword {
    password: string;
    confirmPassword: string;
}