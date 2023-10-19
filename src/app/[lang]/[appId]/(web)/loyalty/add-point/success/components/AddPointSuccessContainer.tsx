"use client";

import Iconify from "@/common/components/Iconify";
import { Button, Grid } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import AddPointInfo from "./AddPointInfo";
import { PATH_HOME } from "@/common/constants/path.constants";
const AddPointSuccessContainer = () => {
  const { t } = useTranslation("loyalty");
  const router = useRouter();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: "5%",
        pb: "5vh",
        backgroundImage: "url(/assets/add-point-success-background.png)",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12}>
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
      <Grid item xs={12}>
        <AddPointInfo />
      </Grid>
    </Grid>
  );
};

export default AddPointSuccessContainer;
