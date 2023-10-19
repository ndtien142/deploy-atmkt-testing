import { Box, Stack, Typography } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { fDate, formatDate } from "@/common/utils/common.utils";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

type Props = {
  srcImg: string;
  title: string;
  date: string;
  id?: string;
  description?: string;
};

export const NewSingleItem = ({
  srcImg,
  title,
  date,
  description,
  id,
}: Props) => {
  const router = useRouter();
  const handleOnClick = () => {
    if (id) router.push(PATH_HOME.news.detail.replace(":id", id));
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 2 }}
        sx={{ cursor: "pointer" }}
        onClick={handleOnClick}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: "80px",
            aspectRatio: "7/4",
            borderRadius: { xs: "12px", md: "24px" },
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
          spacing={{ xs: 0, md: 1 }}
          width={{ xs: "100%", md: "60%" }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
            }}
          >
            {title}
          </Typography>
          <Typography fontSize={"12px"}>{fDate(date)}</Typography>

          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
};
