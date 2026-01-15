import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IUczelnie } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import UczelnieUpdate from "./UczelnieUpdate";

import ListPage from "@/components/ListPage";

export default function UczelnieList() {
  const columns: GridColDef<IUczelnie>[] = [
    {
      field: "nazwa",
      headerName: "Nazwa",
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "adres_uczelni",
      headerName: "Adres",
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListPage<IUczelnie>
      resource="uczelnie"
      columns={columns}
      updateComponent={UczelnieUpdate}
    />
  );
}
