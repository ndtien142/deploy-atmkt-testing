import { useSelector } from "react-redux";
import { useGetAppPolicyById } from "../../common/hooks/useGetAppPolicyById";
import { ConvertStringToHtml } from "../../common/utils/convertStringToHtml";
import { RootState, useDispatch } from "@/common/redux/store";
import {
  Typography,
  Stack,
  CircularProgress,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { setIsOpenDrawer } from "../common/help.slice";
import useTranslation from "next-translate/useTranslation";

export default function HelpDetail() {
  const { idActive } = useSelector((state: RootState) => state.help);
  const { data, isLoading } = useGetAppPolicyById(idActive);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const breadcrumbs = [
    <Typography
      key="1"
      color="#000"
      sx={{ textDecoration: "underline" }}
      onClick={() => dispatch(setIsOpenDrawer(true))}
    >
      {t("policy.help")}
    </Typography>,
    <Typography key="2" color="primary">
      {data?.appPolicyDetail?.title}
    </Typography>,
  ];

  return (
    <Stack spacing={3}>
      {isLoading ? (
        <CircularProgress sx={{ alignSelf: "center" }} />
      ) : (
        <>
          <Breadcrumbs
            separator=">"
            sx={{
              fontWeight: "700 !important",
              display: { xs: "flex", md: "none" },
            }}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Typography sx={{ display: { xs: "none", md: "flex" } }} variant="h3">
            {data?.appPolicyDetail?.title}
          </Typography>
          <ConvertStringToHtml htmlString={data?.appPolicyDetail?.content} />
        </>
      )}
    </Stack>
  );
}
