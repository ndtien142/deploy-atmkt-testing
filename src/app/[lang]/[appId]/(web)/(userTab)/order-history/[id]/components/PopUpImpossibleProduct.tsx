import React from "react";
import { useTheme } from "@mui/material/styles";
import { Modal, Card, Typography, Stack, Button } from "@mui/material";
import { dispatch, useSelector } from "@/common/redux/store";
import { setIsOpenPopUpImpossibleProduct } from "../../common/slice";
import ReOrderList from "./ReOrderList";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useAddCartFromOrder } from "../../hooks/useAddCartFromOrder";

const PopUpImpossibleProduct = () => {
  const router = useRouter();
  const theme = useTheme();
  const { isOpenPopUpImpossibleProduct, orderId } = useSelector(
    (state) => state.orderHistory
  );
  const { mutate: addToCartFromOrder } = useAddCartFromOrder();

  const handleClosePopUp = () => {
    dispatch(setIsOpenPopUpImpossibleProduct(false));
  };

  const handleReOrder = () => {
    addToCartFromOrder({ orderId });
    router.push(PATH_HOME.checkout);
  };

  return (
    <Modal open={isOpenPopUpImpossibleProduct} onClose={handleClosePopUp}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          minWidth: { xs: "320px", md: "500px", lg: "600px" },
          mx: "auto",
          borderRadius: { xs: "16px", md: "20px" },
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={2} width={"100%"}>
            <Stack
              justifyItems={"flex-start"}
              spacing={"10px"}
              paddingX={3}
              pt={3}
            >
              <Typography
                fontSize={{ xs: "16px", md: "18px", lg: "18px" }}
                fontWeight={600}
                color={theme.palette.primary.main}
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
                Thêm vào giỏ hàng
              </Typography>
            </Stack>
            <ReOrderList orderId={orderId} />
            <Stack
              width={"100%"}
              spacing={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              paddingX={3}
              pb={3}
            >
              <Button
                onClick={handleClosePopUp}
                variant="text"
                sx={{
                  padding: { xs: "8px 16px" },
                  borderRadius: "60px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Trở lại
              </Button>
              <Button
                onClick={handleReOrder}
                variant="contained"
                sx={{
                  padding: { xs: "8px 16px" },
                  borderRadius: "24px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Đã hiểu
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Modal>
  );
};

export default PopUpImpossibleProduct;
