import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type {
  IOrganizacja,
  IOrganizacjaForm,
  IOpiekunowie,
  IWydzialy,
} from "@/types";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function OrganizacjeUpdate() {
  const { t } = useTranslation("translation");

  const { options: opiekunowieOptions } = useSelect<IOpiekunowie>({
    resource: "opiekunowie",
    optionLabel: (item) => `${item.imie} ${item.nazwisko}`,
    optionValue: "id",
  });

  const { options: wydzialyOptions } = useSelect<IWydzialy>({
    resource: "wydzialy",
    optionLabel: "nazwa_wydzialu",
    optionValue: "id",
  });

  return (
    <UpdateComponent<IOrganizacja, IOrganizacjaForm>
      resource="organizacje"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_organizacji", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.nazwa_organizacji")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("data_zalozenia", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.data_zalozenia")}
            type="date"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <Controller
            control={control}
            name="wydzial"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={wydzialyOptions}
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
                    label={t("organizacje.fields.wydzial")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  wydzialyOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />

          <Controller
            control={control}
            name="opiekun"
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={opiekunowieOptions}
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
                    label={t("organizacje.fields.opiekun")}
                    error={!!field.ref?.current?.error}
                    disabled={isLoading}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                )}
                value={
                  opiekunowieOptions.find((o) => o.value === field.value) ||
                  null
                }
              />
            )}
          />

          <FormControlLabel
            control={
              <Controller
                name="czy_aktywna"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={!!field.value}
                    disabled={isLoading}
                  />
                )}
              />
            }
            label={t("organizacje.fields.czy_aktywna")}
          />
        </Box>
      )}
    />
  );
}
