"use client";

import { Box, Button, Paper, Stack, useMediaQuery } from "@mui/material";
import AddressHeader from "./components/AddressHeader";
import NoDataAddress from "./components/NoDataAddress";
import AddressItem from "./components/AddressItem";
import AddressEdit from "../address-edit";
import { LoadingButton } from "@mui/lab";
import AddressCreate from "../address-create";
import { useGetAddressList } from "./hooks/useGetAddressList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { AddressSkeleton } from "./components/AddressSkeleton";
import ModalConfirmDelete from "./components/ModalConfirmDelete";

export default function AddressList() {
  const isXs = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation("common");
  const { ref, inView } = useInView();
  const searchParams = {
    page: 1,
    limit: 5,
  };
  const {
    dataAddressList,
    fetchNextPageAddressList,
    hasNextPageAddressList,
    isFetchingNextPageAddressList,
    isLoadingAddressList,
  } = useGetAddressList(searchParams);

  const listAddress =
    dataAddressList?.pages?.map((item) => item?.items).flat() || [];
  const isNotFound = !isLoadingAddressList && !listAddress.length;

  return (
    <Box
      sx={{
        bgcolor: "#FFF",
        pt: { xs: "16px", md: "36px" },
        pb: "32px",
        width: "100%",
        borderRadius: { xs: 0, md: "24px" },
      }}
    >
      <AddressHeader />

      {isLoadingAddressList && <AddressSkeleton />}
      <Stack spacing={4} px={{ xs: "16px", sm: "32px" }}>
        {listAddress?.map((item) => (
          <AddressItem key={item.id} addressItem={item} />
        ))}
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingButton
          variant="text"
          sx={{
            textDecoration: "underline",
            color: "rgba(31, 138, 112, 1)",
            display: !hasNextPageAddressList ? "none" : "block",
          }}
          ref={ref}
          loading={isFetchingNextPageAddressList}
          onClick={() => fetchNextPageAddressList()}
          disabled={!hasNextPageAddressList || isFetchingNextPageAddressList}
        >
          {t("address.loadingMore")}
        </LoadingButton>
      </Box>

      <NoDataAddress isOpen={isNotFound} />

      <AddressCreate />
      <AddressEdit />
      <ModalConfirmDelete />
    </Box>
  );
}
