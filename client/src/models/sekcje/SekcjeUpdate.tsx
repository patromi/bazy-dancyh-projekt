import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { ISekcja, ISekcjaForm, IOrganizacja } from "@/types";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function SekcjeUpdate() {
  const { t } = useTranslation("translation");

  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  return (
    <UpdateComponent<ISekcja, ISekcjaForm>
      resource="sekcje"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_sekcji", {
              required: "To pole jest wymagane",
            })}
            label={t("sekcje.fields.nazwa_sekcji")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("data_zalozenia", {
              required: "To pole jest wymagane",
            })}
            label={t("sekcje.fields.data_zalozenia")}
            type="date"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("opis_sekcji")}
            label={t("sekcje.fields.opis_sekcji")}
            multiline
            rows={4}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <Controller
            control={control}
            name="organizacja"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={organizacjeOptions}
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
                    label={t("sekcje.fields.organizacja")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  organizacjeOptions.find((o) => o.value === field.value) ||
                  null
                }
              />
            )}
          />
        </Box>
      )}
    />
  );
}
