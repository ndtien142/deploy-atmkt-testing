"use client";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@/common/components/hook-form";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setShowPassword } from "../../register/slice";
import { ResetPasswordSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormCreateInfo } from "../../register/interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import React from "react";
// import { useLogin } from '../hooks/useLogin';
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useResetPassword } from "../hooks/useResetPassword";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import { IFormResetPassword, IResetPasswordRequest } from "../interface";

const InformationForm = () => {
  const resetPasswordSchema = ResetPasswordSchema();

  const methods = useForm<IFormResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;
  const router = useRouter();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { isShowPassword, phoneNumber, otpValue } = useSelector(
    (state) => state.register
  );
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useResetPassword();

  const onSubmit = (data: IFormResetPassword) => {
    const dataSubmit: IResetPasswordRequest = {
      phoneNumber,
      otp: otpValue,
      newPassword: data?.password,
    };
    mutate(dataSubmit, {
      onSuccess: () => {
        showSuccessSnackbar(t("reset_password_success"));
        setTimeout(() => router.push(PATH_HOME.root), 3000);
      },
      onError: (error: any) => {
        showErrorSnackbar(error?.message);
      },
    });
  };
  const isTyped = watch("password") && watch("confirmPassword");
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("reset_password")}</Typography>
        <RHFTextField
          name="password"
          label={t("password")}
          placeholder={t("password")}
          type={isShowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!isShowPassword))}
                  edge="end"
                >
                  <Iconify
                    icon={
                      isShowPassword ? "ion:eye-outline" : "ion:eye-off-outline"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
            },
          }}
        />
        <RHFTextField
          name="confirmPassword"
          label={t("confirm_password")}
          placeholder={t("confirm_password")}
          type={isShowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!isShowPassword))}
                  edge="end"
                >
                  <Iconify
                    icon={
                      isShowPassword ? "ion:eye-outline" : "ion:eye-off-outline"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
            },
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
              <></>
            )
          }
        >
          {t("common:continue")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default InformationForm;
