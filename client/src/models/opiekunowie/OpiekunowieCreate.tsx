import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function OpiekunowieCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent
      resource="opiekunowie"
      renderChildren={(form) => (
        <>
          <TextField
            {...form.register("pesel", {
              required: "To pole jest wymagane",
            })}
            label={t("opiekunowie.fields.pesel")}
          />

          <TextField
            {...form.register("imie", {
              required: "To pole jest wymagane",
            })}
            label={t("opiekunowie.fields.imie")}
          />

          <TextField
            {...form.register("drugie_imie")}
            label={t("opiekunowie.fields.drugie_imie")}
          />

          <TextField
            {...form.register("nazwisko", {
              required: "To pole jest wymagane",
            })}
            label={t("opiekunowie.fields.nazwisko")}
          />

          <TextField
            {...form.register("email", {
              required: "To pole jest wymagane",
            })}
            label={t("opiekunowie.fields.email")}
            type="email"
          />

          <TextField
            {...form.register("numer_kontaktowy", {
              required: "To pole jest wymagane",
            })}
            label={t("opiekunowie.fields.numer_kontaktowy")}
          />
        </>
      )}
    />
  );
}
