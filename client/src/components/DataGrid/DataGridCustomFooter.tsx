import { Box, Stack } from "@mui/material";
import {
  GridFooterContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import DataGridCustomPagination from "./DataGridCustomPagination";

export default function DataGridCustomFooter() {
  return (
    <GridFooterContainer sx={{ displayPrint: "none" }}>
      <Stack direction="row" spacing={1} sx={{ p: 1 }}>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Stack>

      <Box sx={{ flex: 1 }} />
      <DataGridCustomPagination />
    </GridFooterContainer>
  );
}
