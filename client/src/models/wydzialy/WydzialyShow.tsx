import ShowComponent from "@/components/CrudComponents/ShowComponent";
import LookatButton from "@/components/LookatButton";
import type { IWydzialy } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useTranslation } from "react-i18next";
import OrganizacjeList from "../organizacje/OrganizacjeList";
import WydzialyUpdate from "./WydzialyUpdate";

const WydzialyDetails = (props: { result: IWydzialy }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {t("wydzialy.fields.nazwa_wydzialu")}
        </Typography>
        <TextField value={props.result.nazwa_wydzialu} />

        <Typography variant="body1" fontWeight="bold">
          {t("wydzialy.fields.adres_wydzialu")}
        </Typography>
        <TextField value={props.result.adres_wydzialu} />

        <Typography variant="body1" fontWeight="bold">
          {t("wydzialy.fields.uczelnia")}
        </Typography>
        <LookatButton
          text={props.result.uczelnia_name}
          id={props.result.uczelnia}
          resource="uczelnie"
        />
      </Stack>

      <OrganizacjeList
        inShow
        filters={[
          { field: "wydzial", operator: "ina", value: props.result.id },
        ]}
        sx={{ height: "100%", p: 0 }}
        breadcrumb={false}
      />
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
