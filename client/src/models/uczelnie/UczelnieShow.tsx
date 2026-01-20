import ShowComponent from "@/components/CrudComponents/ShowComponent";
import type { IUczelnie } from "@/types";
import { Typography } from "@mui/material";
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
          <Typography variant="body1" fontWeight="bold">
            Nazwa
          </Typography>
          <TextField value={result?.nazwa ?? ""} />

          <Typography variant="body1" fontWeight="bold">
            Adres uczelni
          </Typography>
          <TextField value={result?.adres_uczelni ?? ""} />

          {result?.id && (
            <>
              <div style={{ height: "400px", marginTop: "32px" }}>
                <WydzialyList
                  initialFilters={[
                    { field: "uczelnia", operator: "eq", value: result.id },
                  ]}
                  sx={{ height: "100%", p: 0 }}
                  breadcrumb={false}
                />
              </div>

              <div style={{ height: "400px", marginTop: "32px" }}>
                <BudynkiList
                  initialFilters={[
                    { field: "uczelnia", operator: "eq", value: result.id },
                  ]}
                  sx={{ height: "100%", p: 0 }}
                  breadcrumb={false}
                />
              </div>
            </>
          )}
        </>
      )}
    />
  );
}
