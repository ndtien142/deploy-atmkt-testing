import {
  Stack,
  Box,
  styled,
  Typography,
  Link,
  Grid,
  alpha,
  IconButton,
  useTheme,
  Divider,
  Button,
  Card,
  Tab,
  Tooltip,
} from "@mui/material";
import Slider from "react-slick";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { FILTER_COLOR_OPTIONS, THUMB_SIZE, images } from "../../constants";
import { useRef, useState, useEffect } from "react";
import Image from "@/common/components/Image";
import ColorSinglePicker from "@/common/components/hook-form/ColorSinglePicker";
import { Controller, useForm } from "react-hook-form";
import { FormProvider, RHFSelect } from "@/common/components/hook-form";
import Iconify from "@/common/components/Iconify";
import { STATUS } from "../../../category/constants";
import { ItemDelivery } from "./components/ItemDelivery";
import { useParams } from "next/navigation";
import useTranslation from "next-translate/useTranslation";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import { dispatch, useSelector } from "@/common/redux/store";
import {
  setIsAddingCart,
  setQuantityCurrent,
  setVariantIdSelect,
  setAttributeSelected,
  removeAttributeSelected,
  setProdVariantSelected,
  resetAttributeSelected,
  setListAvailableTermId,
} from "../../slice";
import IncrementerButton from "./components/IncrementerButton";
import {
  IProductToVariants,
  IProductVariants,
  ProductType,
} from "../../interface";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import {
  findPossibleNextTerms,
  findUnusedAttributes,
  getAttributeTermsByAttributeId,
  isAttributeTermsConnectable,
  uniqueTermIds,
} from "../../utils";

const RootStyle = styled("div")(({ theme }) => ({
  "& .slick-slide": {
    float: theme.direction === "rtl" ? "right" : "left",
    "&:focus": { outline: "none" },
  },
}));
const ArrowStyle = styled(IconButton)(({ theme }) => ({
  padding: 6,
  opacity: 0.48,
  color: theme.palette.common.white,
  "&:hover": { opacity: 1 },
}));

type Props = {
  dataItem: any;
};

export const VariantProduct = (props: Props) => {
  const { dataItem } = props;
  const params = useParams();
  const theme = useTheme();
  const { t } = useTranslation("common");
  const { logAddToCart } = useAnalytics();

  const {
    isAddingCart,
    quantityCurrent,
    variantIdSelect,
    attributeSelected,
    productVariantSelected,
    availableTermId,
  } = useSelector((state) => state.productDetail);
  const { mutate, isLoading } = useAddToCart();

  const isRTL = theme.direction === "rtl";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider>();
  const [value, setValues] = useState("1");

  const [nav2, setNav2] = useState<Slider>();

  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);
  const methods = useForm({
    defaultValues: {
      colors: [],
      color: "",
      quantity: 1,
    },
  });

  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);
  useEffect(() => {
    return () => {
      dispatch(resetAttributeSelected());

      dispatch(setProdVariantSelected(null));
      setCurrentIndex(-1);
    };
  }, []);
  const imageList = dataItem?.productVariants?.map(
    (itemImage: IProductToVariants) => {
      return itemImage?.productVariant.images[0];
    }
  );
  const settings1 = {
    speed: 320,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };
  useEffect(() => {
    imageList?.map((itemImage: any, index: number) => {
      if (
        productVariantSelected?.productVariant?.images[0]?.url ===
        itemImage?.url
      ) {
        setCurrentIndex(index);
        if (slider1.current) {
          setNav1(slider1.current);
        }
        if (slider2.current) {
          setNav2(slider2.current);
        }
      }
    });
  }, [productVariantSelected]);
  const settings2 = {
    speed: 320,
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: "0px",
    slidesToShow: imageList?.length > 3 ? 3 : imageList?.length,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
  };
  const handlePrevious = () => {
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider2.current?.slickNext();
  };

  const onSubmit = async (data: any) => {
    dispatch(setQuantityCurrent(data?.quantity));
    // dispatch(setVariantIdSelect(dataItem?.defaultProductVariantId));
    dispatch(setIsAddingCart(true));
  };

  const checkContainInSelected = (attributeId: number, termId: number) => {
    return (
      attributeSelected.findIndex(
        (item: any) =>
          item.attributeId === attributeId && item.termId === termId
      ) > -1
    );
  };

  const handleChangeAttributeValue = (attributeId: number, termId: number) => {
    if (checkContainInSelected(attributeId, termId)) {
      dispatch(
        removeAttributeSelected({
          attributeId: attributeId,
          termId: termId,
        })
      );
      dispatch(setProdVariantSelected(null));
      setCurrentIndex(-1);
    } else {
      dispatch(
        setAttributeSelected({
          attributeId: attributeId,
          termId: termId,
        })
      );
    }
  };
  useEffect(() => {
    const transData: number[] = [];
    const invalidTerms: number[] = [];
    const listUniqueTerms: number[] = [];
    const possibleNextTerms: number[] = [];
    dataItem?.productVariants?.forEach((item: IProductToVariants) => {
      let flag = false;
      item?.productVariant?.productAttributeTerms?.forEach(
        (attribute, index) => {
          if (
            attributeSelected?.some(
              (selectedItem: { termId: number; attributeId: number }) => {
                return (
                  selectedItem?.termId ===
                  attribute?.productAttributeTermDetails[0]?.id
                );
              }
            )
          )
            flag = true;
        }
      );
      if (flag) {
        item?.productVariant?.productAttributeTerms?.forEach((attribute) => {
          transData.push(attribute?.productAttributeTermDetails[0]?.id);
        });
      }
    });
    const existingTerms: number[] = attributeSelected?.map(
      (item) => item.termId
    );

    if (dataItem) {
      listUniqueTerms.push(...uniqueTermIds(dataItem.variantIdDetail));
      const listPossibleNextTerms = findPossibleNextTerms(
        existingTerms,
        dataItem.variantIdDetail
      );
      possibleNextTerms.push(...(listPossibleNextTerms as unknown as number[]));
      const unusedAttributes = findUnusedAttributes(
        dataItem.variantIdDetail,
        existingTerms
      );
      const nonConnectableAttributes = unusedAttributes.filter(
        (attributeId) =>
          !isAttributeTermsConnectable(
            attributeId,
            existingTerms,
            dataItem.variantIdDetail
          )
      );
      for (const attributeId of nonConnectableAttributes) {
        const listInvalidTerms: number[] = getAttributeTermsByAttributeId(
          dataItem.variantIdDetail,
          attributeId
        );
        listInvalidTerms.forEach((item) => {
          dispatch(
            removeAttributeSelected({ attributeId: attributeId, termId: item })
          );
        });
        invalidTerms.push(...listInvalidTerms);
      }
    }

    const possibleTerms = transData.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    dispatch(
      setListAvailableTermId([
        ...possibleTerms.filter((item) => !invalidTerms.includes(item)),
        ...listUniqueTerms,
        ...possibleNextTerms,
      ])
    );
  }, [attributeSelected]);

  useEffect(() => {
    if (isAddingCart) {
      mutate(
        {
          productId: dataItem?.id,
          productVariantList: [
            {
              productVariantId:
                productVariantSelected?.productVariantId as number,
              quantity: quantityCurrent,
            },
          ],
        },
        {
          onSuccess: () => {
            logAddToCart({
              currency: "VND",
              items: [
                {
                  item_id: String(dataItem?.id),
                  item_name: String(dataItem?.productDetails[0]?.name),
                  price: dataItem?.point?.normalPoint || 0,
                  quantity: quantityCurrent,
                },
              ],
              value: dataItem?.point?.normalPoint
                ? dataItem?.point?.normalPoint
                : 0,
            });
          },
        }
      );
      setTimeout(() => {
        dispatch(setQuantityCurrent(0));
        dispatch(setVariantIdSelect(0));
        dispatch(setIsAddingCart(false));
      }, 1500);
    }
  }, [isAddingCart]);

  return (
    <Grid
      container
      height={"100%"}
      sx={{
        gap: { md: "50px", xs: 0 },
      }}
    >
      <Grid item xs={12} md={5.5} lg={5}>
        <RootStyle>
          <Box sx={{ p: 1 }}>
            <Box
              sx={{
                zIndex: 0,
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Slider {...settings1} asNavFor={nav2} ref={slider1}>
                {imageList?.map((img: any) => {
                  return (
                    <Box key={img}>
                      <Image
                        key={img?.key}
                        alt="large image"
                        src={
                          productVariantSelected
                            ? imageList[currentIndex]?.url
                            : !productVariantSelected && currentIndex === -1
                            ? dataItem?.thumbnail?.url
                            : imageList[currentIndex]?.url
                        }
                        ratio="1/1"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </Box>
          <Stack display={"flex"} direction={"row"}>
            <ArrowStyle
              sx={{
                position: "relative",
                left: 0,
                display: { xs: "none", sm: "block" },
              }}
              size="small"
              onClick={handlePrevious}
            >
              {leftIcon(isRTL)}
            </ArrowStyle>
            <Box
              sx={{
                mx: "auto",
                "& .slick-current .isActive": { opacity: 1 },
                ...(imageList?.length === 1 && {
                  maxWidth: THUMB_SIZE * 1 + 16,
                }),
                ...(imageList?.length === 2 && {
                  maxWidth: THUMB_SIZE * 2 + 32,
                }),
                ...(imageList?.length === 3 && {
                  maxWidth: THUMB_SIZE * 3 + 48,
                }),
                ...(imageList?.length === 4 && {
                  maxWidth: THUMB_SIZE * 3 + 48,
                }),
                ...(imageList?.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
                ...(imageList?.length > 2 && {
                  position: "relative",
                  "&:before, &:after": {
                    top: 0,
                    zIndex: 9,
                    content: "''",
                    height: "100%",
                    position: "absolute",
                    width: (THUMB_SIZE * 2) / 3,
                    backgroundImage: (theme) =>
                      `linear-gradient(to left, ${alpha(
                        theme.palette.background.paper,
                        0
                      )} 0%, ${theme.palette.background.paper} 100%)`,
                  },
                  "&:after": { right: 0, transform: "scaleX(-1)" },
                  overflow: "hidden",
                }),
              }}
            >
              <Slider {...settings2} asNavFor={nav1} ref={slider2}>
                {imageList?.map((img: any, index: number) => {
                  return (
                    <Box key={img} sx={{ px: 0.75 }}>
                      <Image
                        disabledEffect
                        alt="thumb image"
                        src={img?.url}
                        style={{
                          objectFit: "fill",
                        }}
                        sx={{
                          width: THUMB_SIZE,
                          height: THUMB_SIZE,
                          borderRadius: 1.5,
                          cursor: "pointer",
                          ...(currentIndex === index && {
                            border: (theme) =>
                              `solid 3px ${theme.palette.primary.main}`,
                          }),
                        }}
                      />
                    </Box>
                  );
                })}
              </Slider>
            </Box>
            <ArrowStyle
              sx={{
                position: "relative",
                right: 0,
                display: { xs: "none", sm: "block" },
              }}
              size="small"
              onClick={handleNext}
            >
              {rightIcon(isRTL)}
            </ArrowStyle>
          </Stack>
        </RootStyle>
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} mt={2}>
            <Typography
              sx={{
                width: "81px",
                fontSize: "12px",
                borderRadius: "6px",
                textAlign: "center",
                fontWeight: 400,
                color: "#B72136",
                backgroundColor: "#ff484229",
              }}
            >
              Khuyến mãi
            </Typography>
            <Stack>
              <Typography variant="h3">
                {dataItem?.productDetails?.name}
              </Typography>
              <Typography variant="h4" sx={{ color: "#98A1B3" }}>
                {dataItem?.productDetails?.shortDescription}
              </Typography>
            </Stack>
            {(!productVariantSelected?.productVariant?.externalAffiliateInfo ||
              (productVariantSelected?.productVariant?.externalAffiliateInfo &&
                productVariantSelected?.productVariant?.externalAffiliateInfo
                  ?.isShowPrice)) &&
            productVariantSelected?.productVariant?.type !== "EVOUCHER" &&
            productVariantSelected !== null ? (
              <Stack
                display={"flex"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h4">
                  {formatNumberToCurrency(
                    productVariantSelected?.productVariant?.salePrice &&
                      dataItem?.onSale
                      ? productVariantSelected?.productVariant?.salePrice
                      : productVariantSelected?.productVariant?.price
                  )}
                </Typography>
                {dataItem?.onSale && (
                  <Typography
                    variant="h5"
                    sx={{ color: "#98A1B3", textDecoration: "line-through" }}
                  >
                    {formatNumberToCurrency(
                      productVariantSelected?.productVariant?.price
                    )}
                  </Typography>
                )}
              </Stack>
            ) : (
              <Typography />
            )}

            {productVariantSelected?.productVariant?.type !==
              "EXTERNAL_AFFILIATE" &&
            productVariantSelected?.productVariant?.type !== "SERVICE" &&
            productVariantSelected !== null ? (
              <>
                <Stack
                  display={"flex"}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h3">
                    {productVariantSelected?.productVariant?.productVariantPoint
                      ?.salePoint && dataItem?.onSale
                      ? productVariantSelected?.productVariant
                          ?.productVariantPoint?.salePoint
                      : productVariantSelected?.productVariant
                          ?.productVariantPoint?.point}{" "}
                    xu
                  </Typography>
                  {dataItem?.onSale && (
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#98A1B3",
                        textDecoration: "line-through",
                      }}
                    >
                      {
                        productVariantSelected?.productVariant
                          ?.productVariantPoint?.point
                      }{" "}
                      xu
                    </Typography>
                  )}
                </Stack>
                <Divider />
              </>
            ) : (
              <>
                <Typography />
                <Divider />
              </>
            )}

            {dataItem?.attributeAndTerm?.map((item: any, index: number) => (
              <Stack
                display={"flex"}
                direction={"row"}
                justifyContent={"space-between"}
                key={index}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#666E80", width: "30%" }}
                >
                  {item?.name}
                </Typography>
                {/* <Controller
                  name="color"
                  control={control}
                  render={({ field }) => (
                    <ColorSinglePicker
                      colors={FILTER_COLOR_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      sx={{
                        ...(FILTER_COLOR_OPTIONS.length > 4 && {
                          maxWidth: 144,
                          justifyContent: "flex-end",
                        }),
                      }}
                    />
                  )}
                /> */}
                <Stack direction="row" width="70%" flexWrap={"wrap"} gap={1}>
                  {item?.term?.map((term: any, termIndex: number) => {
                    let isDisable =
                      !availableTermId?.includes(term?.id) &&
                      availableTermId?.length > 0;
                    return (
                      <Button
                        key={termIndex}
                        disabled={isDisable}
                        sx={{
                          cursor: isDisable ? "no-drop" : "pointer",
                          paddingX: 2,
                          paddingY: 1,
                          background: checkContainInSelected(item?.id, term?.id)
                            ? theme.palette.primary.main
                            : "#f3f3f3",
                          borderRadius: 20,
                          minWidth: 100,
                          textAlign: "center",
                          color: checkContainInSelected(item?.id, term?.id)
                            ? "#FFFFFF"
                            : "#000000",
                          "&.Mui-disabled": {
                            pointerEvents: "all",
                            cursor: "no-drop!important",
                          },
                        }}
                        onClick={() =>
                          handleChangeAttributeValue(item.id, term.id)
                        }
                      >
                        {term?.value}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            ))}
            <Stack
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {dataItem?.type === ProductType.EXTERNAL_AFFILIATE ||
              dataItem?.type === ProductType.SERVICE ? (
                <Tooltip
                  title={
                    dataItem?.type === ProductType.SERVICE
                      ? `${dataItem?.productVariants[0]?.productVariant?.serviceInfo?.hotline}`
                      : `${dataItem?.productVariants[0]?.productVariant?.externalAffiliateInfo?.link}`
                  }
                >
                  <Button
                    endIcon={
                      <Iconify
                        icon={"formkit:arrowright"}
                        width={24}
                        height={24}
                      />
                    }
                    variant="contained"
                    sx={{
                      width: "60%",
                      borderRadius: "30px",
                      fontSize: { xs: "12px", sm: "18px" },
                    }}
                    type={"button"}
                    onClick={() => {
                      if (dataItem?.type === ProductType.SERVICE) {
                        window.location.href = `tel:${dataItem?.productVariants[0]?.productVariant?.serviceInfo?.hotline}`;
                      } else if (
                        dataItem?.type === ProductType.EXTERNAL_AFFILIATE &&
                        productVariantSelected?.productVariant
                          ?.externalAffiliateInfo?.link
                      ) {
                        window.open(
                          productVariantSelected?.productVariant
                            ?.externalAffiliateInfo?.link
                        );
                      }
                    }}
                  >
                    {dataItem?.type === ProductType.EXTERNAL_AFFILIATE
                      ? productVariantSelected?.productVariant
                          ?.externalAffiliateInfo?.buttonText || "Tìm hiểu thêm"
                      : t("Liên hệ")}
                  </Button>
                </Tooltip>
              ) : (
                <Stack
                  justifyContent={"center"}
                  alignItems={"baseline"}
                  width={"100%"}
                  direction={"row"}
                >
                  <Stack width={"50%"} spacing={1} alignItems={"center"}>
                    <IncrementerButton
                      name="quantity"
                      quantity={watch().quantity}
                      available={
                        productVariantSelected?.productVariant?.quantity || 0
                      }
                      onIncrementQuantity={() =>
                        setValue("quantity", watch().quantity + 1)
                      }
                      onDecrementQuantity={() =>
                        setValue("quantity", watch().quantity - 1)
                      }
                    />
                    {productVariantSelected?.productVariant?.quantity !==
                    undefined ? (
                      <Typography
                        sx={{
                          margin: "0px",
                          lineHeight: 1.5,
                          fontSize: "0.75rem",
                          fontƯeight: 400,
                          textAlign: "left",
                        }}
                      >
                        {productVariantSelected?.productVariant?.quantity || 0}{" "}
                        sản phẩm có sẵn
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Stack>
                  <Button
                    variant="contained"
                    disabled={
                      isAddingCart ||
                      productVariantSelected?.productVariant?.quantity === 0
                    }
                    endIcon={
                      <Iconify
                        icon={"formkit:arrowright"}
                        width={24}
                        height={24}
                      />
                    }
                    sx={{
                      width: "60%",
                      borderRadius: "30px",
                      fontSize: { xs: "12px", sm: "18px" },
                    }}
                    type={"submit"}
                  >
                    {t("product.addToCart")}
                  </Button>
                </Stack>
              )}
            </Stack>
            {/* <Stack
              border={"1px solid #E4E4E4"}
              spacing={1}
              p={2}
              borderRadius={1}
            >
              <ItemDelivery
                title="Giao hàng miễn phí"
                description="Enter your Postal code for Delivery Availability"
                srcImg="/Frame.svg"
              />
              <Divider />
              <ItemDelivery
                title="Giao hàng miễn phí"
                description="Enter your Postal code for Delivery Availability"
                srcImg="/Frame.svg"
              />
            </Stack> */}
          </Stack>
        </FormProvider>
      </Grid>
    </Grid>
  );
};

const leftIcon = (isRTL?: boolean) => (
  <Iconify
    icon={"iconamoon:arrow-right-2"}
    sx={{
      width: 30,
      height: 30,
      color: "black",

      transform: " scaleX(-1)",
      ...(isRTL && { transform: " scaleX(1)" }),
    }}
  />
);

const rightIcon = (isRTL?: boolean) => (
  <Iconify
    icon={"iconamoon:arrow-right-2"}
    sx={{
      width: 30,
      height: 30,
      color: "black",
      ...(isRTL && { transform: " scaleX(-1)" }),
    }}
  />
);
