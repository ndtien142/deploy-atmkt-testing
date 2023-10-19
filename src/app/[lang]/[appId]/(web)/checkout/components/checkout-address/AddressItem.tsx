import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { IOrderShippingItem, OnCreateBilling } from "../../interface";
import { dispatch } from "@/common/redux/store";
import { setSelectedAddress } from "../../order.slice";

type AddressItemProps = {
  address: IOrderShippingItem;
};

export default function AddressItem({ address }: AddressItemProps) {
  const { name, phone, isDefault, district, address1, province, ward } =
    address;

  const fullAddress =
    address1 + " " + ward.name + ", " + district.name + ", " + province.name;

  return (
    <Card sx={{ p: 3, mb: 3, position: "relative " }} elevation={5}>
      <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1">{name}</Typography>

        {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
          &nbsp;({addressType})
        </Typography> */}

        {isDefault && (
          <Typography
            sx={{
              ml: 1,
              paddingX: "8px",
              paddingY: "1px",
              borderRadius: "6px",
              background: "rgba(24, 144, 255, 0.16)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0C53B7",
              textAlign: "center",
            }}
          >
            Mặc định
          </Typography>
        )}
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {phone}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {fullAddress}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          position: { sm: "absolute" },
          right: { sm: 24 },
          bottom: { sm: 40 },
        }}
      >
        <FormControlLabel
          value={address.id}
          control={<Radio />}
          label=""
          onClick={() =>
            dispatch(
              setSelectedAddress({
                id: address.id,
                name: address.name,
                phone: address.phone,
                address: address.address1,
                province: province.name,
                district: district.name,
                ward: ward.name,
              })
            )
          }
        />
      </Box>
    </Card>
  );
}
