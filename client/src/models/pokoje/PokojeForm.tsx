import type { UseFormProps } from "@/components/CrudComponents";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IBudynki, IPokoje, IPokojeForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PokojeForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<IPokoje, IPokojeForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_pokoju", {
          required: "To pole jest wymagane",
        })}
        label={t("pokoje.fields.nazwa_pokoju")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("pojemnosc", {
          required: "To pole jest wymagane",
          valueAsNumber: true,
        })}
        label={t("pokoje.fields.pojemnosc")}
        type="number"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
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
