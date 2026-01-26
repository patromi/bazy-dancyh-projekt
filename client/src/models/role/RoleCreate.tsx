import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { IRole, IRoleForm, ISekcja, ICzlonkowie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function RoleCreate() {
  const { t } = useTranslation("translation");
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
    <CreateComponent<IRole, IRoleForm>
      resource="role"
      renderChildren={({ register, control, formState: { errors } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_roli", {
              required: "To pole jest wymagane",
            })}
            label={t("role.fields.nazwa_roli")}
            error={!!errors.nazwa_roli}
            helperText={errors.nazwa_roli?.message}
          />

          <TextField
            {...register("liczba_pkt_do_stypendium", {
              required: "To pole jest wymagane",
            })}
            label={t("role.fields.liczba_pkt_do_stypendium")}
            type="number"
            error={!!errors.liczba_pkt_do_stypendium}
            helperText={errors.liczba_pkt_do_stypendium?.message}
          />

          <Controller
            control={control}
            name="sekcja"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                options={sekcjeOptions}
                noOptionsText="Brak sekcji"
                onChange={(_, value) => {
                  field.onChange(value?.value);
                }}
                value={
                  sekcjeOptions.find((o) => o.value === field.value) || null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("role.fields.sekcja")}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            )}
          />

          <Controller
            control={control}
            name="czlonek"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                options={czlonkowieOptions}
                noOptionsText="Brak członków"
                onChange={(_, value) => {
                  field.onChange(value?.value);
                }}
                value={
                  czlonkowieOptions.find((o) => o.value === field.value) || null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("role.fields.czlonek")}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            )}
          />
        </Box>
      )}
    />
  );
}
