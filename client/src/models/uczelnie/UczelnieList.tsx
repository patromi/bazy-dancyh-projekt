import { stringFilterOperators } from "@/rest-data-provider/filters";
import type { IUczelnie } from "@/types";
import { type GridColDef } from "@mui/x-data-grid";
import UczelnieUpdate from "./UczelnieUpdate";

import ListComponent from "@/components/CrudComponents/ListComponent";
import UczelnieCreate from "./UczelnieCreate";
import UczelnieShow from "./UczelnieShow";
import { useTranslation } from "react-i18next";

export default function UczelnieList() {
  const { t } = useTranslation("translation");

  const columns: GridColDef<IUczelnie>[] = [
    {
      field: "nazwa",
      headerName: t("uczelnie.fields.nazwa"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
    {
      field: "adres_uczelni",
      headerName: t("uczelnie.fields.adres_uczelni"),
      flex: 1,
      minWidth: 200,
      filterOperators: stringFilterOperators,
    },
  ];

  return (
    <ListComponent<IUczelnie>
      resource="uczelnie"
      columns={columns}
      UpdateComponent={UczelnieUpdate}
      CreateComponent={UczelnieCreate}
      ShowComponent={UczelnieShow}
    />
  );
}
