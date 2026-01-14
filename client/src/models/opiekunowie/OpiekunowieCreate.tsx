import type { IOpiekunowie, IOpiekunowieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function OpiekunowieCreate() {
  const { register, saveButtonProps } = useForm<
    IOpiekunowie,
    HttpError,
    IOpiekunowieForm
  >({
    refineCoreProps: {
      resource: "opiekunowie",
      action: "create",
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("pesel", {
            required: "To pole jest wymagane",
            pattern: {
              value: /^\d{11}$/,
              message: "PESEL musi składać się z dokładnie 11 cyfr",
            },
            maxLength: {
              value: 11,
              message: "PESEL może mieć maksymalnie 11 znaków",
            },
          })}
          name="pesel"
          label="PESEL"
        />

        <TextField
          {...register("imie", {
            required: "To pole jest wymagane",
            maxLength: {
              value: 50,
              message: "Imię może mieć maksymalnie 50 znaków",
            },
          })}
          name="imie"
          label="Imię"
        />

        <TextField
          {...register("drugie_imie", {
            maxLength: {
              value: 50,
              message: "Drugie imię może mieć maksymalnie 50 znaków",
            },
          })}
          name="drugie_imie"
          label="Drugie imię"
        />

        <TextField
          {...register("nazwisko", {
            required: "To pole jest wymagane",
            maxLength: {
              value: 50,
              message: "Nazwisko może mieć maksymalnie 50 znaków",
            },
          })}
          name="nazwisko"
          label="Nazwisko"
        />

        <TextField
          {...register("email", {
            required: "To pole jest wymagane",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Nieprawidłowy format email",
            },
            maxLength: {
              value: 100,
              message: "Email może mieć maksymalnie 100 znaków",
            },
          })}
          name="email"
          label="Email"
          type="email"
        />

        <TextField
          {...register("numer_kontaktowy", {
            pattern: {
              value: /^[\d\s\-+()]*$/,
              message: "Nieprawidłowy format numeru telefonu",
            },
            maxLength: {
              value: 15,
              message: "Numer kontaktowy może mieć maksymalnie 15 znaków",
            },
          })}
          name="numer_kontaktowy"
          label="Numer kontaktowy"
        />
      </Box>
    </Create>
  );
}
