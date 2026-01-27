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
    <Stack direction="row" alignItems="center" height="100%">
      <IconButton
        sx={{
          borderRadius: props.text ? 1 : "50%",
          gap: 0.5,
          textOverflow: "ellipsis",
          width: "100%",
          textAlign: "left",
        }}
        color="inherit"
        size="small"
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
        {props.text && (
          <Typography
            fontSize="small"
            width="100%"
            noWrap
            textOverflow="ellipsis"
          >
            {props.text}
          </Typography>
        )}
        <VisibilityIcon
          color="info"
          fontSize="small"
          sx={{ displayPrint: "none" }}
        />
      </IconButton>
    </Stack>
  );
}
