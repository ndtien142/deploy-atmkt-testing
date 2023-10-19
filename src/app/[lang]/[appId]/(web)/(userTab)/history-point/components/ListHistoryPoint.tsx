"use client";
import { Box, Button, Paper } from "@mui/material";
import React from "react";
import { TitleHeader } from "../../order-history/components/TitleHeader";
import { useGetListHistoryPoint } from "../hooks/useGetListHistoryPoint";
import CardHistoryPoint from "./CardHistoryPoint";
import LoadingHistoryPoint from "./LoadingHistoryPoint";
import { useInView } from "react-intersection-observer";
import { LoadingButton } from "@mui/lab";
import useTranslation from "next-translate/useTranslation";

export default function ListHistoryPoint() {
  const { ref, inView } = useInView();
  const { t } = useTranslation("common");
  const {
    dataHistories,
    fetchNextPageHistoriesPoint,
    hasNextPageHistoriesPoint,
    isFetchingNextPageHistoriesPoint,
    isLoadingHistories,
  } = useGetListHistoryPoint({ page: 1, limit: 5 });

  const listHistoriesPoint =
    dataHistories?.pages?.map((item) => item?.items).flat() || [];

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          background: "white",
          borderRadius: { xs: 0, md: "24px" },
          padding: 3,
        }}
      >
        <TitleHeader title="Danh sách tích xu/đổi xu" />

        {isLoadingHistories ? (
          <LoadingHistoryPoint />
        ) : (
          <>
            {listHistoriesPoint?.map((item) => (
              <CardHistoryPoint item={item} key={item.id} />
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton
                variant="text"
                sx={{
                  textDecoration: "underline",
                  display: !hasNextPageHistoriesPoint ? "none" : "block",
                }}
                ref={ref}
                loading={isFetchingNextPageHistoriesPoint}
                onClick={() => fetchNextPageHistoriesPoint()}
                disabled={
                  !hasNextPageHistoriesPoint || isFetchingNextPageHistoriesPoint
                }
              >
                {t("notify.loadingMore")}
              </LoadingButton>
            </Box>
          </>
        )}
      </Paper>
    </>
  );
}
