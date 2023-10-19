"use client";
import { Paper, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useGetDetailEVoucher } from "../common/hooks/useGetDetailEVoucher";
import useTranslation from "next-translate/useTranslation";
import UsedEVoucher from "./components/UsedEVoucher";
import UnUsedEVoucher from "./components/UnUsedEVoucher";
import { useGetProfileUser } from "../common/hooks/useGetProfileUser";
import { useDispatch } from "@/common/redux/store";
import { setPhoneNumberUser } from "./detailEVoucherSlice";

const DetailEVoucherContainer = () => {
  const { id } = useParams();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { detailEVoucher } = useGetDetailEVoucher(Number(id));
  const { dataProfileUser } = useGetProfileUser();

  useEffect(() => {
    if (dataProfileUser) {
      dispatch(setPhoneNumberUser(dataProfileUser?.phoneNumber));
    }
  }, [dataProfileUser]);

  return (
    <Paper
      sx={{
        width: "100%",
        background: { xs: "#F5F5F5", sm: "white" },
        borderRadius: { xs: "8px", md: "16px" },
        padding: 3,
      }}
    >
      <Stack>
        <Typography
          sx={{
            color: "#1A1A1A",
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: "700",
            fontFamily: "Plus Jakarta Sans",
            mb: "20px",
          }}
        >
          {t("e_voucher.detail_e_voucher")}
        </Typography>
        {detailEVoucher?.status === "USED" && (
          <UsedEVoucher voucher={detailEVoucher} />
        )}
        {detailEVoucher?.status === "UNUSED" && (
          <UnUsedEVoucher voucher={detailEVoucher} />
        )}
      </Stack>
    </Paper>
  );
};

export default DetailEVoucherContainer;
