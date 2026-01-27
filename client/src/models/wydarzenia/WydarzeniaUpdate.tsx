import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type {
  IOrganizacja,
  IPokoje,
  IWydarzenia,
  IWydarzeniaForm,
} from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function WydarzeniaUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IWydarzenia, IWydarzeniaForm>
      {...props}
      renderChildren={({ register, control, formState: { isLoading } }) => (
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
      )}
    />
  );
}
