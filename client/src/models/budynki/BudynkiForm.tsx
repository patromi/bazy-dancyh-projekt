import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IBudynki, IBudynkiForm, IUczelnie } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function BudynkiForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<IBudynki, IBudynkiForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_budynku", {
          required: "To pole jest wymagane",
        })}
        label={t("budynki.fields.nazwa_budynku")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("adres_budynku", {
          required: "To pole jest wymagane",
        })}
        label={t("budynki.fields.adres_budynku")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
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
