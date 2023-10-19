"use client";

import { useDispatch, useSelector } from "@/common/redux/store";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Stack,
} from "@mui/material";
import { setIsOpenModalGift } from "../../../common/slice";
import useTranslation from "next-translate/useTranslation";
import {
  IAddedLoyaltyCodeGiftProduct,
  IGamePlayTime,
} from "../../../common/interface";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useRouter } from "next/navigation";

type Props = {
  game: IGamePlayTime[];
  voucher?: IAddedLoyaltyCodeGiftProduct;
  point: number;
};

export default function ModalGift({ game, voucher, point }: Props) {
  const { isOpenModalGift } = useSelector((state) => state.addPoint);
  const dispatch = useDispatch();
  const { t } = useTranslation("loyalty");
  const router = useRouter();

  const handleClose = () => {
    dispatch(setIsOpenModalGift(false));
  };

  const handleGoToEVoucher = () => {
    dispatch(setIsOpenModalGift(false));
    router.push(PATH_HOME.eVoucher.list);
  };

  const handleGoToGame = () => {
    dispatch(setIsOpenModalGift(false));
    router.push(PATH_HOME.game.lucky_wheel.root);
  };

  return (
    <Dialog
      open={isOpenModalGift}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Stack spacing={2} p={1} pb={2}>
        <DialogTitle id="alert-dialog-title">
          {t("modalGift.title", { number: point })}
        </DialogTitle>
        <DialogContent>
          {voucher && (
            <DialogContentText id="alert-dialog-description">
              {t("modalGift.evoucher", {
                point: voucher?.productVariant?.productVariantPoint?.point,
              })}
            </DialogContentText>
          )}
          {!!game.length && (
            <DialogContentText id="alert-dialog-description">
              {t("modalGift.game", {
                number: game.reduce((total, curr) => {
                  return (total += curr.playTime);
                }, 0),
              })}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Stack spacing={2} direction={"row"}>
            <Button onClick={handleClose} color="inherit" variant="contained">
              {t("modalGift.closeBtn")}
            </Button>
            {voucher && (
              <Button
                onClick={handleGoToEVoucher}
                color="primary"
                variant="contained"
              >
                {t("modalGift.goToEvoucher")}
              </Button>
            )}
            {!!game.length && (
              <Button
                onClick={handleGoToGame}
                variant={voucher ? "outlined" : "contained"}
              >
                {t("modalGift.goToGame")}
              </Button>
            )}
          </Stack>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}
