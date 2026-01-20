import { Stack, IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteButton } from "@refinedev/mui";
import { type BaseRecord, useGo } from "@refinedev/core";

interface DataGridCustomCellProps {
  row: BaseRecord;
  setEditId: (id: number) => void;
  resource: string;
}

export default function DataGridCustomCell({
  row,
  setEditId,
  resource,
}: DataGridCustomCellProps) {
  const handleEdit = () => setEditId(row.id as number);
  const go = useGo();

  return (
    <Stack direction="row" spacing={0.5}>
      <Tooltip title="Podgląd" disableInteractive>
        <IconButton
          size="small"
          color="info"
          onClick={() =>
            go({
              to: {
                resource: resource,
                action: "show",
                id: row.id,
              },
            })
          }
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
