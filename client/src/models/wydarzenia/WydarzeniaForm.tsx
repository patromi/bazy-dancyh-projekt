import type { UseFormProps } from "@/components/CrudComponents";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type {
  IOrganizacja,
  IPokoje,
  IWydarzenia,
  IWydarzeniaForm,
} from "@/types";
import { Box, TextField } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function WydarzeniaForm({
  register,
  control,
  setValue,
  watch,
  formState: { isLoading, errors },
}: UseFormProps<IWydarzenia, IWydarzeniaForm>) {
  const { t } = useTranslation("translation");

  const formValues = watch();

  const handleDateChange = useCallback(() => {
    const dataRozpoczecia = new Date(formValues.data_rozpoczecia || "");
    const dataZakonczenia = new Date(formValues.data_zakonczenia || "");
    if (dataZakonczenia >= dataRozpoczecia) return;
    setValue(
      "data_zakonczenia",
      // @ts-expect-error TS2322
      dataRozpoczecia.toISOString().split("T")[0],
    );
  }, [formValues.data_rozpoczecia, formValues.data_zakonczenia, setValue]);

  return (
    <Box component="form" className="flex flex-col gap-8">
      <TextField
        {...register("nazwa_wydarzenia", {
          required: "To pole jest wymagane",
          minLength: {
            value: 2,
            message: "Nazwa wydarzenia musi mieć conajmniej 2 znaki",
          },
          maxLength: {
            value: 100,
            message: "Nazwa wydarzenia może mieć maksymalnie 100 znaków",
          },
        })}
        label={t("wydarzenia.fields.nazwa_wydarzenia")}
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.nazwa_wydarzenia}
        helperText={errors.nazwa_wydarzenia?.message}
      />

      <TextField
        {...register("data_rozpoczecia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.data_rozpoczecia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.data_rozpoczecia}
        helperText={errors.data_rozpoczecia?.message}
        onBlur={handleDateChange}
      />

      <TextField
        {...register("data_zakonczenia", {
          required: "To pole jest wymagane",
        })}
        label={t("wydarzenia.fields.data_zakonczenia")}
        type="date"
        disabled={isLoading}
        slotProps={{ inputLabel: { shrink: true } }}
        error={!!errors.data_zakonczenia}
        helperText={errors.data_zakonczenia?.message}
        onBlur={handleDateChange}
      />

      <TextField
        {...register("opis_wydarzenia", {})}
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
