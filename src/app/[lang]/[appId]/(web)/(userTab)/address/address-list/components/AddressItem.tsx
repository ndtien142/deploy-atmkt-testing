"use client";

import { useDispatch } from "@/common/redux/store";
import { Paper, Stack, Box, Button } from "@mui/material";
import {
  setIdDelete,
  setIdEdit,
  setIsOpenEditForm,
  setIsOpenModalConfirm,
} from "../../address-common/slice";
import { IAddressItem } from "../../address-common/interface";
import useTranslation from "next-translate/useTranslation";
import ItemOptions from "./ItemOptions";
import { MenuItem } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { useState } from "react";

type Props = {
  addressItem: IAddressItem;
};

export default function AddressItem({ addressItem }: Props) {
  const {
    id,
    address1,
    address2,
    province,
    district,
    ward,
    isDefault,
    phone,
    name,
  } = addressItem;
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);

  const handleOpenMenuActions = (category: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(category.currentTarget);
  };

  const handleCloseMenuActions = () => {
    setOpenMenuActions(null);
  };

  const handleOpenEditForm = () => {
    dispatch(setIsOpenEditForm(true));
    dispatch(setIdEdit(id));
  };

  const handleDeleteItem = () => {
    dispatch(setIdDelete(id));
    dispatch(setIsOpenModalConfirm(true));
  };

  return (
    <Paper
      sx={{
        padding: { xs: "10px", md: "24px" },
        borderRadius: "16px",
        width: "100%",
        boxShadow: "0 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={0.5}>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Plus Jakarta Sans",
                color: "#212B36",
              }}
            >
              {name}
            </Box>
            {isDefault && (
              <Box
                sx={{
                  width: "86px",
                  height: "26px",
                  backgroundColor: "rgba(24, 144, 255, 0.16)",
                  borderRadius: "6px",
                  p: "1px 8px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Plus Jakarta Sans",
                    color: "rgba(12, 83, 183, 1)",
                  }}
                >
                  {t("address.default")}
                </Box>
              </Box>
            )}
          </Stack>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(99, 115, 129, 1)",
            }}
          >
            {phone}
          </Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(33, 43, 54, 1)",
            }}
          >
            {`${address1}, ${ward.name}, ${district.name}, ${province.name}`}
          </Box>
        </Stack>
        <Box
          sx={{
            alignSelf: "flex-start",
          }}
        >
          <ItemOptions
            open={openMenu}
            onClose={handleCloseMenuActions}
            onOpen={handleOpenMenuActions}
            actions={
              <>
                <MenuItem
                  onClick={() => {
                    handleDeleteItem();
                    handleCloseMenuActions();
                  }}
                  sx={{ color: "error.main" }}
                >
                  <Iconify icon={"eva:trash-2-outline"} />
                  {t("address.deleteBtn")}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleOpenEditForm();
                    handleCloseMenuActions();
                  }}
                  sx={{ color: "#1F8A70" }}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(/assets/icons/core/edit-btn.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "20px",
                      height: "20px",
                      mr: "16px",
                    }}
                  />
                  {t("address.updateBtn")}
                </MenuItem>
              </>
            }
          />
        </Box>
      </Stack>
    </Paper>
  );
}
