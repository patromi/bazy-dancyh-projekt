import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import {
  useGridApiContext,
  useGridApiEventHandler,
  type GridRowId,
} from "@mui/x-data-grid";
import { useState } from "react";

import { useDeleteMany, useModal } from "@refinedev/core";
import { DeleteButton } from "@refinedev/mui";
import { useTranslation } from "react-i18next";

export default function DataGridCustomDeleteModal(props: { resource: string }) {
  const apiRef = useGridApiContext();

  // Selected rows
  const [ids, setSelectedIds] = useState<GridRowId[]>([]);
  useGridApiEventHandler(apiRef, "rowSelectionChange", () =>
    setSelectedIds([...apiRef.current.getSelectedRows().keys()]),
  );

  const { t } = useTranslation();

  // Delete many
  const { close, show, visible } = useModal();
  const { mutate: deleteMany } = useDeleteMany();
  const handleDeleteSelected = () =>
    deleteMany({ resource: props.resource, ids: ids }, {});

  return (
    <>
      {ids.length > 0 && (
        <DeleteButton onClick={show}>
          {t("dataGrid.deleteSelected", { count: ids.length })}
        </DeleteButton>
      )}

      <Dialog open={visible} onClose={close}>
        <DialogTitle>{t("dataGrid.deleteSelectedTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("dataGrid.deleteSelectedContent", {
              count: ids.length,
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>{t("buttons.cancel")}</Button>
          <Button
            onClick={() => {
              handleDeleteSelected();
              close();
            }}
            color="error"
            autoFocus
          >
            {t("buttons.delete")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
