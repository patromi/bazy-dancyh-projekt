import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IOrganizacja, ISekcja, ISekcjaForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SekcjaForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<ISekcja, ISekcjaForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_sekcji", {
          required: "To pole jest wymagane",
        })}
        label={t("sekcje.fields.nazwa_sekcji")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        {...register("data_zalozenia", {
          required: "To pole jest wymagane",
        })}
        label={t("sekcje.fields.data_zalozenia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
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
