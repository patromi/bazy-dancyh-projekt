import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type {
  IWydarzenia,
  IWydarzeniaForm,
  IOrganizacja,
  IPokoje,
} from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function WydarzeniaCreate() {
  const { t } = useTranslation("translation");
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
    <CreateComponent<IWydarzenia, IWydarzeniaForm>
      resource="wydarzenia"
      renderChildren={({ register, control, formState: { errors } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.nazwa_wydarzenia")}
            error={!!errors.nazwa_wydarzenia}
            helperText={errors.nazwa_wydarzenia?.message}
          />

          <TextField
            {...register("data_rozpoczecia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_rozpoczecia")}
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.data_rozpoczecia}
            helperText={errors.data_rozpoczecia?.message}
          />

          <TextField
            {...register("data_zakonczenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_zakonczenia")}
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.data_zakonczenia}
            helperText={errors.data_zakonczenia?.message}
          />

          <TextField
            {...register("opis_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.opis_wydarzenia")}
            multiline
            rows={4}
            error={!!errors.opis_wydarzenia}
            helperText={errors.opis_wydarzenia?.message}
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
                  organizacjeOptions.find((o) => o.value === field.value) || null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("wydarzenia.fields.organizacja")}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            )}
          />

           <Controller
            control={control}
            name="pokoj"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                options={pokojeOptions}
                noOptionsText="Brak pokoi"
                onChange={(_, value) => {
                  field.onChange(value?.value);
                }}
                value={
                  pokojeOptions.find((o) => o.value === field.value) || null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("wydarzenia.fields.pokoj")}
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
