import Iconify from "@/common/components/Iconify";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { MOCK_DATA_PRODUCT } from "../../constants";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import { dispatch } from "@/common/redux/store";
import { setFilterParam } from "../../../category/category.slice";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { ReviewsItem } from "./ItemReview";

type Props = {
  dataMenu: any;
};

export const ReviewsSection = (props: Props) => {
  const { dataMenu } = props;
  const router = useRouter();
  const theme = useTheme();
  const { mutate } = useAddToCart();
  const handleAddToCart = (product: any) => {
    const dataAddToCart = {
      productVariantList: [
        {
          productVariantId:
            product?.type === "SIMPLE" || product?.type === "EXTERNAL_AFFILIATE"
              ? product?.productToVariants[0]?.productVariantId
              : product?.defaultProductVariantId,
          quantity: 1,
        },
      ],
      productId: product?.id,
    };
    mutate(dataAddToCart);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" },
        justifyContent: "space-between",
        // border: "1px solid black",
      }}
      width={"100%"}
      spacing={"50px"}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        width={"100%"}
        // sx={{ border: "1px solid black" }}
      >
        <Stack direction={"row"} spacing={"17px"}>
          <Box
            sx={{
              // height: "100%",
              minWidth: "21px",
              borderRadius: "4px",
              // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
              background: theme.palette.primary.main,
            }}
          />

          <Typography
            sx={{
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: 700,
            }}
          >
            {dataMenu?.title}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        spacing={"80px"}
        alignItems={"center"}
        width={"100%"}
        marginTop={"100px!important"}
      >
        <Grid
          container
          rowGap={3}
          columnGap={0}
          p={0}
          m={0}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          justifyItems={"center"}
          columns={16}
          width={"100%"}
        >
          {dataMenu?.data?.reviews?.map((item: any, index: number) => (
            <Grid item key={index} md={9} sm={12} lg={6} xl={4}>
              <ReviewsItem
                srcImg={item?.image}
                content={item?.content}
                name={item?.reviewerName}
                position={item?.reviewerPosition}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
