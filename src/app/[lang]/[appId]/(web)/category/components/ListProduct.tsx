"use client";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import { Grid, Pagination, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { IProductItems } from "../interfaces";
import { useGetCategoryById } from "../hooks/useGetNameCategory";
import useTranslation from "next-translate/useTranslation";
import { useGetProductByCategory } from "../hooks/useGetProductList";
import BreadCrumbs from "@/common/components/customComponent/BreadCrumbs";
import { PATH_HOME } from "@/common/constants/path.constants";
import { pageCategorySelector, setPageNumber } from "../category.slice";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import { setPopupLogin } from "../../layoutApp/components/header/header.slice";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import {
  setDefaultPointDetailProduct,
  setDefaultPriceDetailProduct,
} from "../../productDetail/slice";

type Props = {
  categoryId: number;
};

function ListProduct(props: Props) {
  const { categoryId } = props;
  const route = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const { mutate } = useAddToCart();
  const { logAddToCart } = useAnalytics();

  const { dataCategoryById } = useGetCategoryById(categoryId);

  const pageNumber = useSelector(pageCategorySelector);

  const searchParams = {
    page: pageNumber,
    limit: 20,
    categoryIds: [categoryId],
  };
  const { dataListProdByCategory, isLoadingListProdByCategory } =
    useGetProductByCategory(searchParams);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
  };
  const { accessToken } = useSelector((state) => state.authLogin);
  const isLoggedIn = accessToken !== "";
  const handleAddToCart = (product: any) => {
    if (isLoggedIn) {
      const itemNeedToAddCart = {
        productVariantList: [
          {
            productVariantId:
              product?.type === "SIMPLE" ||
              product?.type === "EXTERNAL_AFFILIATE"
                ? product?.productToVariants[0]?.productVariantId
                : product?.defaultProductVariantId,
            quantity: 1,
          },
        ],
        productId: product?.id,
      };
      mutate(itemNeedToAddCart, {
        onSuccess: () => {
          logAddToCart({
            currency: "VND",
            items: [
              {
                item_id: String(product?.id),
                item_name: String(product?.productDetails[0]?.name),
                price: product?.point?.normalPoint || 0,
                quantity: 1,
              },
            ],
            value: product?.point?.normalPoint
              ? product?.point?.normalPoint
              : 0,
          });
        },
      });
      return;
    }
    dispatch(setPopupLogin(true));
  };

  return (
    <Grid item md={9}>
      <Stack spacing={2}>
        <BreadCrumbs
          links={[
            { name: t("category.home"), href: "/" },
            { name: t("product.title"), href: PATH_HOME.product.root },
            {
              name:
                (dataCategoryById?.categoryDetails[0]?.name as string) || "",
            },
          ]}
        />

        <Grid
          container
          spacing={{ sm: 4, xs: 1 }}
          height={"100%"}
          width={"100% !important"}
        >
          {dataListProdByCategory?.items?.map(
            (itemProd: IProductItems, index: number) => {
              return (
                <Grid item xs={6} sm={4} key={index}>
                  <ProductItemDefault
                    title={itemProd?.productDetails[0]?.name}
                    srcImg={itemProd?.thumbnail?.url}
                    property={itemProd?.productDetails[0]?.shortDescription}
                    price={itemProd?.price?.normalPrice}
                    type={itemProd?.type}
                    productVariantType={
                      itemProd?.productToVariants[0]?.productVariant?.type
                    }
                    onClick={() => {
                      dispatch(setDefaultPriceDetailProduct(itemProd?.price));
                      dispatch(setDefaultPointDetailProduct(itemProd?.point));
                      route.push(PATH_HOME.product.detail(itemProd?.id));
                    }}
                    onClickAddToCart={() => handleAddToCart(itemProd)}
                    isOutOfStock={itemProd?.isOutOfStock}
                    isShowPriceAffiliate={
                      itemProd?.productToVariants[0]?.productVariant
                        ?.externalAffiliateInfo?.isShowPrice
                    }
                  />
                </Grid>
              );
            }
          )}
          <Pagination
            count={dataListProdByCategory?.meta?.totalPages}
            page={pageNumber}
            onChange={handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingY: "50px",
              width: "100%",
              "& .css-lxelle-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  bgcolor: "#7fc5b8 !important",
                },
            }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default ListProduct;
