import CreateComponent from "@/components/CrudComponents/CreateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type {
  IOpiekunowie,
  IOrganizacja,
  IOrganizacjaForm,
  IWydzialy,
} from "@/types";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function OrganizacjeCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent<IOrganizacja, IOrganizacjaForm>
      resource="organizacje"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_organizacji", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.nazwa_organizacji")}
          />

          <TextField
            {...register("data_zalozenia", {
              required: "To pole jest wymagane",
            })}
            label={t("organizacje.fields.data_zalozenia")}
            type="date"
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <ForeignKeyField<IOrganizacjaForm, IWydzialy>
            name="wydzial"
            label={t("organizacje.fields.wydzial")}
            resource="wydzialy"
            optionLabel="nazwa_wydzialu"
            optionValue="id"
            control={control}
          />

          <ForeignKeyField<IOrganizacjaForm, IOpiekunowie>
            name="opiekun"
            label={t("organizacje.fields.opiekun")}
            resource="opiekunowie"
            optionValue="id"
            optionLabel={(option) =>
              `${option.imie} ${option.drugie_imie} ${option.nazwisko}`
            }
            control={control}
          />

          <FormControlLabel
            control={<Checkbox {...register("czy_aktywna")} />}
            label={t("organizacje.fields.czy_aktywna")}
          />
        </>
      )}
    />
  );
}
