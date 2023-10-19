import {
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Stack } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { INewsToSubject } from "../interface";
import { formatDate } from "@/common/utils/common.utils";
import { FirstMultiItem } from "./FirstMultiItem";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import {
  setCurrentSubject,
  setTitleCurrentSubject,
} from "../../subject/common/slice";
import { useDispatch } from "@/common/redux/store";
import { useRef } from "react";
import { setCurrentSubjectNews } from "../../(userTab)/profile/account-common/reducers/customer-profile.slice";

type Props = {
  data: INewsToSubject[];
  first: boolean;
  subjectId: number;
  titleSubject: string;
};

export const NewsMultiContainer = ({
  data,
  first,
  subjectId,
  titleSubject,
}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const ref = useRef(null);
  const matches = useMediaQuery("(min-width:600px)");

  const firstItem = data[0];
  const dataNotFirst = data.filter((_, index) => {
    return index > 0;
  });

  const handleGoToDetailNew = (id: string) => {
    router.push(`${PATH_HOME.news.detail.replace(":id", id)}`);
  };

  if (first) {
    return (
      <>
        <FirstMultiItem
          data={data}
          subjectId={subjectId}
          titleSubject={titleSubject}
        />
      </>
    );
  }

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        minHeight={"380px"}
      >
        <Stack
          direction="column"
          spacing={3}
          width={{ xs: "100%", sm: "48%" }}
          sx={{
            cursor: "pointer",
            padding: { xs: 0, sm: "24px 24px 16px 24px" },
            border: { xs: "none", sm: "1px solid #DBDBDB" },
          }}
          ref={ref}
        >
          <Box
            sx={{
              // borderRadius: "24px 24px 0px 0px",
              aspectRatio: "67/27",
              objectFit: "cover",
              borderRadius: "24px 24px 24px 24px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${firstItem?.news?.thumbnail?.url})`,
            }}
          />

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {firstItem?.news?.title}
          </Typography>
          <Typography fontSize={"13px"} color={"primary.main"}>
            <Iconify icon={"ph:clock"} color={"primary.main"} />{" "}
            {formatDate(firstItem?.news?.createdAt, "DD/MM/YYYY")}
          </Typography>
          <Typography variant="body2">
            {firstItem?.news?.newsDetails[0]?.description}
          </Typography>
          <Link
            onClick={() => {
              handleGoToDetailNew(firstItem?.news?.id.toString());
            }}
            sx={{
              textDecoration: "none",
              color: theme.palette.primary.main,
              paddingY: 2,
            }}
          >
            Đọc thêm <Iconify icon={"system-uicons:arrow-right"} />
          </Link>
          {/* <Button
            variant="text"
            endIcon={<Iconify icon={"system-uicons:arrow-right"} />}
            sx={{
              alignSelf: "flex-start",
              padding: 0,
              marginY: "24px",
              "&:hover": { background: "unset" },
              "&:after": { background: "unset" },
              "&:active:after": { background: "unset" },
            }}
            onClick={() => {
              handleGoToDetailNew(firstItem?.news?.id.toString());
            }}
          >
            Đọc thêm
          </Button> */}
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          width={{ xs: "100%", sm: "49%" }}
          sx={{
            // @ts-ignore
            height: { sm: ref?.current?.offsetHeight || "400px", xs: "auto" },
            overflowY: { sm: "auto", xs: "unset" },
          }}
        >
          {dataNotFirst?.map((item, index) => (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              key={index}
              sx={{ cursor: "pointer" }}
              onClick={() => handleGoToDetailNew(item?.news?.id.toString())}
            >
              <Box
                sx={{
                  // borderRadius: "24px 24px 0px 0px",
                  width: { xs: "100%", sm: "30%" },
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: "24px 24px 24px 24px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${item?.news?.thumbnail?.url})`,
                }}
              />
              <Stack direction="column" spacing={1} width="58%">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {item?.news?.title}
                </Typography>
                <Typography fontSize={"13px"} color={"primary.main"}>
                  <Iconify icon={"ph:clock"} color={"#ff8080"} />{" "}
                  {formatDate(item?.news?.createdAt, "DD/MM/YYYY")}
                </Typography>

                {!matches && (
                  <>
                    <Typography variant="body2">
                      {item?.news?.newsDetails[0]?.description}
                    </Typography>
                    <Link
                      onClick={() => {
                        handleGoToDetailNew(item?.news?.id.toString());
                      }}
                      sx={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        paddingY: 2,
                      }}
                    >
                      Đọc thêm <Iconify icon={"system-uicons:arrow-right"} />
                    </Link>
                  </>
                )}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{ width: "100%" }}
        justifyContent={"center"}
        flexDirection={"row"}
        marginTop={3}
      >
        <Button
          variant="contained"
          sx={{
            // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            background: theme.palette.primary.main,
            borderRadius: "60px",
            width: "fit-content",
            padding: "16px 24px 16px 24px",
            minHeight: "56px",
            textTransform: "none",
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
          onClick={() => {
            dispatch(setCurrentSubjectNews(subjectId.toString()));
            dispatch(setTitleCurrentSubject(titleSubject));
            router.push(PATH_HOME.news.subject);
          }}
        >
          Xem tất cả
        </Button>
      </Stack>
    </>
  );
};
