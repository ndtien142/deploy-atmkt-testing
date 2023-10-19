import { dispatch, useSelector } from "@/common/redux/store";
import { Button } from "@mui/material";
import { Card, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { setIsOpenPopUpOutOfQuantity } from "../../common/slice";
import { useTheme } from "@mui/material/styles";

const PopUpOutOfQuantity = () => {
  const { isOpenPopUpOutOfQuantity } = useSelector(
    (state) => state.orderHistory
  );

  const handleClosePopUp = () => {
    dispatch(setIsOpenPopUpOutOfQuantity(false));
  };
  return (
    <Modal open={isOpenPopUpOutOfQuantity} onClose={handleClosePopUp}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: 3,
          minWidth: { xs: "300px", md: "350px" },
          mx: "auto",
          borderRadius: { xs: "16px", md: "20px" },
        }}
      >
        <Stack
          spacing={{ xs: "30px", md: "45px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            spacing={{ xs: "20px", md: "30px" }}
            width={"100%"}
            alignItems={"flex-end"}
          >
            <Stack justifyItems={"center"} spacing={"10px"}>
              <Typography
                fontSize={{ xs: "16px", md: "18px", lg: "18px" }}
                fontWeight={500}
                maxWidth={{ xs: "280px", md: "380px", lg: "480px" }}
                minWidth={{ md: "380px" }}
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Xin lỗi, các sản phẩm của đơn hàng đã không còn bán/ hết hàng
                nên không thể mua lại.
              </Typography>
            </Stack>
            <Button
              onClick={handleClosePopUp}
              variant="contained"
              sx={{
                padding: { xs: "8px", md: "8px 16px" },
                borderRadius: "24px",
                fontSize: "16px",
                fontWeight: 600,
                width: { xs: "50%", md: "30%" },
              }}
            >
              Đã hiểu
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Modal>
  );
};

export default PopUpOutOfQuantity;
