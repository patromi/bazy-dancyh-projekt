import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { ICzlonkowie } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import CzlonkowieUpdate from "./CzlonkowieUpdate";
import { useTranslation } from "react-i18next";
import LookatButton from "@/components/LookatButton";

export default function CzlonkowieShow() {
  const { t } = useTranslation("translation");

  
  return (
    <ShowComponent<ICzlonkowie>
      resource="czlonkowie"
      UpdateComponent={CzlonkowieUpdate}
      renderChildren={(result) => {
        return (
          <>
            <Stack gap={1}>
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.pesel")}
              </Typography>
              <TextField value={result.pesel} />
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.imie")}
              </Typography>
              <TextField value={result.imie} />
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.drugie_imie")}
              </Typography>
              <TextField value={result.drugie_imie} />
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.nazwisko")}
              </Typography>
              <TextField value={result.nazwisko} />
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.email")}
              </Typography>
              <TextField value={result.email} />
              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.numer_kontaktowy")}
              </Typography>
              <TextField value={result.numer_kontaktowy} />

              <Typography variant="body1" fontWeight="bold">
                {t("czlonkowie.fields.organizacje")}
              </Typography>

              {result.organizacje.map((org) => (
                <LookatButton
                  resource="organizacje"
                  key={org.id}
                  id={org.id}
                  text={org.nazwa_organizacji}
                />
              ))}
            </Stack>
          </>
        );
      }}
    />
  );
}
