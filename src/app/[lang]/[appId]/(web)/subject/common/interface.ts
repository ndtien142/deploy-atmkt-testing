export interface INewItem {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    id: number;
    url: string;
    type: string;
  };
  subject: {
    id: number;
    priority: number | null;
    subjectDetails: {
      id: number;
      lang: string;
      name: string;
    }[];
  }[];
  newsDetails: {
    id: number;
    lang: string;
    content: string;
    description: string;
    author: string;
  }[];
}

export interface IListNews {
  items: INewItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export type IStateProps = {
  currentSubject: number[];
  titleCurrentSubject: string;
  dataSubject: { value: number; label: string }[];
  searchText: string;
  currentPage: number;
};
