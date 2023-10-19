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
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setShowPassword } from "../../register/slice";
import { RegisterSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormCreateInfo } from "../../register/interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import React, { useEffect } from "react";
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRegisterInformation } from "../hooks/useRegisterInformation";
import {
  IRegisterInformationRequest,
  IRegisterWithFirebaseRequest,
} from "../interface";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import { useRegisterWithFirebase } from "../hooks/useRegisterWithFirebase";

const InformationForm = () => {
  const {
    isShowPassword,
    otpValue,
    phoneNumber,
    fullName,
    firIdToken,
    isRegisterWithFirebase,
  } = useSelector((state) => state.register);
  const theme = useTheme();
  const registerSchema = RegisterSchema();

  const methods = useForm<IFormCreateInfo>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      agreedTerms: false,
      confirmPassword: "",
      fullName: "",
      password: "",
      phoneNumber,
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
  const { showErrorSnackbar } = useShowSnackbar();

  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useRegisterInformation();
  const { regWithFirebase, isLoading: loadingReg } = useRegisterWithFirebase();
  const onSubmit = (data: IFormCreateInfo) => {
    const dataOtpSubmit: IRegisterInformationRequest = {
      name: data?.fullName,
      otp: otpValue,
      password: data?.password,
      referralCode: data?.referralCode,
      phoneNumber,
    };
    const dataFirSubmit: IRegisterWithFirebaseRequest = {
      name: data?.fullName,
      phoneNumber: data?.phoneNumber,
      password: data?.password,
      referralCode: data?.referralCode,
      firIdToken: firIdToken as string,
    };
    if (isRegisterWithFirebase) {
      regWithFirebase(dataFirSubmit, {
        onSuccess: () => {
          router.push(PATH_HOME.root);
        },
        onError: (error: any) => {
          showErrorSnackbar(error?.message);
        },
      });
      return;
    }
    mutate(dataOtpSubmit, {
      onSuccess: () => {
        router.push(PATH_HOME.root);
      },
      onError: (error: any) => {
        showErrorSnackbar(error?.message);
      },
    });
  };
  useEffect(() => {
    fullName && setValue("fullName", fullName);
    setValue("phoneNumber", phoneNumber);
  }, []);
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("create_account")}</Typography>
        {isRegisterWithFirebase && (
          <RHFTextField
            name="phoneNumber"
            label={t("phoneNumber")}
            placeholder={t("phoneNumber")}
            sx={{
              borderRadius: "8px",
            }}
          />
        )}
        <RHFTextField
          name="fullName"
          label={t("full_name")}
          placeholder={t("full_name")}
          disabled={isRegisterWithFirebase}
          sx={{
            borderRadius: "8px",
          }}
        />
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
        <RHFTextField
          name="referralCode"
          label={t("referral_code")}
          placeholder={t("referral_code")}
          sx={{
            borderRadius: "8px",
          }}
        />
        <RHFCheckbox
          name="agreedTerms"
          label={
            <Typography>
              Tôi đồng ý với{" "}
              <Link
                href={PATH_AUTH.login}
                style={{ color: theme.palette.primary.main }}
              >
                Điều khoản và chính sách
              </Link>{" "}
              của ShopGrocery
            </Typography>
          }
        />
        <Button
          type="submit"
          disabled={
            !watch("agreedTerms") || loadingReg || isLoading || isSubmitting
          }
          variant="contained"
          sx={{
            borderRadius: "24px",
            paddingY: 1,
            boxShadow: 0.5,
          }}
          endIcon={
            loadingReg || isLoading || isSubmitting ? (
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

export default InformationForm;
