import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { ICzlonkowie, IRole, IRoleForm, ISekcja } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RoleForm({
  register,
  control,
  formState: { isLoading, errors },
}: UseFormProps<IRole, IRoleForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_roli", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa roli musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa roli może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("role.fields.nazwa_roli")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_roli}
        helperText={errors.nazwa_roli?.message}
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
        label={t("role.fields.liczba_pkt_do_stypendium")}
        type="number"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.liczba_pkt_do_stypendium}
        helperText={errors.liczba_pkt_do_stypendium?.message}
      />

      <ForeignInputField<IRoleForm, ISekcja>
        name="sekcja"
        label={t("role.fields.sekcja")}
        control={control}
        resource="sekcje"
        optionLabel="nazwa_sekcji"
        optionValue="id"
        disabled={isLoading}
      />

      <ForeignInputField<IRoleForm, ICzlonkowie>
        name="czlonek"
        label={t("role.fields.czlonek")}
        control={control}
        resource="czlonkowie"
        optionLabel={(item) =>
          `${item.imie} ${item.drugie_imie || ""} ${item.nazwisko}`
        }
        optionValue="id"
        disabled={isLoading}
      />
    </Box>
  );
}
