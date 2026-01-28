import UniqueTextField from "@/components/Fields/UniqueTextField";
import type { UseFormProps } from "@/components/CrudComponents";
import type { IOpiekunowie, IOpiekunowieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function OpiekunowieForm({
  register,
  control,
  refineCore: { id },
  formState: { isLoading, errors },
}: UseFormProps<IOpiekunowie, IOpiekunowieForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <UniqueTextField
        control={control}
        resource="opiekunowie"
        name="pesel"
        currentId={id}
        rules={{
          required: "To pole jest wymagane",
          maxLength: {
            value: 11,
            message: "PESEL może mieć maksymalnie 11 znaków",
          },
          pattern: {
            value: /^[0-9]{11}$/,
            message: "PESEL musi składać się z 11 cyfr",
          },
        }}
        label={t("opiekunowie.fields.pesel")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("imie", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Imię musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 50,
            message: "Imię może mieć maksymalnie 50 znaków",
          },
        })}
        label={t("opiekunowie.fields.imie")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.imie}
        helperText={errors.imie?.message}
      />

      <TextField
        {...register("drugie_imie", {
          maxLength: {
            value: 50,
            message: "Drugie imię może mieć maksymalnie 50 znaków",
          },
        })}
        label={t("opiekunowie.fields.drugie_imie")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.drugie_imie}
        helperText={errors.drugie_imie?.message}
      />

      <TextField
        {...register("nazwisko", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwisko musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 50,
            message: "Nazwisko może mieć maksymalnie 50 znaków",
          },
        })}
        label={t("opiekunowie.fields.nazwisko")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwisko}
        helperText={errors.nazwisko?.message}
      />

      <TextField
        {...register("email", {
          required: "To pole jest wymagane",
          maxLength: {
            value: 100,
            message: "Email może mieć maksymalnie 100 znaków",
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Nieprawidłowy format adresu email",
          },
        })}
        label={t("opiekunowie.fields.email")}
        type="email"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        {...register("numer_kontaktowy", {
          maxLength: {
            value: 15,
            message: "Numer kontaktowy może mieć maksymalnie 15 znaków",
          },
          pattern: {
            value: /^\+?[0-9]{9,15}$/,
            message:
              "Numer kontaktowy musi składać się z 9-15 cyfr (może posiadać prefiks, np. +48)",
          },
        })}
        label={t("opiekunowie.fields.numer_kontaktowy")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.numer_kontaktowy}
        helperText={errors.numer_kontaktowy?.message}
      />
    </Box>
  );
}
