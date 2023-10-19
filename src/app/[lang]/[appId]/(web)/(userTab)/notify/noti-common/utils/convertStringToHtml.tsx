import { TypographyProps, Typography } from "@mui/material";

type IProps = {
  htmlString: string | undefined;
};

type Props = IProps & TypographyProps;

export const ConvertStringToHtml = ({ htmlString, ...other }: Props) => {
  if (htmlString !== undefined)
    return (
      <Typography
        dangerouslySetInnerHTML={{ __html: htmlString }}
        sx={{
          img: {
            maxWidth: "100%",
          },
          "*": {
            m: 0,
          },
          ul: {
            ml: "16px",
          },
          "& .ql-align-center": {
            textAlign: "center",
          },
          "& .ql-align-justify": {
            textAlign: "justify",
          },
          "& .ql-align-left": {
            textAlign: "left",
          },
          "& .ql-align-right": {
            textAlign: "right",
          },
        }}
        {...other}
        component="span"
      ></Typography>
    );
  return <></>;
};
