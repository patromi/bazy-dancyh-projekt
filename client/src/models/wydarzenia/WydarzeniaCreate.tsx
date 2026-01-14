import type {
  IWydarzenia,
  IWydarzeniaForm,
  IOrganizacja,
  IPokoje,
} from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function WydarzeniaCreate() {
  const { register, saveButtonProps } = useForm<
    IWydarzenia,
    HttpError,
    IWydarzeniaForm
  >({
    refineCoreProps: {
      resource: "wydarzenia",
      action: "create",
    },
  });

  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  const { options: pokojeOptions } = useSelect<IPokoje>({
    resource: "pokoje",
    optionLabel: "nazwa_pokoju",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_wydarzenia", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_wydarzenia"
          label="Nazwa wydarzenia"
        />

        <TextField
          {...register("data_rozpoczecia", {
            required: "To pole jest wymagane",
          })}
          name="data_rozpoczecia"
          label="Data rozpoczęcia"
          type="date"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          {...register("data_zakonczenia", {
            required: "To pole jest wymagane",
          })}
          name="data_zakonczenia"
          label="Data zakończenia"
          type="date"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          {...register("opis_wydarzenia", {
            required: "To pole jest wymagane",
          })}
          name="opis_wydarzenia"
          label="Opis wydarzenia"
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

        <Autocomplete
          options={pokojeOptions}
          noOptionsText="Brak pokoi"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("pokoj", {
                required: "To pole jest wymagane",
              })}
              label="Pokój"
            />
          )}
        />
      </Box>
    </Create>
  );
}
