export interface IRegisterInformationRequest {
    name: string;
    password: string;
    phoneNumber: string;
    referralCode?: string;
    otp: string
  }
export interface IRegisterWithFirebaseRequest {
  name: string;
  password: string;
  phoneNumber: string;
  referralCode?: string;
  firIdToken: string;
}