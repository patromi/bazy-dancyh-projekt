import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IOpiekunowie } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import OpiekunowieUpdate from "./OpiekunowieUpdate";
import ListComponent from "@/components/CrudComponents/ListComponent";
import OpiekunowieCreate from "./OpiekunowieCreate";
import OpiekunowieShow from "./OpiekunowieShow";
import { useTranslation } from "react-i18next";

export default function OpiekunowieList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IOpiekunowie>[] = [
    {
      field: "pesel",
      headerName: t("opiekunowie.fields.pesel"),
      flex: 0.5,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "imie",
      headerName: t("opiekunowie.fields.imie"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "drugie_imie",
      headerName: t("opiekunowie.fields.drugie_imie"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "nazwisko",
      headerName: t("opiekunowie.fields.nazwisko"),
      flex: 1,
      minWidth: 150,
      filterOperators: stringFilterOperators,
      editable: true,
    },
    {
      field: "email",
      headerName: t("opiekunowie.fields.email"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
      editable: true,
    },
  ];

  return (
    <ListComponent<IOpiekunowie>
      resource="opiekunowie"
      columns={columns}
      UpdateComponent={OpiekunowieUpdate}
      CreateComponent={OpiekunowieCreate}
      ShowComponent={OpiekunowieShow}
    />
  );
}
