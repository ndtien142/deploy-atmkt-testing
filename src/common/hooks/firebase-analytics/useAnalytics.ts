import { EventParams, logEvent } from "firebase/analytics";
import {
  EVENT_ADD_SHIPPING,
  EVENT_ADD_TO_CART,
  EVENT_BEGIN_CHECKOUT,
  EVENT_LOGIN,
  EVENT_PURCHASE,
  EVENT_REMOVE_FROM_CART,
  EVENT_SEARCH,
  EVENT_SELECT_CONTENT,
  EVENT_SELECT_ITEM,
  EVENT_SHARE,
  EVENT_SIGN_UP,
  EVENT_VIEW_CART,
  EVENT_VIEW_ITEM,
  EVENT_VIEW_ITEM_LIST,
  EVENT_VIEW_SEARCH_RESULTS,
} from "./analyticsEvent.constant";
import { analytics } from "@/common/utils/firebase";

export const useAnalytics = () => {
  const customLogEvent = (eventName: string, eventParams?: EventParams) => {
    if (eventParams === undefined) {
      console.warn("Event parameters are undefined.");
      return;
    }
    if (eventParams) {
      Object.keys(eventParams).forEach((key: string) => {
        const value = eventParams[key];
        if (typeof value === "string" && value.length > 100) {
          eventParams[key] = value.slice(0, 100);
        }
      });
    }
    if (Array.isArray(eventParams?.items)) {
      eventParams.items.forEach((item) => {
        item.item_id = item.item_id?.slice(0, 100);
        item.item_name = item.item_name?.slice(0, 100);
        item.item_category = item.item_category?.slice(0, 100);
      });
    }
    logEvent(analytics, eventName, eventParams);
  };

  const logLogin = (method: string) => {
    customLogEvent(EVENT_LOGIN, { method: method });
  };

  const logSignUp = (method: string) => {
    customLogEvent(EVENT_SIGN_UP, { method: method });
  };

  const logViewCart = (params: EventParams) => {
    customLogEvent(EVENT_VIEW_CART, params);
  };

  const logRemoveFromCart = (params: EventParams) => {
    customLogEvent(EVENT_REMOVE_FROM_CART, params);
  };

  const logPurchase = (params: EventParams) => {
    customLogEvent(EVENT_PURCHASE, params);
  };

  const logBeginCheckout = (params: EventParams) => {
    customLogEvent(EVENT_BEGIN_CHECKOUT, params);
  };

  const logAddShipping = (params: EventParams) => {
    customLogEvent(EVENT_ADD_SHIPPING, params);
  };

  const logAddToCart = (params: EventParams) => {
    customLogEvent(EVENT_ADD_TO_CART, params);
  };

  const logSearch = (query: string) => {
    customLogEvent(EVENT_SEARCH, { search_term: query });
  };

  const logViewSearchResults = (params: EventParams) => {
    customLogEvent(EVENT_VIEW_SEARCH_RESULTS, params);
  };

  const logViewItem = (params: EventParams) => {
    customLogEvent(EVENT_VIEW_ITEM, params);
  };

  const logViewItemList = (params: EventParams) => {
    customLogEvent(EVENT_VIEW_ITEM_LIST, params);
  };

  const logSelectItem = (params: EventParams) => {
    customLogEvent(EVENT_SELECT_ITEM, params);
  };

  const logSelectContent = (params: EventParams) => {
    customLogEvent(EVENT_SELECT_CONTENT, params);
  };

  const logShare = (params: EventParams) => {
    customLogEvent(EVENT_SHARE, params);
  };

  return {
    logEvent,
    logLogin,
    logSignUp,
    logViewCart,
    logRemoveFromCart,
    logPurchase,
    logBeginCheckout,
    logAddShipping,
    logAddToCart,
    logSearch,
    logViewSearchResults,
    logViewItem,
    logViewItemList,
    logSelectItem,
    logSelectContent,
    logShare,
  };
};
