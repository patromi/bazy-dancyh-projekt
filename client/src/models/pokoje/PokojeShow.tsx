import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { IPokoje } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import PokojeUpdate from "./PokojeUpdate";
import WydarzeniaList from "../wydarzenia/WydarzeniaList";

export default function PokojeShow() {
  const { t } = useTranslation("translation");

  return (
    <ShowComponent<IPokoje>
      resource="pokoje"
      UpdateComponent={PokojeUpdate}
      renderChildren={(result) => (
        <>
          <Typography variant="body1" fontWeight="bold">
            {t("pokoje.fields.nazwa_pokoju")}
          </Typography>
          <TextFieldComponent value={result.nazwa_pokoju ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("pokoje.fields.pojemnosc")}
          </Typography>
          <TextFieldComponent value={result.pojemnosc ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            {t("pokoje.fields.budynki_id")}
          </Typography>
          <LookatButton
            text={result.budynek_name}
            id={result.budynek}
            resource="budynki"
          />

          <hr />

          <div style={{ minHeight: "400px" }}>
            <WydarzeniaList
              filters={[
                {
                  field: "pokoj",
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
    />
  );
}
