import {
  useDataGrid,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
} from "@refinedev/mui";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { IUczelnie } from "@/types";

export default function UczelnieList() {
  const { dataGridProps } = useDataGrid();

  const columns: GridColDef<IUczelnie>[] = [
    {
      field: "nazwa",
      headerName: "Nazwa",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "adres_uczelni",
      headerName: "Adres",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "actions",
      headerName: "Akcje",
      type: "actions",
      width: 150,
      renderCell: function render({ row }) {
        return (
          <>
            <ShowButton hideText recordItemId={row.id} />
            <EditButton hideText recordItemId={row.id} />
            <DeleteButton hideText recordItemId={row.id} />
          </>
        );
      },
    },
  ];

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} />
    </List>
  );
}
