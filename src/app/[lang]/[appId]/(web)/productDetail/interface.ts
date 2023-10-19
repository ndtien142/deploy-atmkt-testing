export interface IStateProps {
  isReviewModal: boolean;
  productVariantSelected: IProductToVariants | null;
  attributeSelected: IVariantAttributeTermIdList[];
  quantityCurrent: number;
  variantIdSelect: number;
  isShowPopupNotiLogin: boolean;
  totalVariant: number;
  isOpenOrderNow: boolean;
  quantityVariantOrderNow: number;
  totalPaymentOrderNow: number;
  isAddingCart: boolean;
  availableTermId: number[];
  defaultPrice: any;
  defaultPoint: any;
}

export interface IProductDetailTransform {
  onSale: boolean;
  id: number;
  type: string;
  status: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  productDetails: IProductDetails;
  productTags: IProductTag[];
  merchant: IMerchant;
  productVariants: IProductVariants[];
  thumbnail: IThumbnailProduct;
  variantIdDetail: IArrayIdProductVariantDetail[];
  attributeAndTerm: ITransformListAttribute[];
  productCategories: IProductCategories[];
}

export interface IProductDDetailRes {
  id: number;
  type: ProductType;
  status: ProductStatus;
  isFeatured: boolean;
  taxStatus: ProductTaxStatus;
  onSale: boolean;
  defaultProductVariantId: number;
  productDetails: IProductDetails[];
  productCategories: IProductCategories[];
  productTags: IProductTag[];
  merchant: IMerchant;
  productToVariants: IProductToVariants[];
  thumbnail: IThumbnailProduct;
  price: {
    range: {
      min: number;
      max: number;
    };
    normalPrice: number;
    salePrice: number;
  };
  point: {
    range: {
      min: number;
      max: number;
    };
    normalPoint: number;
    salePoint: number;
  };
}

export interface IProductToVariants {
  id: number;
  productVariantId: number;
  productVariant: IProductVariant;
}

export interface IProductVariant {
  id: number;
  price: number;
  type: string;
  name: string;
  quantity: number;
  salePrice: number;
  sku: string;
  productAttributeTerms: IProductAttributes[];
  images: IProductVariantImage[];
  productVariantPoint: IProductVariantPoint;
  productVariantDetails: {
    id: number;
    lang: ProductLanguage;
    description: string;
    name: string;
  }[];
  externalAffiliateInfo: {
    id: number;
    buttonText: string;
    link: string;
    isShowPrice: boolean;
  };
}

export interface IProductVariants {
  id: number;
  type: string;
  price: number;
  name: string;
  quantity: number;
  salePrice: number;
  sku: string;
  productAttributeTerms: IProductAttributes[];
  images: IProductVariantImage[];
  productVariantPoint: IProductVariantPoint;
  productVariantDetails: {
    id: number;
    lang: string;
    description: string;
    name: string;
  }[];
}

export enum ProductType {
  SIMPLE = "SIMPLE",
  CONFIGURABLE = "CONFIGURABLE",
  GROUPED = "GROUPED",
  BUNDLE = "BUNDLE",
  VIRTUAL = "VIRTUAL",
  EXTERNAL_AFFILIATE = "EXTERNAL_AFFILIATE",
  SERVICE = "SERVICE",
}
export enum ProductStatus {
  ACTIVE = "ACTIVE",
  IN_ACTIVE = "IN_ACTIVE",
}

export enum ProductTaxStatus {
  TAXABLE = "TAXABLE",
  NONE = "NONE",
}

export interface IProductCategories {
  id: number;
  categoryDetails: ICategoryDetails[];
}

export interface ICategoryDetails {
  id: number;
  lang: ProductLanguage;
  desc: string;
  name: string;
  slug: string;
}
export interface IProductDetails {
  lang: ProductLanguage;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
}

export enum ProductLanguage {
  VN = "VN",
  EN = "EN",
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

export interface IProductVariantPoint {
  id: number;
  point: number;
  salePoint: number;
}

export interface IProductAttributes {
  id: number;
  productAttributeId: number;
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
  lang: ProductLanguage;
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

export interface IParamsDetail {
  id: number;
  // merchantId: number;
}

export interface IArrayIdProductVariantDetail {
  prodVariantId: number;
  variantAtributeList: IVariantAttributeTermIdList[];
  quantity: number;
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
