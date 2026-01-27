import DeleteButton from "@/components/DeleteButton";
import { Drawer, Stack } from "@mui/material";
import { useModal, useParsed, useShow, type BaseRecord } from "@refinedev/core";
import { EditButton, Show } from "@refinedev/mui";

import type React from "react";
import type { InDrawerProps } from ".";

type TShowComponentProps<R extends BaseRecord> = {
  resource: string;
  renderChildren: (result: R) => React.ReactNode;

  UpdateComponent?: React.FC<InDrawerProps>;
};

export default function ShowComponent<R extends BaseRecord>(
  props: TShowComponentProps<R>,
) {
  const { show, close, visible } = useModal();
  const { id } = useParsed<{ id: number }>();

  const {
    result,
    query: { isLoading },
  } = useShow<R>({ resource: props.resource, id });

  return (
    <>
      <Show
        isLoading={isLoading}
        canDelete={true}
        resource={props.resource}
        recordItemId={id}
        headerButtons={({ editButtonProps, deleteButtonProps }) => (
          <>
            <EditButton {...editButtonProps} onClick={show} />
            <DeleteButton {...deleteButtonProps} mutationMode="optimistic" />
          </>
        )}
      >
        <Stack gap={4}>
          {result ? props.renderChildren(result) : <span>Ładowanie...</span>}
        </Stack>
      </Show>

      <Drawer
        classes={{ paper: "min-w-[600px]" }}
        anchor="right"
        open={visible}
        onClose={close}
      >
        {props.UpdateComponent && (
          <props.UpdateComponent
            id={id}
            resource={props.resource}
            onSuccess={close}
            onClose={close}
          />
        )}
      </Drawer>
    </>
  );
}
