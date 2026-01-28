import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IBudynki, IBudynkiForm, IUczelnie } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function BudynkiForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IBudynki, IBudynkiForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_budynku", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa budynku musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa budynku może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("budynki.fields.nazwa_budynku")}
        disabled={isLoading}
        error={!!errors.nazwa_budynku}
        helperText={errors.nazwa_budynku?.message}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("adres_budynku", {
          required: "To pole jest wymagane",
          minLength: {
            value: 5,
            message: "Adres budynku musi mieć conajmniej 5 znaków",
          },
          maxLength: {
            value: 100,
            message: "Adres budynku może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("budynki.fields.adres_budynku")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.adres_budynku}
        helperText={errors.adres_budynku?.message}
      />

      <ForeignInputField<IBudynkiForm, IUczelnie>
        name="uczelnia"
        label={t("budynki.fields.uczelnia")}
        resource="uczelnie"
        control={control}
        optionValue="id"
        optionLabel="nazwa"
        disabled={isLoading}
      />
    </Box>
  );
}
