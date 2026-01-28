import { Box } from "@mui/material";
import { type BaseRecord, type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import type { InDrawerProps, UseFormProps } from ".";
import { handleErrorNotification } from "@/utils/errorNotification";

type TCreateComponentProps<R extends BaseRecord, F extends BaseRecord> = {
  renderChildren: (form: UseFormProps<R, F>) => React.ReactNode;
} & InDrawerProps;

export default function CreateComponent<
  R extends BaseRecord,
  F extends BaseRecord,
>(props: TCreateComponentProps<R, F>) {
  const { ...form } = useForm<R, HttpError, F>({
    refineCoreProps: {
      resource: props.resource,
      action: "create",
      errorNotification: (error, value, resource) =>
        handleErrorNotification(error, value, resource) as any,
    },
  });

  return (
    <Create saveButtonProps={form.saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        {props.renderChildren(form as UseFormProps<R, F>)}
      </Box>
    </Create>
  );
}
