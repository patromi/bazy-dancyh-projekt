import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

export default function CloseButton(props: { onClick?: () => void }) {
  return (
    <Button onClick={props.onClick}>
      <CloseIcon fontSize="large" color="action" />
    </Button>
  );
}
