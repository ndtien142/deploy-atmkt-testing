export interface IProvinceParams {
  searchText: string;
  type: string;
  parentId: number | undefined;
}
export interface InitialState {
  isOpenEditForm: boolean;
  idEdit: number;
  isOpenCreateForm: boolean;
  provinceParams: IProvinceParams;
  idDelete: number;
  isOpenModalConfirm: boolean;
}

export interface ISubmitData {
  name: string;
  phone: string;
  province: { id: number; name: string } | null;
  district: { id: number; name: string } | null;
  ward: { id: number; name: string } | null;
  address: string;
  isDefault: boolean;
}

export interface IParamsAddressList {
  page: number;
  limit: number;
}

export interface IProvinceDistrictWard {
  id: number;
  name: string;
  type: string;
  parentId: number | null;
}
export interface IAddressItem {
  id: number;
  name: string;
  phone: string;
  address1: string;
  address2: string;
  isDefault: boolean;
  province: IProvinceDistrictWard;
  district: IProvinceDistrictWard;
  ward: IProvinceDistrictWard;
}
export interface IResAddressList {
  items: IAddressItem[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface IdataCreateAddress {
  name: string;
  phone: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  address1: string;
  address2: string;
  isDefault: boolean;
}

export interface IFormCallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IParamsProvinceList {
  type: string;
  parentId?: number | undefined;
  searchText?: string;
  page?: number;
  limit?: number;
}

export interface IProvince {
  id: number;
  name: string;
  type: string;
  parentId: number | null;
}
export interface IResProvinceList {
  items: IProvince[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface IResAddressDetail {
  id: number;
  name: string;
  phone: string;
  isDefault: boolean;
  province: IProvinceDistrictWard;
  district: IProvinceDistrictWard;
  ward: IProvinceDistrictWard;
  address1: string;
  address2: string;
}

export interface IDataEditAddress {
  id: number;
  name: string;
  phone: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  address1: string;
  address2: string;
  isDefault: boolean;
}
