import * as Yup from "yup";
import useTranslation from "next-translate/useTranslation";

export const UpdateCustomerSchema = Yup.object().shape({
  name: Yup.string().required("Tên không được để trống"),
  phoneNumber: Yup.string()
    .min(8, "Số điên thoại không hợp lệ")
    .max(11, "Số điên thoại không hợp lệ")
    .required("Số điện thoại không được để trông"),
  birthDate: Yup.string().required("Ngày sinh không được để trống"),
  email: Yup.string()
    .required("Vui lòng nhập email của bạn")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Định dạng email không đúng"
    ),
});

export const AddressSchema = () => {
  const { t } = useTranslation("common");
  const schemaAddress = Yup.object().shape({
    province: Yup.object().nullable().required(t("address.form.fieldRequired")),
    district: Yup.object().nullable().required(t("address.form.fieldRequired")),
    ward: Yup.object().nullable().required(t("address.form.fieldRequired")),
    address: Yup.string().required(t("address.form.fieldRequired")),
  });
  return schemaAddress;
};
