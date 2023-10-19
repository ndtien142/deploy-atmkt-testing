import {
  Stack,
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Grid,
  alpha,
  IconButton,
  useTheme,
  Divider,
  Button,
  Card,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Swiper, SwiperSlide } from "swiper/react";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import ProductDetailsReview from "./review/ProductDetailsReview";
import Markdown from "@/common/components/hook-form/Markdown";
import { useSelector } from "@/common/redux/store";

export const TabDescriptionReview = (data: any) => {
  const [value, setValues] = useState("1");
  const { productVariantSelected } = useSelector(
    (state) => state.productDetail
  );

  return (
    <Card>
      <TabContext value={value}>
        <Box sx={{ px: 3, bgcolor: "background.neutral" }}>
          <TabList onChange={(e, value) => setValues(value)}>
            <Tab disableRipple value="1" label="Description" />
            <Tab
              disableRipple
              value="2"
              label="Reviews "
              sx={{ "& .MuiTab-wrapper": { whiteSpace: "nowrap" } }}
            />
          </TabList>
        </Box>

        <Divider />

        <TabPanel value="1">
          <Box sx={{ p: 3 }}>
            <Markdown>
              {productVariantSelected?.productVariant?.productVariantDetails[0]
                ?.description || data?.data?.productDetails?.description}
            </Markdown>
          </Box>
        </TabPanel>
        <TabPanel value="2">{/* <ProductDetailsReview /> */}</TabPanel>
      </TabContext>
    </Card>
  );
};
