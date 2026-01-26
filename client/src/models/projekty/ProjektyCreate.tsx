import CreateComponent from "@/components/CrudComponents/CreateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IOrganizacja, IProjektyForm } from "@/types";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjektyCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent<IProjektyForm, IProjektyForm>
      resource="projekty"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.nazwa_projektu")}
          />

          <TextField
            {...register("liczba_pkt_do_stypendium", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("projekty.fields.liczba_pkt_do_stypendium")}
            type="number"
          />

          <TextField
            {...register("opis_projektu", {
              required: "To pole jest wymagane",
            })}
            label={t("projekty.fields.opis_projektu")}
            multiline
            rows={4}
          />

          <ForeignKeyField<IProjektyForm, IOrganizacja>
            control={control}
            name="organizacja"
            rules={{ required: "To pole jest wymagane" }}
            resource="organizacje"
            optionLabel="nazwa_organizacji"
            optionValue="id"
            label={t("projekty.fields.organizacja")}
          />
        </>
      )}
    />
  );
}
