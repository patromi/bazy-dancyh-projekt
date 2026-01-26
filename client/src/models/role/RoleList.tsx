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

export default function RoleList({
  sx,
  filters,
  breadcrumb,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IRole>[] = [
    {
      field: "nazwa_roli",
      headerName: t("role.fields.nazwa_roli"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "liczba_pkt_do_stypendium",
      headerName: t("role.fields.liczba_pkt_do_stypendium"),
      flex: 1,
      minWidth: 150,
      filterOperators: numberFilterOperators,
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
    />
  );
}
