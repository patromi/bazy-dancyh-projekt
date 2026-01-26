import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { ISekcja, IOrganizacja } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import SekcjeUpdate from "./SekcjeUpdate";
import { useTranslation } from "react-i18next";

const SekcjeDetails = ({ result }: { result: ISekcja | undefined }) => {
  const { t } = useTranslation("translation");
  const { result: organizacjaData } = useOne<IOrganizacja>({
    resource: "organizacje",
    id: result?.organizacja || "",
    queryOptions: {
      enabled: !!result?.organizacja,
    },
  });

  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {t("sekcje.fields.nazwa_sekcji")}
      </Typography>
      <TextField value={result?.nazwa_sekcji ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("sekcje.fields.data_zalozenia")}
      </Typography>
      <TextField value={result?.data_zalozenia ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("sekcje.fields.opis_sekcji")}
      </Typography>
      <TextField value={result?.opis_sekcji ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("sekcje.fields.organizacja")}
      </Typography>
      <TextField
        value={organizacjaData?.nazwa_organizacji ?? result?.organizacja ?? ""}
      />
    </>
  );
};

export default function SekcjeShow() {
  return (
    <ShowComponent<ISekcja>
      resource="sekcje"
      UpdateComponent={SekcjeUpdate}
      renderChildren={(result) => <SekcjeDetails result={result} />}
    />
  );
}
