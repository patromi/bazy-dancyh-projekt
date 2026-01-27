import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import ForeignInputField from "@/components/Fields/ForeignInputField";
import type { IUczelnie, IWydzialy, IWydzialyForm } from "@/types";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import WydzialyForm from "./WydzialyForm";

export default function WydzialyUpdate(props: InDrawerProps) {
  const { t } = useTranslation("translation");

  return (
    <UpdateComponent<IWydzialy, IWydzialyForm>
      {...props}
      resource="wydzialy"
      renderChildren={WydzialyForm}
    />
  );
}
