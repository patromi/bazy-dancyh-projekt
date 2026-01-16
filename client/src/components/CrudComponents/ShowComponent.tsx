import { Drawer, Stack } from "@mui/material";
import { useModal, useParsed, useShow, type BaseRecord } from "@refinedev/core";
import { DeleteButton, EditButton, Show } from "@refinedev/mui";

import type React from "react";
import type { InDrawerProps } from ".";

type TShowComponentProps<R extends BaseRecord> = {
  resource: string;
  renderChildren?: (result: R | undefined) => React.ReactNode;

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
        resource={props.resource}
        recordItemId={id}
        headerButtons={({ editButtonProps }) => (
          <>
            <EditButton {...editButtonProps} onClick={show} />
            <DeleteButton recordItemId={id} />
          </>
        )}
      >
        <Stack gap={1}>
          {props.renderChildren ? props.renderChildren(result) : null}
        </Stack>
      </Show>

      <Drawer
        classes={{ paper: "min-w-[500px]" }}
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
