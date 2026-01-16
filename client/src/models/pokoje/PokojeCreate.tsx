import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { Autocomplete, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { IBundynki } from "@/types";

export default function PokojeCreate() {
  const { t } = useTranslation("translation");
  const { options: budynkiOptions } = useSelect<IBundynki>({
    resource: "budynki",
    optionLabel: "nazwa_budynku",
    optionValue: "id",
  });

  return (
    <CreateComponent
      resource="pokoje"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_pokoju", {
              required: "To pole jest wymagane",
            })}
            label={t("pokoje.fields.nazwa_pokoju")}
          />

          <TextField
            {...register("pojemnosc", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("pokoje.fields.pojemnosc")}
            type="number"
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
                  />
                )}
                value={
                  budynkiOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </>
      )}
    />
  );
}
