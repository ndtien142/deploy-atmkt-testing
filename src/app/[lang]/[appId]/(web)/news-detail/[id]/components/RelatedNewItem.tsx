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

export const RelatedNewItem = ({
  srcImg,
  title,
  date,
  description,
  id,
}: Props) => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          align: "center",
        }}
      >
        <Stack
          sx={{
            alignSelf: "center",
            borderRadius: "12px",
            width: "100%",
            paddingX: "25px",
            paddingY: "8px",
            justifyContent: "space-between",
          }}
          spacing={"12px"}
        >
          <Box
            sx={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${srcImg})`,
              borderRadius: { xs: "12px", sm: "24px" },
              cursor: "pointer",
            }}
            onClick={() => {
              if (id) router.push(PATH_HOME.news.detail.replace(":id", id));
            }}
          />
          <Stack spacing={1}>
            <Typography
              fontSize={{ xs: 18, sm: 20, md: 24 }}
              variant="h3"
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
              onClick={() => {
                if (id) router.push(PATH_HOME.news.detail.replace(":id", id));
              }}
            >
              {title}
            </Typography>
            <Typography fontSize={{ xs: 14, sm: 16, md: 18 }}>
              {fDate(date)}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
