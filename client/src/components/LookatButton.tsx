import { IconButton, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useGo, type BaseKey } from "@refinedev/core";

export default function LookatButton(props: {
  onClick?: () => void;
  resource: string;
  id: BaseKey;
  text?: string;
}) {
  const go = useGo();

  return (
    <IconButton
      size="small"
      color="info"
      onClick={() =>
        go({
          to: {
            resource: props.resource,
            action: "show",
            id: props.id,
          },
        })
      }
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography fontSize="small">{props.text}</Typography>
        <VisibilityIcon fontSize="small" />
      </Stack>
    </IconButton>
  );
}
