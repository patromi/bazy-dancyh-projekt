import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IProjekty, IProjektyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjektyUpdate() {
  const { t } = useTranslation("translation");


  return (
    <UpdateComponent<IProjekty, IProjektyForm>
      resource="projekty"
      renderChildren={({ register, control, formState: { isLoading } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.nazwa_projektu")}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("liczba_pkt_do_stypendium", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("projekty.fields.liczba_pkt_do_stypendium")}
            type="number"
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            {...register("opis_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.opis_projektu")}
            multiline
            rows={4}
            disabled={isLoading}
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <ForeignKeyField
            name="organizacja"
            label={t("projekty.fields.organizacja")}
            control={control}
            resource="organizacje"
            optionLabel="nazwa_organizacji"
            optionValue="id"
            disabled={isLoading}
          />
        </Box>
      )}
    />
  );
}
