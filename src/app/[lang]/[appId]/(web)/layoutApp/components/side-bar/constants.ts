import { SideBarItemType } from "./interface";

export const SIDE_BAR_ITEM = [
  {
    type: SideBarItemType.PROFILE,
    src: "/assets/icons/sidebar/usersquare.svg",
    name: "sidebar.profile",
    path: "/profile",
    icon: "ci:user-square",
  },
  {
    type: SideBarItemType.ADDRESS,
    src: "/assets/icons/sidebar/location.svg",
    name: "sidebar.address",
    path: "/address",
    icon: "akar-icons:location",
  },
  {
    type: SideBarItemType.E_VOUCHER,
    src: "/assets/icons/sidebar/ticketdiscount.svg",
    name: "sidebar.eVoucher",
    path: "/e-voucher",
    icon: "mdi:voucher-outline",
  },
  {
    type: SideBarItemType.ORDER,
    src: "/assets/icons/sidebar/shoppingbag.svg",
    name: "sidebar.my_order",
    path: "/order-history",
    icon: "solar:bag-outline",
  },
  {
    type: SideBarItemType.HISTORY,
    src: "/assets/icons/sidebar/trucktime.svg",
    name: "sidebar.orderHistory",
    path: "/history-point",
    icon: "nimbus:truck",
  },
  {
    type: SideBarItemType.NOTIFICATION,
    src: "/assets/icons/sidebar/notification.svg",
    name: "sidebar.notifications",
    path: "/notify",
    icon: "basil:notification-outline",
  },
];

export const DEFAULT_AVATAR = "/assets/default-avatar.png";

export const ICON_EDIT = "/assets/icons/sidebar/edit2.svg";
