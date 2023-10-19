import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { fCurrency, fFormatCoin } from "@/common/utils/formatNumber";
import { dispatch, useSelector } from "@/common/redux/store";
import { setPaymentType } from "../order.slice";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

type Props = {
  totalPoint: number;
  totalCash: number;
  discount?: number;
  subtotalPoint: number;
  subtotalCash: number;
  shipping?: number;
  onEdit?: VoidFunction;
  enableEdit?: boolean;
  onApplyDiscount?: (discount: number) => void;
  enableDiscount?: boolean;
};

export default function CheckoutSummary({
  totalPoint,
  totalCash,
  onEdit,
  discount,
  subtotalPoint,
  subtotalCash,
  shipping,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
}: Props) {
  const displayShipping = shipping !== null ? "Free" : "-";
  const { isEVoucher, isPhysical, paymentType } = useSelector(
    (state) => state.checkout
  );

  const { showErrorSnackbar } = useShowSnackbar();

  const handleChangeTypePayment = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isPhysical && !isEVoucher) {
      dispatch(setPaymentType((event.target as HTMLInputElement).value));
      return;
    }
  };

  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader
        title="Chi tiết đơn hàng"
        action={
          enableEdit && (
            <Button
              size="small"
              onClick={onEdit}
              startIcon={<Iconify icon={"eva:edit-fill"} />}
            >
              Edit
            </Button>
          )
        }
      />

      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">
            Phương thức thanh toán
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue={paymentType}
            value={paymentType}
            name="radio-buttons-group"
            sx={{
              padding: "16px",
            }}
            onChange={handleChangeTypePayment}
          >
            <FormControlLabel
              value="POINT"
              control={<Radio />}
              label="Thanh toán bằng xu"
            />
            <FormControlLabel
              value="COD"
              control={<Radio />}
              label="Thanh toán khi nhận hàng"
            />
            {isEVoucher && (
              <FormHelperText
                sx={{ margin: 0, color: "#ff4842", fontSize: "14px" }}
              >
                *Đơn hàng của bạn có sản phẩm voucher nên sẽ mặc định thanh toán
                bằng xu nhé.
              </FormHelperText>
            )}
          </RadioGroup>
        </FormControl>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tổng giá
            </Typography>
            <Typography variant="subtitle2">
              {paymentType === "POINT"
                ? `${fFormatCoin(subtotalPoint)} xu`
                : `${fFormatCoin(subtotalCash)} VNĐ`}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Giảm giá
            </Typography>
            <Typography variant="subtitle2">
              {discount ? fCurrency(-discount) : "-"}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Phí vận chuyển
            </Typography>
            <Typography variant="subtitle2">
              {shipping ? fCurrency(shipping) : displayShipping}
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Tổng thanh toán</Typography>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1" sx={{ color: "error.main" }}>
                {paymentType === "POINT"
                  ? `${fFormatCoin(totalPoint)} xu`
                  : `${fFormatCoin(totalCash)} VNĐ`}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                (Chưa bao gồm VAT)
              </Typography>
            </Box>
          </Stack>

          {enableDiscount && onApplyDiscount && (
            <TextField
              fullWidth
              placeholder="Mã giảm giá"
              value=""
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => onApplyDiscount(5)}
                      sx={{ mr: -0.5 }}
                    >
                      Sử dụng
                    </Button>
                  </InputAdornment>
                ),
                startAdornment: (
                  <Iconify
                    icon={"iconamoon:discount-light"}
                    sx={{ mr: 1, width: 40, height: 40 }}
                  />
                ),
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
