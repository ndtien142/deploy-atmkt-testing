import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

export const SubscribeEmailSchema = () => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    email: yup
      .string()
      .email(t("schema.email"))
      .required(t("schema.requiredMail")),
  });
};
