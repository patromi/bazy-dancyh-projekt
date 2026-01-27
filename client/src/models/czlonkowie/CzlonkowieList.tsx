import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { ICzlonkowie } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import CzlonkowieUpdate from "./CzlonkowieUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import CzlonkowieCreate from "./CzlonkowieCreate";
import CzlonkowieShow from "./CzlonkowieShow";
import { useTranslation } from "react-i18next";
import { type CrudFilters } from "@refinedev/core";

export default function CzlonkowieList(props: {
  filters?: CrudFilters;
  inShow?: boolean;
  breadcrumb?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<ICzlonkowie>[] = [
    {
      field: "pesel",
      headerName: t("czlonkowie.fields.pesel"),
      flex: 0.5,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "imie",
      headerName: t("czlonkowie.fields.imie"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "drugie_imie",
      headerName: t("opiekunowie.fields.drugie_imie"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "nazwisko",
      headerName: t("czlonkowie.fields.nazwisko"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "email",
      headerName: t("czlonkowie.fields.email"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: true,
    },
  ];

  return (
    <ListComponent<ICzlonkowie>
      breadcrumb={props.breadcrumb}
      filters={props.filters}
      resource="czlonkowie"
      columns={columns}
      UpdateComponent={CzlonkowieUpdate}
      CreateComponent={CzlonkowieCreate}
      ShowComponent={CzlonkowieShow}
      dataGridProps={{
        columnVisibilityModel: { organizacja_name: !props.inShow },
      }}
    />
  );
}
