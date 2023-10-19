"use client";
import Iconify from "@/common/components/Iconify";
import {
  FormProvider,
  RHFMultiCheckbox,
  RHFSelect,
  RHFSlider,
} from "@/common/components/hook-form";
import { InputRange } from "@/common/components/hook-form/InputRange";
import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { GENDER_OPTION, SHIPPING, SORT_POINT, STATUS } from "../constants";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useCategoryFilter } from "../hooks/useCategoryFilter";
import {
  setDataCategory,
  setFilterParam,
  setHasMore,
  setPageCategoryFilter,
} from "../category.slice";
import { dispatch, useSelector } from "@/common/redux/store";
import _ from "lodash";

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(false);
  const [triggerRender, setTriggerRender] = useState(false);
  const { t } = useTranslation("common");
  const { pageCategoryFilter, hasMore, dataCategory, filterParam } =
    useSelector((state) => state?.categoryRoot);

  const methods = useForm({
    defaultValues: {
      priceRange: [undefined, undefined],
      category: filterParam?.categoryId[0] ? [filterParam?.categoryId[0]] : [],
      sort: "",
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

  const marksLabel = [...Array(51)].map((_, index) => {
    const value = index * 10;
    const firstValue = `${value}`;

    return {
      value,
      label: index % 10 ? "" : firstValue,
    };
  });

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const { dataCategoryFilter, isLoading, refetch, isRefetching, isSuccess } =
    useCategoryFilter({ page: pageCategoryFilter, limit: 5 });

  const formatData = dataCategoryFilter?.items?.map((item) => {
    return {
      label: item?.categoryDetails[0]?.name,
      value: item?.id,
    };
  });

  useEffect(() => {
    if (isSuccess) {
      if (dataCategory && formatData) {
        // if (pageCategoryFilter === 1) {
        // dispatch(setDataCategory(formatData));
        // } else {
        let newData: { value: number; label: string }[] = [...formatData];
        dataCategory.map((format) => {
          newData = newData.filter((item) => item.value !== format.value);
        });

        dispatch(setDataCategory([...dataCategory, ...newData]));
        // }
      }
      dispatch(
        setHasMore(
          dataCategoryFilter?.meta?.totalPages !==
            dataCategoryFilter?.meta?.currentPage
        )
      );
    }
  }, [isSuccess]);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const onSubmit = async (data: any) => {};

  useEffect(() => {
    dispatch(setFilterParam({ categoryId: watch("category") }));
  }, [watch("category")]);

  useEffect(() => {
    if (watch("sort")) {
      dispatch(
        setFilterParam({
          ...filterParam,
          sortType: watch("sort").split("_")[1],
          sortField:
            watch("sort").split("_")[0] === "DATE"
              ? "CREATED_DATE"
              : watch("sort").split("_")[0],
        })
      );
    }
  }, [watch("sort")]);

  useEffect(() => {
    setTriggerRender(true);
  }, [triggerRender]);

  useEffect(() => {
    return () => {
      dispatch(setHasMore(true));
      dispatch(setPageCategoryFilter(1));
      dispatch(setDataCategory([]));
      dispatch(
        setFilterParam({
          categoryId: [],
          minPrice: 0,
          maxPrice: 0,
          sortType: "",
          sortField: "",
        })
      );
    };
  }, []);

  return (
    <Grid item md={3}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} display={{ md: "flex", xs: "none" }}>
          <Typography variant="h4">{t("category.filter")}</Typography>
          <Stack>
            <Typography variant="subtitle1">
              {" "}
              {t("category.categorySub")}{" "}
            </Typography>
            <RHFMultiCheckbox
              name="category"
              options={dataCategory ?? []}
              sx={{ width: 1, paddingLeft: "11px" }}
            />
            {isRefetching && <p>Loading more...</p>}
            {!isRefetching && hasMore && (
              <Button
                sx={{
                  fontWeight: 700,
                  paddingLeft: "36px",
                  textDecoration: "underline",
                }}
                onClick={() =>
                  dispatch(setPageCategoryFilter(pageCategoryFilter + 1))
                }
              >
                {t("category.addMore")}
              </Button>
            )}
          </Stack>
          <Divider />

          <Stack width={"100%"} spacing={2} pb={2}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {t("category.sort")}
            </Typography>
            <RHFSelect name="sort">
              <option></option>
              {SORT_POINT?.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
          </Stack>
          <Divider />

          <Stack width={"100%"} spacing={2} pb={2}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {t("category.rangPrice")}
            </Typography>

            <Stack direction="row" spacing={2}>
              <InputRange type="từ" />
              <InputRange type="đến" />
            </Stack>

            {/* <RHFSlider
              name="priceRange"
              step={10}
              min={0}
              max={500}
              marks={marksLabel}
              getAriaValueText={(value) => `${value}`}
              valueLabelFormat={(value) => `${value}`}
              sx={{ alignSelf: "center", width: `calc(100% - 20px)` }}
            /> */}
            <Button
              sx={{
                width: "100%",
                height: "56px",
                mt: "42px !important",
                borderRadius: "36px",
                color: "white",
              }}
              variant="contained"
              onClick={() =>
                dispatch(
                  setFilterParam({
                    ...filterParam,
                    minPrice: watch("priceRange")[0],
                    maxPrice: watch("priceRange")[1],
                  })
                )
              }
            >
              {t("category.apply")}
            </Button>
          </Stack>

          <Divider />
          <Button
            sx={{
              width: "100%",
              height: "56px",
              borderRadius: "36px",
            }}
            variant="outlined"
            endIcon={
              <Iconify icon={"formkit:arrowright"} width={24} height={24} />
            }
            onClick={() => {
              reset({
                priceRange: [undefined, undefined],
                category: [],
                sort: "",
              });
              dispatch(
                setFilterParam({
                  categoryId: [],
                  minPrice: 0,
                  maxPrice: 0,
                  sortType: "",
                  sortField: "",
                })
              );
            }}
          >
            {t("category.deleteAll")}
          </Button>
        </Stack>
        <Button
          disableRipple
          color="inherit"
          endIcon={<Iconify icon={"ic:round-filter-list"} />}
          onClick={handleOpenFilter}
          sx={{ display: { xs: "flex", md: "none" }, p: 0 }}
        >
          {t("category.filter")}
        </Button>
        <Drawer
          anchor="right"
          open={openFilter}
          onClose={handleCloseFilter}
          PaperProps={{
            sx: { width: 260, height: "100%", p: "20px" },
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4"> {t("category.filter")}</Typography>
              <IconButton onClick={handleCloseFilter}>
                <Iconify icon={"eva:close-fill"} width={20} height={20} />
              </IconButton>
            </Stack>

            <Stack>
              <Typography variant="subtitle1">
                {" "}
                {t("category.categorySub")}{" "}
              </Typography>
              <RHFMultiCheckbox
                name="category"
                options={dataCategory ?? []}
                sx={{ width: 1, paddingLeft: "11px" }}
              />
              {isRefetching && <p>Loading more...</p>}
              {!isRefetching && hasMore && (
                <Button
                  sx={{
                    fontWeight: 700,
                    paddingLeft: "36px",
                    textDecoration: "underline",
                  }}
                  onClick={() =>
                    dispatch(setPageCategoryFilter(pageCategoryFilter + 1))
                  }
                >
                  {t("category.addMore")}
                </Button>
              )}
            </Stack>
            <Divider />
            <Stack width={"100%"} spacing={2} pb={2}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {t("category.sort")}
              </Typography>
              <RHFSelect name="sort">
                <option></option>
                {SORT_POINT?.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
            </Stack>
            <Divider />

            <Stack width={"100%"} spacing={2} pb={2}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {t("category.rangPrice")}
              </Typography>

              <Stack direction="row" spacing={2}>
                <InputRange type="từ" />
                <InputRange type="đến" />
              </Stack>

              {/* <RHFSlider
                name="priceRange"
                step={10}
                min={0}
                max={500}
                marks={marksLabel}
                getAriaValueText={(value) => `${value}`}
                valueLabelFormat={(value) => `${value}`}
                sx={{ alignSelf: "center", width: `calc(100% - 20px)` }}
              /> */}
              <Button
                sx={{
                  width: "100%",
                  height: "56px",
                  mt: "42px !important",
                  borderRadius: "36px",
                  backgroundColor: "#1F8A70",
                  color: "white",
                }}
                onClick={() =>
                  dispatch(
                    setFilterParam({
                      ...filterParam,
                      minPrice: watch("priceRange")[0],
                      maxPrice: watch("priceRange")[1],
                    })
                  )
                }
              >
                {t("category.apply")}
              </Button>
            </Stack>
            <Divider />

            <Divider />
            <Button
              sx={{
                width: "100%",
                height: "56px",
                borderRadius: "36px",
                backgroundColor: "#1F8A70",
                color: "white",
              }}
              endIcon={
                <Iconify icon={"formkit:arrowright"} width={24} height={24} />
              }
              onClick={() => {
                reset({
                  priceRange: [undefined, undefined],
                  category: [],
                  sort: "",
                });
                dispatch(
                  setFilterParam({
                    categoryId: [],
                    minPrice: 0,
                    maxPrice: 0,
                    sortType: "",
                    sortField: "",
                  })
                );
              }}
            >
              {t("category.deleteAll")}
            </Button>
          </Stack>
        </Drawer>
      </FormProvider>
    </Grid>
  );
}
