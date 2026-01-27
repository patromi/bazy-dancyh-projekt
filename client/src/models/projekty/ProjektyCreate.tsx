import CreateComponent from "@/components/CrudComponents/CreateComponent";
import type { IProjekty, IProjektyForm } from "@/types";
import ProjektyForm from "./ProjektyForm";

export default function ProjektyCreate() {
  return (
    <CreateComponent<IProjekty, IProjektyForm>
      resource="projekty"
      renderChildren={ProjektyForm}
    />
  );
}
