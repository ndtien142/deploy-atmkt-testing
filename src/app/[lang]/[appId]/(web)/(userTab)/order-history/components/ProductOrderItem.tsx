import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "@/common/components/Image";
import Iconify from "@/common/components/Iconify";
import { IOrderLineItemReqDto } from "../common/interface";
import { useRouter } from "next/navigation";
import { fFormatCoin } from "@/common/utils/formatNumber";

type Props = {
  product: IOrderLineItemReqDto;
  quantity: number;
  total: number;
  paymentType: string;
};

export const ProductOrderItem = ({
  product,
  quantity,
  total,
  paymentType,
}: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack
      direction={matches ? "row" : "column"}
      width="100%"
      sx={{ paddingY: "15px!important", cursor: "pointer" }}
      spacing={matches ? 0 : 3}
    >
      <Stack
        direction="row"
        width={matches ? "70%" : "100%"}
        justifyContent={"flex-start"}
      >
        {product?.product?.thumbnail?.url ? (
          <Image
            src={product?.product?.thumbnail?.url}
            alt="Order Item Image"
            sx={{
              width: "100px",
              height: "100px",
              marginRight: 3,
              borderRadius: "16px",
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
        <Stack spacing={0.5} width={"100%"} minHeight={"100%"}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            {product?.product?.productDetails[0]?.name}
          </Typography>
          <Stack
            direction="row"
            alignItems="flex-start"
            marginBottom={"10px!important"}
          >
            {product?.product?.attributeAndTerm?.map((item, index) => (
              <>
                <Typography variant="body2" key={index}>
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {item?.name}:&nbsp;
                  </Box>
                  {item?.term[0]?.value}
                </Typography>
                {index !== product?.product?.attributeAndTerm?.length - 1 && (
                  <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} />
                )}
              </>
            ))}
          </Stack>
          <Box
            sx={{
              width: 96,
              textAlign: "right",
              justifySelf: "flex-end",
              color: "rgba(145, 158, 171, 0.8)",
            }}
          >
            <IncrementerStyle>
              <IconButton size="small" color="inherit" disabled={true}>
                <Iconify icon={"eva:minus-fill"} width={16} height={16} />
              </IconButton>
              {quantity}
              <IconButton size="small" color="inherit" disabled={true}>
                <Iconify icon={"eva:plus-fill"} width={16} height={16} />
              </IconButton>
            </IncrementerStyle>
          </Box>
        </Stack>
      </Stack>
      <Stack
        width={matches ? "30%" : "100%"}
        minHeight="100%"
        alignItems={matches ? "flex-end" : "center"}
        justifyContent={"center"}
      >
        <Typography sx={{ fontSize: "16px", fontWwight: 600 }}>
          {paymentType === "COD"
            ? `${fFormatCoin(total)} VNĐ`
            : `${fFormatCoin(total)} xu`}
        </Typography>
      </Stack>
    </Stack>
  );
};

const IncrementerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: "24px",
  border: `solid 1px rgba(145, 158, 171, 0.32)`,
}));
