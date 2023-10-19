"use client";

import { Dialog, Stack, Box, Button } from "@mui/material";
import RHFSelectPagination from "../../../address/address-common/components/RHFSelectPagination";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import { LoadingButton } from "@mui/lab";
import {
  IParamsProvinceList,
  IProvince,
  ISubmitDataAddress,
} from "../../account-common/interfaces/customer-profile.interface";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useGetProvinceList } from "../hooks/useGetProvinceList";
import useTranslation from "next-translate/useTranslation";
import { AddressSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  setAddressInfo,
  setIsOpenAddressForm,
  setSearchTextProvinceParams,
  setTypeProvinceParams,
} from "../../../slice";
import { useEffect } from "react";

export default function AddressForm() {
  const { isOpenAddressForm, provinceParams, addressInfo } = useSelector(
    (state) => state.userTab
  );
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const methods = useForm<ISubmitDataAddress>({
    resolver: yupResolver(AddressSchema()),
    defaultValues: {
      address: "",
      district: null,
      province: null,
      ward: null,
    },
  });

  const {
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = methods;

  const searchParamsProvince: IParamsProvinceList = {
    type: provinceParams?.type,
    parentId: provinceParams?.parentId,
    searchText: provinceParams?.searchText,
    page: 1,
    limit: 20,
  };

  const {
    dataProvinceList,
    fetchNextPageProvinceList,
    hasNextPageProvinceList,
    isFetchingNextPageProvinceList,
    isLoadingProvinceList,
  } = useGetProvinceList(searchParamsProvince);

  const listProvince =
    dataProvinceList?.pages
      ?.map((item) =>
        item?.items?.map((itemProvince: IProvince) => {
          return {
            id: itemProvince.id,
            name: itemProvince.name,
          };
        })
      )
      .flat() || [];

  const handleScrollProvince = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPageProvinceList();
    }
  };

  const handleClose = () => {
    dispatch(setIsOpenAddressForm(false));
  };

  const onSubmit = (data: ISubmitDataAddress) => {
    dispatch(
      setAddressInfo({
        province: data.province,
        district: data.district,
        address: data.address,
        ward: data.ward,
      })
    );
    dispatch(setIsOpenAddressForm(false));
  };

  useEffect(() => {
    reset({
      province: addressInfo.province,
      district: addressInfo.district,
      address: addressInfo.address,
      ward: addressInfo.ward,
    });
  }, [addressInfo]);

  return (
    <Dialog
      open={isOpenAddressForm}
      onClose={handleClose}
      PaperProps={{
        sx: {
          minWidth: { xs: "100vw", md: "720px" },
        },
      }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={"16px"}>
          <Stack spacing={{ xs: 2, md: 3 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}></Stack>
            <RHFSelectPagination
              name="province"
              options={listProvince}
              labelProp="name"
              label={t("address.form.province")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "PROVINCE",
                    parentId: undefined,
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
            />
            <RHFSelectPagination
              name="district"
              options={listProvince}
              labelProp="name"
              label={t("address.form.district")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "DISTRICT",
                    parentId: watch("province.id"),
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
            />
            <RHFSelectPagination
              name="ward"
              options={listProvince}
              labelProp="name"
              label={t("address.form.ward")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "WARD",
                    parentId: watch("district.id"),
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
            />
            <RHFTextField
              name="address"
              label={t("address.form.detailAddress")}
              placeholder={t("address.form.addressPlaceholder")}
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              sx={{ mr: 2, borderRadius: "60px" }}
              variant="text"
              onClick={handleClose}
            >
              {t("address.form.back")}
            </Button>
            <LoadingButton
              variant="contained"
              size="large"
              type="submit"
              loading={isSubmitting}
              sx={{
                borderRadius: "60px",
              }}
            >
              {t("confirm")}
              <Box
                sx={{
                  backgroundImage: "url(/assets/icons/core/arrow-left.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "20px",
                  height: "20px",
                  ml: "6px",
                }}
              />
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Dialog>
  );
}
