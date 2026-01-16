import {
  stringFilterOperators,
  booleanFilterOperators,
  dateFilterOperators,
} from "@/rest-data-provider/filters";
import type { IOrganizacja } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import OrganizacjeUpdate from "./OrganizacjeUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import OrganizacjeCreate from "./OrganizacjeCreate";
import OrganizacjeShow from "./OrganizacjeShow";
import { useTranslation } from "react-i18next";

export default function OrganizacjeList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IOrganizacja>[] = [
    {
      field: "nazwa_organizacji",
      headerName: t("organizacje.fields.nazwa_organizacji"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "data_zalozenia",
      headerName: t("organizacje.fields.data_zalozenia"),
      flex: 1,
      minWidth: 150,
      filterOperators: dateFilterOperators,
    },
   {
      field: "czy_aktywna",
      headerName: t("organizacje.fields.czy_aktywna"),
      flex: 1,
      minWidth: 100,
      type: "boolean",
      filterOperators: booleanFilterOperators,
    },
  ];

  return (
    <ListComponent<IOrganizacja>
      resource="organizacje"
      columns={columns}
      UpdateComponent={OrganizacjeUpdate}
      CreateComponent={OrganizacjeCreate}
      ShowComponent={OrganizacjeShow}
    />
  );
}
