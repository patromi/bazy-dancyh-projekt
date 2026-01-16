import React, { useCallback, useMemo } from "react";

import { Box, Drawer, Stack } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import type { BaseKey, BaseRecord } from "@refinedev/core";
import { List, useDataGrid } from "@refinedev/mui";

import DataGridCustomCell from "@/components/DataGrid/DataGridCustomCell";
import DataGridCustomFooter from "@/components/DataGrid/DataGridCustomFooter";
import DataGridCustomToolbar from "@/components/DataGrid/DataGridCustomToolbar";
import type { InDrawerProps } from ".";

type TListComponentProps<R extends BaseRecord> = {
  resource: string;
  columns: GridColDef<R>[];

  ShowComponent?: React.FC<InDrawerProps>;
  UpdateComponent?: React.FC<InDrawerProps>;
  CreateComponent?: React.FC<InDrawerProps>;
};

export default function ListComponent<R extends BaseRecord>(
  props: TListComponentProps<R>,
) {
  const [editInline, setEditInline] = React.useState<boolean>(false);
  const [editId, setEditId] = React.useState<BaseKey | null>(null);
  const handleOpen = (id: BaseKey) => setEditId(id);
  const handleClose = () => setEditId(null);

  const columns: GridColDef<R>[] = useMemo(
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
          <DataGridCustomCell row={row} setEditId={handleOpen} />
        ),
      },
    ],
    [props.columns, editInline],
  );

  const { dataGridProps, setFilters } = useDataGrid<R>({
    resource: props.resource,
  });

  const onSearch = useCallback(
    (value: string) =>
      setFilters([{ field: "q", operator: "eq", value: value }], "merge"),
    [setFilters],
  );

  return (
    <Stack sx={{ height: "100svh", p: 2 }} gap={2} direction="column">
      <List
        resource={props.resource}
        wrapperProps={{
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          },
        }}
        contentProps={{
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            height: "100%",
          },
        }}
      >
        <DataGrid
          sx={{ height: "100%" }}
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
          {...dataGridProps}
          columns={columns}
          checkboxSelection
          slots={{
            toolbar: () => (
              <DataGridCustomToolbar
                resource={props.resource}
                onEditInlineChange={setEditInline}
                onSearch={onSearch}
              />
            ),
            footer: DataGridCustomFooter,
          }}
        />

        {props.UpdateComponent && (
          <Drawer
            classes={{ paper: "min-w-[600px]" }}
            ModalProps={{}}
            anchor="right"
            open={editId !== null}
            onClose={handleClose}
          >
            <props.UpdateComponent
              id={editId ?? undefined}
              resource={props.resource}
              onSuccess={handleClose}
              onClose={handleClose}
            />
          </Drawer>
        )}
      </List>
    </Stack>
  );
}
