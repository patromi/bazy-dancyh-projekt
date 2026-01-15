import { List, useDataGrid } from "@refinedev/mui";

import { Box, Drawer } from "@mui/material";

import DataGridCustomFooter from "@/components/DataGrid/DataGridCustomFooter";
import DataGridCustomToolbar from "@/components/DataGrid/DataGridCustomToolbar";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { BaseRecord } from "@refinedev/core";
import React, { useCallback, useMemo } from "react";

import { plPL } from "@mui/x-data-grid/locales";
import DataGridCustomCell from "../DataGrid/DataGridCustomCell";

export default function ListPage<T extends BaseRecord>(props: {
  resource: string;
  columns: GridColDef<T>[];

  showComponent?: React.FC<{
    id?: number;
    onSuccess?: () => void;
    onClose?: () => void;
  }>;

  updateComponent: React.FC<{
    id?: number;
    onSuccess?: () => void;
    onClose?: () => void;
  }>;

  createComponent?: React.FC<{
    onSuccess?: () => void;
    onClose?: () => void;
  }>;
}) {
  const [editId, setEditId] = React.useState<number | null>(null);
  const [editInline, setEditInline] = React.useState<boolean>(false);

  const columns: GridColDef<T>[] = useMemo(
    () => [
      ...props.columns.map((column) => ({
        ...column,
        editable: editInline,
      })),
      {
        field: "actions",
        headerName: "Akcje",
        type: "actions",
        width: 150,
        sortable: false,
        renderCell: ({ row }) => (
          <DataGridCustomCell row={row} setEditId={setEditId} />
        ),
      },
    ],
    [props.columns, editInline],
  );

  const { dataGridProps, setFilters } = useDataGrid<T>({
    resource: props.resource,
  });

  const onSeach = useCallback(
    (value: string) =>
      setFilters([{ field: "q", operator: "eq", value: value }], "merge"),
    [setFilters],
  );

  return (
    <Box sx={{ height: "100svh" }}>
      <List resource={props.resource}>
        <DataGrid
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
          {...dataGridProps}
          columns={columns}
          checkboxSelection
          slots={{
            toolbar: () => (
              <DataGridCustomToolbar
                resource={props.resource}
                onEditChange={setEditInline}
                onSearch={onSeach}
              />
            ),
            footer: DataGridCustomFooter,
          }}
        />
        <Drawer
          classes={{ paper: "min-w-[600px]" }}
          ModalProps={{}}
          anchor="right"
          open={editId !== null}
          onClose={() => setEditId(null)}
        >
          {props.updateComponent && (
            <props.updateComponent
              id={editId ?? undefined}
              onSuccess={() => setEditId(null)}
              onClose={() => setEditId(null)}
            />
          )}
        </Drawer>
      </List>
    </Box>
  );
}
