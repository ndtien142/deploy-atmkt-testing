import Image from "@/common/components/Image";
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { Stack, Typography } from "@mui/material";

type Props ={
    srcImg: string;
    title: string;
    description: string;
}

export const ItemDelivery = (props: Props) => {
  const {title, description, srcImg} = props
  return (
    <Stack display={"flex"} direction={"row"} spacing={2}>
      <Image
        sx={{ pt: "9px", minWidth: "24px", height: "27px" }}
        alt=""
        src={srcImg}
      />
      <Stack>
        <ATypographyEllipsis fontSize={{xs:20,sm:24}} fontWeight={600}>
          {title}
        </ATypographyEllipsis>
        <ATypographyEllipsis color={"#726C6C"} fontSize={{xs:9,sm:18}}>
          {description} 
        </ATypographyEllipsis>
      </Stack>
    </Stack>
  );
};
