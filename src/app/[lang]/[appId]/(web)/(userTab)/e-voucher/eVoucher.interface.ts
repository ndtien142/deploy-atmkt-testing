export enum IStatusVoucher {
  un_used = "UNUSED",
  used = "USED",
  applied = "APPLIED",
  storing_expired = "STORING_EXPIRED",
  using_expired = "USING_EXPIRED",
}

export interface IEVoucherItemProps {
  eVoucher: IEVoucherItem;
  isLastChild?: boolean;
}

export interface IEVoucherState {
  currentTab: IStatusVoucher[];
  currentPage: number;
  tabIndex: number;
}

export interface IParamsListEVoucher {
  page: number;
  limit: number;
  status: IStatusVoucher[];
}

export interface IListEVoucherResponse {
  items: IEVoucherItem[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IEVoucherItem {
  id: number;
  type: "VOUCHER" | "TOPUP" | "UNKNOWN";
  usedInfo: IUsedInfo;
  status: IStatusVoucher;
  expiresAt: string;
  usedAt: string;
  product: IProductDetailTransform;
  externalProductProvider: IExternalProductProvider;
  externalProduct: IExternalProduct;
}

export interface IExternalProductProvider {
  id: number;
  key: string;
  name: string;
  desc: string;
}

export interface IExternalProduct {
  id: number;
  type: string;
  externalIdentifier: string;
  productInfo: {
    title: string;
    thumbnail: string;
    condition: string;
    note: string;
    office: IOffice[];
  };
}

export interface IOffice {
  address: string;
  cityName: string;
}

export interface IUsedInfo {
  code: string;
  serial: string;
  codeImageLink: string;
  pin: string;
}

export interface IProductDetailTransform {
  onSale: boolean;
  id: number;
  type: string;
  status: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  productDetails: IProductDetails[];
  productTags: IProductTag[];
  merchant: IMerchant;
  productToVariants: IProductVariants[];
  thumbnail: IThumbnailProduct;
  variantIdDetail: IArrayIdProductVariantDetail[];
  attributeAndTerm: ITransformListAttribute[];
}
export interface IProductDetails {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
}
export interface IProductTag {
  description: string;
  id: number;
  name: string;
  slug: string;
}
export interface IMerchant {
  id: number;
  name: string | null;
  email: string;
  status: string;
  rank: string;
  address: string | null;
  phoneNumber: string | null;
}

export interface IProductVariants {
  id: number;
  productVariant: {
    price: number;
    quantity: number;
    salePrice: number;
    sku: string;
    productAttributeTerms: IProductAttributes[];
    images: IProductVariantImage[];
    productVariantPoint: {
      id: number;
      point: number;
      salePoint: number;
    };
  };
}

export interface IProductAttributes {
  id: number;
  productAttribute: {
    id: number;
    type: string;
    productAttributeDetails: IProductAttributeDetailItem[];
  };
  productAttributeTermDetails: IProductAttributeTermItem[];
}

export interface IProductAttributeDetailItem {
  id: number;
  description: string;
  lang: string;
  name: string;
  slug: string;
}

export interface IProductAttributeTermItem {
  id: number;
  lang: string;
  value: string;
}

export interface IProductVariantImage {
  fileId: number;
  id: number;
  type: string;
  url: string;
}

export interface IThumbnailProduct {
  createdAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  key: string;
  url: string;
  type: string;
  size: number;
  uploaderId: number;
}
export interface IArrayIdProductVariantDetail {
  prodVariantId: number;
  variantAtributeList: IVariantAttributeTermIdList[];
}

export interface IVariantAttributeTermIdList {
  attributeId: number;
  termId: number;
}

export interface ITransformListAttribute {
  id: number;
  name: string;
  term: ITransformListTermValue[];
}
export interface ITransformListTermValue {
  id: number;
  value: string;
}
