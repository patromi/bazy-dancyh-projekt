import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UczelnieCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent
      resource="uczelnie"
      renderChildren={(form) => (
        <>
          <TextField
            {...form.register("nazwa", {
              required: "To pole jest wymagane",
            })}
            name="nazwa"
            label={t("uczelnie.fields.nazwa")}
          />

          <TextField
            {...form.register("adres_uczelni", {
              required: "To pole jest wymagane",
            })}
            name="adres_uczelni"
            label={t("uczelnie.fields.adres_uczelni")}
          />
        </>
      )}
    />
  );
}
