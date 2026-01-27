import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IWydarzenia, IOrganizacja, IPokoje } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import WydarzeniaUpdate from "./WydarzeniaUpdate";
import { useTranslation } from "react-i18next";
import LookatButton from "@/components/LookatButton";

const WydarzeniaDetails = ({ result }: { result: IWydarzenia }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.nazwa_wydarzenia")}
        </Typography>
        <TextField value={result?.nazwa_wydarzenia ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.data_rozpoczecia")}
        </Typography>
        <TextField value={result?.data_rozpoczecia ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.data_zakonczenia")}
        </Typography>
        <TextField value={result?.data_zakonczenia ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.opis_wydarzenia")}
        </Typography>
        <TextField value={result?.opis_wydarzenia ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.organizacja")}
        </Typography>
        <LookatButton
          text={result.organizacja_name}
          id={result.organizacja}
          resource="organizacje"
        />
        <Typography variant="body1" fontWeight="bold">
          {t("wydarzenia.fields.pokoj")}
        </Typography>
        <LookatButton
          text={result.pokoj_name}
          id={result.pokoj}
          resource="pokoje"
        />
      </Stack>

      <Stack gap={2}></Stack>
    </>
  );
};

export default function WydarzeniaShow() {
  return (
    <ShowComponent<IWydarzenia>
      resource="wydarzenia"
      UpdateComponent={WydarzeniaUpdate}
      renderChildren={(result) => <WydarzeniaDetails result={result} />}
    />
  );
}
