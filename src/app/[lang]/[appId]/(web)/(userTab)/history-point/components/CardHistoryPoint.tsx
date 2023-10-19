import { Box, Stack, Typography } from "@mui/material";
import { HistoryPointType, IHistoryPoint } from "../interfaces/interface";
import { formatDate } from "@/common/utils/common.utils";

interface PropsHistory {
  item: IHistoryPoint;
}

export default function CardHistoryPoint({ item }: PropsHistory) {
  const { createdAt, id, action, expiresAt, point, type } = item;
  return (
    <>
      <Stack direction={"row"} marginTop={"40px"}>
        {/* <Image
          alt={"image-history-point"}
          src={image}
          width={100}
          height={100}
        /> */}
        <Box
          paddingLeft={"10px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#191919",
              marginBottom: "4px",
            }}
          >
            {type === HistoryPointType.ADD_POINT
              ? `Tích thành công ${point} xu. 🚀`
              : `Đổi thành công ${point} xu. 🚀`}
          </Box>
          <Box>
            <Box fontSize="14px">
              {type === HistoryPointType.ADD_POINT ? (
                <Typography>
                  Bạn đã tích thành công {point} xu.
                  {/* Từ sự kiện{" "} <strong>{eventName}</strong> cùng ShopGrocery. */}
                </Typography>
              ) : (
                <Typography>
                  Bạn đã đổi thành công {point} xu.
                  {/* từ sự kiện{" "}<strong>{eventName}</strong>. */}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                color: "#98A1B3",
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "8px",
              }}
            >
              {formatDate(createdAt.toString(), "HH:mm DD/MM/YYYY")}
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
