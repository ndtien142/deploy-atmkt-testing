"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Stack,
  OutlinedInput,
  FormHelperText,
  Button,
  Typography,
  Box,
  CircularProgress,
  Modal,
  Card,
} from "@mui/material";
// routes
import { FormProvider } from "@/common/components/hook-form";
// components
import { IOtpForm, ValueNames } from "../interface";
import { VerifyCodeSchema } from "../schema";
import { useDispatch, useSelector } from "../../../../../../common/redux/store";
import { useVerifyOtp } from "../hooks/useVerifyOtp";
import { setOtpValue } from "../../register/slice";
import useTranslation from "next-translate/useTranslation";
import Iconify from "@/common/components/Iconify";
import { PATH_AUTH } from "@/common/constants/path.constants";
import { setOpenOtpModal } from "../../login/reducers/auth.slice";
import { OtpModalType } from "../../login/interface";
import { useSendOtp } from "../hooks/useSendOtp";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

// ----------------------------------------------------------------------
type FormProps = {
  onClose: VoidFunction;
};
const OtpModal = ({ onClose }: FormProps) => {
  const router = useRouter();
  const [count, setCount] = useState(120);
  const intervalID = useRef<NodeJS.Timer>();
  const { t } = useTranslation("auth");
  const inputOtp = useRef(null);
  const { phoneNumber } = useSelector((state) => state.register);
  const { openOtpModal } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();
  const methods = useForm<IOtpForm>({
    mode: "all",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    },
  });
  useEffect(() => {
    if (count > 0) {
      intervalID.current = setInterval(() => {
        setCount((prevCount: number) => prevCount - 1);
      }, 1000);
    } else {
      clearInterval(intervalID.current as NodeJS.Timer);
    }
    return () => {
      clearInterval(intervalID.current as NodeJS.Timer);
    };
  });
  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();
  const { mutate, isLoading } = useVerifyOtp();
  const { mutate: resendOtp } = useSendOtp();
  const { showErrorSnackbar } = useShowSnackbar();
  useEffect(() => {
    const target = document.querySelector("input.field-code");

    target?.addEventListener("paste", handlePaste);

    return () => {
      target?.removeEventListener("paste", handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleBackspace = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      const fieldIndex = `code${index + 1}`;
      const fieldValue = watch(fieldIndex as ValueNames);
      if (fieldValue) {
        setValue(fieldIndex as ValueNames, "");
        return;
      }
      setValue(fieldIndex as ValueNames, "");
      if (index < 5 && index >= 0) {
        const prevField = document.querySelector(`input[name=code${index}]`);
        if (prevField !== null) {
          (prevField as HTMLInputElement).focus();
        }
      }
    }
  };
  const handlePaste = (event: any) => {
    let data = event.clipboardData.getData("text");

    data = data.split("");

    [].forEach.call(
      document.querySelectorAll(".field-code"),
      (node: any, index) => {
        node.value = data[index];

        const fieldIndex = `code${index + 1}`;

        setValue(fieldIndex as ValueNames, data[index]);
      }
    );

    event.preventDefault();
  };

  const handleChangeWithNextField = (
    event: React.ChangeEvent<HTMLInputElement>,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    const { maxLength, value, name } = event.target;

    const fieldIndex = name.replace("code", "");

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(
          `input[name=code${fieldIntIndex + 1}]`
        );
        if (nextfield !== null) {
          (nextfield as HTMLElement).focus();
        }
      }
    }

    handleChange(event);
  };

  const handleResendOtp = () => {
    resendOtp(
      {
        phoneNumber,
        type: openOtpModal?.type as OtpModalType,
        deviceId: new Date().toISOString(),
      },
      {
        onError: (error: any) => {
          showErrorSnackbar(error?.message);
        },
      }
    );
  };
  const onSubmit = async (data: IOtpForm) => {
    try {
      const otpValue = Object.values(data).join("");
      const dataSubmit = {
        phoneNumber,
        otp: otpValue,
        type: openOtpModal.type as OtpModalType,
      };
      mutate(dataSubmit, {
        onSuccess: () => {
          dispatch(setOtpValue(otpValue));
          if (openOtpModal.type === OtpModalType.REGISTER) {
            router.push(PATH_AUTH.create_information);
          } else if (openOtpModal.type === OtpModalType.RESET_PASSWORD) {
            router.push(PATH_AUTH.reset_password);
          }
          dispatch(
            setOpenOtpModal({
              isOpen: false,
            })
          );
        },
        onError: (error: any) => {
          showErrorSnackbar(error?.message);
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={openOtpModal?.isOpen}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: "70%",
            md: "40%",
            lg: "30%",
          },
          p: 3,
          boxShadow: 20,
          borderRadius: "24px",
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} ref={inputOtp}>
            <Typography fontSize={14} fontWeight={600}>
              {t("enter_otp")}
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              {t("otp_sent_through_zalo")} {phoneNumber}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {Object.keys(values)?.map((name, index) => (
                <Controller
                  key={name}
                  name={`code${index + 1}` as ValueNames}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <OutlinedInput
                      {...field}
                      error={!!error}
                      autoFocus={index === 0}
                      autoComplete="one-time-code"
                      placeholder="-"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeWithNextField(event, field.onChange)
                      }
                      onKeyDown={(
                        event: React.KeyboardEvent<HTMLInputElement>
                      ) => handleBackspace(event, index)}
                      inputProps={{
                        className: "field-code",
                        maxLength: 1,
                        inputMode: "numeric",
                        sx: {
                          p: 0,
                          textAlign: "center",
                          width: "10vw",
                          height: "10vw",
                          maxWidth: "45px",
                          maxHeight: "45px",
                          backgroundColor: "#ffffff",
                          borderRadius: "8px",
                        },
                      }}
                    />
                  )}
                />
              ))}
            </Stack>
            {(!!errors.code1 ||
              !!errors.code2 ||
              !!errors.code3 ||
              !!errors.code4 ||
              !!errors.code5 ||
              !!errors.code6) && (
              <FormHelperText error sx={{ textAlign: "center" }}>
                *{t("otp_invalid")}
              </FormHelperText>
            )}
            <Stack direction={"column"} alignItems={"center"}>
              <Box>
                {count > 0 ? (
                  <Typography fontSize={"0.75rem"} fontWeight={400}>
                    {t("didnt_receive", { count })}
                  </Typography>
                ) : (
                  <Button
                    onClick={handleResendOtp}
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                      fontWeight: 400,
                    }}
                  >
                    {t("resend_otp")}
                  </Button>
                )}
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                onClick={onClose}
                variant={"outlined"}
                sx={{
                  width: "40%",
                  borderRadius: "24px",
                }}
              >
                {t("common:cancel")}
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!watch("code6")}
                sx={{ width: "40%", borderRadius: "24px" }}
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
          </Stack>
        </FormProvider>
      </Card>
    </Modal>
  );
};

export default OtpModal;
