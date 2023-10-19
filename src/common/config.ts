// @mui
import { enUS, frFR, zhCN, viVN, arSD } from "@mui/material/locale";
import { SettingsValueProps } from "./components/settings/type";
// components
// routes

export const HOST_API = process.env.NEXT_PUBLIC_APP_BASE_URL;
export const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN =
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGE_SENDER_ID =
  process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID;
export const FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
export const FIREBASE_VAPID = process.env.NEXT_PUBLIC_FIREBASE_VAPID;

export const defaultSettings: SettingsValueProps = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "bold",
  themeLayout: "horizontal",
  themeColorPresets: "red",
  themeStretch: false,
};

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "Vietnamese",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
];

export const defaultLang = allLangs[1]; // English

export const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
