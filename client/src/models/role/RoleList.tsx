import {
  stringFilterOperators,
  numberFilterOperators,
} from "@/rest-data-provider/filters";
import type { IRole } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import RoleUpdate from "./RoleUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import RoleCreate from "./RoleCreate";
import RoleShow from "./RoleShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";
import { type SxProps, type Theme } from "@mui/material";
import LookatButton from "@/components/LookatButton";

export default function RoleList({
  sx,
  filters,
  breadcrumb,
  inShow,
}: {
  inShow?: boolean;
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IRole>[] = [
    {
      field: "sekcja_name",
      headerName: t("role.fields.sekcja"),
      flex: 1,
      filterOperators: numberFilterOperators,
      renderCell: (params) => (
        <LookatButton
          resource="sekcje"
          id={params.row.sekcja}
          text={params.value}
        />
      ),
    },
    {
      field: "czlonek_name",
      headerName: t("role.fields.czlonek"),
      flex: 1,
      filterOperators: numberFilterOperators,
      renderCell: (params) => (
        <LookatButton
          resource="czlonkowie"
          id={params.row.czlonek}
          text={params.value}
        />
      ),
    },
    {
      field: "nazwa_roli",
      headerName: t("role.fields.nazwa_roli"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "liczba_pkt_do_stypendium",
      headerName: t("role.fields.liczba_pkt_do_stypendium"),
      flex: 0.5,
      minWidth: 150,
      filterOperators: numberFilterOperators,
      editable: true,
    },
  ];

  return (
    <ListComponent<IRole>
      resource="role"
      columns={columns}
      UpdateComponent={RoleUpdate}
      CreateComponent={RoleCreate}
      ShowComponent={RoleShow}
      filters={filters}
      sx={sx}
      breadcrumb={breadcrumb}
      dataGridProps={{ columnVisibilityModel: { sekcja_name: !inShow } }}
    />
  );
}
