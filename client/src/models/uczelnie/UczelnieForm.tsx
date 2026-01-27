import type { UseFormProps } from "@/components/CrudComponents";
import type { IUczelnie, IUczelnieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UczelnieForm({
  register,
  formState: { isLoading },
}: UseFormProps<IUczelnie, IUczelnieForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa", {
          required: "To pole jest wymagane",
        })}
        label={t("uczelnie.fields.nazwa")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("adres_uczelni", {
          required: "To pole jest wymagane",
        })}
        label={t("uczelnie.fields.adres_uczelni")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </Box>
  );
}
