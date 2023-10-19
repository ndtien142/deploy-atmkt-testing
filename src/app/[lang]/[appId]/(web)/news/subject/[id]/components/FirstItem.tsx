import Image from "@/common/components/Image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { fDate } from "@/common/utils/common.utils";
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { IDataNews } from "../../../interface";

type Props = {
  data: IDataNews;
  onDetail: VoidFunction;
};

export default function FirstItem({ data, onDetail }: Props) {
  const { t } = useTranslation("common");

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2 }}>
      <Stack flex={1}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "250px", md: "350px" },
            backgroundImage: `url(${data?.thumbnail?.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: { xs: "12px", sm: "24px" },
            cursor: "pointer",
          }}
          onClick={onDetail}
        />
      </Stack>
      <Stack flex={1}>
        <Stack
          spacing={{ xs: 2, md: 4 }}
          py={{ xs: 0, sm: 3 }}
          pr={{ xs: 0, sm: 3 }}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Stack spacing={{ xs: 1, sm: 2 }}>
            <Typography
              fontSize={{ xs: 14, sm: 16, md: 18 }}
              // display={{ xs: "none", sm: "inline-block" }}
            >
              {fDate(data?.createdAt)}
            </Typography>
            <Typography
              variant="h3"
              fontSize={{ xs: 20, sm: 24, md: 32 }}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                ":hover": {
                  color: "primary.main",
                  cursor: "pointer",
                },
              }}
              onClick={onDetail}
            >
              {data?.title}
            </Typography>
            <Typography
              fontSize={16}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: { xs: "none", sm: "-webkit-box" },
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                cursor: "pointer",
              }}
              onClick={onDetail}
            >
              {data?.newsDetails?.[0]?.description}
            </Typography>
          </Stack>
          <Stack alignSelf={"flex-start"} display={{ xs: "none", md: "flex" }}>
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
              onClick={onDetail}
            >
              {t("news.viewPost")}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
