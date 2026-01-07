import { Box, TextField } from "@mui/material";
import { type HttpError } from "@refinedev/core";
import { Create, SaveButton } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import type { IOrganizacja, IOrganizacjaForm } from "../../../types";

export default function OrganizacjeCreate() {
  const {
    refineCore: { onFinish, formLoading, query },
    register,
    handleSubmit,
    saveButtonProps,
  } = useForm<IOrganizacja, HttpError, IOrganizacjaForm>({
    refineCoreProps: {
      resource: "organizacje",
      action: "create",
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-4">
        <TextField
          {...register("nazwa", {
            required: "To pole jest wymagane",
          })}
          name="nazwa"
          label="Nazwa"
        />
        <TextField
          {...register("adres", {
            required: "To pole jest wymagane",
          })}
          name="adres"
          label="Adres"
        />

        <TextField
          {...register("telefon", {
            required: "To pole jest wymagane",
          })}
          name="telefon"
          label="Telefon"
        />

        <TextField
          {...register("email", {
            required: "To pole jest wymagane",
          })}
          name="email"
          label="Email"
        />
      </Box>
    </Create>
  );
}
