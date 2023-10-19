import { styled } from "@mui/material/styles";
import { Box, BoxProps, Typography } from "@mui/material";
import Image from "next/image";

const RootStyle = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(8, 2),
}));

interface Props extends BoxProps {
  title: string;
  img?: string;
  description?: string;
}

export default function EmptyCart({
  title,
  description,
  img,
  ...other
}: Props) {
  return (
    <RootStyle {...other}>
      <Image
        alt="empty content"
        src={img || "/assets/illustration_empty_content.svg"}
        width={240}
        height={240}
        style={{ height: 240, marginBottom: 3, width: 240 }}
      />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}
