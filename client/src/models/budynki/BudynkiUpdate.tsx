import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IBudynkiForm, IBudynki, IUczelnie } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function BudynkiUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IBudynki, IBudynkiForm>
      {...props}
      resource="budynki"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_budynku", {
              required: "To pole jest wymagane",
            })}
            label={t("budynki.fields.nazwa_budynku")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("adres_budynku", {
              required: "To pole jest wymagane",
            })}
            label={t("budynki.fields.adres_budynku")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <ForeignInputField<IBudynkiForm, IUczelnie>
            name="uczelnia"
            label={t("budynki.fields.uczelnia")}
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
