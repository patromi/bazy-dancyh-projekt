import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CzlonkowieCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent
      resource="czlonkowie"
      renderChildren={(form) => (
        <>
          <TextField
            {...form.register("pesel", {
              required: "To pole jest wymagane",
            })}
            label={t("czlonkowie.fields.pesel")}
          />

          <TextField
            {...form.register("imie", {
              required: "To pole jest wymagane",
            })}
            label={t("czlonkowie.fields.imie")}
          />

          <TextField
            {...form.register("drugie_imie")}
            label={t("czlonkowie.fields.drugie_imie")}
          />

          <TextField
            {...form.register("nazwisko", {
              required: "To pole jest wymagane",
            })}
            label={t("czlonkowie.fields.nazwisko")}
          />

          <TextField
            {...form.register("email", {
              required: "To pole jest wymagane",
            })}
            label={t("czlonkowie.fields.email")}
            type="email"
          />

          <TextField
            {...form.register("numer_kontaktowy", {
              required: "To pole jest wymagane",
            })}
            label={t("czlonkowie.fields.numer_kontaktowy")}
          />
        </>
      )}
    />
  );
}
