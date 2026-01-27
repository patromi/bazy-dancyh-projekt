import { Autocomplete, TextField } from "@mui/material";
import {
  useSelect,
  type BaseRecord,
  type HttpError,
  type UseSelectProps,
} from "@refinedev/core";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";

export default function ForeignKeyField<
  M extends BaseRecord,
  S extends BaseRecord,
>(props: {
  name: keyof M;
  label: string;
  resource: string;
  optionLabel: UseSelectProps<S, HttpError, S>["optionLabel"];
  optionValue: UseSelectProps<S, HttpError, S>["optionValue"];
  disabled?: boolean;
  control?: Control<M, any, M>;
  rules?: Omit<
    RegisterOptions<M, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}) {
  const { options } = useSelect<S>({
    resource: props.resource,
    optionLabel: props.optionLabel,
    optionValue: props.optionValue,
  });

  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          onChange={(_, value) => {
            field.onChange(value?.value);
          }}
          isOptionEqualToValue={(option, value) => option.value === value}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              disabled={props.disabled}
              slotProps={{ inputLabel: { shrink: true } }}
            />
          )}
          value={options.find((o) => o.value === field.value) || null}
        />
      )}
    />
  );
}
