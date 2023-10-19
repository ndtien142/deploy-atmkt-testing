import { IStatusVoucher } from "./eVoucher.interface";

export const LIST_TAB_CONTENT = [
  {
    label: "e_voucher.unused",
    value: [IStatusVoucher.un_used],
    tabIndex: 1,
  },
  {
    label: "e_voucher.used",
    value: [IStatusVoucher.used],
    tabIndex: 2,
  },
  {
    label: "e_voucher.applied_or_expiry",
    value: [
      IStatusVoucher.applied,
      IStatusVoucher.storing_expired,
      IStatusVoucher.using_expired,
    ],
    tabIndex: 3,
  },
];
