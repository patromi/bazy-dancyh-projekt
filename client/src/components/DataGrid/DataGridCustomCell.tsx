import { Stack, IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteButton } from "@refinedev/mui";
import type { BaseRecord } from "@refinedev/core";

interface DataGridCustomCellProps {
  row: BaseRecord;
  setEditId: (id: number) => void;
}

export default function DataGridCustomCell({
  row,
  setEditId,
}: DataGridCustomCellProps) {
  const handleEdit = () => setEditId(row.id as number);

  return (
    <Stack direction="row" spacing={0.5}>
      <Tooltip title="Podgląd" disableInteractive>
        <IconButton
          size="small"
          color="info"
          onClick={() => (window.location.href = `/uczelnie/${row.id}`)}
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edytuj" disableInteractive>
        <IconButton size="small" color="primary" onClick={handleEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Usuń" disableInteractive>
        <DeleteButton hideText recordItemId={row.id} />
      </Tooltip>
    </Stack>
  );
}
