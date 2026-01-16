import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IProjekty, IOrganizacja } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import ProjektyUpdate from "./ProjektyUpdate";
import { useTranslation } from "react-i18next";

export default function ProjektyShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IProjekty>
      resource="projekty"
      UpdateComponent={ProjektyUpdate}
      renderChildren={(result) => {
        const { data: organizacjaData } = useOne<IOrganizacja>({
          resource: "organizacje",
          id: result?.organizacja || "",
          queryOptions: {
            enabled: !!result?.organizacja,
          },
        });

        return (
          <>
            <Typography variant="body1" fontWeight="bold">
              {t("projekty.fields.nazwa_projektu")}
            </Typography>
            <TextField value={result?.nazwa_projektu ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("projekty.fields.liczba_pkt_do_stypendium")}
            </Typography>
            <TextField value={result?.liczba_pkt_do_stypendium ?? ""} />

            <Typography variant="body1" fontWeight="bold">
              {t("projekty.fields.opis_projektu")}
            </Typography>
            <TextField value={result?.opis_projektu ?? ""} multiline rows={4} />

            <Typography variant="body1" fontWeight="bold">
              {t("projekty.fields.organizacja")}
            </Typography>
            <TextField
              value={
                organizacjaData?.data?.nazwa_organizacji ??
                result?.organizacja ??
                ""
              }
            />
          </>
        );
      }}
    />
  );
}
