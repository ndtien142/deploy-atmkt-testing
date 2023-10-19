import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { formatDate } from "@/common/utils/common.utils";
import Iconify from "@/common/components/Iconify";

type Props = {
  srcImg: string;
  title: string;
  date: string;
  id?: string;
  description?: string;
};

export const NewsItem = ({ srcImg, title, date, description, id }: Props) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:600px)");

  const handleOnClick = () => {
    if (id) router.push(PATH_HOME.news.detail.replace(":id", id));
  };

  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        cursor: "pointer",
        width: matches ? "33%" : "100%",
        padding: matches ? 5 : 0,
        paddingLeft: 0,
      }}
      onClick={handleOnClick}
    >
      <Box
        sx={{
          borderRadius: "24px 24px 0px 0px",
          width: "100%",
          aspectRatio: "16/8",
          // minHeight: "200px",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          backgroundAttachment: "local",
        }}
      />
      <Stack
        direction="column"
        spacing={1}
        width={"100%"}
        padding={2}
        paddingTop={0}
      >
        <Typography fontSize={"13px"} color="primary.main">
          <Iconify icon={"ph:clock"} color={"#ff8080"} />{" "}
          {formatDate(date, "DD/MM/YYYY")}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        {description && <Typography variant="body2">{description}</Typography>}
      </Stack>
    </Stack>
  );
};
