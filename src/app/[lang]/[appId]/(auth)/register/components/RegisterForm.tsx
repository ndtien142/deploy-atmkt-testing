"use client";
import Iconify from "@/common/components/Iconify";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import { useDispatch, useSelector } from "@/common/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSendOtp } from "../../common/hooks/useSendOtp";
import { OtpModalType } from "../../login/interface";
import { setOpenOtpModal } from "../../login/reducers/auth.slice";
import { useCheckPhoneExisted } from "../hooks/useCheckPhoneExisted";
import { IFormRegister } from "../interface";
import { RegisterSchema } from "../schema";
import { setPhoneNumber } from "../slice";

const RegisterForm = () => {
  const registerSchema = RegisterSchema();
  const methods = useForm<IFormRegister>({
    resolver: yupResolver(registerSchema),
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const isTyped = watch("phoneNumber");

  const { refetch: checkUserExisted } = useCheckPhoneExisted({
    phoneNumber: isTyped,
  });
  const { mutate, isLoading } = useSendOtp();
  const onSubmit = async (data: IFormRegister) => {
    dispatch(setPhoneNumber(data?.phoneNumber));
    try {
      const result = await checkUserExisted();
      if (result?.data?.isExisted) {
        showErrorSnackbar(t("phone_number_existed"));
        return;
      }
      mutate(
        {
          phoneNumber: data?.phoneNumber,
          type: OtpModalType.REGISTER,
          deviceId: new Date().toISOString(),
        },
        {
          onSuccess: () => {
            dispatch(
              setOpenOtpModal({
                isOpen: true,
                type: OtpModalType.REGISTER,
              })
            );
          },
          onError: (error: any) => {
            showErrorSnackbar(error?.message);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("register")}</Typography>
        <RHFTextField
          name="phoneNumber"
          label={t("phoneNumber")}
          placeholder={t("phoneNumber")}
          sx={{
            borderRadius: "8px",
          }}
        />
        <Button
          type="submit"
          disabled={!isTyped}
          variant="contained"
          sx={{
            borderRadius: "24px",
            paddingY: 1,
            boxShadow: 0.5,
          }}
          endIcon={
            isLoading || isSubmitting ? (
              <CircularProgress color="inherit" size={"24px"} />
            ) : (
              <Iconify
                icon={"heroicons:arrow-right-20-solid"}
                sx={{ width: "24px" }}
              />
            )
          }
        >
          {t("common:continue")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
