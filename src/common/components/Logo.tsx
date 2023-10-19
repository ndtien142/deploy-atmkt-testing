import { Box } from "@mui/material";
import { useGetThemeConfig } from "./theme/hooks/useGetThemeConfig";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "../constants/path.constants";

export default function Logo() {
  const { dataThemeConfig } = useGetThemeConfig();
  const route = useRouter();
  return (
    <>
      {dataThemeConfig &&
        dataThemeConfig?.themeConfig?.logo?.isEnable &&
        dataThemeConfig?.themeConfig?.logo?.imgLink && (
          <Box
            sx={{
              height: { md: "60px", sm: "50px", xs: "40px" },
              width: { md: "100px", sm: "90x", xs: "80px" },
              backgroundImage: `url(${dataThemeConfig?.themeConfig?.logo?.imgLink})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => route.push(PATH_HOME.root)}
          />
        )}
    </>
  );
}
