import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IBudynki, IPokoje, IPokojeForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PokojeUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IPokoje, IPokojeForm>
      {...props}
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_pokoju", {
              required: "To pole jest wymagane",
            })}
            label={t("pokoje.fields.nazwa_pokoju")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("pojemnosc", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("pokoje.fields.pojemnosc")}
            type="number"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <ForeignKeyField<IPokojeForm, IBudynki>
            control={control}
            name="budynek"
            optionLabel="nazwa_budynku"
            optionValue="id"
            resource="budynki"
            label={t("pokoje.fields.budynki_id")}
            disabled={isLoading}
          />
        </Box>
      )}
    />
  );
}
