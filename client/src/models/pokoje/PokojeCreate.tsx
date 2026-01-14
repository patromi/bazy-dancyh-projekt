import type { IPokoje, IPokojeForm, IBundynki } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function PokojeCreate() {
  const { register, saveButtonProps } = useForm<
    IPokoje,
    HttpError,
    IPokojeForm
  >({
    refineCoreProps: {
      resource: "pokoje",
      action: "create",
    },
  });

  const { options: budynkiOptions } = useSelect<IBundynki>({
    resource: "budynki",
    optionLabel: "nazwa_budynku",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_pokoju", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_pokoju"
          label="Nazwa pokoju"
        />

        <TextField
          {...register("pojemnosc", {
            required: "To pole jest wymagane",
          })}
          name="pojemnosc"
          label="Pojemność"
          type="number"
        />

        <Autocomplete
          options={budynkiOptions}
          noOptionsText="Brak budynków"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("budynek", {
                required: "To pole jest wymagane",
              })}
              label="Budynek"
            />
          )}
        />
      </Box>
    </Create>
  );
}
