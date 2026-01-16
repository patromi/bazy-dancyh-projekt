import type { BaseKey, BaseRecord, HttpError } from "@refinedev/core";
import type { useForm } from "@refinedev/react-hook-form";

export type UseFormProps<
  R extends BaseRecord,
  F extends BaseRecord,
> = ReturnType<typeof useForm<R, HttpError, F>>;

export type InDrawerProps = {
  id?: BaseKey;
  resource: string;
  onSuccess?: () => void;
  onClose?: () => void;
};
