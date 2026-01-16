import CloseButton from "@/components/CloseButton";
import { Box } from "@mui/material";
import {
  useParsed,
  type BaseKey,
  type BaseRecord,
  type HttpError,
} from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useRef } from "react";
import type { InDrawerProps, UseFormProps } from ".";

type TUpdateComponentProps<R extends BaseRecord, F extends BaseRecord> = {
  renderChildren: (form: UseFormProps<R, F>) => React.ReactNode;
} & InDrawerProps;

export default function UpdateComponent<
  R extends BaseRecord,
  F extends BaseRecord,
>(props: TUpdateComponentProps<R, F>) {
  const { id: urlId } = useParsed<{ id: BaseKey }>();
  const lastId = useRef<BaseKey>(props.id ?? urlId ?? 0);

  const form = useForm<R, HttpError, F>({
    refineCoreProps: {
      onMutationSuccess: props.onSuccess,
      resource: props.resource,
      action: "edit",
      id: lastId.current,
    },
  });

  const {
    saveButtonProps,
    formState: { isDirty, isLoading },
  } = form;

  return (
    <Box sx={{ height: "100svh" }}>
      <Edit
        goBack={props.id ? <CloseButton onClick={props.onClose} /> : undefined}
        saveButtonProps={{
          ...saveButtonProps,
          disabled: !isDirty || isLoading,
        }}
        isLoading={isLoading}
        resource={props.resource}
      >
        {props.renderChildren(form)}
      </Edit>
    </Box>
  );
}
