import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IOrganizacja, IWydzialy, IOpiekunowie } from "@/types";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import OrganizacjeUpdate from "./OrganizacjeUpdate";
import { useTranslation } from "react-i18next";
import ProjektyList from "../projekty/ProjektyList";
import SekcjeList from "../sekcje/SekcjeList";

const OrganizacjeDetails = ({
  result,
}: {
  result: IOrganizacja | undefined;
}) => {
  const { t } = useTranslation("translation");
  const { result: wydzialData } = useOne<IWydzialy>({
    resource: "wydzialy",
    id: result?.wydzial || "",
    queryOptions: {
      enabled: !!result?.wydzial,
    },
  });

  const { result: opiekunData } = useOne<IOpiekunowie>({
    resource: "opiekunowie",
    id: result?.opiekun || "",
    queryOptions: {
      enabled: !!result?.opiekun,
    },
  });


  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.nazwa_organizacji")}
      </Typography>
      <TextField value={result?.nazwa_organizacji ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.data_zalozenia")}
      </Typography>
      <TextField value={result?.data_zalozenia ?? ""} />

      <FormControlLabel
        control={<Checkbox checked={result?.czy_aktywna ?? false} disabled />}
        label={t("organizacje.fields.czy_aktywna")}
      />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.wydzial")}
      </Typography>
      <TextField value={wydzialData?.nazwa_wydzialu ?? result?.wydzial ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("organizacje.fields.opiekun")}
      </Typography>
      <TextField
        value={
          opiekunData
            ? `${opiekunData.imie} ${opiekunData.nazwisko}`
            : (result?.opiekun ?? "")
        }
      />

      {result?.id && (
        <>
          <div style={{ minHeight: "400px", marginTop: "32px" }}>
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

          <div style={{ minHeight: "400px", marginTop: "32px" }}>
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
      )}
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
