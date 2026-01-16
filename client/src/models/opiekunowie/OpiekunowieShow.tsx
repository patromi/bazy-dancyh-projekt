import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IOpiekunowie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import OpiekunowieUpdate from "./OpiekunowieUpdate";
import { useTranslation } from "react-i18next";

export default function OpiekunowieShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IOpiekunowie>
      resource="opiekunowie"
      UpdateComponent={OpiekunowieUpdate}
      renderChildren={(result) => (
        <>
          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.pesel")}
          </Typography>
          <TextField value={result?.pesel ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.imie")}
          </Typography>
          <TextField value={result?.imie ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.drugie_imie")}
          </Typography>
          <TextField value={result?.drugie_imie ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.nazwisko")}
          </Typography>
          <TextField value={result?.nazwisko ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.email")}
          </Typography>
          <TextField value={result?.email ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("opiekunowie.fields.numer_kontaktowy")}
          </Typography>
          <TextField value={result?.numer_kontaktowy ?? ""} />
        </>
      )}
    />
  );
}
