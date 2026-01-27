import ListComponent from "@/components/CrudComponents/ListComponent";
import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IWydzialy } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import type { CrudFilters } from "@refinedev/core";
import { useTranslation } from "react-i18next";
import WydzialyCreate from "./WydzialyCreate";
import WydzialyShow from "./WydzialyShow";
import WydzialyUpdate from "./WydzialyUpdate";

import LookatButton from "@/components/LookatButton";
import { type SxProps, type Theme } from "@mui/material";

export default function WydzialyList({
  initialFilters,
  sx,
  breadcrumb,
  inShow,
}: {
  inShow?: boolean;
  initialFilters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IWydzialy>[] = [
    {
      field: "uczelnia_name",
      headerName: t("wydzialy.fields.uczelnia"),
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <LookatButton
          id={params.row.uczelnia}
          resource="uczelnie"
          text={params.row.uczelnia_name}
        />
      ),
    },
    {
      field: "nazwa_wydzialu",
      headerName: t("wydzialy.fields.nazwa_wydzialu"),
      flex: 1,
      minWidth: 100,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "adres_wydzialu",
      headerName: t("wydzialy.fields.adres_wydzialu"),
      flex: 1,
      minWidth: 100,
      filterOperators: stringFilterOperators,
      editable: true,
    },
  ];

  return (
    <ListComponent<IWydzialy>
      resource="wydzialy"
      columns={columns}
      UpdateComponent={WydzialyUpdate}
      CreateComponent={WydzialyCreate}
      ShowComponent={WydzialyShow}
      filters={initialFilters}
      sx={sx}
      breadcrumb={breadcrumb}
      dataGridProps={{ columnVisibilityModel: { uczelnia_name: !inShow } }}
    />
  );
}
