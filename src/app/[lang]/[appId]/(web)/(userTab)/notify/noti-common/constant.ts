import { ITypeNotification } from "./interface";

export enum type_link {
  ROUTER = "ROUTER",
  DEEP_LINK = "DEEP_LINK",
}

export const type_notify_image_unread: ITypeNotification = {
  ADD_POINT: "/assets/notify/add_point_unread.png",
  SPEND_POINT: "/assets/notify/spend_point_unread.png",
  RANK: "/assets/notify/rank_unread.png",
  TRACK: "/assets/notify/track_unread.png",
  BIRTHDAY: "/assets/notify/birthday_unread.png",
  INFORMATION: "/assets/notify/information_unread.png",
};

export const type_notify_image: ITypeNotification = {
  ADD_POINT: "/assets/notify/add_point.png",
  SPEND_POINT: "/assets/notify/spend_point.png",
  RANK: "/assets/notify/rank.png",
  TRACK: "/assets/notify/track.png",
  BIRTHDAY: "/assets/notify/birthday.png",
  INFORMATION: "/assets/notify/information.png",
};
