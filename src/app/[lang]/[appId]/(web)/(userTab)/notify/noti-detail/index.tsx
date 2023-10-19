import { RootState, useDispatch } from "@/common/redux/store";
import { Dialog, Typography, Stack, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { setIsOpenFormDetail } from "../noti-common/slice";
import { useGetNotifyById } from "./hooks/useGetNotifyById";
import { formatDate } from "@/common/utils/common.utils";
import { ConvertStringToHtml } from "../noti-common/utils/convertStringToHtml";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import { convertRouteByMerchant } from "@/common/utils/route";
import { type_link } from "../noti-common/constant";
import Link from "next/link";
import SkeletonDetail from "./components/SkeletonDetail";

export default function NotifyDetail() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { isOpenFormDetail, idNotifySelected } = useSelector(
    (state: RootState) => state.notify
  );
  const dispatch = useDispatch();

  const { dataNotifyById, isLoadingNotifyById } = useGetNotifyById(
    idNotifySelected,
    isOpenFormDetail
  );

  const handleCloseForm = () => {
    dispatch(setIsOpenFormDetail(false));
  };

  return (
    <Dialog onClose={handleCloseForm} open={isOpenFormDetail} maxWidth={false}>
      {isLoadingNotifyById ? (
        <SkeletonDetail />
      ) : (
        <Stack px={3} py={2} spacing={3} width={{ xs: "unset", md: "700px" }}>
          <Stack alignItems={"center"} px={2}>
            <Typography
              fontSize={"18px"}
              fontWeight={700}
              textAlign={"center"}
              component="span"
            >
              {dataNotifyById?.title}
            </Typography>
            <Typography
              fontSize={"12px"}
              fontWeight={700}
              mt={1}
              component="span"
            >
              {formatDate(dataNotifyById?.createdAt || "", "HH:mm DD/MM/YYYY")}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "#1A1F36",
              textWrap: "wrap",
              "& .MuiBox-root p": {
                whiteSpace: "unset important",
                overflow: "unset important",
                textOverflow: "unset important",
              },
            }}
            component="span"
          >
            <ConvertStringToHtml
              htmlString={
                dataNotifyById?.detail
                  ? dataNotifyById?.detail.split("\n").join("<br />")
                  : dataNotifyById?.content
              }
            />
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            alignSelf={"flex-end"}
            m={"0 !important"}
            py={2}
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={handleCloseForm}
              component="span"
            >
              {t("notify.back")}
            </Button>
            {dataNotifyById?.routeType === type_link.ROUTER ? (
              <Button
                variant="contained"
                onClick={() => {
                  router.push(
                    convertRouteByMerchant(dataNotifyById?.link || "")
                  );
                  dispatch(setIsOpenFormDetail(false));
                }}
                component="span"
              >
                {t("notify.forward")}
              </Button>
            ) : (
              <div>
                <Link
                  href={
                    (dataNotifyById?.link.includes("http")
                      ? dataNotifyById?.link
                      : `https://${dataNotifyById?.link}`) || ""
                  }
                >
                  <Button variant="contained">{t("notify.forward")}</Button>
                </Link>
              </div>
            )}
          </Stack>
        </Stack>
      )}
    </Dialog>
  );
}
