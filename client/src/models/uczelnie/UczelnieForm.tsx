import UniqueTextField from "@/components/Fields/UniqueTextField";
import type { UseFormProps } from "@/components/CrudComponents";
import type { IUczelnie, IUczelnieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UczelnieForm({
  register,
  control,
  refineCore: { id },
  formState: { isLoading, errors },
}: UseFormProps<IUczelnie, IUczelnieForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="div" className="flex flex-col gap-8">
      <UniqueTextField
        control={control}
        name="nazwa"
        resource="uczelnie"
        currentId={id}
        rules={{
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa może mieć maksymalnie 100 znaków",
          },
        }}
        label={t("uczelnie.fields.nazwa")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("adres_uczelni", {
          required: "To pole jest wymagane",
          minLength: {
            value: 5,
            message: "Adres musi mieć conajmniej 5 znaków",
          },
          maxLength: {
            value: 100,
            message: "Adres może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("uczelnie.fields.adres_uczelni")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.adres_uczelni}
        helperText={errors.adres_uczelni?.message}
      />
    </Box>
  );
}
