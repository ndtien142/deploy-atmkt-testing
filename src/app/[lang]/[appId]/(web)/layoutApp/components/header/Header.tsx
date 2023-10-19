import { TLink } from "@/common/components/TLink";
import {
  Stack,
  Box,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SearchBox from "./components/SearchBox";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import { useDispatch, useSelector } from "@/common/redux/store";
import UserWithLogin from "./components/UserWithLogin";
import { useGetCart } from "@/common/hooks/useGetCart";
import { setPopupLogin } from "./header.slice";
import Iconify from "@/common/components/Iconify";
import { useGetThemeConfig } from "@/common/components/theme/hooks/useGetThemeConfig";
import Logo from "@/common/components/Logo";

export const HeaderBar = () => {
  const { accessToken } = useSelector((state) => state.authLogin);
  const route = useRouter();
  const dispatch = useDispatch();
  const { dataThemeConfig } = useGetThemeConfig();

  const { data, isLoading } = useGetCart();

  return (
    <Stack
      direction={"row"}
      // spacing={"110px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={{ xs: 0, sm: "25px", md: "75px", lg: "100px" }}
      boxShadow={3}
      width={"100%"}
      maxHeight={"140px"}
      position={"sticky"}
      py={0.5}
      top={0}
      zIndex={99}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Logo />
      <Stack
        sx={{
          height: "100%",
          width: { xs: "20%", sm: "35%", md: "30%" },
          display: { xs: "none", sm: "flex" },
          backgroundColor: "#F3F9FB",
          borderRadius: "10px",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SearchBox />
      </Stack>
      <Stack direction={"row"} spacing={{ xs: "10px", md: "10px", lg: "10px" }}>
        <Button
          onClick={() => route.push(PATH_HOME?.product?.root)}
          sx={{
            color: "#666666",
          }}
          startIcon={
            <Iconify
              icon={"fluent-mdl2:product-variant"}
              fontSize={"18px"}
              color={"primary.main"}
            />
          }
          component="span"
        >
          <Typography>Sản phẩm</Typography>
        </Button>
        {accessToken === "" ? (
          <Button
            sx={{
              color: "#666666",
            }}
            startIcon={
              <Iconify
                icon={"tabler:user"}
                height={24}
                width={24}
                color={"primary.main"}
              />
            }
            component="span"
            onClick={() => route.push(PATH_AUTH.login)}
          >
            <Typography display={{ xs: "none", md: "flex" }}>
              Đăng ký/Đăng nhập
            </Typography>
          </Button>
        ) : (
          <UserWithLogin />
        )}
        <Divider orientation="vertical" flexItem />
        <Button
          sx={{
            color: "#666666",
          }}
          component="span"
          startIcon={
            <Box sx={{ position: "relative", pt: 1 }}>
              <Iconify
                icon={"gg:shopping-cart"}
                height={24}
                width={24}
                color={"primary.main"}
              />
              <Stack
                sx={{
                  background: "red",
                  position: "absolute",
                  borderRadius: "50%",
                  width: "22px",
                  textAlign: "center",
                  color: "#FFFFFF",
                  padding: "1px",
                  fontSize: "12px",
                  top: -2,
                  right: -10,
                }}
              >
                <span>{data?.length || 0}</span>
              </Stack>
            </Box>
          }
          onClick={() => {
            if (accessToken) {
              route.push(PATH_HOME.checkout);
            } else {
              dispatch(setPopupLogin(true));
            }
          }}
        >
          <Typography display={{ xs: "none", md: "flex" }}>Giỏ hàng</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
