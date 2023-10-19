"use client";
import { useDispatch, useSelector } from "@/common/redux/store";
import { Box, Grid, Stack } from "@mui/material";
import { ReactNode } from "react";
import { FooterBar } from "../(web)/layoutApp/components/footer/Footer";
import { HeaderBar } from "./common/components/Header";
import OtpModal from "./common/components/OtpModal";
import Slogan from "./common/components/Slogan";
import { setOpenOtpModal } from "./login/reducers/auth.slice";

export default function LayoutAuth({ children }: { children: ReactNode }) {
  const { openOtpModal } = useSelector((state) => state.authLogin);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(
      setOpenOtpModal({
        isOpen: false,
      })
    );
  };

  return (
    <main>
      <Stack
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          justifyContent: "space-between",
        }}
      >
        <HeaderBar />
        <Box
          sx={{
            width: "100%",
            minHeight: "95%",
            pt: "8%",
            pb: "4%",
            backgroundImage: "url(/assets/auth_background.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} display={{ xs: "none", sm: "flex" }}>
              <Slogan />
            </Grid>
            <Grid item xs={12} sm={7}>
              {children}
            </Grid>
          </Grid>
        </Box>
        <FooterBar />
        {openOtpModal?.isOpen && <OtpModal onClose={handleCloseModal} />}
      </Stack>
    </main>
  );
}
