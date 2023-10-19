"use client";
import React from "react";
import { useGetListEVoucher } from "./hooks/useGetListEVoucher";
import { IParamsListEVoucher, IStatusVoucher } from "./eVoucher.interface";
import {
  Paper,
  Typography,
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Pagination,
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { LIST_TAB_CONTENT } from "./eVoucher.constants";
import {
  setCurrentPageEVoucher,
  setCurrentTabIndex,
  setCurrentTabListEVoucher,
} from "./slice";
import { useDispatch, useSelector } from "@/common/redux/store";
import { Stack } from "@mui/material";
import EVoucherItem from "./components/EVoucherItem";
import { EmptyEVoucher } from "./components/EmptyEVoucher";

const ListEVoucherContainer = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const theme = useTheme();
  const { currentTab, currentPage, tabIndex } = useSelector(
    (state) => state.eVoucher
  );
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const params: IParamsListEVoucher = {
    page: currentPage,
    limit: 4,
    status: currentTab,
  };

  const { dataListEVoucher, isLoadingListEVoucher } =
    useGetListEVoucher(params);

  const listEVoucher =
    dataListEVoucher?.pages?.map((item) => item?.items).flat() || [];

  const isNotFound = !listEVoucher.length && !isLoadingListEVoucher;
  const totalPages = dataListEVoucher?.pages?.[0]?.meta?.totalPages || 1;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setCurrentPageEVoucher(1));
    dispatch(setCurrentTabIndex(newValue));
    switch (newValue) {
      case 1: {
        dispatch(setCurrentTabListEVoucher([IStatusVoucher.un_used]));
        break;
      }
      case 2: {
        dispatch(setCurrentTabListEVoucher([IStatusVoucher.used]));
        break;
      }
      case 3: {
        dispatch(
          setCurrentTabListEVoucher([
            IStatusVoucher.applied,
            IStatusVoucher.storing_expired,
            IStatusVoucher.using_expired,
          ])
        );
        break;
      }
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setCurrentPageEVoucher(value));
  };

  return (
    <Paper
      sx={{
        width: "100%",
        background: "white",
        borderRadius: { xs: "8px", md: "16px" },
        padding: 3,
      }}
    >
      <Typography
        sx={{
          color: "#1A1A1A",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Plus Jakarta Sans",
          mb: "20px",
        }}
      >
        {t("sidebar.eVoucher")}
      </Typography>
      <Box sx={{ width: "100%", typography: "body1", marginBottom: 3 }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="lab API tabs example"
          allowScrollButtonsMobile
          variant={matches ? "fullWidth" : "scrollable"}
          scrollButtons="auto"
          textColor="inherit"
        >
          {LIST_TAB_CONTENT?.map((item, index) => {
            return (
              <Tab label={t(item.label)} value={item.tabIndex} key={index} />
            );
          })}
        </Tabs>
      </Box>
      {!isLoadingListEVoucher &&
        (!isNotFound ? (
          <>
            <Stack spacing={3} alignItems={"center"}>
              {listEVoucher?.map((item, index) => {
                return (
                  <EVoucherItem eVoucher={item} key={`${item.id} + ${index}`} />
                );
              })}
            </Stack>
            <Stack
              mt={5}
              width={"100%"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Pagination
                count={totalPages}
                onChange={handleChangePage}
                page={currentPage}
              />
            </Stack>
          </>
        ) : (
          <EmptyEVoucher />
        ))}
    </Paper>
  );
};

export default ListEVoucherContainer;
