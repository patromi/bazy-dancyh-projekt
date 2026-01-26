import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IWydzialy } from "@/types";
import { Typography } from "@mui/material";
import { useOne, useParsed, type BaseKey } from "@refinedev/core";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import OrganizacjeList from "../organizacje/OrganizacjeList";
import WydzialyUpdate from "./WydzialyUpdate";

const WydzialyDetails = (props: { id: BaseKey | undefined }) => {
  const { t } = useTranslation("translation");

  const { id: urlId } = useParsed();
  const id = useMemo(() => props.id ?? urlId, []);

  const { result } = useOne<IWydzialy>({
    resource: "wydzialy",
    id: id,
    queryOptions: { enabled: !!id },
  });

  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {t("wydzialy.fields.nazwa_wydzialu")}
      </Typography>
      <TextField value={result ? result.nazwa_wydzialu : ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("wydzialy.fields.adres_wydzialu")}
      </Typography>
      <TextField value={result ? result.adres_wydzialu : ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("wydzialy.fields.uczelnia")}
      </Typography>
      <TextField value={result ? result.uczelnia : ""} />

      {result && (
        <>
          <div style={{ height: "500px", marginTop: "32px" }}>
            <OrganizacjeList
              filters={[
                { field: "wydzial", operator: "ina", value: result.id },
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

export default function WydzialyShow() {
  return (
    <ShowComponent<IWydzialy>
      resource="wydzialy"
      UpdateComponent={WydzialyUpdate}
      renderChildren={(result) => <WydzialyDetails id={result?.id} />}
    />
  );
}
