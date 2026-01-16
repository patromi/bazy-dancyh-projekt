import CreateComponent from "@/components/CrudComponents/CreateComponent";
import { Autocomplete, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { IOrganizacja } from "@/types";

export default function ProjektyCreate() {
  const { t } = useTranslation("translation");
  const { options: organizacjeOptions } = useSelect<IOrganizacja>({
    resource: "organizacje",
    optionLabel: "nazwa_organizacji",
    optionValue: "id",
  });

  return (
    <CreateComponent
      resource="projekty"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.nazwa_projektu")}
          />

          <TextField
            {...register("liczba_pkt_do_stypendium", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("projekty.fields.liczba_pkt_do_stypendium")}
            type="number"
          />

          <TextField
            {...register("opis_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.opis_projektu")}
            multiline
            rows={4}
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
                    label={t("projekty.fields.organizacja")}
                    error={!!field.ref?.current?.error}
                  />
                )}
                value={
                  organizacjeOptions.find((o) => o.value === field.value) ||
                  null
                }
              />
            )}
          />
        </>
      )}
    />
  );
}
