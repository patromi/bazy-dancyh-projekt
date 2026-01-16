import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IWydzialy } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import WydzialyUpdate from "./WydzialyUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import WydzialyCreate from "./WydzialyCreate";
import WydzialyShow from "./WydzialyShow";
import { useTranslation } from "react-i18next";

export default function WydzialyList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IWydzialy>[] = [
    {
      field: "nazwa_wydzialu",
      headerName: t("wydzialy.fields.nazwa_wydzialu"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "adres_wydzialu",
      headerName: t("wydzialy.fields.adres_wydzialu"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<IWydzialy>
      resource="wydzialy"
      columns={columns}
      UpdateComponent={WydzialyUpdate}
      CreateComponent={WydzialyCreate}
      ShowComponent={WydzialyShow}
    />
  );
}
