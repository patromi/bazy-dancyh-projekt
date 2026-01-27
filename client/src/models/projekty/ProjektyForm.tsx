import type { UseFormProps } from "@/components/CrudComponents";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IOrganizacja, IProjekty, IProjektyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjektyForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<IProjekty, IProjektyForm>) {
  const { t } = useTranslation("translation");

  return (
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

      <ForeignKeyField<IProjektyForm, IOrganizacja>
        name="organizacja"
        label={t("projekty.fields.organizacja")}
        control={control}
        resource="organizacje"
        optionLabel="nazwa_organizacji"
        optionValue="id"
        disabled={isLoading}
      />
    </Box>
  );
}
