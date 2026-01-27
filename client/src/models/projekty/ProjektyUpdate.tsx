import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IProjekty, IProjektyForm } from "@/types";
import ProjektyForm from "./ProjektyForm";

export default function ProjektyUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IProjekty, IProjektyForm>
      {...props}
      renderChildren={ProjektyForm}
    />
  );
}
