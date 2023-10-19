"use client";

import { ReactNode, useEffect, useMemo } from "react";
// @mui
import {
  alpha,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material/styles";
// hooks
//
import ComponentsOverrides from "@/common/styles/overrides";
import { useGetThemeConfig } from "./hooks/useGetThemeConfig";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setLogo, setTheme } from "./slice";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeColorSetting({ children }: Props) {
  const defaultTheme = useTheme();
  const { dataThemeConfig } = useGetThemeConfig();
  const dispatch = useDispatch();
  const { theme: themeRedux } = useSelector((state) => state.themeLogo);

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: {
          main: themeRedux?.primaryColor || defaultTheme.palette.primary.main,
          dark: themeRedux?.hoverColor || defaultTheme.palette.primary.dark,
          lighter:
            themeRedux?.lighterColor || defaultTheme.palette.primary.lighter,
          darker:
            themeRedux?.darkerColor || defaultTheme.palette.primary.darker,
        },
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(
          themeRedux?.primaryColor || defaultTheme.palette.primary.main,
          0.24
        )}`,
      },
    }),
    [defaultTheme, dataThemeConfig]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  useEffect(() => {
    if (dataThemeConfig) {
      dispatch(
        setTheme({
          primaryColor: dataThemeConfig?.themeConfig?.primaryColor,
          hoverColor: dataThemeConfig?.themeConfig?.hoverColor,
          lighterColor: dataThemeConfig?.themeConfig?.lighterColor,
          darkerColor: dataThemeConfig?.themeConfig?.darkerColor,
        })
      );
      dispatch(
        setLogo({
          imgLink: dataThemeConfig?.themeConfig?.logo?.imgLink,
          isEnable: dataThemeConfig?.themeConfig?.logo?.isEnable,
        })
      );
    }
  }, [dataThemeConfig]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
