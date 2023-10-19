import { Button, Dialog, Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  idEditForm,
  isOpenEditForm,
  provinceParamsForm,
  setIsOpenEditForm,
  setSearchTextProvinceParams,
  setTypeProvinceParams,
} from "../address-common/slice";
import { useDispatch } from "@/common/redux/store";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/common/components/hook-form";
import {
  IDataEditAddress,
  IParamsProvinceList,
  IProvince,
  ISubmitData,
} from "../address-common/interface";
import { DEFAULT_VALUE_FORM_ADDRESS } from "../address-common/constant";
import RHFSelectPagination from "../address-common/components/RHFSelectPagination";
import { AddressSchema } from "../address-common/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useGetAddressById } from "./hooks/useGetAddressById";
import { reset } from "numeral";
import { useGetProvinceList } from "../address-common/hooks/useGetProvinceList";
import { useEditAddress } from "./hooks/useEditAddress";
import useMessage from "@/common/hooks/useMessage";

export default function AddressEdit() {
  const methods = useForm<ISubmitData>({
    resolver: yupResolver(AddressSchema()),
    defaultValues: DEFAULT_VALUE_FORM_ADDRESS,
  });
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = methods;
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenEditForm);
  const idEdit = useSelector(idEditForm);
  const provinceParams = useSelector(provinceParamsForm);
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();

  const searchParamsProvince: IParamsProvinceList = {
    type: provinceParams.type,
    parentId: provinceParams.parentId,
    searchText: provinceParams.searchText,
    page: 1,
    limit: 20,
  };

  const { dataAddressById, isLoadingAddressById } = useGetAddressById(idEdit);

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

  const { mutateEditAddress } = useEditAddress({
    onSuccess: () => {
      dispatch(setIsOpenEditForm(false));
      showSuccessSnackbar(t("address.updateSuccess"));
    },
    onError: () => {
      showErrorSnackbar(t("address.updateError"));
    },
  });

  const onSubmit = (data: ISubmitData) => {
    const dataEdit: IDataEditAddress = {
      id: idEdit,
      name: data.name,
      phone: data.phone,
      provinceId: data.province !== null ? data.province.id : 0,
      districtId: data.district !== null ? data.district.id : 0,
      wardId: data.ward !== null ? data.ward.id : 0,
      address1: data.address,
      address2: data.address,
      isDefault: data.isDefault,
    };
    mutateEditAddress(dataEdit);
  };

  const handleClose = () => {
    dispatch(setIsOpenEditForm(false));
  };

  useEffect(() => {
    if (dataAddressById) {
      reset({
        name: dataAddressById.name,
        phone: dataAddressById.phone,
        province: {
          id: dataAddressById.province.id,
          name: dataAddressById.province.name,
        },
        district: {
          id: dataAddressById.district.id,
          name: dataAddressById.district.name,
        },
        ward: {
          id: dataAddressById.ward.id,
          name: dataAddressById.ward.name,
        },
        address: dataAddressById.address1,
        isDefault: dataAddressById.isDefault,
      });
    }
  }, [dataAddressById]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          minWidth: { xs: "100vw", md: "720px" },
        },
      }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={"16px"}>
          <Box
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(33, 43, 54, 1)",
              width: "100%",
            }}
          >
            {t("address.form.updateHeading")}
          </Box>
          <Stack spacing={{ xs: 2, md: 3 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <RHFTextField name="name" label={t("address.form.name")} />
              <RHFTextField name="phone" label={t("address.form.phone")} />
            </Stack>
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
            <RHFCheckbox name="isDefault" label={t("address.form.isDefault")} />
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
              {t("address.form.update")}
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
