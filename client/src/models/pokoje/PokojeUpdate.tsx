import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IPokoje, IPokojeForm, IBundynki } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function PokojeUpdate() {
  const { t } = useTranslation("translation");
  const { options: budynkiOptions } = useSelect<IBundynki>({
    resource: "budynki",
    optionLabel: "nazwa_budynku",
    optionValue: "id",
  });

  return (
    <UpdateComponent<IPokoje, IPokojeForm>
      resource="pokoje"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_pokoju", {
              required: "To pole jest wymagane",
            })}
            label={t("pokoje.fields.nazwa_pokoju")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("pojemnosc", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("pokoje.fields.pojemnosc")}
            type="number"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <Controller
            control={control}
            name="budynek"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={budynkiOptions}
                onChange={(_, value) => {
                  field.onChange(value?.value);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === value?.value || option.value === value
                }
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("pokoje.fields.budynek")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  budynkiOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </Box>
      )}
    />
  );
}
