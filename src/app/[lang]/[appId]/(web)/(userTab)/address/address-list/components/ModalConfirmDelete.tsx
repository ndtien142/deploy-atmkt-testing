import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useSelector } from "react-redux";
import {
  idDelete,
  isOpenModalConfirm,
  setIsOpenModalConfirm,
} from "../../address-common/slice";
import useMessage from "@/common/hooks/useMessage";
import { useDispatch } from "@/common/redux/store";
import { useDeleteAddress } from "../hooks/useDeleteAddress";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalConfirmDelete() {
  const { t } = useTranslation("common");
  const confirmPopup = useSelector(isOpenModalConfirm);
  const selectId = useSelector(idDelete);
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const dispatch = useDispatch();
  const { mutate: mutationDelete } = useDeleteAddress({
    onSuccess: () => {
      showSuccessSnackbar(t("address.deleteSuccess"));
    },
    onError: () => {
      showErrorSnackbar(t("address.deleteError"));
    },
  });
  const handleDelete = () => {
    mutationDelete(selectId);
    dispatch(setIsOpenModalConfirm(false));
  };
  const handleClose = () => {
    dispatch(setIsOpenModalConfirm(false));
  };

  return (
    <>
      <Dialog
        open={confirmPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ pb: 0 }}>{t("address.titleModal")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t("address.contentModal")}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ width: { xs: "auto", sm: "400px" }, p: "16px" }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="error" onClick={handleDelete}>
              {t("address.deleteBtn")}
            </Button>
            <Button variant="contained" color="inherit" onClick={handleClose}>
              {t("address.cancelBtn")}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
