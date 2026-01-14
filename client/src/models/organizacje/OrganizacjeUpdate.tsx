import type {
  IOpiekunowie,
  IOrganizacja,
  IOrganizacjaForm,
  IWydzialy,
} from "@/types";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function OrganizacjeUpdate() {
  const { register, saveButtonProps } = useForm<
    IOrganizacja,
    HttpError,
    IOrganizacjaForm
  >({
    refineCoreProps: {
      resource: "organizacje",
      action: "edit",
    },
  });

  const { options: opiekunowieOptions } = useSelect<IOpiekunowie>({
    resource: "opiekunowie",
    optionLabel: (item) => `${item.imie} ${item.nazwisko}`,
    optionValue: "id",
  });

  const { options: wydzialyOptions } = useSelect<IWydzialy>({
    resource: "wydzialy",
    optionLabel: "nazwa_wydzialu",
    optionValue: "id",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_organizacji", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_organizacji"
          label="Nazwa"
        />

        <Autocomplete
          options={wydzialyOptions}
          noOptionsText="Brak wydziałów"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("wydzial", {
                required: "To pole jest wymagane",
              })}
              label="Wydział"
            />
          )}
        />

        <Autocomplete
          options={opiekunowieOptions}
          noOptionsText="Brak opiekunów"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("opiekun", {
                required: "To pole jest wymagane",
              })}
              label="Opiekun"
            />
          )}
        />

        <FormControlLabel
          control={<Checkbox {...register("czy_aktywna")} />}
          label="Czy aktywna?"
        />
      </Box>
    </Edit>
  );
}
