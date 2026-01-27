import { GridCell, type GridCellProps } from "@mui/x-data-grid";
import type React from "react";

export default function DataGridForeignCell(
  props: GridCellProps,
): React.ReactNode {
  return <GridCell {...props}>{props.children}</GridCell>;
}
