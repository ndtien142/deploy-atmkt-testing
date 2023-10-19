import Iconify from "@/common/components/Iconify";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { MOCK_COMBO_DATA_PRODUCT, MOCK_DATA_PRODUCT } from "../../constants";
import { ComboItemDefault } from "@/common/components/product/ComboItem";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { dispatch } from "@/common/redux/store";
import {
  setDataCategory,
  setFilterParam,
  setPageCategoryFilter,
} from "../../../category/category.slice";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";

type Props = {
  dataMenu: any;
};

export const ComboPopular = (props: Props) => {
  const { dataMenu } = props;
  const router = useRouter();
  const { logSelectContent } = useAnalytics();

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
        backgroundColor: "#D5F1DB",
        pt: "50px",
        pb: "100px",
      }}
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
              background: DEFAULT_MAIN_COLOR,
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
      <Stack spacing={"50px"} alignItems={"center"} width={"100%"}>
        <Grid
          container
          rowGap={4}
          columnGap={2}
          //   spacing={1}
          p={0}
          m={0}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"flex-start"}
          columns={17}
        >
          {dataMenu?.data?.products?.map(
            (item: any, index: any) =>
              index < 6 && (
                <Grid
                  item
                  key={index}
                  width={"100%"}
                  md={6.5}
                  sm={8}
                  lg={5.5}
                  xl={5.5}
                >
                  <ComboItemDefault
                    title={item?.productDetails[0]?.name}
                    srcImg={item?.thumbnail?.url}
                    property={item?.productDetails[0]?.shortDescription}
                    price={item?.price}
                    point={item?.point}
                    onSale={item?.onSale}
                    flashPrice={item?.price?.salePrice}
                    type={item?.type}
                    onClickAddToCart={() => handleAddToCart(item)}
                    onClick={() =>
                      router.push(PATH_HOME.product.detail(item?.id))
                    }
                  />
                </Grid>
              )
          )}
        </Grid>
        <Button
          component="span"
          variant="contained"
          sx={{
            // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            background: DEFAULT_MAIN_COLOR,
            borderRadius: "60px",
            width: "fit-content",
            padding: "16px 24px 16px 24px",
            minHeight: "56px",
            textTransform: "none",
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
          onClick={() => {
            dispatch(setPageCategoryFilter(1));
            router.push(PATH_HOME.product.root);
            logSelectContent({
              content_type: `${dataMenu?.type}`,
              item_id: `${dataMenu?.title}`,
            });
            dispatch(
              setFilterParam({ categoryId: [dataMenu?.data?.categoryId] })
            );
          }}
        >
          Xem tất cả
        </Button>
      </Stack>
    </Stack>
  );
};
