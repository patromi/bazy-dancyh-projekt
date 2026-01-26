import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { ISekcja, ISekcjaForm, IOrganizacja } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function SekcjeCreate() {
  const { t } = useTranslation("translation");
  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  return (
    <CreateComponent<ISekcja, ISekcjaForm>
      resource="sekcje"
      renderChildren={({ register, control, formState: { errors } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_sekcji", {
              required: "To pole jest wymagane",
            })}
            label={t("sekcje.fields.nazwa_sekcji")}
            error={!!errors.nazwa_sekcji}
            helperText={errors.nazwa_sekcji?.message}
          />

          <TextField
            {...register("data_zalozenia", {
              required: "To pole jest wymagane",
            })}
            label={t("sekcje.fields.data_zalozenia")}
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.data_zalozenia}
            helperText={errors.data_zalozenia?.message}
          />

          <TextField
            {...register("opis_sekcji")}
            label={t("sekcje.fields.opis_sekcji")}
            multiline
            rows={4}
          />

          <Controller
            control={control}
            name="organizacja"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                options={organizacjeOptions}
                noOptionsText="Brak organizacji"
                onChange={(_, value) => {
                  field.onChange(value?.value);
                }}
                value={
                  organizacjeOptions.find((o) => o.value === field.value) ||
                  null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("sekcje.fields.organizacja")}
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
