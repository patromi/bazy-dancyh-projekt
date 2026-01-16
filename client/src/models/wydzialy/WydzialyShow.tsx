import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IWydzialy, IUczelnie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import WydzialyUpdate from "./WydzialyUpdate";
import { useTranslation } from "react-i18next";

export default function WydzialyShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IWydzialy>
      resource="wydzialy"
      UpdateComponent={WydzialyUpdate}
      renderChildren={(result) => {
        const { data: uczelniaData } = useOne<IUczelnie>({
          resource: "uczelnie",
          id: result?.uczelnia || "",
          queryOptions: {
            enabled: !!result?.uczelnia,
          },
        });

        return (
          <>
            <Typography variant="body1" fontWeight="bold">
              {t("wydzialy.fields.nazwa_wydzialu")}
            </Typography>
            <TextField value={result?.nazwa_wydzialu ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("wydzialy.fields.adres_wydzialu")}
            </Typography>
            <TextField value={result?.adres_wydzialu ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("wydzialy.fields.uczelnia")}
            </Typography>
            <TextField
              value={uczelniaData?.data?.nazwa ?? result?.uczelnia ?? ""}
            />
          </>
        );
      }}
    />
  );
}
