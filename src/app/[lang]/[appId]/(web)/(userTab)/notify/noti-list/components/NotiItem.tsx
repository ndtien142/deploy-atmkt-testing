"use client";

import { Box, Stack, Typography } from "@mui/material";
import { INotiItem } from "../../noti-common/interface";
import { ConvertStringToHtml } from "../../noti-common/utils/convertStringToHtml";
import { formatDate } from "@/common/utils/common.utils";
import { useDispatch } from "@/common/redux/store";
import {
  setIdNotifySelected,
  setIsOpenFormDetail,
} from "../../noti-common/slice";
import {
  type_notify_image,
  type_notify_image_unread,
} from "../../noti-common/constant";
import { usePatchIsReadNotiById } from "../hooks/usePatchIsReadNotiById";
import { useGetCountNotifyUnread } from "../../../../home/hooks/useGetCountNotifyUnread";
import { useEffect } from "react";
import { setCountNotifyUnread } from "../../../../web.slice";

type Props = {
  notiItem: INotiItem;
};

export default function NotiItem({ notiItem }: Props) {
  const { title, content, createdAt, id, type, notiToUser } = notiItem;
  const dispatch = useDispatch();

  const { mutateIsReadNotiById } = usePatchIsReadNotiById();
  const { dataCountNotifyUnread, refetchCountNotifyUnread } =
    useGetCountNotifyUnread();

  const handleOpenNotifyDetail = () => {
    dispatch(setIdNotifySelected(id));
    dispatch(setIsOpenFormDetail(true));
    mutateIsReadNotiById(
      { id, isRead: true },
      {
        onSuccess: () => {
          refetchCountNotifyUnread();
        },
      }
    );
  };

  const srcImg = notiToUser?.isRead
    ? type_notify_image[type]
    : type_notify_image_unread[type];

  useEffect(() => {
    dispatch(setCountNotifyUnread(dataCountNotifyUnread || 0));
  }, [dataCountNotifyUnread]);

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        position={"relative"}
        py={"16px"}
        px={{ xs: "16px", sm: "32px" }}
        gap={"16px"}
        justifyContent={"space-between"}
        sx={{
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#eae5e542",
          },
        }}
        onClick={handleOpenNotifyDetail}
      >
        <Box
          sx={{
            width: 76,
            height: 76,
            backgroundImage: `url(${srcImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Stack
          spacing={1.5}
          maxWidth={{ xs: "70%", sm: "80%", lg: "86%" }}
          flex={1}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontsize: "16px",
                fontFamily: "Plus Jakarta Sans",
                color: "#191919",
                width: "70%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Box>
            {/* {!isRead && (
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#00AB55",
                  borderRadius: "50%",
                }}
              />
            )} */}
          </Stack>
          <Stack spacing={0.5} width={"100%"}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Plus Jakarta Sans",
                color: "#1A1F36",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              component="span"
            >
              <ConvertStringToHtml
                htmlString={content}
                sx={{
                  img: {
                    display: "none",
                  },
                  "& p": {
                    m: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              />
            </Typography>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Plus Jakarta Sans",
                color: "#98A1B3",
              }}
            >
              {formatDate(createdAt, "HH:mm DD/MM/YYYY")}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
