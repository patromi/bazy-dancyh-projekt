import CloseButton from "@/components/CloseButton";
import type { IUczelnie, IUczelnieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useParsed, type HttpError } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useRef } from "react";

export default function UczelnieUpdate(props: {
  id?: number;
  onSuccess?: () => void;
  onClose?: () => void;
}) {
  const { id: urlId } = useParsed<{ id: number }>();
  const lastId = useRef<number>(props.id ?? (urlId as number) ?? 0);

  const {
    register,
    saveButtonProps,
    formState: { isDirty, isLoading },
  } = useForm<IUczelnie, HttpError, IUczelnieForm>({
    refineCoreProps: {
      onMutationSuccess: props.onSuccess,
      resource: "uczelnie",
      action: "edit",
      id: lastId.current,
    },
  });

  return (
    <Box sx={{ height: "100svh" }}>
      <Edit
        goBack={props.id ? <CloseButton onClick={props.onClose} /> : undefined}
        saveButtonProps={{
          ...saveButtonProps,
          disabled: !isDirty || isLoading,
        }}
        isLoading={isLoading}
        resource="uczelnie"
      >
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa", {
              required: "To pole jest wymagane",
            })}
            label="Nazwa"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("adres_uczelni", {
              required: "To pole jest wymagane",
            })}
            label="Adres uczelni"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Box>
      </Edit>
    </Box>
  );
}
