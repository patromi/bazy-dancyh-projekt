import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { ICzlonkowie, IRole, IRoleForm, ISekcja } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RoleForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<IRole, IRoleForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_roli", {
          required: "To pole jest wymagane",
        })}
        label={t("role.fields.nazwa_roli")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("liczba_pkt_do_stypendium", {
          required: "To pole jest wymagane",
        })}
        label={t("role.fields.liczba_pkt_do_stypendium")}
        type="number"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
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
        optionLabel={(item) => `${item.imie} ${item.nazwisko}`}
        optionValue="id"
        disabled={isLoading}
      />
    </Box>
  );
}
