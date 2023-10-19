import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { IOrderShipping } from "../../common/interface";

type Props = {
  address: IOrderShipping | undefined;
};

export const AddressInfo = ({ address }: Props) => {
  return (
    <Card sx={{ mb: 3, borderRadius: "16px" }} elevation={5}>
      <CardHeader
        title={<Typography variant="h6">Địa chỉ nhận hàng</Typography>}
      />

      <CardContent sx={{ paddingTop: 0 }}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            {address?.name}
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "13px", color: "#637381" }}
          >
            {address?.phone}
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "15px", color: "#212B36" }}
          >
            {`${address?.address1}, ${address?.ward}, ${address?.district}, ${address?.province}`}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
