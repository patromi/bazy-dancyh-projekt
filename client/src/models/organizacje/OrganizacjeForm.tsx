import type { UseFormProps } from "@/components/CrudComponents";
import type {
  IOpiekunowie,
  IOrganizacja,
  IOrganizacjaForm,
  IWydzialy,
} from "@/types";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import { useTranslation } from "react-i18next";
import { TextField, Checkbox, FormControlLabel, Box } from "@mui/material";
import { Controller } from "react-hook-form";

export default function OrganizacjeForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IOrganizacja, IOrganizacjaForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_organizacji", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa organizacji musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa organizacji może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("organizacje.fields.nazwa_organizacji")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_organizacji}
        helperText={errors.nazwa_organizacji?.message}
      />

      <TextField
        {...register("data_zalozenia", {
          required: "To pole jest wymagane",
        })}
        label={t("organizacje.fields.data_zalozenia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.data_zalozenia}
        helperText={errors.data_zalozenia?.message}
      />

      <ForeignKeyField<IOrganizacjaForm, IWydzialy>
        name="wydzial"
        label={t("organizacje.fields.wydzial")}
        resource="wydzialy"
        optionValue="id"
        optionLabel={(item) => `${item.nazwa_wydzialu} - ${item.uczelnia_name}`}
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
  );
}
