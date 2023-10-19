import { INewsToSubject } from "../../interface";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { formatDate } from "@/common/utils/common.utils";
import { useRef } from "react";
import FirstItem from "./FirstItem";
import NewsColumnItem from "./NewsColumnItem";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

type Props = {
  data: INewsToSubject[];
};

export default function ListNews({ data }: Props) {
  const firstItem = data[0];
  const nextData = data.slice(1, 3);
  const router = useRouter();

  const handleClickNewsDetail = (id: number) => {
    router.push(PATH_HOME.news.detail.replace(":id", id.toString()));
  };

  return (
    <>
      <Stack spacing={{ xs: 3, sm: 5 }} pt={{ xs: 2, sm: 0 }}>
        <FirstItem
          data={firstItem}
          onDetail={() => handleClickNewsDetail(firstItem?.news?.id)}
        />
        {nextData?.length > 1 ? (
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
            {nextData?.map((item) => (
              <NewsColumnItem
                key={item?.id}
                data={item}
                onDetail={() => handleClickNewsDetail(item?.news?.id)}
              />
            ))}
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
}
