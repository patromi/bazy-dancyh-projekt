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
import LookatButton from "@/components/LookatButton";

export default function OrganizacjeList({
  sx,
  filters,
  breadcrumb,
  inShow,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
  inShow?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IOrganizacja>[] = [
    {
      field: "wydzial_name",
      headerName: t("organizacje.fields.wydzial"),
      flex: 2,
      minWidth: 200,
      renderCell: (params) => (
        <LookatButton
          id={params.row.wydzial}
          resource="wydzialy"
          text={params.row.wydzial_name}
        />
      ),
    },
    {
      field: "nazwa_organizacji",
      headerName: t("organizacje.fields.nazwa_organizacji"),
      flex: 2,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "data_zalozenia",
      headerName: t("organizacje.fields.data_zalozenia"),
      flex: 0.5,
      minWidth: 120,
      filterOperators: dateFilterOperators,
      editable: true,
    },
    {
      field: "czy_aktywna",
      headerName: t("organizacje.fields.czy_aktywna"),
      flex: 0.5,
      minWidth: 120,
      type: "boolean",
      filterOperators: booleanFilterOperators,
      editable: true,
    },
    {
      field: "opiekun_name",
      headerName: t("organizacje.fields.opiekun"),
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <LookatButton
          id={params.row.opiekun}
          resource="opiekunowie"
          text={params.row.opiekun_name}
        />
      ),
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
      dataGridProps={{ columnVisibilityModel: { wydzial_name: !inShow } }}
    />
  );
}
