import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type {
  IOrganizacja,
  IPokoje,
  IWydarzenia,
  IWydarzeniaForm,
} from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function WydarzeniaForm({
  register,
  control,
  formState: { isLoading },
}: UseFormProps<IWydarzenia, IWydarzeniaForm>) {
  const { t } = useTranslation("translation");

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_wydarzenia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.nazwa_wydarzenia")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("data_rozpoczecia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.data_rozpoczecia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("data_zakonczenia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.data_zakonczenia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <TextField
        {...register("opis_wydarzenia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.opis_wydarzenia")}
        multiline
        rows={4}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <ForeignInputField<IWydarzeniaForm, IOrganizacja>
        name="organizacja"
        label={t("wydarzenia.fields.organizacja")}
        resource="organizacje"
        control={control}
        optionValue="id"
        optionLabel={(option) =>
          `${option.nazwa_organizacji} - ${option.wydzial_name}`
        }
        disabled={isLoading}
      />

      <ForeignInputField<IWydarzeniaForm, IPokoje>
        name="pokoj"
        label={t("wydarzenia.fields.pokoj")}
        resource="pokoje"
        control={control}
        optionValue="id"
        optionLabel={(option) =>
          `${option.nazwa_pokoju} - ${option.budynek_name}`
        }
        disabled={isLoading}
      />
    </Box>
  );
}
