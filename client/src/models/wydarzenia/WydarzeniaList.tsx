import {
  stringFilterOperators,
  dateFilterOperators,
} from "@/rest-data-provider/filters";
import type { IWydarzenia } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import WydarzeniaUpdate from "./WydarzeniaUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import WydarzeniaCreate from "./WydarzeniaCreate";
import WydarzeniaShow from "./WydarzeniaShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";
import { type SxProps, type Theme } from "@mui/material";

export default function WydarzeniaList({
  sx,
  filters,
  breadcrumb,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IWydarzenia>[] = [
    {
      field: "nazwa_wydarzenia",
      headerName: t("wydarzenia.fields.nazwa_wydarzenia"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "data_rozpoczecia",
      headerName: t("wydarzenia.fields.data_rozpoczecia"),
      flex: 1,
      minWidth: 150,
      filterOperators: dateFilterOperators,
    },
    {
      field: "data_zakonczenia",
      headerName: t("wydarzenia.fields.data_zakonczenia"),
      flex: 1,
      minWidth: 150,
      filterOperators: dateFilterOperators,
    },
    {
      field: "opis_wydarzenia",
      headerName: t("wydarzenia.fields.opis_wydarzenia"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<IWydarzenia>
      resource="wydarzenia"
      columns={columns}
      UpdateComponent={WydarzeniaUpdate}
      CreateComponent={WydarzeniaCreate}
      ShowComponent={WydarzeniaShow}
      filters={filters}
      sx={sx}
      breadcrumb={breadcrumb}
    />
  );
}
