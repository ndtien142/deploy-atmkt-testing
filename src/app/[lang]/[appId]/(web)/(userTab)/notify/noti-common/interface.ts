export interface IParamsNotiList {
  page: number;
  limit: number;
}

export interface INotiItem {
  id: number;
  title: string;
  content: string;
  detail: string;
  type: string;
  routeType: string;
  link: string;
  createdAt: string;
  notiToUser: {
    isRead: boolean;
  };
}

export interface INotiList {
  items: INotiItem[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface InitialState {
  isOpenFormDetail: boolean;
  idNotifySelected: number;
}

export interface ITypeNotification {
  [key: string]: string;
}

export interface IParamsPatchIsReadNotify {
  id: number;
  isRead: boolean;
}
