import { OtpModalType } from "../login/interface";

export interface IOtpForm {
    code1: string;
    code2: string;
    code3: string;
    code4: string;
    code5: string;
    code6: string;
  };
  
export type ValueNames = 'code1' | 'code2' | 'code3' | 'code4' | 'code5';

export interface IOtpParamsSend {
  phoneNumber: string;
  type: OtpModalType;
  deviceId: string;
}

export interface IOtpParamsVerify {
  phoneNumber: string;
  type: OtpModalType;
  otp: string
}

