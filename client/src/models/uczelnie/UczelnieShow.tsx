import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IUczelnie } from "@/types";
import { Stack, Typography } from "@mui/material";
import { TextFieldComponent as TextField } from "@refinedev/mui";
import UczelnieUpdate from "./UczelnieUpdate";
import BudynkiList from "../budynki/BudynkiList";
import WydzialyList from "../wydzialy/WydzialyList";

export default function UczelnieShow() {
  return (
    <ShowComponent<IUczelnie>
      resource="uczelnie"
      UpdateComponent={UczelnieUpdate}
      renderChildren={(result) => (
        <>
          <Stack gap={1}>
            <Typography variant="body1" fontWeight="bold">
              Nazwa
            </Typography>
            <TextField value={result ? result.nazwa : ""} />

            <Typography variant="body1" fontWeight="bold">
              Adres uczelni
            </Typography>
            <TextField value={result ? result.adres_uczelni : ""} />
          </Stack>

          <Stack gap={2}>
            <WydzialyList
              inShow
              initialFilters={[
                { field: "uczelnia", operator: "ina", value: result.id },
              ]}
              sx={{ height: "100%", p: 0 }}
              breadcrumb={false}
            />

            <BudynkiList
              inShow
              initialFilters={[
                { field: "uczelnia", operator: "ina", value: result.id },
              ]}
              sx={{ height: "100%", p: 0 }}
              breadcrumb={false}
            />
          </Stack>
        </>
      )}
    />
  );
}