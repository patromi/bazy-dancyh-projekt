import {
  stringFilterOperators,
  dateFilterOperators,
} from "@/rest-data-provider/filters";
import type { ISekcja } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import SekcjeUpdate from "./SekcjeUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import SekcjeCreate from "./SekcjeCreate";
import SekcjeShow from "./SekcjeShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";
import { type SxProps, type Theme } from "@mui/material";

export default function SekcjeList({
  sx,
  breadcrumb,
  initialFilters,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
  initialFilters?: CrudFilters;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<ISekcja>[] = [
    {
      field: "nazwa_sekcji",
      headerName: t("sekcje.fields.nazwa_sekcji"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "data_zalozenia",
      headerName: t("sekcje.fields.data_zalozenia"),
      flex: 1,
      minWidth: 150,
      filterOperators: dateFilterOperators,
    },
    {
      field: "opis_sekcji",
      headerName: t("sekcje.fields.opis_sekcji"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<ISekcja>
      resource="sekcje"
      columns={columns}
      UpdateComponent={SekcjeUpdate}
      CreateComponent={SekcjeCreate}
      ShowComponent={SekcjeShow}
      filters={initialFilters}
      sx={sx}
      breadcrumb={breadcrumb}
    />
  );
}
