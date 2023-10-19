export interface IProductDDetailRes {
  items: {
    id: number;
    type: string;
    status: string;
    isFeatured: boolean;
    taxStatus: string;
    defaultProductVariantId: number;
    onSale: boolean;
    thumbnail: IThumbnailProduct;
    productDetails: IProductDetail[];
    productCategories: IProductCategory[];
    productTags: IProductTag[];
    merchant: IMerchantProduct;
    price: {
      normalPrice: number;
      salePrice: number;
      range: {
        min: number;
        max: number;
      };
    };
    point: {
      normalPoint: number;
      salePoint: number;
      range: {
        min: number;
        max: number;
      };
    };
  }[];
}
export interface IProductToVariants {
  id: number;
  productVariantId: number;
  productVariant: {
    id: number;
    price: number;
    quantity: number;
    salePrice: number;
    sku: string;
    type: string;
    name: string;
    externalAffiliateInfo: {
      id: number;
      buttonText: string;
      link: string;
      isShowPrice: boolean;
    };
  };
}
export interface IProductItems {
  id: number;
  type: string;
  status: string;
  isFeatured: boolean;
  taxStatus: string;
  defaultProductVariantId: number;
  onSale: boolean;
  thumbnail: IThumbnailProduct;
  productDetails: IProductDetail[];
  productCategories: IProductCategory[];
  productTags: IProductTag[];
  merchant: IMerchantProduct;
  productToVariants: IProductToVariants[];
  price: {
    normalPrice: number;
    salePrice: number;
    range: {
      min: number;
      max: number;
    };
  };
  point: {
    normalPoint: number;
    salePoint: number;
    range: {
      min: number;
      max: number;
    };
  };
  isOutOfStock: boolean;
}
export interface IProductTag {
  description: string;
  id: number;
  name: string;
  slug: string;
}

export interface IMerchantProduct {
  id: number;
  name: string | null;
  email: string;
  status: string;
  rank: string;
  address: string | null;
  phoneNumber: string | null;
}

export interface IThumbnailProduct {
  id: number;
  key: string;
  url: string;
  type: string;
  createdAt: string;
  deletedAt: string | null;
  version: number;
  size: number;
  uploaderId: number;
}
export interface IProductDetail {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
}

export interface IProductCategory {
  id: number;
  categoryDetails: ICategoryDetail[];
}

export interface ICategoryDetail {
  id: number;
  desc: string;
  lang: string;
  name: string;
  slug: string;
}

export interface IParamsListProduct {
  page?: number;
  limit?: number;
  searchType?: string;
  searchText?: string;
  productType?: string;
  categoryIds?: any;
  sortType?: string;
  sortField?: string;
}
export interface IParamsCategoryFilter {
  page?: number;
  limit?: number;
}
export interface ICallback {
  onSuccess?: VoidFunction;
  onError?: VoidFunction;
}

export interface IResProductList {
  items: IProductItems[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsProductByCategory {
  categoryIds?: number[];
  page?: number;
  limit?: number;
}
