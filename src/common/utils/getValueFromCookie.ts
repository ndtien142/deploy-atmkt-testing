"use client";

import { getCookie as getCookieApp } from "cookies-next";

export const getCookie = (key: string) => {
  //   const value = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  const value = getCookieApp(key);

  return value ? value : "";
};
