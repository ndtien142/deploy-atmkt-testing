import { ReduxProviders } from "@/common/redux/provider";
import AppThemeProvider from "@/common/styles/app-theme-provider";
import Providers from "@/common/utils/provider";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import "src/common/styles/css/global.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import NotistackProvider from "@/common/components/NotistackProvider";
import Script from "next/script";
import { FIREBASE_MEASUREMENT_ID } from "@/common/config";
import ThemeColorSetting from "@/common/components/theme/ThemeColorSetting";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${FIREBASE_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${FIREBASE_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
          <AppThemeProvider>
            <ReduxProviders>
              <Providers>
                <ThemeColorSetting>
                  <NotistackProvider>
                    <main>{children}</main>
                  </NotistackProvider>
                </ThemeColorSetting>
              </Providers>
            </ReduxProviders>
          </AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
