import * as Yup from "yup";

export const NewAddressSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required("Tên người nhận không được để trống"),
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/,
        "Số điện thoại không hợp lệ"
      ),
    province: Yup.string().required("Vui lòng chọn tỉnh và thành phố"),
    district: Yup.string().required("Vui lòng chọn quận / huyện"),
    ward: Yup.string().required("Vui lòng chọn xã / phường"),
    address1: Yup.string().required(" Nhập số nhà"),
    isDefault: Yup.boolean(),
    // idSaveAddress: Yup.boolean(),
  });
};
