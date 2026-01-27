import type { UseFormProps } from "@/components/CrudComponents";
import type { IOpiekunowie, IOpiekunowieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function OpiekunowieForm({
  register,
  formState: { isLoading },
}: UseFormProps<IOpiekunowie, IOpiekunowieForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("pesel", {
          required: "To pole jest wymagane",
        })}
        label={t("opiekunowie.fields.pesel")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("imie", {
          required: "To pole jest wymagane",
        })}
        label={t("opiekunowie.fields.imie")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("drugie_imie")}
        label={t("opiekunowie.fields.drugie_imie")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("nazwisko", {
          required: "To pole jest wymagane",
        })}
        label={t("opiekunowie.fields.nazwisko")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("email", {
          required: "To pole jest wymagane",
        })}
        label={t("opiekunowie.fields.email")}
        type="email"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("numer_kontaktowy", {
          required: "To pole jest wymagane",
        })}
        label={t("opiekunowie.fields.numer_kontaktowy")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </Box>
  );
}
