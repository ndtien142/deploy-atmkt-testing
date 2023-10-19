import Image from "@/common/components/Image";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetOrderStatus } from "../../hooks/useGetOrderStatus";
import { useGetDetailOrder } from "../../hooks/useGetDetailOrder";
import { useTheme } from "@mui/material";

const ReOrderList = ({ orderId }: { orderId: number }) => {
  const { data: orderStatus } = useGetOrderStatus({ orderId });
  const { orderDetail } = useGetDetailOrder(orderId);
  const theme = useTheme();
  return (
    <Stack
      spacing={2}
      padding={3}
      width={"100%"}
      height={{ xs: "250px", md: "300px", lg: "400px" }}
      overflow={"auto"}
      bgcolor={"rgba(250,250,250)"}
    >
      {orderDetail?.orderLineItemReqDto?.map((order, index) => {
        const isDisable = orderStatus?.impossibleProducts?.some(
          (orderStatus) => {
            return orderStatus?.id === order?.product?.id;
          }
        );
        return (
          <Stack
            key={`${order?.product?.productToVariants?.id} + ${index}`}
            spacing={1}
            width={"100%"}
          >
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"flex-start"}
              spacing={1}
              alignItems={"center"}
              bgcolor={isDisable ? "rgba(250,250,250)" : ""}
              position={"relative"}
            >
              <Box overflow={"hidden"} position={"relative"}>
                {order?.product?.thumbnail?.url ? (
                  <Image
                    src={order?.product?.thumbnail?.url}
                    alt="Order Item Image"
                    sx={{
                      width: "100px",
                      height: "100px",
                      marginRight: 3,
                      // borderRadius: "16px",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      marginRight: 3,
                      borderRadius: "16px",
                      backgroundColor: "gray",
                    }}
                  ></Box>
                )}
                {isDisable && (
                  <Box
                    width={"100%"}
                    height={"100%"}
                    bgcolor={"rgba(0,0,0,0.4)"}
                    position={"absolute"}
                    // borderRadius={"16px"}
                    top={0}
                    left={0}
                    zIndex={999}
                  ></Box>
                )}
              </Box>
              <Stack spacing={0.5} width={"100%"} minHeight={"100%"}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    color: isDisable
                      ? theme.palette.text.disabled
                      : theme.palette.text.primary,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {order?.product?.productDetails[0]?.name}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: isDisable
                    ? theme.palette.text.disabled
                    : theme.palette.text.primary,
                }}
              >
                1
              </Typography>
              {isDisable ? (
                <Chip
                  label={"xoá"}
                  sx={{
                    color: theme.palette.text.disabled,
                    fontWeight: 600,
                    top: 0,
                    right: 0,
                    position: "absolute",
                  }}
                />
              ) : (
                <></>
              )}
            </Stack>
            {index !== order?.product?.attributeAndTerm?.length - 1 && (
              <Divider orientation="horizontal" sx={{ mx: 1, height: 16 }} />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ReOrderList;
