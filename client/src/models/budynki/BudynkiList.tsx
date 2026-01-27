import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IBudynki } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import BudynkiUpdate from "./BudynkiUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import BudynkiCreate from "./BudynkiCreate";
import BudynkiShow from "./BudynkiShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";

import { type SxProps, type Theme } from "@mui/material";
import LookatButton from "@/components/LookatButton";

export default function BudynkiList({
  initialFilters,
  sx,
  breadcrumb,
  inShow,
}: {
  initialFilters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;
  inShow?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IBudynki>[] = [
    {
      field: "uczelnia_name",
      headerName: t("budynki.fields.uczelnia"),
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
      field: "nazwa_budynku",
      headerName: t("budynki.fields.nazwa_budynku"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "adres_budynku",
      headerName: t("budynki.fields.adres_budynku"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<IBudynki>
      resource="budynki"
      columns={columns}
      UpdateComponent={BudynkiUpdate}
      CreateComponent={BudynkiCreate}
      ShowComponent={BudynkiShow}
      filters={initialFilters}
      sx={sx}
      breadcrumb={breadcrumb}
      dataGridProps={{ columnVisibilityModel: { uczelnia_name: !inShow } }}
    />
  );
}
