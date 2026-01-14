import { useShow } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";
import { Stack, Typography } from "@mui/material";
import type { IUczelnie } from "@/types";

export default function UczelnieShow() {
  const {
    result,
    query: { isLoading },
  } = useShow<IUczelnie>();

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          ID
        </Typography>
        <TextField value={result?.id ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          Nazwa
        </Typography>
        <TextField value={result?.nazwa ?? ""} />
      </Stack>
    </Show>
  );
}
