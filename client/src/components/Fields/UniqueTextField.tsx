import { TextField, type TextFieldProps } from "@mui/material";
import { useDataProvider, type BaseRecord } from "@refinedev/core";
import {
  Controller,
  type Control,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

type UniqueTextFieldProps<M extends BaseRecord> = {
  name: Path<M>;
  resource: string;
  control: Control<M, any>;
  currentId?: string | number;
  rules?: Omit<
    RegisterOptions<M, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
} & Omit<TextFieldProps, "name" | "error" | "helperText">;

export default function UniqueTextField<M extends BaseRecord>({
  name,
  resource,
  control,
  currentId,
  rules,
  ...textFieldProps
}: UniqueTextFieldProps<M>) {
  const dataProvider = useDataProvider();

  const getList = async (value: string) => {
    return dataProvider().getList({
      resource,
      filters: [{ field: name, operator: "eq", value: value }],
    });
  };

  const validateUnique = async (value: string) => {
    if (!value) return true;
    try {
      const { data } = await getList(value);

      if (data.length > 0) {
        const item = data[0];
        if (currentId !== undefined && currentId !== null) {
          // loose comparison logic
          // eslint-disable-next-line eqeqeq
          if (item.id != currentId) return "Wartość musi być unikalna";
        } else {
          return "Wartość musi być unikalna";
        }
      }
      return true;
    } catch (error) {
      console.error("Validation error", error);
      return true;
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        validate: {
          ...rules?.validate,
          unique: validateUnique,
        },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...textFieldProps}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
