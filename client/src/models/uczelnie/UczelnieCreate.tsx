import type { IUczelnie, IUczelnieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { type HttpError } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function UczelnieCreate() {
  const { register, saveButtonProps } = useForm<
    IUczelnie,
    HttpError,
    IUczelnieForm
  >({
    refineCoreProps: {
      resource: "uczelnie",
      action: "create",
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box component="form" className="flex flex-col gap-8">
        <TextField
          {...register("nazwa", {
            required: "To pole jest wymagane",
          })}
          name="nazwa"
          label="Nazwa"
        />

        <TextField
          {...register("adres_uczelni", {
            required: "To pole jest wymagane",
          })}
          name="adres_uczelni"
          label="Adres uczelni"
        />
      </Box>
    </Create>
  );
}
