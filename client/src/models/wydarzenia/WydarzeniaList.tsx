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
import LookatButton from "@/components/LookatButton";

export default function WydarzeniaList({
  sx,
  filters,
  breadcrumb,
  inShow,
}: {
  inShow?: boolean;
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IWydarzenia>[] = [
    {
      field: "organizacja_name",
      headerName: t("wydarzenia.fields.organizacja"),
      flex: 1,
      filterOperators: stringFilterOperators,
      renderCell: (params) => (
        <LookatButton
          resource="organizacje"
          id={params.row.organizacja}
          text={params.value}
        />
      ),
    },
    {
      field: "nazwa_wydarzenia",
      headerName: t("wydarzenia.fields.nazwa_wydarzenia"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "data_rozpoczecia",
      headerName: t("wydarzenia.fields.data_rozpoczecia"),
      flex: 0.5,
      minWidth: 130,
      filterOperators: dateFilterOperators,
      editable: true,
    },
    {
      field: "data_zakonczenia",
      headerName: t("wydarzenia.fields.data_zakonczenia"),
      flex: 0.5,
      minWidth: 130,
      filterOperators: dateFilterOperators,
      editable: true,
    },
    {
      field: "opis_wydarzenia",
      headerName: t("wydarzenia.fields.opis_wydarzenia"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: false,
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
      dataGridProps={{ columnVisibilityModel: { organizacja_name: !inShow } }}
    />
  );
}
