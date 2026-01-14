import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";

import { Drawer } from "@mui/material";

import type { IUczelnie } from "@/types";
import { stringFilterOperators } from "@/utils/filters";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import React from "react";
import UczelnieUpdate from "./UczelnieUpdate";

export default function UczelnieList() {
  const [editId, setEditId] = React.useState<number | null>(null);

  const { dataGridProps } = useDataGrid<IUczelnie>();

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
    {
      field: "actions",
      headerName: "Akcje",
      type: "actions",
      width: 150,
      renderCell: ({ row }) => (
        <>
          <ShowButton hideText recordItemId={row.id} />
          <EditButton hideText onClick={() => setEditId(row.id)} />
          <DeleteButton hideText recordItemId={row.id} />
        </>
      ),
    },
  ];

  return (
    <>
      <List resource="uczelnie" title="Uczelnie">
        <DataGrid {...dataGridProps} columns={columns} />
      </List>

      <Drawer
        classes={{ paper: "min-w-[500px]" }}
        ModalProps={{}}
        anchor="right"
        open={editId !== null}
        onClose={() => setEditId(null)}
      >
        <UczelnieUpdate
          id={editId ?? undefined}
          onSuccess={() => setEditId(null)}
          onClose={() => setEditId(null)}
        />
      </Drawer>
    </>
  );
}
