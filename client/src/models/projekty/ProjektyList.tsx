import {
  stringFilterOperators,
  numberFilterOperators,
} from "@/rest-data-provider/filters";
import type { IProjekty } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import ProjektyUpdate from "./ProjektyUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import ProjektyCreate from "./ProjektyCreate";
import ProjektyShow from "./ProjektyShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";

import { type SxProps, type Theme } from "@mui/material";
import LookatButton from "@/components/LookatButton";

export default function ProjektyList({
  filters: initialFilters,
  sx,
  breadcrumb,
  inShow,
}: {
  filters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;
  inShow?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IProjekty>[] = [
    {
      field: "organizacja_name",
      headerName: t("projekty.fields.organizacja"),
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
      field: "nazwa_projektu",
      headerName: t("projekty.fields.nazwa_projektu"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "liczba_pkt_do_stypendium",
      headerName: t("projekty.fields.liczba_pkt_do_stypendium"),
      flex: 0.5,
      minWidth: 100,
      filterOperators: numberFilterOperators,
    },
  ];

  return (
    <ListComponent<IProjekty>
      resource="projekty"
      columns={columns}
      UpdateComponent={ProjektyUpdate}
      CreateComponent={ProjektyCreate}
      ShowComponent={ProjektyShow}
      filters={initialFilters}
      sx={sx}
      breadcrumb={breadcrumb}
      dataGridProps={{ columnVisibilityModel: { organizacja_name: !inShow } }}
    />
  );
}
