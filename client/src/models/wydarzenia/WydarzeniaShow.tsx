import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IWydarzenia, IOrganizacja, IPokoje } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import WydarzeniaUpdate from "./WydarzeniaUpdate";
import { useTranslation } from "react-i18next";

const WydarzeniaDetails = ({ result }: { result: IWydarzenia | undefined }) => {
  const { t } = useTranslation("translation");
  const { result: organizacjaData } = useOne<IOrganizacja>({
    resource: "organizacje",
    id: result?.organizacja || "",
    queryOptions: {
      enabled: !!result?.organizacja,
    },
  });

  const { result: pokojData } = useOne<IPokoje>({
    resource: "pokoje",
    id: result?.pokoj || "",
    queryOptions: {
      enabled: !!result?.pokoj,
    },
  });

  return (
    <>
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
      <TextField
        value={organizacjaData?.nazwa_organizacji ?? result?.organizacja ?? ""}
      />

      <Typography variant="body1" fontWeight="bold">
        {t("wydarzenia.fields.pokoj")}
      </Typography>
      <TextField value={pokojData?.nazwa_pokoju ?? result?.pokoj ?? ""} />
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
