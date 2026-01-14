import type { IRole, IRoleForm, ISekcja, ICzlonkowie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function RoleUpdate() {
  const { register, saveButtonProps } = useForm<IRole, HttpError, IRoleForm>({
    refineCoreProps: {
      resource: "role",
      action: "edit",
    },
  });

  const { options: sekcjeOptions } = useSelect<ISekcja>({
    resource: "sekcje",
    optionLabel: "nazwa_sekcji",
    optionValue: "id",
  });

  const { options: czlonkowieOptions } = useSelect<ICzlonkowie>({
    resource: "czlonkowie",
    optionLabel: (item) => `${item.imie} ${item.nazwisko}`,
    optionValue: "id",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa_roli", {
            required: "To pole jest wymagane",
          })}
          name="nazwa_roli"
          label="Nazwa roli"
        />

        <TextField
          {...register("liczba_pkt_do_stypendium", {
            required: "To pole jest wymagane",
          })}
          name="liczba_pkt_do_stypendium"
          label="Liczba punktów do stypendium"
          type="number"
        />

        <Autocomplete
          options={sekcjeOptions}
          noOptionsText="Brak sekcji"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("sekcja", {
                required: "To pole jest wymagane",
              })}
              label="Sekcja"
            />
          )}
        />

        <Autocomplete
          options={czlonkowieOptions}
          noOptionsText="Brak członków"
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("czlonek", {
                required: "To pole jest wymagane",
              })}
              label="Członek"
            />
          )}
        />
      </Box>
    </Edit>
  );
}
