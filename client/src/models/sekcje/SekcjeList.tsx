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
import LookatButton from "@/components/LookatButton";

export default function SekcjeList({
  sx,
  breadcrumb,
  filters,
  inShow,
}: {
  sx?: SxProps<Theme>;
  filters?: CrudFilters;
  breadcrumb?: React.ReactNode;
  inShow?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<ISekcja>[] = [
    {
      field: "organizacja_name",
      headerName: t("sekcje.fields.organizacja"),
      flex: 1,
      minWidth: 200,
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
      minWidth: 130,
      maxWidth: 130,
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
      filters={filters}
      sx={sx}
      breadcrumb={breadcrumb}
      dataGridProps={{ columnVisibilityModel: { organizacja_name: !inShow } }}
    />
  );
}
