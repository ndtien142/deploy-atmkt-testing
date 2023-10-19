"use client";
import { Stack, Box, Container } from "@mui/material";
import { Banner } from "./components/banner/Banner";
import { MenuCategory } from "./components/menu-category/Category";
import { PopularProduct } from "./components/popular-product/PopularProduct";
import { ComboPopular } from "./components/combo-popular/ComboPopular";
import { useGetHomeConfig } from "./hooks/useGetHomeConfig";
import { IDeviceToken, ITypeSections } from "./interfaces";
import { NewsSection } from "./components/news/NewsSection";
import { ReviewsSection } from "./components/reviews/ReviewSection";
import { getToken, isSupported } from "firebase/messaging";
import { FIREBASE_VAPID } from "@/common/config";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useDispatch } from "@/common/redux/store";
import { usePostDeviceToken } from "./hooks/usePostDeviceToken";
import { useGetCountNotifyUnread } from "./hooks/useGetCountNotifyUnread";
import { setCountNotifyUnread } from "../web.slice";

export default function HomeApp() {
  const { dataHomeConfig, isRefetchingHomeConfig, isLoading } =
    useGetHomeConfig();
  const { accessToken } = useSelector((state: RootState) => state.authLogin);
  const dispatch = useDispatch();

  const { dataCountNotifyUnread } = useGetCountNotifyUnread();

  const { mutate } = usePostDeviceToken();
  const checkNotificationPromise = async () => {
    try {
      await Notification.requestPermission();
    } catch (e) {
      return false;
    }
    return true;
  };
  const handlePermission = async (_permission: NotificationPermission) => {
    if (!Notification.permission) {
      return;
    }
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      const { messaging } = await import("@/common/utils/firebase");
      getToken(messaging, {
        vapidKey: FIREBASE_VAPID,
      }).then((currentToken) => {
        const data: IDeviceToken = {
          deviceToken: currentToken,
        };
        mutate(data);
      });
    } else {
      console.log("This browser does not support Firebase messaging");
    }
  };
  const askNotiPermission = async () => {
    if (!window.Notification) {
      alert("Your browser does not support notification");
    } else {
      if (await checkNotificationPromise()) {
        Notification.requestPermission().then(handlePermission);
      } else {
        Notification.requestPermission(handlePermission);
      }
    }
  };

  useEffect(() => {
    if (accessToken) {
      askNotiPermission();
    }
  }, []);

  useEffect(() => {
    if (dataCountNotifyUnread) {
      dispatch(setCountNotifyUnread(dataCountNotifyUnread));
    }
  }, [dataCountNotifyUnread]);

  return (
    // <Container >

    <Stack
      minHeight={"100%"}
      minWidth={"100%"}
      spacing={"100px"}
      pb={{ lg: "100px", md: "75px", xs: "25px" }}
    >
      {dataHomeConfig?.sections?.map((item1: any, index: number) => {
        if (item1?.type === ITypeSections?.BANNER) {
          return <Banner dataMenu={item1} key={index} />;
        } else if (item1?.type === ITypeSections?.HORIZONTAL_PRODUCT_LIST_1)
          return <PopularProduct dataMenu={item1} key={index} />;
        else if (item1?.type === ITypeSections?.HORIZONTAL_PRODUCT_LIST_2)
          return <ComboPopular dataMenu={item1} key={index} />;
        else if (item1?.type === ITypeSections?.NORMAL_SERVICE)
          return <MenuCategory dataMenu={item1} key={index} />;
        else if (item1?.type === ITypeSections?.NEWS)
          return <NewsSection dataMenu={item1} key={index} />;
        else if (item1?.type === ITypeSections?.REVIEWS)
          return <ReviewsSection dataMenu={item1} key={index} />;
      })}
    </Stack>
    // </Container>
  );
}
