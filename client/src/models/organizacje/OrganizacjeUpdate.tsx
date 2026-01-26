import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type {
  IOpiekunowie,
  IOrganizacja,
  IOrganizacjaForm,
  IWydzialy,
} from "@/types";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function OrganizacjeUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IOrganizacja, IOrganizacjaForm>
      {...props}
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

          <ForeignKeyField<IOrganizacjaForm, IWydzialy>
            name="wydzial"
            label={t("organizacje.fields.wydzial")}
            resource="wydzialy"
            optionValue="id"
            optionLabel="nazwa_wydzialu"
            disabled={isLoading}
            control={control}
          />

          <ForeignKeyField<IOrganizacjaForm, IOpiekunowie>
            name="opiekun"
            label={t("organizacje.fields.opiekun")}
            resource="opiekunowie"
            optionValue="id"
            optionLabel={(option) =>
              `${option.imie} ${option.drugie_imie} ${option.nazwisko}`
            }
            disabled={isLoading}
            control={control}
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
