import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IBundynki, IBudynkiForm, IUczelnie } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function BudynkiUpdate() {
  const { t } = useTranslation("translation");
  const { options: uczelnieOptions } = useSelect<IUczelnie>({
    resource: "uczelnie",
    optionLabel: "nazwa",
    optionValue: "id",
  });

  return (
    <UpdateComponent<IBundynki, IBudynkiForm>
      resource="budynki"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_budynku", {
              required: "To pole jest wymagane",
            })}
            label={t("budynki.fields.nazwa_budynku")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("adres_budynku", {
              required: "To pole jest wymagane",
            })}
            label={t("budynki.fields.adres_budynku")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <Controller
            control={control}
            name="uczelnia"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={uczelnieOptions}
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
                    label={t("budynki.fields.uczelnia")}
                    // error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  uczelnieOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </Box>
      )}
    />
  );
}
