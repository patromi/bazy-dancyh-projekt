import CreateComponent from "@/components/CrudComponents/CreateComponent";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { IOpiekunowie, IWydzialy } from "@/types";

export default function OrganizacjeCreate() {
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
    <CreateComponent
      resource="organizacje"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_organizacji", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.nazwa_organizacji")}
          />

          <TextField
            {...register("data_zalozenia", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.data_zalozenia")}
            type="date"
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
            control={<Checkbox {...register("czy_aktywna")} />}
            label={t("organizacje.fields.czy_aktywna")}
          />
        </>
      )}
    />
  );
}
