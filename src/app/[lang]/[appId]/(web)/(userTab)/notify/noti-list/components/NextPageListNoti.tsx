"use client";
import { Box, Button } from "@mui/material";
import NotiItem from "./NotiItem";
import { useEffect } from "react";
import { useGetNotiList } from "../hooks/useGetNotiList";
import { useInView } from "react-intersection-observer";

export default function NextPageListNoti() {
  const { ref, inView } = useInView();

  const {
    dataNotiList,
    fetchNextPageNotiList,
    isFetchingNextPageNotiList,
    isLoadingNotiList,
    hasNextPageNotiList,
  } = useGetNotiList({ page: 2, limit: 10 });

  const listNoti = dataNotiList?.pages?.map((item) => item?.items).flat() || [];

  useEffect(() => {
    if (inView) {
      fetchNextPageNotiList();
    }
  }, [inView]);

  return (
    <Box>
      {listNoti?.map((item) => (
        <NotiItem key={item.id} notiItem={item} />
      ))}
      <Box sx={{ height: 0 }}>
        <Button
          sx={{
            backgroundColor: "transparent",
            border: "none",
          }}
          ref={ref}
          onClick={() => fetchNextPageNotiList()}
          disabled={!hasNextPageNotiList || isFetchingNextPageNotiList}
        />
      </Box>
    </Box>
  );
}
