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
import type { CrudFilters } from "@refinedev/core";

import { type SxProps, type Theme } from "@mui/material";

export default function OrganizacjeList({
  sx,
  filters,
  breadcrumb,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IOrganizacja>[] = [
    {
      field: "wydzial_name",
      headerName: t("organizacje.fields.wydzial_name"),
      flex: 1,
    },
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
      filters={filters}
      sx={sx}
      breadcrumb={breadcrumb}
    />
  );
}
