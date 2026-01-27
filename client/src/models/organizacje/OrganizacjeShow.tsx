import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { IOrganizacja } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import ProjektyList from "../projekty/ProjektyList";
import SekcjeList from "../sekcje/SekcjeList";
import OrganizacjeUpdate from "./OrganizacjeUpdate";

const OrganizacjeDetails = ({ result }: { result: IOrganizacja }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.nazwa_organizacji")}
      </Typography>
      <TextField value={result.nazwa_organizacji} />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.data_zalozenia")}
      </Typography>
      <TextField value={result.data_zalozenia} />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.czy_aktywna")}
      </Typography>

      <TextField
        value={result.czy_aktywna ? t("common.yes") : t("common.no")}
      />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.wydzial")}
      </Typography>
      <LookatButton
        resource="wydzialy"
        id={result.wydzial}
        text={result.wydzial_name}
      />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.opiekun")}
      </Typography>
      <LookatButton
        resource="opiekunowie"
        id={result.opiekun}
        text={result.opiekun_name}
      />

      <hr />

      <div style={{ minHeight: "400px" }}>
        <ProjektyList
          initialFilters={[
            {
              field: "organizacja",
              operator: "eq",
              value: result.id,
            },
          ]}
          sx={{ height: "100%", p: 0 }}
          breadcrumb={false}
        />
      </div>

      <div style={{ minHeight: "400px" }}>
        <SekcjeList
          initialFilters={[
            {
              field: "organizacja",
              operator: "eq",
              value: result.id,
            },
          ]}
          sx={{ height: "100%", p: 0 }}
          breadcrumb={false}
        />
      </div>
    </>
  );
};

export default function OrganizacjeShow() {
  return (
    <ShowComponent<IOrganizacja>
      resource="organizacje"
      UpdateComponent={OrganizacjeUpdate}
      renderChildren={(result) => <OrganizacjeDetails result={result} />}
    />
  );
}
