import {
  Stack,
  Box,
  Button,
  Divider,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { convertRouteByMerchant } from "@/common/utils/route";
import Logo from "@/common/components/Logo";
import { useGetFooterConfig } from "./hooks/useGetFooterConfig";
import Link from "next/link";
import { useSendEmail } from "./hooks/useSendEmail";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubscribeEmailSchema } from "./schema";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import { ISubscribeEmailForm, ISubscribeEmailSubmit } from "./interface";
import { LoadingButton } from "@mui/lab";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

export const FooterBar = () => {
  const methods = useForm<ISubscribeEmailForm>({
    resolver: yupResolver(SubscribeEmailSchema()),
    defaultValues: {
      email: undefined,
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const router = useRouter();
  const { dataFooterConfig } = useGetFooterConfig();
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { t } = useTranslation("common");

  const { mutate } = useSendEmail({
    onSuccess: () => {
      showSuccessSnackbar(t("sendEmailSuccess"));
    },
    onError: (err: any) => {
      showErrorSnackbar(err?.message);
    },
  });

  const onSubmit = (data: ISubscribeEmailForm) => {
    if (dataFooterConfig && dataFooterConfig?.SUBSCRIBE_MAIL) {
      const dataSubmit: ISubscribeEmailSubmit = {
        email: data.email,
        encouragementContent: dataFooterConfig?.SUBSCRIBE_MAIL?.content,
      };
      mutate(dataSubmit);
    } else {
      showErrorSnackbar(t("sendEmailFail"));
    }
  };

  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "black", pb: "24px" }}
      spacing={"10vw"}
    >
      <Grid
        direction={"row"}
        sx={{
          pt: "80px",
          pl: "8vw",
          pr: "4vw",
          color: "white",
          justifyContent: "space-between",
        }}
        gap={{ xs: "25px", md: "50px" }}
        container
      >
        <Grid item alignItems={"flex-start"} xs={12} sm={5} md={2}>
          <Stack spacing={"24px"}>
            <Logo />
            {dataFooterConfig?.SUBSCRIBE_MAIL?.isUsed && (
              <>
                <Typography variant="h5">
                  {dataFooterConfig?.SUBSCRIBE_MAIL?.title}
                </Typography>
                <Typography>
                  {dataFooterConfig?.SUBSCRIBE_MAIL?.content}
                </Typography>
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <RHFTextField
                    name="email"
                    placeholder={t("subscribeEmailPlaceholder")}
                    variant="outlined"
                    size="small"
                    sx={{
                      maxWidth: "200px",
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                          borderColor: "white",
                          color: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "aquamarine",
                          color: "white",
                        },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LoadingButton
                            sx={{ p: 0, minWidth: "unset" }}
                            type="submit"
                            loading={isSubmitting}
                          >
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                backgroundImage:
                                  "url(/assets/icons/core/icon-send.svg)",
                              }}
                            />
                          </LoadingButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormProvider>
                {/* <TextField
                  placeholder="Send your email"
                  disabled
                  variant="outlined"
                  size="small"
                  sx={{
                    maxWidth: "200px",
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      "& fieldset": {
                        borderColor: "white",
                        color: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "aquamarine",
                        color: "white",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton sx={{ p: 0 }} onClick={handleSendEmail}>
                          <Box
                            sx={{
                              width: "24px",
                              height: "24px",
                              backgroundImage:
                                "url(/assets/icons/core/icon-send.svg)",
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                /> */}
              </>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Stack spacing={"24px"}>
            <Typography variant="h5">
              {dataFooterConfig?.CONTACT?.title}
            </Typography>
            <Stack spacing={"16px"}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  maxWidth: "250px",
                }}
              >
                {dataFooterConfig?.CONTACT?.address}
              </Typography>
              <Typography sx={{ whiteSpace: "break-spaces" }}>
                {dataFooterConfig?.CONTACT?.email}
              </Typography>
              <Typography>{dataFooterConfig?.CONTACT?.phone}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <List
            subheader={
              <Typography sx={{ marginBottom: "24px" }} variant="h5">
                {dataFooterConfig?.ACCOUNT?.title}
              </Typography>
            }
          >
            {dataFooterConfig?.ACCOUNT?.links?.map((feature, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 0,
                  mb: "16px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  router.push(convertRouteByMerchant(feature?.link))
                }
              >
                {feature?.title}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <List
            subheader={
              <Typography sx={{ marginBottom: "24px" }} variant="h5">
                {dataFooterConfig?.SUPPORT?.title}
              </Typography>
            }
          >
            {dataFooterConfig?.SUPPORT?.links?.map((feature, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 0,
                  mb: "16px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  router.push(convertRouteByMerchant(feature?.link))
                }
              >
                {feature?.title}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Stack spacing={"24px"}>
            <Typography variant="h5">
              {dataFooterConfig?.LINK_APP?.title}
            </Typography>
            <Stack spacing={"8px"}>
              <Typography sx={{ fontSize: "12px" }}>
                {dataFooterConfig?.LINK_APP?.descText}
              </Typography>
              <Stack direction={"row"} spacing={"8px"}>
                {dataFooterConfig?.LINK_APP?.qrLink && (
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${dataFooterConfig?.LINK_APP?.qrLink})`,
                    }}
                  />
                )}
                <Stack spacing={"8px"}>
                  {dataFooterConfig?.LINK_APP?.googlePlayLink && (
                    <Link
                      href={
                        (dataFooterConfig?.LINK_APP?.googlePlayLink.includes(
                          "http"
                        )
                          ? dataFooterConfig?.LINK_APP?.googlePlayLink
                          : `https://${dataFooterConfig?.LINK_APP?.googlePlayLink}`) ||
                        ""
                      }
                      target="_blank"
                    >
                      <Box
                        sx={{
                          width: "106px",
                          height: "32px",
                          backgroundImage:
                            "url(/assets/icons/core/googleplay.svg)",
                        }}
                      />
                    </Link>
                  )}
                  {dataFooterConfig?.LINK_APP?.appStoreLink && (
                    <Link
                      href={
                        (dataFooterConfig?.LINK_APP?.appStoreLink.includes(
                          "http"
                        )
                          ? dataFooterConfig?.LINK_APP?.appStoreLink
                          : `https://${dataFooterConfig?.LINK_APP?.appStoreLink}`) ||
                        ""
                      }
                      target="_blank"
                    >
                      <Box
                        sx={{
                          width: "106px",
                          height: "36px",
                          backgroundImage:
                            "url(/assets/icons/core/appstore.svg)",
                        }}
                      />
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={"24px"}>
              {dataFooterConfig?.LINK_APP?.facebookLink && (
                <Link
                  href={
                    (dataFooterConfig?.LINK_APP?.facebookLink.includes("http")
                      ? dataFooterConfig?.LINK_APP?.facebookLink
                      : `https://${dataFooterConfig?.LINK_APP?.facebookLink}`) ||
                    ""
                  }
                  target="_blank"
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url(/assets/icons/core/icon-facebook.svg)`,
                    }}
                  />
                </Link>
              )}
              {dataFooterConfig?.LINK_APP?.twitterLink && (
                <Link
                  href={
                    (dataFooterConfig?.LINK_APP?.twitterLink.includes("http")
                      ? dataFooterConfig?.LINK_APP?.twitterLink
                      : `https://${dataFooterConfig?.LINK_APP?.twitterLink}`) ||
                    ""
                  }
                  target="_blank"
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url(/assets/icons/core/icon-twitter.svg)`,
                    }}
                  />
                </Link>
              )}
              {dataFooterConfig?.LINK_APP?.instagramLink && (
                <Link
                  href={
                    (dataFooterConfig?.LINK_APP?.instagramLink.includes("http")
                      ? dataFooterConfig?.LINK_APP?.instagramLink
                      : `https://${dataFooterConfig?.LINK_APP?.instagramLink}`) ||
                    ""
                  }
                  target="_blank"
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: `url(/assets/icons/core/icon-instagram.svg)`,
                    }}
                  />
                </Link>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body2" color="white" textAlign={"center"}>
        Copyright ShopGrocery 2023. All right reserved
      </Typography>
    </Stack>
  );
};
