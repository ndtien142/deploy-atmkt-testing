import { Stack, Box, Typography, IconButton, alpha } from "@mui/material";
import Image from "../Image";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import useShowSnackbar from "@/common/hooks/useMessage";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import useTranslation from "next-translate/useTranslation";
import { useTheme } from "@mui/material";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setPopupLogin } from "@/app/[lang]/[appId]/(web)/layoutApp/components/header/header.slice";
import { ProductType } from "@/common/constants/common.interfaces";

type Props = {
  title?: string;
  property?: string;
  srcImg?: string;
  price?: any;
  onClick?: VoidFunction;
  onClickAddToCart?: VoidFunction;
  point?: any;
  onSale?: boolean;
  type?: string;
  isOutOfStock?: boolean;
  productVariantType?: string;
  isShowPriceAffiliate?: boolean;
};

export const ProductItemDefault = (props: Props) => {
  const {
    title,
    property,
    srcImg,
    price,
    onClick,
    onSale,
    onClickAddToCart,
    point,
    type,
    isOutOfStock,
    productVariantType,
    isShowPriceAffiliate,
  } = props;
  const router = useRouter();
  const { t } = useTranslation("common");
  const theme = useTheme();
  const { accessToken } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isOutOfStock) {
      if (!accessToken) {
        dispatch(setPopupLogin(true));
      }
      onClickAddToCart?.();
    }
  };

  return (
    <Stack
      sx={{
        overflow: "hidden",
        height: { xs: "300px", sm: "450px" },
        width: "100%",
        justifyContent:
          type === "EXTERNAL_AFFILIATE" ? "unset" : "space-between",
        borderRadius: "24px",
        border: "1px solid #E1E2E6",
        boxShadow: "0px 14px 21px rgba(218, 218, 218, 0.15)",

        zIndex: 9999,

        ":hover": {
          cursor: "pointer",
          opacity: 0.7,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          // borderRadius: "24px",
          height: "70%",
          width: "100%",
          maxHeight: "252px",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        {isOutOfStock &&
          type !== ProductType.EXTERNAL_AFFILIATE &&
          type !== ProductType.SERVICE && (
            <Box
              sx={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                backgroundColor: alpha(theme.palette.primary.main, 0.6),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#FFFFFF" }}>
                {t("product.outOfStock")}
              </Typography>
            </Box>
          )}
      </Box>
      <Stack
        sx={{
          paddingBottom: { xs: "20px", sm: "27px" },
          pt: "2px",
          px: { xs: "16px", sm: "24px" },
          height: type === "EXTERNAL_AFFILIATE" ? "30%" : "unset",
        }}
        // width={"100%"}
      >
        <Stack py={"10px"} spacing={1} onClick={onClick}>
          <Typography
            fontSize={{ xs: 20, sm: 24 }}
            fontWeight={700}
            // lineHeight={"24px"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {title}
          </Typography>
          <Typography
            fontSize={18}
            color={"#98A1B3"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {property}
          </Typography>
          {(productVariantType !== "EVOUCHER" &&
            type !== "EXTERNAL_AFFILIATE") ||
          (type === "EXTERNAL_AFFILIATE" && isShowPriceAffiliate === true) ? (
            price?.normalPrice ? (
              <Stack display={"flex"} direction={"row"} spacing={1}>
                {onSale && (
                  <Typography
                    fontSize={{
                      xs: 12,
                      sm:
                        type === ProductType.SERVICE ||
                        type === ProductType.EXTERNAL_AFFILIATE
                          ? 18
                          : 14,
                    }}
                    color={
                      type === ProductType.SERVICE ||
                      type === ProductType.EXTERNAL_AFFILIATE
                        ? "primary.main"
                        : "#98A1B3"
                    }
                    fontWeight={700}
                    sx={{
                      maxWidth: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      // whiteSpace: "nowrap",
                    }}
                  >
                    {formatNumberToCurrency(price?.salePrice)}
                  </Typography>
                )}
                <Typography
                  fontSize={{
                    xs: 12,
                    sm:
                      type === ProductType.SERVICE ||
                      type === ProductType.EXTERNAL_AFFILIATE
                        ? 18
                        : 14,
                  }}
                  color={
                    type === ProductType.SERVICE ||
                    type === ProductType.EXTERNAL_AFFILIATE
                      ? "primary.main"
                      : "#98A1B3"
                  }
                  fontWeight={700}
                  sx={{
                    maxWidth: "100%",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    // whiteSpace: "nowrap",
                    textDecoration: onSale ? "line-through" : "none",
                  }}
                >
                  {formatNumberToCurrency(price?.normalPrice)}
                </Typography>
              </Stack>
            ) : (
              <Typography
                fontSize={{ xs: 12, sm: 14 }}
                color={"#98A1B3"}
                fontWeight={700}
                sx={{
                  maxWidth: "100%",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  // whiteSpace: "nowrap",
                }}
              >
                {formatNumberToCurrency(price?.range?.min)} -{" "}
                {formatNumberToCurrency(price?.range?.max)}
              </Typography>
            )
          ) : (
            <></>
          )}
        </Stack>

        {type !== ProductType.EXTERNAL_AFFILIATE &&
          type !== ProductType.SERVICE && (
            <Stack
              alignItems={"center"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              {point?.normalPoint > -1 ? (
                <Stack display={"flex"} direction={"row"} spacing={1}>
                  {onSale && (
                    <Typography
                      fontSize={{ xs: 12, sm: 18 }}
                      color={"primary.main"}
                      fontWeight={700}
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        // whiteSpace: "nowrap",
                        maxWidth: "70%",
                      }}
                    >
                      {formatNumberToCurrency(point?.salePoint)?.slice(0, -4)}{" "}
                      xu
                    </Typography>
                  )}
                  <Typography
                    fontSize={{ xs: 12, sm: 18 }}
                    color={"primary.main"}
                    fontWeight={700}
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      // whiteSpace: "nowrap",
                      maxWidth: "100%",
                      textDecoration: onSale ? "line-through" : "none",
                    }}
                  >
                    {formatNumberToCurrency(point?.normalPoint)?.slice(0, -4)}{" "}
                    xu
                  </Typography>
                </Stack>
              ) : (
                <Typography
                  fontSize={{ xs: 12, sm: 18 }}
                  color={"primary.main"}
                  fontWeight={700}
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    // whiteSpace: "nowrap",
                    maxWidth: "70%",
                  }}
                >
                  {formatNumberToCurrency(point?.range?.min)?.slice(0, -4)} -{" "}
                  {formatNumberToCurrency(point?.range?.max)?.slice(0, -4)} xu
                </Typography>
              )}

              {type !== ProductType.SERVICE && (
                <IconButton
                  sx={{
                    zIndex: 3,
                    // background: "linear-gradient(90deg, #66BA7A , #00A55D, primary.main)",
                    background: isOutOfStock
                      ? theme.palette.grey[500]
                      : theme.palette.primary.main,
                    cursor: isOutOfStock ? "default" : "pointer",
                    ":hover": {
                      background: isOutOfStock
                        ? theme.palette.grey[500]
                        : theme.palette.primary.dark,
                    },
                  }}
                  disableTouchRipple={isOutOfStock}
                  onClick={handleClick}
                  component="span"
                >
                  <Image
                    alt=""
                    sx={{
                      width: { xs: "24px", sm: "32px" },
                      height: { xs: "24px", sm: "32px" },
                    }}
                    src={"/assets/icons/core/add-to-cart.svg"}
                  />
                </IconButton>
              )}
            </Stack>
          )}
      </Stack>
    </Stack>
  );
};
