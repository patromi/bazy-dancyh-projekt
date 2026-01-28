import type { UseFormProps } from "@/components/CrudComponents";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IBudynki, IPokoje, IPokojeForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PokojeForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IPokoje, IPokojeForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_pokoju", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa pokoju musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa pokoju może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("pokoje.fields.nazwa_pokoju")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_pokoju}
        helperText={errors.nazwa_pokoju?.message}
      />

      <TextField
        {...register("pojemnosc", {
          required: "To pole jest wymagane",
          valueAsNumber: true,
          min: {
            value: 1,
            message: "Pojemność musi wynosić conajmniej 1 osobę.",
          },
          max: {
            value: 80000,
            message:
              "Pojemność może wynosić maksymalnie 80000 osób (Stadiony też są pokojami!)",
          },
        })}
        label={t("pokoje.fields.pojemnosc")}
        type="number"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.pojemnosc}
        helperText={errors.pojemnosc?.message}
      />

      <ForeignKeyField<IPokojeForm, IBudynki>
        control={control}
        name="budynek"
        optionLabel={(item) => `${item.nazwa_budynku} - ${item.uczelnia_name}`}
        optionValue="id"
        resource="budynki"
        label={t("pokoje.fields.budynki_id")}
        disabled={isLoading}
      />
    </Box>
  );
}
