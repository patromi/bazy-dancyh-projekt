import React, { useCallback, useMemo } from "react";

import { Drawer, Stack, type SxProps, type Theme } from "@mui/material";
import {
  DataGrid,
  type GridColDef,
  type DataGridProps,
} from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import type { BaseKey, BaseRecord, CrudFilters } from "@refinedev/core";
import { List, useDataGrid } from "@refinedev/mui";

import DataGridCustomActionCell from "@/components/DataGrid/DataGridCustomActionCell";
import DataGridCustomFooter from "@/components/DataGrid/DataGridCustomFooter";
import DataGridCustomToolbar from "@/components/DataGrid/DataGridCustomToolbar";
import type { InDrawerProps } from ".";

type TListComponentProps<R extends BaseRecord> = {
  resource: string;
  columns: GridColDef<R>[];
  filters?: CrudFilters;
  sx?: SxProps<Theme>;
  breadcrumb?: React.ReactNode;

  dataGridProps?: Partial<DataGridProps>;

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
        editable: column.editable && editInline,
        hideable: true,
      })),
      {
        field: "actions",
        headerName: "Akcje",
        type: "actions",
        width: 150,
        sortable: false,
        renderCell: ({ row }) => (
          <DataGridCustomActionCell
            row={row}
            setEditId={handleOpen}
            resource={props.resource}
          />
        ),
      },
    ],
    [props.columns, editInline, props.resource],
  );

  const { dataGridProps, setFilters } = useDataGrid<R>({
    resource: props.resource,
    filters: { permanent: props.filters },
    editable: true,
  });

  const onSearch = useCallback(
    (value: string) =>
      setFilters([{ field: "q", operator: "eq", value: value }], "merge"),
    [setFilters],
  );

  return (
    <Stack
      sx={{
        minHeight: "400px",
        height: "100%",
        maxHeight: "100svh",
        p: 2,
        ...props.sx,
      }}
      gap={2}
      direction="column"
    >
      <List
        breadcrumb={props.breadcrumb}
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
          {...dataGridProps}
          // {...props.dataGridProps}
          sx={{ height: "100%" }}
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
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
