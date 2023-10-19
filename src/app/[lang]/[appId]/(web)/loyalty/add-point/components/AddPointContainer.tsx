"use client";

import Iconify from "@/common/components/Iconify";
import { Button, Grid, useMediaQuery } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import AddPointForm from "./AddPointForm";
import { dispatch, useSelector } from "@/common/redux/store";
import { QRScanPopup } from "./QRScanPopup";
import useResponsive from "@/common/hooks/useResponsive";
import { useEffect, useState } from "react";
import { setOpenScanPopup } from "../../common/slice";
import { PATH_HOME } from "@/common/constants/path.constants";
const AddPointContainer = () => {
  const isMobile = useResponsive("down", "md");
  const { t } = useTranslation("loyalty");
  const router = useRouter();
  const { isOpenScanPopup } = useSelector((state) => state.addPoint);

  useEffect(() => {
    isMobile && dispatch(setOpenScanPopup(true));
  }, []);

  const [triggerRender, setTriggerRender] = useState(false);

  useEffect(() => {
    setTriggerRender(true);
  }, [triggerRender]);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          p: "5%",
          backgroundImage: "url(/assets/add-point-background.png)",
          backgroundSize: "cover",
        }}
      >
        <Grid item xs={12} md={5}>
          <Button
            variant="text"
            sx={{
              color: "#1F8A70",
              mr: "5%",
            }}
            startIcon={
              <Iconify icon={"carbon:arrow-left"} sx={{ width: "24px" }} />
            }
            onClick={() => router.push(PATH_HOME.root)}
          >
            {t("back_to_homepage")}
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <AddPointForm />
        </Grid>
      </Grid>
      {isOpenScanPopup && <QRScanPopup open={isOpenScanPopup} />}
    </>
  );
};

export default AddPointContainer;
