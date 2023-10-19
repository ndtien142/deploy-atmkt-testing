"use client";
import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./components/header/Header";
import { FooterBar } from "./components/footer/Footer";
import { useDispatch, useSelector } from "@/common/redux/store";
import PopupLogin from "./components/popup-login/PopupLogin";
import { setPopupLogin } from "./components/header/header.slice";
import { usePathname, useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { PRIVATE_ROUTE } from "./constants";

export default function LayoutApp({ children }: { children: ReactNode }) {
  const { isOpenPopupLogin } = useSelector((state) => state.headerSlice);
  const { accessToken } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();
  const currentPath = usePathname();
  const router = useRouter();

  const handleClosePopup = () => {
    dispatch(setPopupLogin(false));
  };

  if (
    !accessToken &&
    PRIVATE_ROUTE.some((item) => currentPath.includes(item.path))
  ) {
    router.push(PATH_HOME.root);
  }

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "space-between",
      }}
    >
      <HeaderBar />
      {children}
      <FooterBar />
      {isOpenPopupLogin && (
        <PopupLogin open={isOpenPopupLogin} onClose={handleClosePopup} />
      )}
    </Stack>
  );
}
