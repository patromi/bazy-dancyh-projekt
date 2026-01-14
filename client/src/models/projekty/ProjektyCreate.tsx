import type { IProjekty, IProjektyForm, IOrganizacja } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function ProjektyCreate() {
  const { register, saveButtonProps } = useForm<
    IProjekty,
    HttpError,
    IProjektyForm
  >({
    refineCoreProps: {
      resource: "projekty",
      action: "create",
    },
  });

  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_projektu", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_projektu"
          label="Nazwa projektu"
        />

        <TextField
          {...register("liczba_pkt_do_stypendium", {
            required: "To pole jest wymagane",
          })}
          name="liczba_pkt_do_stypendium"
          label="Liczba punktów do stypendium"
          type="number"
        />

        <TextField
          {...register("opis_projektu", {
            required: "To pole jest wymagane",
          })}
          name="opis_projektu"
          label="Opis projektu"
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
    </Create>
  );
}
