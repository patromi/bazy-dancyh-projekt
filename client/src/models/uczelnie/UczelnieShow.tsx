import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IUczelnie } from "@/types";
import { Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import UczelnieUpdate from "./UczelnieUpdate";

export default function UczelnieShow() {
  return (
    <ShowComponent<IUczelnie>
      resource="uczelnie"
      UpdateComponent={UczelnieUpdate}
      renderChildren={(result) => (
        <>
          <Typography variant="body1" fontWeight="bold">
            Nazwa
          </Typography>
          <TextField value={result?.nazwa ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            Adres uczelni
          </Typography>
          <TextField value={result?.adres_uczelni ?? ""} />
        </>
      )}
    />
  );
}
