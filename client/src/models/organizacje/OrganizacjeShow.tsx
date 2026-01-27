import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { IOrganizacja } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import ProjektyList from "../projekty/ProjektyList";
import SekcjeList from "../sekcje/SekcjeList";
import OrganizacjeUpdate from "./OrganizacjeUpdate";
import CzlonkowieList from "../czlonkowie/CzlonkowieList";
import RoleList from "../role/RoleList";

const OrganizacjeDetails = ({ result }: { result: IOrganizacja }) => {
  const { t } = useTranslation("translation");

  console.log(result);

  return (
    <>
      <Stack gap={1}>
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
      </Stack>

      <Stack gap={2}>
        <ProjektyList
          filters={[
            { field: "organizacja", operator: "ina", value: result.id },
          ]}
          inShow
          breadcrumb={false}
        />

        <SekcjeList
          filters={[
            { field: "organizacja", operator: "ina", value: result.id },
          ]}
          inShow
          breadcrumb={false}
        />
      </Stack>
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
