import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IOrganizacja, ISekcja, ISekcjaForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SekcjaForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<ISekcja, ISekcjaForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_sekcji", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa sekcji musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa sekcji może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("sekcje.fields.nazwa_sekcji")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_sekcji}
        helperText={errors.nazwa_sekcji?.message}
      />
      <TextField
        {...register("data_zalozenia", {
          required: "To pole jest wymagane",
        })}
        label={t("sekcje.fields.data_zalozenia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.data_zalozenia}
        helperText={errors.data_zalozenia?.message}
      />
      <TextField
        {...register("opis_sekcji")}
        label={t("sekcje.fields.opis_sekcji")}
        multiline
        rows={4}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <ForeignInputField<ISekcjaForm, IOrganizacja>
        name="organizacja"
        label={t("sekcje.fields.organizacja")}
        resource="organizacje"
        control={control}
        optionValue="id"
        optionLabel={(item) =>
          `${item.nazwa_organizacji} - ${item.wydzial_name}`
        }
        disabled={isLoading}
      />
    </Box>
  );
}
