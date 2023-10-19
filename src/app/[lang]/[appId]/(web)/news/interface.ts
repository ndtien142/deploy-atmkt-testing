export interface IParamSubjectAndNews {
  page: number;
  limit: number;
  newsCountPerSubject: number;
}

export interface IResSubjectNews {
  items: ISubjectNewItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface ISubjectNewItem {
  id: number;
  priority: number | null;
  subjectDetails: {
    id: number;
    lang: string;
    name: string;
  }[];
  newsToSubject: INewsToSubject[];
  thumbnail: {
    url: string;
  };
}

export interface INewsToSubject {
  id: number;
  news: INew;
}

export interface INew {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    id: number;
    type: string;
    url: string;
  };
  newsDetails: {
    id: number;
    lang: string;
    content: string;
    description: string;
    author: string;
  }[];
}

export interface IParamsListNews {
  subjectIds: number[];
  page?: number;
  limit?: number;
}

export interface IDataNews {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    id: number;
    url: string;
  };
  subject: [
    {
      id: number;
      priority: number;
      subjectDetails: [
        {
          name: string;
        }
      ];
    }
  ];
  newsDetails: [
    {
      id: number;
      content: string;
      description: string;
      author: string;
    }
  ];
}

export interface IResListNews {
  items: IDataNews[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
