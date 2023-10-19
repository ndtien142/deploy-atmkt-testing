"use client";
import { useCallback, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { fData } from "@/common/utils/formatNumber";
import {
  FormProvider,
  RHFTextField,
  RHFUploadAvatar,
} from "@/common/components/hook-form";
import { defaultValues } from "../constants";
import { UpdateCustomerSchema } from "../schemas";
import { useDispatch, useSelector } from "@/common/redux/store";
import {
  IEditCustomerForm,
  IFormCustomerProfile,
  ImageInfo,
} from "../../account-common/interfaces/customer-profile.interface";

import { useEditCustomerProfile } from "../hooks/useEditCustomerProfile";
import {
  customerInfoSelector,
  setCustomerInfo,
} from "../../account-common/reducers/customer-profile.slice";
import useTranslation from "next-translate/useTranslation";
import { formatDate } from "@/common/utils/common.utils";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import AccountHeader from "../../account-common/components/AccountHeader";
import Iconify from "@/common/components/Iconify";
import Image from "@/common/components/Image";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { vi } from "date-fns/locale";
import { usePresignImg } from "@/common/hooks/usePresignImg";
import _ from "lodash";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import AddressForm from "./AddressForm";
import { setAddressInfo, setIsOpenAddressForm } from "../../../slice";
// ----------------------------------------------------------------------

export default function AccountGeneralForm() {
  const { t } = useTranslation("common");
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const dispatch = useDispatch();
  const { mutate, isSuccess, isLoading } = useEditCustomerProfile({
    onSuccess: () => {
      showSuccessSnackbar(t("save_information_success"));
    },
    onError: () => {
      showErrorSnackbar(t("save_information_failed"));
    },
  });
  const { handleUpload } = usePresignImg();
  const methods = useForm<IFormCustomerProfile>({
    resolver: yupResolver(UpdateCustomerSchema),
    defaultValues,
  });

  const customerInfo = useSelector(customerInfoSelector);
  const { addressInfo } = useSelector((state) => state.userTab);
  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (customerInfo) {
      reset({
        ...customerInfo,
        createdAt: formatDate(customerInfo.createdAt as string),
        photoURL: customerInfo?.avatar?.url,
        phoneNumber: customerInfo?.phoneNumber
          ? `0${customerInfo?.phoneNumber?.substring(3)}`
          : "",
      });
    }
  }, [customerInfo]);

  const { data } = useGetCustomerInfo();

  useEffect(() => {
    if (data) {
      dispatch(setCustomerInfo(data));
      dispatch(
        setAddressInfo({
          province:
            data?.province !== null
              ? {
                  id: data?.province?.id,
                  name: data?.province?.name,
                }
              : null,
          district:
            data?.district !== null
              ? {
                  id: data?.district?.id,
                  name: data?.district?.name,
                }
              : null,
          ward:
            data?.ward !== null
              ? {
                  id: data?.ward?.id,
                  name: data?.ward?.name,
                }
              : null,
          address: data?.address !== null ? data?.address : null,
        })
      );
    }
  }, [data]);

  const getImageInfo = async (file: File): Promise<ImageInfo> => {
    const imgInfo = await handleUpload(file);
    return imgInfo;
  };
  const onSubmit = async (data: IFormCustomerProfile) => {
    if (typeof data.photoURL !== "string") {
      const image = await getImageInfo(data?.photoURL as File);
      const dataEdit: IEditCustomerForm = {
        name: data.name,
        birthDate: data.birthDate,
        phoneNumber: `+84${data.phoneNumber.substring(1)}`,
        email: data.email,
        avatarId: image?.id,
        address: addressInfo.address === null ? undefined : addressInfo.address,
        provinceId:
          addressInfo.province === null ? undefined : addressInfo.province.id,
        districtId:
          addressInfo.district === null ? undefined : addressInfo.district.id,
        wardId: addressInfo.ward === null ? undefined : addressInfo.ward.id,
      };
      mutate(dataEdit);
      return;
    }
    const dataEdit: IEditCustomerForm = {
      name: data.name,
      birthDate: data.birthDate,
      email: data.email,
      phoneNumber: `+84${data.phoneNumber.substring(1)}`,
      avatarId: customerInfo.avatar?.id as number,
      address: addressInfo.address === null ? undefined : addressInfo.address,
      provinceId:
        addressInfo.province === null ? undefined : addressInfo.province.id,
      districtId:
        addressInfo.district === null ? undefined : addressInfo.district.id,
      wardId: addressInfo.ward === null ? undefined : addressInfo.ward.id,
    };
    mutate(dataEdit);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          "photoURL",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const addressTextField =
    addressInfo?.address &&
    addressInfo?.ward !== null &&
    addressInfo?.district !== null &&
    addressInfo?.province !== null
      ? `${addressInfo?.address}, ${addressInfo?.ward?.name}, ${addressInfo?.district?.name}, ${addressInfo?.province?.name}`
      : "";

  return (
    <>
      <AddressForm />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <AccountHeader title="personal_info" />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                py: 10,
                px: 3,
                textAlign: "center",
                boxShadow:
                  "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
              }}
            >
              <RHFUploadAvatar
                name="photoURL"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: "auto",
                      display: "block",
                      textAlign: "center",
                      color: "text.secondary",
                    }}
                  >
                    {t("allowed")} *.jpeg, *.jpg, *.png, *.gif
                    <br /> {t("max_size_of")} {fData(3145728)}
                  </Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                boxShadow:
                  "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
              }}
            >
              <Stack
                spacing={2}
                height={"100%"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                py={1}
              >
                <RHFTextField name="name" label={t("name")} />
                <RHFTextField name="phoneNumber" label={t("phone_number")} />
                <RHFTextField name="email" label="Email" />
                <LocalizationProvider
                  adapterLocale={vi}
                  dateAdapter={AdapterDateFns}
                >
                  <Controller
                    name="birthDate"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Stack position="relative" width="100%">
                        <MobileDatePicker
                          {...field}
                          onChange={(value) => {
                            setValue("birthDate", value ?? "");
                          }}
                          inputFormat="dd/MM/yyyy"
                          dayOfWeekFormatter={(day: any) => day}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label="Ngày sinh"
                              error={!!error}
                              helperText={error?.message}
                              sx={{
                                height: "56px",
                                borderRadius: "8px",
                              }}
                              InputProps={{
                                endAdornment: (
                                  <Image
                                    style={{
                                      position: "relative",
                                      width: "16px",
                                      height: "18px",
                                      overflow: "hidden",
                                      flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/assets/icons/calendar.svg"
                                  />
                                ),
                              }}
                            />
                          )}
                        />
                      </Stack>
                    )}
                  />
                </LocalizationProvider>
                {_.isEmpty(data?.birthDate) && (
                  <Typography
                    color="#E82629"
                    fontSize={"14px"}
                    ml="5px"
                    lineHeight={"18px"}
                    mt={-6}
                  >
                    Lưu ý: Ngày sinh chỉ được cập nhật 1 lần duy nhất. Nếu bạn
                    muốn chỉnh sửa vui lòng liên hệ hotline: 19006093
                  </Typography>
                )}
                <TextField
                  label="Địa chỉ"
                  fullWidth
                  value={addressTextField}
                  onClick={() => dispatch(setIsOpenAddressForm(true))}
                />
                <RHFTextField
                  name="tierCode"
                  label={"Rank"}
                  InputLabelProps={{ shrink: true }}
                  disabled
                />
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
          <Box></Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              padding: "16px 24px 16px 24px",
              borderRadius: "60px",
            }}
            endIcon={
              <Iconify
                icon={"heroicons:arrow-right-20-solid"}
                sx={{ width: "24px" }}
              />
            }
          >
            {t("save")}
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
}
