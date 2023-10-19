"use client";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
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
import { setShowPassword } from "../reducers/login.slice";
import { LoginSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormLogin } from "../interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import React from "react";
import { useLogin } from "../hooks/useLogin";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { TLink } from "@/common/components/TLink";

export default function LoginForm() {
  const loginSchema = LoginSchema();
  const theme = useTheme();
  const methods = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
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
  const { isShowPassword } = useSelector((state) => state.login);
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useLogin();

  const onSubmit = (data: IFormLogin) => {
    mutate(data, {
      onSuccess: () => {
        router.push(PATH_HOME.root);
      },
      onError: (error: any) => {
        showErrorSnackbar(error?.message);
      },
    });
  };
  const isTyped = watch("phoneNumber") && watch("password");
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("login")}</Typography>
        <RHFTextField
          name="phoneNumber"
          label={t("phoneNumber")}
          placeholder={t("phoneNumber")}
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
        <Stack direction={"column"} alignItems={"flex-end"}>
          <TLink
            href={PATH_AUTH.forgot_password}
            style={{
              color: theme.palette.primary.main,
              textAlign: "end",
            }}
          >
            {t("forgot_password")}
          </TLink>
        </Stack>
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
          {t("login")}
        </Button>
      </Stack>
    </FormProvider>
  );
}
