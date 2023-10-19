import axiosClient from "@/common/utils/axios";
import { MOCK_DATA } from "./constants";
import {
  API_ADDRESS,
  API_CATEGORY,
  API_CUSTOMER_PRODUCT,
} from "@/common/constants/api.constants";
import {
  IParamsListProduct,
  IResProductList,
  IParamsProductByCategory,
  IProductCategory,
  IParamsCategoryFilter,
} from "./interfaces";

export async function getListCategory(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/product?categoryIds=${categoryId}&page=1&limit=20`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}

export async function getProjects(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/category/${categoryId}`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}
export function toQueryString(objParams: Object) {
  const str = [];
  for (const p in objParams) {
    if (
      Object.prototype.hasOwnProperty.call(objParams, p) &&
      // @ts-ignore
      objParams[p] !== undefined
    ) {
      str.push(
        // @ts-ignore
        decodeURIComponent(
          // @ts-ignore
          `${encodeURIComponent(p)}=${encodeURIComponent(objParams[p])}`
        )
      );
    }
  }

  return str.join("&");
}
export const getAllCategory = (params?: IParamsListProduct) => {
  return axiosClient.get<unknown, IResProductList>(API_CUSTOMER_PRODUCT, {
    params,
    paramsSerializer: (params) => {
      return toQueryString(params);
    },
  });
};

export const getProductByCategory = (params: IParamsProductByCategory) => {
  return axiosClient.get<unknown, IResProductList>(`${API_CUSTOMER_PRODUCT}`, {
    params,
  });
};

export const getCategoryById = (id: number) => {
  return axiosClient.get<unknown, IProductCategory>(`${API_CATEGORY}/${id}`);
};

export const getCategoryFilter = (params?: IParamsCategoryFilter) => {
  return axiosClient.get<
    unknown,
    {
      items: IProductCategory[];
      meta: {
        itemCount: number;
        totalItems: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
      };
    }
  >(API_CATEGORY, {
    params,
  });
};
