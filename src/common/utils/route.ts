import { getCookie } from "./getValueFromCookie";

const appId = getCookie("APP_ID");
export const convertRouteByMerchant = (route: string) => {
  if (route.startsWith("/")) {
    return `/${appId}${route}`;
  }
  return `/${appId}/${route}`;
};
