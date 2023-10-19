export interface ICustomerProfileResponse {
  id: number;
  phoneNumber: string;
  email: string;
  name: string;
  birthDate: string;
  avatar: ICustomerAvatar;
  userPoint: {
    totalPoints: number;
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

export interface ICustomerAvatar {
  id: number;
  key: string;
  type: string;
  url: string;
}
