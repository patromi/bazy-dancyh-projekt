import { Stack, Switch, Typography } from "@mui/material";

export default function DataGridInlineEdit(props: {
  onEditChange?: (editInline: boolean) => void;
}) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Switch
        onChange={(e) =>
          props.onEditChange && props.onEditChange(e.target.checked)
        }
      />

      <Typography>Edycja w wierszu</Typography>
    </Stack>
  );
}
