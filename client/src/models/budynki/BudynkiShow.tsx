import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IBundynki, IUczelnie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import BudynkiUpdate from "./BudynkiUpdate";
import { useTranslation } from "react-i18next";
import PokojeList from "../pokoje/PokojeList";

const BudynkiDetails = ({ result }: { result: IBundynki | undefined }) => {
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
      <TextField value={uczelniaData?.data?.nazwa ?? result?.uczelnia ?? ""} />

      {result?.id && (
        <>
          <div style={{ height: "600px", width: "100%", marginTop: "32px" }}>
            <PokojeList
              initialFilters={[
                { field: "budynek", operator: "eq", value: result.id },
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

export default function BudynkiShow() {
  return (
    <ShowComponent<IBundynki>
      resource="budynki"
      UpdateComponent={BudynkiUpdate}
      renderChildren={(result) => <BudynkiDetails result={result} />}
    />
  );
}
