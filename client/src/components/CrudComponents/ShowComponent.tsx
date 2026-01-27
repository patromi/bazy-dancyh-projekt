import { Drawer, Stack } from "@mui/material";
import {
  useDeleteButton,
  useGo,
  useModal,
  useNotification,
  useParsed,
  useShow,
  type BaseRecord,
} from "@refinedev/core";
import { DeleteButton, EditButton, Show } from "@refinedev/mui";

import type React from "react";
import type { InDrawerProps } from ".";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

type TShowComponentProps<R extends BaseRecord> = {
  resource: string;
  renderChildren: (result: R) => React.ReactNode;

  UpdateComponent?: React.FC<InDrawerProps>;
};

export default function ShowComponent<R extends BaseRecord>(
  props: TShowComponentProps<R>,
) {
  const { t } = useTranslation("translation");

  const { show, close, visible } = useModal();
  const { id } = useParsed<{ id: number }>();

  const go = useGo();
  const { open } = useNotification();

  const {
    result,
    query: { isLoading, error },
  } = useShow<R>({ resource: props.resource, id });

  if (error && error.statusCode === 404) {
    open?.({
      type: "error",
      message: t("notifications.4xx.404"),
      description: t("notifications.redirectingToList"),
    });
    go({ to: `/${props.resource}`, type: "replace" });
  }

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
            <DeleteButton {...deleteButtonProps} recordItemId={id} />
          </>
        )}
      >
        <Stack gap={1}>
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
