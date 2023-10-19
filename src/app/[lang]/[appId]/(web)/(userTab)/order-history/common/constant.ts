import { IconOnCompleted } from "../components/icons/IconOnCompleted";
import { IconProcessing } from "../components/icons/IconProcessing";
import { IconOnHolding } from "./../components/icons/IconOnHolding";
import { OrderRefundStatus } from "./interface";

export enum OrderStatus {
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PROCESSING = "PROCESSING",
  REFUNDED = "REFUNDED",
}

export const LIST_TAB_CONTENT = [
  {
    label: "myorder.allOrder",
    value: "",
  },
  {
    label: "myorder.onHold",
    value: OrderStatus.ON_HOLD,
  },
  {
    label: "myorder.onProcessing",
    value: OrderStatus.PROCESSING,
  },
  {
    label: "myorder.completed",
    value: OrderStatus.COMPLETED,
  },
  {
    label: "myorder.cancelled",
    value: OrderStatus.CANCELLED,
  },
];

export const ORDER_STATUS = [
  {
    title: "Đã tiếp nhận",
    renderIcon: IconOnHolding,
    status: OrderStatus.ON_HOLD,
    color: "#54D62C",
  },
  {
    title: "Giao hàng thất bại",
    renderIcon: IconOnHolding,
    status: OrderStatus.CANCELLED,
    color: "#FF4842",
  },
  {
    title: "Giao hàng thành công",
    renderIcon: IconOnCompleted,
    status: OrderStatus.COMPLETED,
    color: "#54D62C",
  },
  {
    title: "Đang vận chuyển",
    renderIcon: IconProcessing,
    status: OrderStatus.PROCESSING,
    color: "#54D62C",
  },
  {
    title: "Đã hoàn xu",
    renderIcon: IconOnHolding,
    status: OrderRefundStatus.REFUNDED,
    color: "#1DA891",
  },
];
