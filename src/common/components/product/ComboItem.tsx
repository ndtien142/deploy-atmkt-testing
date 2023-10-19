import { Stack, Box, Typography, IconButton, Chip } from "@mui/material";
import Image from "../Image";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";

type Props = {
  title?: string;
  property?: string;
  srcImg?: string;
  price?: any;
  flashPrice?: number;
  onClick?: VoidFunction;
  onClickAddToCart?: VoidFunction;
  point?: any;
  onSale?: boolean;
  type?: string;
};

export const ComboItemDefault = (props: Props) => {
  const {
    title,
    property,
    srcImg,
    price,
    onSale,
    point,
    flashPrice,
    type,
    onClick,
    onClickAddToCart,
  } = props;
  const router = useRouter();

  return (
    <Stack
      sx={{
        height: "500px",
        width: "100%",
        justifyContent: "space-between",
        borderRadius: "24px",
        border: "1px solid #E1E2E6",
        backgroundColor: "white",
        boxShadow: "0px 14px 21px rgba(218, 218, 218, 0.15)",
        ":hover": {
          cursor: "pointer",
          opacity: 0.7,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: "24px",
          height: "60%",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          backgroundColor: "white",
          justifyContent: "flex-end",
          p: "20px",
        }}
        onClick={onClick}
      >
        {/* <Chip
          label={ "-" + ((price as number -( flashPrice as number))/(price as number)* 100)?.toFixed(0) + "%"}
          sx={{
            borderRadius: '4px',
            backgroundColor: "#2DB703",
            padding: '17px 20px',
            color: 'white',
          }}
        /> */}
      </Box>
      <Stack
        sx={{
          paddingBottom: "27px",
          px: "24px",
          height: "30%",
        }}
        width={"100%"}
      >
        <Stack onClick={onClick}>
          <Typography
            fontSize={24}
            fontWeight={700}
            lineHeight={"24px"}
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
          {type !== "EXTERNAL_AFFILIATE" &&
            (price?.normalPrice ? (
              <Stack display={"flex"} direction={"row"} spacing={1}>
                {onSale && (
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
                    {formatNumberToCurrency(price?.salePrice)}
                  </Typography>
                )}
                <Typography
                  fontSize={{ xs: 12, sm: 14 }}
                  color={"#98A1B3"}
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
            ))}
        </Stack>

        {type !== "EXTERNAL_AFFILIATE" && (
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
                    color={"#1F8A70"}
                    fontWeight={700}
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      // whiteSpace: "nowrap",
                      maxWidth: "70%",
                    }}
                  >
                    {formatNumberToCurrency(point?.salePoint)?.slice(0, -4)} xu
                  </Typography>
                )}
                <Typography
                  fontSize={{ xs: 12, sm: 18 }}
                  color={"#1F8A70"}
                  fontWeight={700}
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    // whiteSpace: "nowrap",
                    maxWidth: "100%",
                    textDecoration: onSale ? "line-through" : "none",
                  }}
                >
                  {formatNumberToCurrency(point?.normalPoint)?.slice(0, -4)} xu
                </Typography>
              </Stack>
            ) : (
              <Typography
                fontSize={{ xs: 12, sm: 18 }}
                color={"#1F8A70"}
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

            <IconButton
              sx={{
                zIndex: 3,
                // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
                background: DEFAULT_MAIN_COLOR,

                ":hover": {
                  background: "black",
                },
              }}
              onClick={onClickAddToCart}
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
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
