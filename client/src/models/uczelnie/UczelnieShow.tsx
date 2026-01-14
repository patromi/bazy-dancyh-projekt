import { useShow, useParsed } from "@refinedev/core";
import {
  Show,
  TextFieldComponent as TextField,
  EditButton,
  DeleteButton,
} from "@refinedev/mui";
import { Stack, Typography, Drawer } from "@mui/material";
import type { IUczelnie } from "@/types";
import React from "react";
import UczelnieUpdate from "./UczelnieUpdate";

export default function UczelnieShow() {
  const [edit, setEdit] = React.useState<boolean>(false);
  const { id } = useParsed();

  const {
    result,
    query: { isLoading },
  } = useShow<IUczelnie>({
    resource: "uczelnie",
    id,
  });

  return (
    <>
      <Show
        isLoading={isLoading}
        resource="uczelnie"
        recordItemId={id}
        headerButtons={({ editButtonProps }) => (
          <>
            <EditButton {...editButtonProps} onClick={() => setEdit(true)} />
            <DeleteButton recordItemId={id} />
          </>
        )}
      >
        <Stack gap={1}>
          <Typography variant="body1" fontWeight="bold">
            Nazwa
          </Typography>
          <TextField value={result?.nazwa ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            Adres uczelni
          </Typography>
          <TextField value={result?.adres_uczelni ?? ""} />
        </Stack>
      </Show>

      <Drawer
        classes={{ paper: "min-w-[500px]" }}
        anchor="right"
        open={edit}
        onClose={() => setEdit(false)}
      >
        <UczelnieUpdate
          id={id as number}
          onSuccess={() => setEdit(false)}
          onClose={() => setEdit(false)}
        />
      </Drawer>
    </>
  );
}
