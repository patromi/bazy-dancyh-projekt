import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IWydzialy, IUczelnie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import WydzialyUpdate from "./WydzialyUpdate";
import { useTranslation } from "react-i18next";
import OrganizacjeList from "../organizacje/OrganizacjeList";

const WydzialyDetails = ({ result }: { result: IWydzialy | undefined }) => {
  const { t } = useTranslation("translation");
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
      <TextField value={uczelniaData?.data?.nazwa ?? result?.uczelnia ?? ""} />

      {result?.id && (
        <>
          <div style={{ height: "500px", marginTop: "32px" }}>
            <OrganizacjeList
              initialFilters={[
                { field: "wydzial", operator: "eq", value: result.id },
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
      renderChildren={(result) => <WydzialyDetails result={result} />}
    />
  );
}
