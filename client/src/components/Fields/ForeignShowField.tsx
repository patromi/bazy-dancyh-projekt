import {
  useOne,
  type BaseRecord,
  type HttpError,
  type UseOneProps,
} from "@refinedev/core";

import { TextFieldComponent } from "@refinedev/mui";

import { Stack, Typography } from "@mui/material";
import LookatButton from "@/components/LookatButton";

export default function ForeignShowField<S extends BaseRecord>(props: {
  resource: string;
  id: UseOneProps<S, HttpError, S>["id"];
  label: string;
  valueLabel: keyof S extends string ? string & keyof S : (item: S) => string;
}) {
  const { result } = useOne<S>({
    resource: props.resource,
    id: props.id,
    queryOptions: {
      enabled: !!props.id,
    },
  });

  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {props.label}
      </Typography>

      {result && (
        <Stack direction="row" spacing={1} alignItems="center">
          <TextFieldComponent
            value={
              typeof props.valueLabel === "function"
                ? props.valueLabel(result)
                : result[props.valueLabel as keyof S]
            }
          />
          <LookatButton
            resource={props.resource}
            id={props.id!}
            text="Podgląd"
          />
        </Stack>
      )}
    </>
  );
}
