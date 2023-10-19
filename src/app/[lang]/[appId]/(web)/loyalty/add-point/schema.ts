import useTranslation from "next-translate/useTranslation";
import * as yup from "yup";

export const AddPointSchema = () => {
  const { t } = useTranslation("common");
  return yup.object().shape({
    code: yup
      .string()
      .required(t("form.field_required")),
  });
};

