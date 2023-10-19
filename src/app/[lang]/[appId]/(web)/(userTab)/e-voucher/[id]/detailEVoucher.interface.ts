import {
  IExternalProduct,
  IExternalProductProvider,
  IProductDetailTransform,
  IUsedInfo,
} from "../eVoucher.interface";

export interface IDetailEVoucherResponse {
  id: number;
  usingExpiresAt: null | string;
  storingExpiresAt: string | string;
  usedInfo: IUsedInfo;
  status: string;
  usedAt: string;
  product: IProductDetailTransform;
  evoucherInfo: {
    id: number;
    type: string;
    data: {
      desc: string;
      image: string;
      title: string;
      storeExpiredDuration: string;
      useExpiredDuration: string;
      price: string;
    };
  };
}

export interface ICopiedTextFieldProps {
  code: string;
}
export interface IDetailEVoucherProps {
  voucher: IDetailEVoucherResponse;
}

export interface IDetailEVoucherState {
  currentCopyText: string;
  isCopy: boolean;
  isShowPopUpUseVoucher: boolean;
  typeVoucher: string;
  phoneNumber: string;
  numSubmitOrderVoucher: number;
  isShowPopUpRechargeCard: boolean;
  phoneNumberUser: string;
}

export interface IUnUsedEVoucherProps {
  data: IProductDetailTransform;
}

export interface IPostOrderVoucher {
  userEvoucherId: number;
  phoneNumber?: string;
}

export interface IFormOrderVoucher {
  phoneNumber: string;
}
