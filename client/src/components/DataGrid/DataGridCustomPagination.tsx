import { GridPagination } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

export default function DataGridCustomPagination() {
  const { t } = useTranslation();

  return (
    <GridPagination
      labelRowsPerPage={t("dataGrid.rowsPerPage")}
      labelDisplayedRows={({ from, to, count }) =>
        t("dataGrid.displayedRows", { from, to, count })
      }
    />
  );
}
