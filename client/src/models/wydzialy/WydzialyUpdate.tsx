import type { IWydzialy, IWydzialyForm, IUczelnie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function WydzialyUpdate() {
  const { register, saveButtonProps } = useForm<
    IWydzialy,
    HttpError,
    IWydzialyForm
  >({
    refineCoreProps: {
      resource: "wydzialy",
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
          {...register("nazwa_wydzialu", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_wydzialu"
          label="Nazwa wydziału"
        />

        <TextField
          {...register("adres_wydzialu", {
            required: "To pole jest wymagane",
          })}
          name="adres_wydzialu"
          label="Adres wydziału"
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
