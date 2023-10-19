import { CustomFile } from "@/common/components/upload";

export interface IFormCustomerProfile {
  id: number;
  name: string;
  email: string;
  photoURL: CustomFile | string;
  phoneNumber: string;
  createdAt: string | null;
  status: string | null;
  rank: string | null;
  birthDate: string;
  avatar?: {
    url?: string;
    id?: number;
  };
  province: {
    id: number;
    name: string;
    parentId: number;
  } | null;
  ward: {
    id: number;
    name: string;
    parentId: number;
  } | null;
  district: {
    id: number;
    name: string;
    parentId: number;
  } | null;
  address: string | null;
}

export interface IProvinceParams {
  searchText: string;
  type: string;
  parentId: number | undefined;
}

export type StateProps = {
  profile: Partial<IFormCustomerProfile>;
  showOldPassword: boolean;
  showNewPassword: boolean;
  currentSubjectNews: string;
};

export interface ISubmitDataAddress {
  province: { id: number; name: string } | null;
  district: { id: number; name: string } | null;
  ward: { id: number; name: string } | null;
  address: string | null;
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

export interface IParamsProvinceList {
  type: string;
  parentId?: number | undefined;
  searchText?: string;
  page?: number;
  limit?: number;
}

export interface IResImage {
  file: {
    key: string;
    type: string;
    size: number;
    uploaderId: number;
    deletedAt: string | null;
    url: string;
    createdAt: string;
    version: number;
    id: number;
  };
}
export interface ImageInfo {
  id: number;
  url: string;
}
export interface IEditCustomerForm {
  name: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
  avatarId: number;
  provinceId?: number;
  districtId?: number;
  wardId?: number;
  address?: string;
}

export interface IFormCallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IAccountHeaderProps {
  title: string;
}
