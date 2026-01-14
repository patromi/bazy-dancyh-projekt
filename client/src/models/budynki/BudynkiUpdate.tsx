import type { IBundynki, IBudynkiForm, IUczelnie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function BudynkiUpdate() {
  const { register, saveButtonProps } = useForm<
    IBundynki,
    HttpError,
    IBudynkiForm
  >({
    refineCoreProps: {
      resource: "budynki",
      action: "edit",
    },
  });

  const { options: uczelnieOptions } = useSelect<IUczelnie>({
    resource: "uczelnie",
    optionLabel: "nazwa",
    optionValue: "id",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_budynku", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_budynku"
          label="Nazwa budynku"
        />

        <TextField
          {...register("adres_budynku", {
            required: "To pole jest wymagane",
          })}
          name="adres_budynku"
          label="Adres budynku"
        />

        <Autocomplete
          options={uczelnieOptions}
          noOptionsText="Brak uczelni"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("uczelnia", {
                required: "To pole jest wymagane",
              })}
              label="Uczelnia"
            />
          )}
        />
      </Box>
    </Edit>
  );
}
