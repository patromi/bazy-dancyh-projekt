import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
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

export default function WydarzeniaUpdate() {
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
    <UpdateComponent<IWydarzenia, IWydarzeniaForm>
      resource="wydarzenia"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.nazwa_wydarzenia")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("data_rozpoczecia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_rozpoczecia")}
            type="date"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("data_zakonczenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_zakonczenia")}
            type="date"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("opis_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.opis_wydarzenia")}
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
                    label={t("wydarzenia.fields.organizacja")}
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

          <Controller
            control={control}
            name="pokoj"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={pokojeOptions}
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
                    label={t("wydarzenia.fields.pokoj")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  pokojeOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </Box>
      )}
    />
  );
}
