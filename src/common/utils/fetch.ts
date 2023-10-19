import { MERCHANT_ID } from "../config";
import { BASE_URL_API } from "../constants/config.constant";
import { cookies } from "next/headers";
export const fetchServerSide = (path: string) => {
  const currentLang = cookies().get('NEXT_LOCALE')?.value;
  const requestHeader: HeadersInit = new Headers();
  requestHeader.set("Content-Type", "application/json");
  requestHeader.set("Accept", "Application/json");
  requestHeader.append("merchant_id", MERCHANT_ID as unknown as string);
  requestHeader.append("lang", currentLang ?? "vi");
  return fetch(`${BASE_URL_API}${path}`, {
    headers: requestHeader,
    next: {
      revalidate: 60 * 60,
    },
  });
};
