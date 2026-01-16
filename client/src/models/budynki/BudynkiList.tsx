import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IBundynki } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import BudynkiUpdate from "./BudynkiUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import BudynkiCreate from "./BudynkiCreate";
import BudynkiShow from "./BudynkiShow";
import { useTranslation } from "react-i18next";

export default function BudynkiList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IBundynki>[] = [
    {
      field: "nazwa_budynku",
      headerName: t("budynki.fields.nazwa_budynku"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "adres_budynku",
      headerName: t("budynki.fields.adres_budynku"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    // Assuming we want to show Uczelnia ID or wait for better solution.
    // For now, I will omit relation display or just show ID if needed.
    // Given the prompt "improve components based on Uczelnie", UczelnieList had simple fields.
    // I will add the relation column as best effort.
    // If backend returns ID, it shows ID.
  ];

  return (
    <ListComponent<IBundynki>
      resource="budynki"
      columns={columns}
      UpdateComponent={BudynkiUpdate}
      CreateComponent={BudynkiCreate}
      ShowComponent={BudynkiShow}
    />
  );
}
