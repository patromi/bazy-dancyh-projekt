import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IRole, IRoleForm, ISekcja, ICzlonkowie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function RoleUpdate() {
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
    <UpdateComponent<IRole, IRoleForm>
      resource="role"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_roli", {
              required: "To pole jest wymagane",
            })}
            label={t("role.fields.nazwa_roli")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("liczba_pkt_do_stypendium", {
              required: "To pole jest wymagane",
            })}
            label={t("role.fields.liczba_pkt_do_stypendium")}
            type="number"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <Controller
            control={control}
            name="sekcja"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={sekcjeOptions}
                onChange={(_, value) => field.onChange(value?.value)}
                isOptionEqualToValue={(option, value) =>
                  option.value === value?.value || option.value === value
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("role.fields.sekcja")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  sekcjeOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />

          <Controller
            control={control}
            name="czlonek"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={czlonkowieOptions}
                onChange={(_, value) => field.onChange(value?.value)}
                isOptionEqualToValue={(option, value) =>
                  option.value === value?.value || option.value === value
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("role.fields.czlonek")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  czlonkowieOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </Box>
      )}
    />
  );
}
