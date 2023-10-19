import Iconify from "@/common/components/Iconify";
import { PATH_HOME } from "@/common/constants/path.constants";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  idSubject: number;
};

export const NewSubjectHeader = ({ title, idSubject }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction="row" spacing={{ xs: 0, sm: 2 }}>
          <Box
            sx={{
              minWidth: "21px",
              borderRadius: "4px",
              background: theme.palette.primary.main,
              display: { xs: "none", sm: "block" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "28px" },
              lineHeight: "36px",
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Button
          variant="text"
          endIcon={
            <Iconify
              icon={"basil:arrow-right-solid"}
              fontSize={"24px !important"}
              color={"primary.main"}
            />
          }
          sx={{
            "& .MuiButton-endIcon": {
              ml: 0,
            },
          }}
          onClick={() =>
            router.push(
              PATH_HOME.news.newsBySubjectId.replace(
                ":id",
                idSubject.toString()
              )
            )
          }
        >
          <Typography display={{ xs: "none", sm: "inline-block" }}>
            {t("news.seeMoreNews", { subject: title })}
          </Typography>
          <Typography display={{ sm: "none", xs: "inline-block" }}>
            {t("news.seeMoreNewsXs")}
          </Typography>
        </Button>
      </Stack>
      <Divider color="primary.main" />
    </>
  );
};
