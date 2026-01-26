
import { Autocomplete, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { IOrganizacja } from "@/types";

export function OrganizacjaIdField() {


  return (

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
            label={t("projekty.fields.organizacja")}
            error={!!field.ref?.current?.error}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />
        )}
        value={organizacjeOptions.find((o) => o.value === field.value) || null}
      />
    )}
  />;
)
}
