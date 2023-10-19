import { AxiosResponse } from "axios";

export interface ICallback {
  onSuccess: ((data: AxiosResponse<any, any>) => unknown) | undefined;
  onError: () => void;
}

export interface IOrderState {
  activeStep: number;
  cart: ICartItem[];
  subtotalPoint: number;
  totalPoint: number;
  subtotalCash: number;
  totalCash: number;
  discount: number;
  shipping: number;
  billing: BillingAddress | null;
  openModalAddAddress: boolean;
  provinceParams: {
    type: string;
    parentId: number;
    searchText: string;
  };
  selectedAddress: ISelectedAddressCart;
  paymentType: string;
  isPhysical: boolean;
  isEVoucher: boolean;
}

export type ISelectedAddressCart = {
  id: number;
  name: string;
  phone: string;
  address: string;
  province: string;
  district: string;
  ward: string;
};

export type BillingAddress = {
  receiver: string;
  phone: string;
  fullAddress: string;
  addressType: string;
  isDefault: boolean;
};

export type OnCreateBilling = (address: BillingAddress) => void;

export type ICartItem = {
  quantity: number;
  productToVariantIds: number[];
  isValid: boolean;
  product: IProductCart;
};

export type IProductCart = {
  onSale: boolean;
  id: number;
  type: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  thumbnail: {
    id: number;
    url: string;
  };
  productDetails: IProductDetail[];
  productVariants: IProductVariantItem[];
  productToVariants: IProductToVariants[];
};

export type IProductToVariants = {
  id: number;
  productVariantId: number;
  productVariant: IProductVariantItem;
};

export type IProductDetail = {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
};

export type IProductVariantItem = {
  id: number;
  price: number;
  quantity: number;
  type: string;
  salePrice: number;
  sku: string;
  name: string;
  images: {
    id: number;
    key: string;
    type: string;
    url: string;
  }[];
  productAttributeTerms: {
    id: number;
    productAttributeTermDetails: IProductAttributeTermDetail[];
    productAttribute: {
      id: number;
      type: string;
      productAttributeDetails: {
        id: number;
        lang: string;
        name: string;
        description: string;
      }[];
    };
  }[];
  productVariantPoint: {
    id: number;
    point: number;
    salePoint: number;
  };
};

export type IProductAttributeTermDetail = {
  id: number;
  lang: string;
  value: string;
};

export type IParamsUpdateCartItem = {
  productToVariantIds: number[];
  quantity: number;
};

export type IResCheckoutCart = {
  data: ICartItem[];
};

export type IOrderShippingResponse = {
  items: IOrderShippingItem[];
};

export type IOrderShippingItem = {
  id: number;
  name: string;
  address1: string;
  province: {
    id: number;
    name: string;
    type: string;
    parentId: number | null;
  };
  ward: {
    id: number;
    name: string;
    type: string;
    parentId: number | null;
  };
  district: {
    id: number;
    name: string;
    type: string;
    parentId: number | null;
  };
  phone: string;
  isDefault: boolean;
};

export type IFormProvince = {
  name: string;
  phone: string;
  address1: string;
  province: number | null;
  district: number | null;
  ward: number | null;
  isDefault: boolean;
  isSaveAddress: boolean;
};

export interface IParamsSearchProvince {
  type: string;
  parentId?: number;
  searchText?: string;
  page: number;
  limit: number;
}

export interface IProvinceResponses {
  items: IProvinceItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IProvinceItem {
  id: number;
  name: string;
  type: string;
  parentId: number;
}

export interface IDataNewAddress {
  address1: string;
  address2: string;
  provinceId: number | null;
  wardId: number | null;
  districtId: number | null;
  phone: string;
  name: string;
  isDefault: boolean;
}

export interface IDataPostOrder {
  orderShipping?: {
    address1: string;
    province: string;
    ward: string;
    district: string;
    phone: string;
    name: string;
  };
  paymentType: string;
}
