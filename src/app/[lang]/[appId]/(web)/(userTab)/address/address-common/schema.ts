import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

export const AddressSchema = () => {
  const { t } = useTranslation("common");
  const schemaAddress = yup.object().shape({
    name: yup.string().required(t("address.form.fieldRequired")),
    phone: yup
      .string()
      .required(t("address.form.fieldRequired"))
      .min(10, t("address.form.phoneNumberNotValid"))
      .max(12, t("address.form.phoneNumberNotValid"))
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/,
        t("address.form.phoneNumberNotValid")
      ),
    province: yup.object().nullable().required(t("address.form.fieldRequired")),
    district: yup.object().nullable().required(t("address.form.fieldRequired")),
    ward: yup.object().nullable().required(t("address.form.fieldRequired")),
    address: yup.string().required(t("address.form.fieldRequired")),
  });
  return schemaAddress;
};
