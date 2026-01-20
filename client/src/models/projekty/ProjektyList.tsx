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

export default function ProjektyList({
  initialFilters,
  sx,
  breadcrumb,
}: {
  initialFilters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IProjekty>[] = [
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
      flex: 1,
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
      initialFilters={initialFilters}
      sx={sx}
      breadcrumb={breadcrumb}
    />
  );
}
