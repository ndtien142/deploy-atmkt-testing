import { Box, Stack, Typography } from "@mui/material";
import { ISubjectNewItem } from "../interface";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

type Props = {
  dataItem: ISubjectNewItem;
};

export default function SubjectSlideItem({ dataItem }: Props) {
  const router = useRouter();
  const handleDetailSubject = () => {
    router.push(
      PATH_HOME.news.newsBySubjectId.replace(":id", dataItem?.id?.toString())
    );
  };

  return (
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
            backgroundImage: `url(${dataItem?.thumbnail?.url})`,
            borderRadius: { xs: "12px", sm: "24px" },
            cursor: "pointer",
          }}
          onClick={handleDetailSubject}
        />
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
          onClick={handleDetailSubject}
        >
          {dataItem?.subjectDetails?.[0]?.name}
        </Typography>
      </Stack>
    </Box>
  );
}
