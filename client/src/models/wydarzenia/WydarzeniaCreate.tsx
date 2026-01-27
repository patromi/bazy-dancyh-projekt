import CreateComponent from "@/components/CrudComponents/CreateComponent";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type {
  IOrganizacja,
  IPokoje,
  IWydarzenia,
  IWydarzeniaForm,
} from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function WydarzeniaCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent<IWydarzenia, IWydarzeniaForm>
      resource="wydarzenia"
      renderChildren={({ register, control, formState: { errors } }) => (
        <Box component="form" className="flex flex-col gap-8">
          <TextField
            {...register("nazwa_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.nazwa_wydarzenia")}
            error={!!errors.nazwa_wydarzenia}
            helperText={errors.nazwa_wydarzenia?.message}
          />

          <TextField
            {...register("data_rozpoczecia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_rozpoczecia")}
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.data_rozpoczecia}
            helperText={errors.data_rozpoczecia?.message}
          />

          <TextField
            {...register("data_zakonczenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.data_zakonczenia")}
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!errors.data_zakonczenia}
            helperText={errors.data_zakonczenia?.message}
          />

          <TextField
            {...register("opis_wydarzenia", {
              required: "To pole jest wymagane",
            })}
            label={t("wydarzenia.fields.opis_wydarzenia")}
            multiline
            rows={4}
            error={!!errors.opis_wydarzenia}
            helperText={errors.opis_wydarzenia?.message}
          />

          <ForeignInputField<IWydarzeniaForm, IOrganizacja>
            name="organizacja"
            label={t("wydarzenia.fields.organizacja")}
            resource="organizacje"
            control={control}
            optionValue="id"
            optionLabel="nazwa_organizacji"
          />

          <ForeignInputField<IWydarzeniaForm, IPokoje>
            name="pokoj"
            label={t("wydarzenia.fields.pokoj")}
            resource="pokoje"
            control={control}
            optionValue="id"
            optionLabel="nazwa_pokoju"
          />
        </Box>
      )}
    />
  );
}
