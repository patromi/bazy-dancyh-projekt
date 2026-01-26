import CreateComponent from "@/components/CrudComponents/CreateComponent";
import ForeignKeyField from "@/components/Fields/ForeignInputField";
import type { IBundynki, IPokoje, IPokojeForm } from "@/types";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PokojeCreate() {
  const { t } = useTranslation("translation");

  return (
    <CreateComponent<IPokoje, IPokojeForm>
      resource="pokoje"
      renderChildren={({ register, control }) => (
        <>
          <TextField
            {...register("nazwa_pokoju", {
              required: "To pole jest wymagane",
            })}
            label={t("pokoje.fields.nazwa_pokoju")}
          />

          <TextField
            {...register("pojemnosc", {
              required: "To pole jest wymagane",
              valueAsNumber: true,
            })}
            label={t("pokoje.fields.pojemnosc")}
            type="number"
          />

          <ForeignKeyField<IPokojeForm, IBundynki>
            name="budynek"
            control={control}
            resource="budynki"
            optionLabel="nazwa_budynku"
            optionValue="id"
            label={t("pokoje.fields.budynki_id")}
          />
        </>
      )}
    />
  );
}
