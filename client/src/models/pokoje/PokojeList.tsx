import {
  stringFilterOperators,
  numberFilterOperators,
} from "@/rest-data-provider/filters";
import type { IPokoje } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import PokojeUpdate from "./PokojeUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import PokojeCreate from "./PokojeCreate";
import PokojeShow from "./PokojeShow";
import { useTranslation } from "react-i18next";
import type { CrudFilters } from "@refinedev/core";

import { type SxProps, type Theme } from "@mui/material";
import LookatButton from "@/components/LookatButton";

export default function PokojeList(props: {
  filters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;
  inShow?: boolean;
}) {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IPokoje>[] = [
    {
      field: "budynek_name",
      headerName: t("pokoje.fields.budynki_id"),
      flex: 2,
      minWidth: 200,
      renderCell: (params) => (
        <LookatButton
          id={params.row.budynek}
          resource="budynki"
          text={params.row.budynek_name}
        />
      ),
    },
    {
      field: "nazwa_pokoju",
      headerName: t("pokoje.fields.nazwa_pokoju"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "pojemnosc",
      headerName: t("pokoje.fields.pojemnosc"),
      flex: 1,
      minWidth: 100,
      filterOperators: numberFilterOperators,
    },
  ];

  return (
    <ListComponent<IPokoje>
      {...props}
      resource="pokoje"
      columns={columns}
      UpdateComponent={PokojeUpdate}
      CreateComponent={PokojeCreate}
      ShowComponent={PokojeShow}
      dataGridProps={{ columnVisibilityModel: { budynek_name: !props.inShow } }}
    />
  );
}
