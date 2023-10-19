export interface IParams {
  page?: number;
  limit?: number;
  types?: string;
}

export interface IAppPolicy {
  id: number;
  type: string;
  appPolicyDetail: {
    id: number;
    title: string;
    content: string;
    lang: string;
  };
}

export interface IResAppPolicy {
  items: IAppPolicy[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
