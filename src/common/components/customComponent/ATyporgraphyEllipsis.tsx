// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Typography, TypographyProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  children: React.ReactNode;
};

type Props = IProps & TypographyProps;

export default function ATypographyEllipsis({ children, ...other }: Props) {
  return (
    <Typography
      textOverflow={"ellipsis"}
      whiteSpace={"nowrap"}
      overflow={"hidden"}
      maxWidth={"100%"}
      {...other}
    >
      {children}
    </Typography>
  );
}
