import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { ICzlonkowie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import CzlonkowieUpdate from "./CzlonkowieUpdate";
import { useTranslation } from "react-i18next";

export default function CzlonkowieShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<ICzlonkowie>
      resource="czlonkowie"
      UpdateComponent={CzlonkowieUpdate}
      renderChildren={(result) => (
        <>
          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.pesel")}
          </Typography>
          <TextField value={result?.pesel ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.imie")}
          </Typography>
          <TextField value={result?.imie ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.drugie_imie")}
          </Typography>
          <TextField value={result?.drugie_imie ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.nazwisko")}
          </Typography>
          <TextField value={result?.nazwisko ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.email")}
          </Typography>
          <TextField value={result?.email ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("czlonkowie.fields.numer_kontaktowy")}
          </Typography>
          <TextField value={result?.numer_kontaktowy ?? ""} />
        </>
      )}
    />
  );
}
