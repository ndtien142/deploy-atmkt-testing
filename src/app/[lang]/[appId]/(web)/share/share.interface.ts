export interface IShareAppResponse {
  sections: IShareAppSections[];
}

interface IShareAppSections {
  id: string;
  data: IDataShareApp;
  title: string;
}

interface IDataShareApp {
  link: string;
  image: string;
  param: {};
  imageId: number;
  typeRouter: "ROUTER" | "DEEP_LINK";
}

export enum TypeRoute {
  ROUTE = "ROUTER",
  DEEP_LINK = "DEEP_LINK",
}
