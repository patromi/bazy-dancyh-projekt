import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IBundynki, IUczelnie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import BudynkiUpdate from "./BudynkiUpdate";
import { useTranslation } from "react-i18next";

export default function BudynkiShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IBundynki>
      resource="budynki"
      UpdateComponent={BudynkiUpdate}
      renderChildren={(result) => {
        // Fetching related Uczelnie to show name instead of ID
        const { result: uczelniaData } = useOne<IUczelnie>({
          resource: "uczelnie",
          id: result?.uczelnia || "",
          queryOptions: {
            enabled: !!result?.uczelnia,
          },
        });

        return (
          <>
            <Typography variant="body1" fontWeight="bold">
              {t("budynki.fields.nazwa_budynku")}
            </Typography>
            <TextField value={result?.nazwa_budynku ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("budynki.fields.adres_budynku")}
            </Typography>
            <TextField value={result?.adres_budynku ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("budynki.fields.uczelnia")}
            </Typography>
            <TextField value={uczelniaData?.nazwa ?? result?.uczelnia ?? ""} />
          </>
        );
      }}
    />
  );
}
