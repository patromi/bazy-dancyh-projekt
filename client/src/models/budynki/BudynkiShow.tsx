import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { IBudynki } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import PokojeList from "../pokoje/PokojeList";
import BudynkiUpdate from "./BudynkiUpdate";

const BudynkiDetails = ({ result }: { result: IBudynki }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {t("budynki.fields.nazwa_budynku")}
        </Typography>
        <TextField value={result.nazwa_budynku} />

        <Typography variant="body1" fontWeight="bold">
          {t("budynki.fields.adres_budynku")}
        </Typography>
        <TextField value={result.adres_budynku} />

        <Typography variant="body1" fontWeight="bold">
          {t("budynki.fields.uczelnia")}
        </Typography>
        <LookatButton
          text={result.uczelnia_name}
          id={result.uczelnia}
          resource="uczelnie"
        />
      </Stack>

      <Stack gap={2}>
        <PokojeList
          inShow
          filters={[{ field: "budynek", operator: "ina", value: result.id }]}
          sx={{ height: "100%", p: 0 }}
          breadcrumb={false}
        />
      </Stack>
    </>
  );
};

export default function BudynkiShow() {
  return (
    <ShowComponent<IBudynki>
      resource="budynki"
      UpdateComponent={BudynkiUpdate}
      renderChildren={(result) => <BudynkiDetails result={result} />}
    />
  );
}
