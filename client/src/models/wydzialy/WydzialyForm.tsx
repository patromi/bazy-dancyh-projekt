import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IUczelnie, IWydzialy, IWydzialyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function WydzialyForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IWydzialy, IWydzialyForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_wydzialu", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa wydziału musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa wydziału może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("wydzialy.fields.nazwa_wydzialu")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_wydzialu}
        helperText={errors.nazwa_wydzialu?.message}
      />
      <TextField
        {...register("adres_wydzialu", {
          required: "To pole jest wymagane",
          minLength: {
            value: 5,
            message: "Adres wydziału musi mieć conajmniej 5 znaków",
          },
          maxLength: {
            value: 100,
            message: "Adres wydziału może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("wydzialy.fields.adres_wydzialu")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.adres_wydzialu}
        helperText={errors.adres_wydzialu?.message}
      />

      <ForeignInputField<IWydzialyForm, IUczelnie>
        name="uczelnia"
        label={t("wydzialy.fields.uczelnia")}
        resource="uczelnie"
        control={control}
        optionValue="id"
        optionLabel="nazwa"
        disabled={isLoading}
      />
    </Box>
  );
}
