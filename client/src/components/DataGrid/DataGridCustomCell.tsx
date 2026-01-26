import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { type BaseRecord } from "@refinedev/core";
import { DeleteButton } from "@refinedev/mui";
import LookatButton from "../LookatButton";

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

  return (
    <Stack direction="row" spacing={0.5}>
      <Tooltip title="Podgląd" disableInteractive>
        <span>
          <LookatButton resource={resource} id={row.id!} />
        </span>
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
