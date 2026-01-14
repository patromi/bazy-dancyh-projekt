import type { ISekcja, ISekcjaForm, IOrganizacja } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function SekcjeUpdate() {
  const { register, saveButtonProps } = useForm<
    ISekcja,
    HttpError,
    ISekcjaForm
  >({
    refineCoreProps: {
      resource: "sekcje",
      action: "edit",
    },
  });

  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_sekcji", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_sekcji"
          label="Nazwa sekcji"
        />

        <TextField
          {...register("data_zalozenia", {
            required: "To pole jest wymagane",
          })}
          name="data_zalozenia"
          label="Data założenia"
          type="date"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          {...register("opis_sekcji", {
            required: "To pole jest wymagane",
          })}
          name="opis_sekcji"
          label="Opis sekcji"
          multiline
          rows={4}
        />

        <Autocomplete
          options={organizacjeOptions}
          noOptionsText="Brak organizacji"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("organizacja", {
                required: "To pole jest wymagane",
              })}
              label="Organizacja"
            />
          )}
        />
      </Box>
    </Edit>
  );
}
