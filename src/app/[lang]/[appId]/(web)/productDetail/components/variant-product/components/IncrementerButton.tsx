import { Box, IconButton, Typography } from "@mui/material";
import Iconify from "@/common/components/Iconify";

type IncrementerProps = {
  name: string;
  quantity: number;
  available: number;
  onIncrementQuantity: VoidFunction;
  onDecrementQuantity: VoidFunction;
};

export default function IncrementerButton({
  available,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
}: IncrementerProps) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        borderColor: "transparent",
        background: "#F3F3F3",
        width: "80%",
        justifyContent: "center",
      }}
    >
      <IconButton
        size="small"
        color="inherit"
        disabled={quantity <= 1}
        onClick={onDecrementQuantity}
      >
        <Iconify icon={"eva:minus-fill"} width={14} height={14} />
      </IconButton>

      <Typography
        variant="body2"
        component="span"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "20px", sm: "24px" },
          width: 40,
          textAlign: "center",
        }}
      >
        {quantity}
      </Typography>

      <IconButton
        size="small"
        color="inherit"
        disabled={quantity >= available}
        onClick={onIncrementQuantity}
      >
        <Iconify icon={"eva:plus-fill"} width={14} height={14} />
      </IconButton>
    </Box>
  );
}
