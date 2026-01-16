import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { Autocomplete, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { IUczelnie } from "@/types";

export default function WydzialyCreate() {
  const { t } = useTranslation("translation");
  const { options: uczelnieOptions } = useSelect<IUczelnie>({
    resource: "uczelnie",
    optionLabel: "nazwa",
    optionValue: "id",
  });

  return (
    <CreateComponent
      resource="wydzialy"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_wydzialu", {
              required: "To pole jest wymagane",
            })}
            label={t("wydzialy.fields.nazwa_wydzialu")}
          />

          <TextField
            {...register("adres_wydzialu", {
              required: "To pole jest wymagane",
            })}
            label={t("wydzialy.fields.adres_wydzialu")}
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
                    label={t("wydzialy.fields.uczelnia")}
                    error={!!field.ref?.current?.error}
                  />
                )}
                value={
                  uczelnieOptions.find((o) => o.value === field.value) || null
                }
              />
            )}
          />
        </>
      )}
    />
  );
}
