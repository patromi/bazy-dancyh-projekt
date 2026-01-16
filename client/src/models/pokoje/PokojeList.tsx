import {
  stringFilterOperators,
  numberFilterOperators,
} from "@/rest-data-provider/filters";
import type { IPokoje } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import PokojeUpdate from "./PokojeUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import PokojeCreate from "./PokojeCreate";
import PokojeShow from "./PokojeShow";
import { useTranslation } from "react-i18next";

export default function PokojeList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IPokoje>[] = [
    {
      field: "nazwa_pokoju",
      headerName: t("pokoje.fields.nazwa_pokoju"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "pojemnosc",
      headerName: t("pokoje.fields.pojemnosc"),
      flex: 1,
      minWidth: 100,
      filterOperators: numberFilterOperators,
    },
  ];

  return (
    <ListComponent<IPokoje>
      resource="pokoje"
      columns={columns}
      UpdateComponent={PokojeUpdate}
      CreateComponent={PokojeCreate}
      ShowComponent={PokojeShow}
    />
  );
}
