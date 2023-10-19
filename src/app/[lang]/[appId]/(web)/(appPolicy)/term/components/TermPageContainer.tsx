"use client";

import { PATH_HOME } from "@/common/constants/path.constants";
import {
  Box,
  Breadcrumbs,
  Divider,
  Skeleton,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import { Link, Stack } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import TermItem from "./TermItem";
import { useGetAppPolicy } from "../../common/hooks/useGetAppPolicy";
import { TYPE } from "../../common/constant";
import { RootState, useDispatch } from "@/common/redux/store";
import { useEffect } from "react";
import { setIdActive, setIsOpenDrawer } from "../common/term.slice";
import { useSelector } from "react-redux";
import TermDetail from "./TermDetail";
import { IconButton } from "@mui/material";
import Iconify from "@/common/components/Iconify";

export default function HelpPageContainer() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { idActive, isOpenDrawer } = useSelector(
    (state: RootState) => state.term
  );

  const { data, isLoading } = useGetAppPolicy({
    page: 1,
    limit: 10,
    types: TYPE.TERM,
  });
  const listData = data?.items || [];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="#000" href={PATH_HOME.root}>
      {t("policy.home")}
    </Link>,
    <Typography key="2" color="primary">
      {listData.find((item) => item.id === idActive)?.appPolicyDetail?.title ||
        t("policy.term")}
    </Typography>,
  ];

  const toggleDrawer = () => {};

  useEffect(() => {
    if (listData.length) {
      dispatch(setIdActive(listData[0].id));
    }
  }, [data]);

  return (
    <Box sx={{ backgroundColor: { xs: "#FFFFFF", md: "rgb(245, 245, 245)" } }}>
      <Stack
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
        pt={{ xs: "0", md: "50px" }}
        pb={{ md: "100px", xs: "50px" }}
        spacing={{ xs: 0, md: 4 }}
      >
        <Stack direction={"row"} display={{ xs: "none", md: "flex" }}>
          <Breadcrumbs
            separator="·"
            sx={{ fontWeight: "700 !important" }}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Box display={{ xs: "block", md: "none" }}>
          <Drawer
            anchor={"left"}
            open={isOpenDrawer}
            onClose={() => dispatch(setIsOpenDrawer(false))}
          >
            <Stack p={2} pt={4} spacing={2}>
              {!isLoading ? (
                <>
                  {listData?.map((item) => (
                    <TermItem key={item?.id} appPolicy={item} />
                  ))}
                </>
              ) : (
                <>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} variant="text" width={"100%"} />
                    ))}
                </>
              )}
            </Stack>
          </Drawer>
        </Box>
        <Stack direction={"row"} spacing={{ xs: 0, md: 3 }}>
          <Stack
            flex={{ xs: 0, md: 0.25 }}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
          >
            {!isLoading ? (
              <>
                {listData?.map((item) => (
                  <TermItem key={item?.id} appPolicy={item} />
                ))}
              </>
            ) : (
              <>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} variant="text" width={"100%"} />
                  ))}
              </>
            )}
          </Stack>
          <Stack flex={{ xs: 1, md: 0.75 }}>
            <Box
              sx={{
                bgcolor: "#FFF",
                pt: { xs: "16px", md: "36px" },
                pb: { xs: "16px", md: "32px" },
                px: { xs: "0", md: "32px" },
                width: "100%",
                borderRadius: { xs: 0, md: "24px" },
              }}
            >
              <TermDetail />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
