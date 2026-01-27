import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IUczelnie, IUczelnieForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UczelnieUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IUczelnie, IUczelnieForm>
      {...props}
      renderChildren={({ register, formState: { isLoading } }) => (
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
      )}
    />
  );
}
