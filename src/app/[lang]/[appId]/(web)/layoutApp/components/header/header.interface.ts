import { IProduct } from "../../../(userTab)/order-history/common/interface";

export interface IHeaderState {
  isOpenUserMenu: boolean;
  isOpenPopupLogin: boolean;
}

export interface ISearchItemProps {
  product: IProduct;
}
