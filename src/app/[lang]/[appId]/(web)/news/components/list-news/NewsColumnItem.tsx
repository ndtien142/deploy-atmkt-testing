import { Box, Stack, Button, Typography } from "@mui/material";
import { INewsToSubject } from "../../interface";
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { fDate } from "@/common/utils/common.utils";

type Props = {
  data: INewsToSubject;
  onDetail: VoidFunction;
};

export default function NewsColumnItem({ data, onDetail }: Props) {
  const { t } = useTranslation("common");

  return (
    <Stack
      spacing={2}
      height={"100%"}
      flex={1}
      direction={{ xs: "row", sm: "column" }}
    >
      <Stack flex={{ xs: 0.4, sm: 1 }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "90px", sm: "250px", md: "350px" },
            backgroundImage: `url(${data?.news?.thumbnail?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: { xs: "12px", sm: "24px" },
            cursor: "pointer",
          }}
          onClick={onDetail}
        />
      </Stack>
      <Stack
        flex={{ xs: 0.6, sm: 1 }}
        spacing={3}
        pr={{ xs: 0, sm: 3 }}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Stack spacing={{ xs: 0.5, sm: 1 }}>
          <Typography
            fontSize={{ xs: 14, sm: 16, md: 18 }}
            // display={{ xs: "none", sm: "inline-block" }}
          >
            {fDate(data?.news?.createdAt)}
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
            {data?.news?.title}
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
            {data?.news?.newsDetails?.[0]?.description}
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
  );
}
