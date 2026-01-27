import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { ISekcja } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import RoleList from "../role/RoleList";
import SekcjeUpdate from "./SekcjeUpdate";

const SekcjeDetails = ({ result }: { result: ISekcja }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {t("sekcje.fields.nazwa_sekcji")}
        </Typography>
        <TextField value={result.nazwa_sekcji} />

        <Typography variant="body1" fontWeight="bold">
          {t("sekcje.fields.data_zalozenia")}
        </Typography>
        <TextField value={result.data_zalozenia} />

        <Typography variant="body1" fontWeight="bold">
          {t("sekcje.fields.opis_sekcji")}
        </Typography>
        <TextField value={result.opis_sekcji} />

        <Typography variant="body1" fontWeight="bold">
          {t("sekcje.fields.organizacja")}
        </Typography>
        <LookatButton
          id={result.id}
          resource="organizacje"
          text={result.organizacja_name}
        />
      </Stack>

      <Stack gap={2}>
        <RoleList
          filters={[{ field: "sekcja", operator: "ina", value: result.id }]}
          inShow
          breadcrumb={false}
        />
      </Stack>
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
