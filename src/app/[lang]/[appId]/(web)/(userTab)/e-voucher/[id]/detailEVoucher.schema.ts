import * as Yup from "yup";

export const formOrderVoucherSchema = () => {
  return Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/,
        "Số điện thoại không hợp lệ"
      ),
  });
};
