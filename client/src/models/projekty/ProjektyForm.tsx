import type { UseFormProps } from "@/components/CrudComponents";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IOrganizacja, IProjekty, IProjektyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjektyForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IProjekty, IProjektyForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_projektu", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa projektu musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa projektu może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("projekty.fields.nazwa_projektu")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_projektu}
        helperText={errors.nazwa_projektu?.message}
      />

      <TextField
        {...register("liczba_pkt_do_stypendium", {
          required: "To pole jest wymagane",
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Liczba punktów musi być większa lub równa 0",
          },
          max: {
            value: 100,
            message: "Liczba punktów musi być mniejsza lub równa 100",
          },
        })}
        label={t("projekty.fields.liczba_pkt_do_stypendium")}
        type="number"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.liczba_pkt_do_stypendium}
        helperText={errors.liczba_pkt_do_stypendium?.message}
      />

      <TextField
        {...register("opis_projektu", {})}
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
