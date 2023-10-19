import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

export const LoginSchema = () => {
  const { t } = useTranslation("common");
  return yup.object().shape({
    phoneNumber: yup
      .string()
      .required(t("form.field_required"))
      .min(10, t("form.phoneNumber_not_valid"))
      .max(12, t("form.phoneNumber_not_valid"))
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/,
        t("form.phoneNumber_not_valid")
      ),
    password: yup.string().required(t("form.field_required")),
  });
};

