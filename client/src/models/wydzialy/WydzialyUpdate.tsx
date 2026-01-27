import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IUczelnie, IWydzialy, IWydzialyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function WydzialyUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IWydzialy, IWydzialyForm>
      {...props}
      resource="wydzialy"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_wydzialu", {
              required: "To pole jest wymagane",
            })}
            label={t("wydzialy.fields.nazwa_wydzialu")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />
          <TextField
            {...register("adres_wydzialu", {
              required: "To pole jest wymagane",
            })}
            label={t("wydzialy.fields.adres_wydzialu")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <ForeignInputField<IWydzialyForm, IUczelnie>
            name="uczelnia"
            label={t("wydzialy.fields.uczelnia")}
            resource="uczelnie"
            control={control}
            optionValue="id"
            optionLabel="nazwa"
            disabled={isLoading}
          />
        </Box>
      )}
    />
  );
}
