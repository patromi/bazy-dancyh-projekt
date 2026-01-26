import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IRole, ISekcja, ICzlonkowie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import { useOne } from "@refinedev/core";
import RoleUpdate from "./RoleUpdate";
import { useTranslation } from "react-i18next";

const RoleDetails = ({ result }: { result: IRole | undefined }) => {
  const { t } = useTranslation("translation");
  const { result: sekcjaData } = useOne<ISekcja>({
    resource: "sekcje",
    id: result?.sekcja || "",
    queryOptions: {
      enabled: !!result?.sekcja,
    },
  });

  const { result: czlonekData } = useOne<ICzlonkowie>({
    resource: "czlonkowie",
    id: result?.czlonek || "",
    queryOptions: {
      enabled: !!result?.czlonek,
    },
  });

  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {t("role.fields.nazwa_roli")}
      </Typography>
      <TextField value={result?.nazwa_roli ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("role.fields.liczba_pkt_do_stypendium")}
      </Typography>
      <TextField value={result?.liczba_pkt_do_stypendium ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("role.fields.sekcja")}
      </Typography>
      <TextField value={sekcjaData?.nazwa_sekcji ?? result?.sekcja ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {t("role.fields.czlonek")}
      </Typography>
      <TextField
        value={
          czlonekData
            ? `${czlonekData.imie} ${czlonekData.nazwisko}`
            : (result?.czlonek ?? "")
        }
      />
    </>
  );
};

export default function RoleShow() {
  return (
    <ShowComponent<IRole>
      resource="role"
      UpdateComponent={RoleUpdate}
      renderChildren={(result) => <RoleDetails result={result} />}
    />
  );
}
