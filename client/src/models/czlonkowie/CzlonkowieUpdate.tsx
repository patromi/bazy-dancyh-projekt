import type { ICzlonkowie, ICzlonkowieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function CzlonkowieUpdate() {
  const { register, saveButtonProps } = useForm<
    ICzlonkowie,
    HttpError,
    ICzlonkowieForm
  >({
    refineCoreProps: {
      resource: "czlonkowie",
      action: "edit",
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("pesel", {
            required: "To pole jest wymagane",
          })}
          name="pesel"
          label="PESEL"
        />

        <TextField
          {...register("imie", {
            required: "To pole jest wymagane",
          })}
          name="imie"
          label="Imię"
        />

        <TextField
          {...register("drugie_imie")}
          name="drugie_imie"
          label="Drugie imię"
        />

        <TextField
          {...register("nazwisko", {
            required: "To pole jest wymagane",
          })}
          name="nazwisko"
          label="Nazwisko"
        />

        <TextField
          {...register("email", {
            required: "To pole jest wymagane",
          })}
          name="email"
          label="Email"
          type="email"
        />

        <TextField
          {...register("numer_kontaktowy", {
            required: "To pole jest wymagane",
          })}
          name="numer_kontaktowy"
          label="Numer kontaktowy"
        />
      </Box>
    </Edit>
  );
}
