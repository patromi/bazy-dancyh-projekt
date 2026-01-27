import type { InDrawerProps } from "@/components/CrudComponents";
import UpdateComponent from "@/components/CrudComponents/UpdateComponent";
import type { IWydarzenia, IWydarzeniaForm } from "@/types";
import WydarzeniaForm from "./WydarzeniaForm";

export default function WydarzeniaUpdate(props: InDrawerProps) {
  return (
    <UpdateComponent<IWydarzenia, IWydarzeniaForm>
      {...props}
      renderChildren={WydarzeniaForm}
    />
  );
}
