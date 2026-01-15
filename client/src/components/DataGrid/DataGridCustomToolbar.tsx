import { Box, Stack } from "@mui/material";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import DataGridCustomDeleteModal from "./DataGridCustomDeleteModal";
import DataGridInlineEdit from "./DataGridInlineEdit";
import React from "react";

export default function DataGridCustomToolbar(props: {
  resource: string;
  onEditChange?: (editInline: boolean) => void;
  onSearch?: (value: string) => void;
}) {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (props.onSearch) props.onSearch(e.target.value);
  };

  return (
    <GridToolbarContainer sx={{ p: 1.5, borderBottom: "1px solid #e0e0e0" }}>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="right"
        alignItems="center"
        width="100%"
      >
        <GridToolbarQuickFilter
          className="max-w-125 flex-1"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <Box flex="1" />

        <DataGridCustomDeleteModal resource={props.resource} />

        <DataGridInlineEdit onEditChange={props.onEditChange} />
      </Stack>
    </GridToolbarContainer>
  );
}
