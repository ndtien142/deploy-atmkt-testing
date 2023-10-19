import { MetaData } from "@/common/constants/common.interfaces";

export interface IHistoryPoint {
  id: number;
  point: number;
  action: HistoryPointType;
  expiresAt: Date;
  createdAt: Date;
  type: string;
}

export enum HistoryPointType {
  SPEND_POINT = "SPEND_POINT",
  ADD_POINT = "ADD_POINT",
}

export interface IHistoryPointList {
  items: IHistoryPoint[];
  meta: MetaData;
}
