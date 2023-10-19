import authLoginSlice from "@/app/[lang]/[appId]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/[appId]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/[appId]/(auth)/register/slice";
import addressSlice from "@/app/[lang]/[appId]/(web)/(userTab)/address/address-common/slice";
import orderHistorySlice from "@/app/[lang]/[appId]/(web)/(userTab)/order-history/common/slice";
import customerSlice from "@/app/[lang]/[appId]/(web)/(userTab)/profile/account-common/reducers/customer-profile.slice";
// import forgotPasswordSlice from '@/app/[lang]/[appId]/(auth)/forgot-password/slice';
import searchSlice from "@/app/[lang]/[appId]/(web)/layoutApp/search.slice";
import checkoutSlice from "@/app/[lang]/[appId]/(web)/checkout/order.slice";
import headerSlice from "@/app/[lang]/[appId]/(web)/layoutApp/components/header/header.slice";
import addPointSlice from "@/app/[lang]/[appId]/(web)/loyalty/common/slice";
import categoryReducer from "@/app/[lang]/[appId]/(web)/category/category.slice";
import userTabReducer from "@/app/[lang]/[appId]/(web)/(userTab)/slice";
import eVoucherReducer from "@/app/[lang]/[appId]/(web)/(userTab)/e-voucher/slice";
import productDetailReducer from "@/app/[lang]/[appId]/(web)/productDetail/slice";

import { combineReducers } from "@reduxjs/toolkit";
import detailEVoucherSlice from "@/app/[lang]/[appId]/(web)/(userTab)/e-voucher/[id]/detailEVoucherSlice";
import wheelSlice from "@/app/[lang]/[appId]/(web)/game/lucky-wheel/wheel.slice";
import notifyReducer from "@/app/[lang]/[appId]/(web)/(userTab)/notify/noti-common/slice";
import webSlice from "@/app/[lang]/[appId]/(web)/web.slice";
import subjectReducer from "@/app/[lang]/[appId]/(web)/subject/common/slice";

import policyReducer from "@/app/[lang]/[appId]/(web)/(appPolicy)/policy/common/policy.slice";
import termReducer from "@/app/[lang]/[appId]/(web)/(appPolicy)/term/common/term.slice";
import helpReducer from "@/app/[lang]/[appId]/(web)/(appPolicy)/help/common/help.slice";

import themeReducer from "../components/theme/slice";
import newsReducer from "../../app/[lang]/[appId]/(web)/news/slice";

const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  address: addressSlice,
  checkout: checkoutSlice,
  customerProfile: customerSlice,
  // forgotPassword: forgotPasswordSlice,
  search: searchSlice,
  headerSlice: headerSlice,
  orderHistory: orderHistorySlice,
  addPoint: addPointSlice,
  categoryRoot: categoryReducer,
  userTab: userTabReducer,
  eVoucher: eVoucherReducer,
  detailEVoucher: detailEVoucherSlice,
  productDetail: productDetailReducer,
  wheelReducer: wheelSlice,
  notify: notifyReducer,
  webReducer: webSlice,
  subject: subjectReducer,
  policy: policyReducer,
  term: termReducer,
  help: helpReducer,
  themeLogo: themeReducer,
  news: newsReducer,
});

export { rootReducer };
