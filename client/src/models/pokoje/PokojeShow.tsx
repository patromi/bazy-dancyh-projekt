import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IPokoje, IBundynki } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import PokojeUpdate from "./PokojeUpdate";
import { useTranslation } from "react-i18next";

export default function PokojeShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IPokoje>
      resource="pokoje"
      UpdateComponent={PokojeUpdate}
      renderChildren={(result) => {
        const { result: budynekData } = useOne<IBundynki>({
          resource: "budynki",
          id: result?.budynek || "",
          queryOptions: {
            enabled: !!result?.budynek,
          },
        });

        return (
          <>
            <Typography variant="body1" fontWeight="bold">
              {t("pokoje.fields.nazwa_pokoju")}
            </Typography>
            <TextField value={result?.nazwa_pokoju ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("pokoje.fields.pojemnosc")}
            </Typography>
            <TextField value={result?.pojemnosc ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("pokoje.fields.budynki_id")}
            </Typography>
            <TextField
              value={budynekData?.nazwa_budynku ?? result?.budynek ?? ""}
            />
          </>
        );
      }}
    />
  );
}
