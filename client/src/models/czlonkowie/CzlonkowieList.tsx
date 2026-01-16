import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { ICzlonkowie } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import CzlonkowieUpdate from "./CzlonkowieUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import CzlonkowieCreate from "./CzlonkowieCreate";
import CzlonkowieShow from "./CzlonkowieShow";
import { useTranslation } from "react-i18next";

export default function CzlonkowieList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<ICzlonkowie>[] = [
    {
      field: "pesel",
      headerName: t("czlonkowie.fields.pesel"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
    },
    {
      field: "imie",
      headerName: t("czlonkowie.fields.imie"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
    },
    {
      field: "nazwisko",
      headerName: t("czlonkowie.fields.nazwisko"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
    },
    {
      field: "email",
      headerName: t("czlonkowie.fields.email"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<ICzlonkowie>
      resource="czlonkowie"
      columns={columns}
      UpdateComponent={CzlonkowieUpdate}
      CreateComponent={CzlonkowieCreate}
      ShowComponent={CzlonkowieShow}
    />
  );
}
