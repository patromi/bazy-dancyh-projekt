import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IPokoje } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import PokojeUpdate from "./PokojeUpdate";
import ForeignShowField from "@/components/Fields/ForeignShowField";

export default function PokojeShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IPokoje>
      resource="pokoje"
      UpdateComponent={PokojeUpdate}
      renderChildren={(result) => (
        <>
          <Typography variant="body1" fontWeight="bold">
            {t("pokoje.fields.nazwa_pokoju")}
          </Typography>
          <TextFieldComponent value={result?.nazwa_pokoju ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("pokoje.fields.pojemnosc")}
          </Typography>
          <TextFieldComponent value={result?.pojemnosc ?? ""} />

          <ForeignShowField<IPokoje>
            label={t("pokoje.fields.budynki_id")}
            resource="budynki"
            id={result?.budynek || ""}
            valueLabel="nazwa_budynku"
          />
        </>
      )}
    />
  );
}
